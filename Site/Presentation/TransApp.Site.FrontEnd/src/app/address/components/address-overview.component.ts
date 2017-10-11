import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TableData } from "app/shared/md/md-table/md-table.component";
import { AddressRowViewModel } from "app/address/models/address-row-viewmodel";
import { AddressModel } from "app/address/models/address-model";
import { AddressService } from "app/address/services/address.service";
import { ApplicationUser } from 'app/authentication/viewmodels/application-user';
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { TranslateService } from 'app/shared/common/services/localization/translate.service';
import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';
import { PagerService } from 'app/shared/common/services/pager.service';
import { Observable } from 'rxjs/Observable';
import { HelperService } from 'app/shared/common/services/helperService';
import { GlobalErrorHandler } from 'app/shared/common/services/globalErrorHandler';
import { NotificationService } from 'app/shared/common/services/notification.service';

const moment = require('moment/moment');

declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-address-overview',
  templateUrl: './address-overview.component.html'
})
export class AddressOverviewComponent implements OnInit, OnDestroy, AfterViewInit {

  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  componentModel: AddressRowViewModel[] = [];
  currentUser: ApplicationUser;
  // search term
  searchTerm = new FormControl();
  currentAddressId = -1;

  currentPage = 0;
  pagesCollection: Array<number>;
  pageSize = 20;

  private subscriptionReceiveUpdatedAddress: Subscription;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private addressService: AddressService,
    private helperService: HelperService,
    private notificationService: NotificationService,
    private errorHandler: GlobalErrorHandler,
    private authenticationService: AuthenticationService,
    private translateService: TranslateService) {

  }

  public ngOnInit() {

    this.currentUser = this.authenticationService.getCurrentUser();

    this.getNumberOfAddresses('', false);

    this.getAddresses();

    this.register_updateSavedModel_handler();
  }

  ngAfterViewInit() {
    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();
  }

  ngOnDestroy(): void {
    if (this.subscriptionReceiveUpdatedAddress) {
      this.subscriptionReceiveUpdatedAddress.unsubscribe();
    }
  }

  /**
   * Move to next/previous page
   * @param page
   */
  paginate(page: number) {
    this.currentPage = page;
    this.getAddresses();

    this.helperService.scrollOnTop();
  }

  /**
   * Get addresses
   */
  private getAddresses() {
    this.notificationService.showLoading();
    let searchquery = '';
    this.route.queryParams.subscribe(params => {
      searchquery = params['searchquery'] ? params['searchquery'].toString() : '';
    });
    this.searchTerm = new FormControl(searchquery);
    this.initSearchAddresses();

    if (this.currentUser && this.currentUser.customerId) {
      this.addressService.getAll(this.currentUser.customerId, searchquery, (this.pageSize * this.currentPage) + 1, this.pageSize, this.translateService.currentLanguage).subscribe(result => {
        this.componentModel = [];
        if (result && result.length > 0) {
          if (this.route.firstChild) {
            this.currentAddressId = +this.route.firstChild.snapshot.params['id']
          }
          for (let i = 0; i < result.length; i++) {
            const addressRow = new AddressRowViewModel();
            addressRow.address = result[i];
            // if url contains edit then open it by default
            addressRow.viewActions = result[i].id === this.currentAddressId;
            this.componentModel.push(addressRow);
          }
        }
      }, error => {
        this.errorHandler.handleError(error);
      });
    }
  }

  /**
   * Get addresses count for current filters
   */
  private getNumberOfAddresses(searchQueryParam: string, ignoreQueryString: boolean) {
    this.pagesCollection = null;
    if (searchQueryParam.length <= 0 && !ignoreQueryString) {
      this.route.queryParams.subscribe(params => {
        searchQueryParam = params['searchquery'] ? params['searchquery'].toString() : '';
      });
    }
    if (this.currentUser && this.currentUser.customerId) {
      this.addressService.getCount(this.currentUser.customerId, searchQueryParam, this.translateService.currentLanguage).subscribe(result => {
        this.pagesCollection = [];
        let numberOfPages = Math.ceil(result / this.pageSize);
        numberOfPages = numberOfPages < 0 ? 1 : numberOfPages;
        const self = this;
        setTimeout(function () {
          for (let i = 0; i < numberOfPages; i++) {
            self.pagesCollection.push(i);
          }
        }, 100);
      }, error => {
        this.errorHandler.handleError(error);
      });
    }
  }

  private searchAddresses(searchTerm: string) {
    if (this.currentUser && this.currentUser.customerId) {
      this.currentPage = 0;
      this.addressService.getAll(this.currentUser.customerId, searchTerm, (this.pageSize * this.currentPage) + 1, this.pageSize, this.translateService.currentLanguage).subscribe(result => {
        this.componentModel = [];
        if (result && result.length > 0) {
          for (let i = 0; i < result.length; i++) {
            const addressRow = new AddressRowViewModel();
            addressRow.address = result[i];
            // if url contains edit then open it by default
            this.componentModel.push(addressRow);
          }
        }
      }, error => {
        this.errorHandler.handleError(error);
      });
    }
  }

  private initSearchAddresses() {
    this.searchTerm.valueChanges
      .debounceTime(600)
      .subscribe(term => {
        this.router.navigate(['/address-overview'], {
          relativeTo: this.route,
          queryParams: {
            searchquery: term ? term : ''
          }
        });
        const searchTerm = term && term.length > 0 ? term : '';

        this.getNumberOfAddresses(term, true);
        this.searchAddresses(searchTerm);
      });
  }

  private register_updateSavedModel_handler() {
    this.subscriptionReceiveUpdatedAddress = this.addressService.addressModelReceivedHandler$.subscribe(address => {
      if (address != null) {
        const modelToUpdate = this.componentModel.filter(item => item.address.id === address.id)[0];
        if (modelToUpdate) {
          modelToUpdate.address = address;
          this.helperService.scrollOnTop();
        }
        this.addressService.resetSendAddressModelHandler();
      }
    }, error => {
      this.errorHandler.handleError(error);
    });
  }
  /** Show row available actions on click */
  onClickShowActions(addressRow: AddressRowViewModel, index: number) {
    for (let i = 0; i < this.componentModel.length; i++) {
      if (i !== index)
        this.componentModel[i].viewActions = false;
      this.componentModel[i].viewEdit = false;
    }
    addressRow.viewActions = !addressRow.viewActions;
    if (addressRow.viewActions) {
      addressRow.viewEdit = false;
      this.router.navigate(['/address-overview']);
    }

    setTimeout(function () {
      // $('#actionsRowContent').slideToggle('slow');
    }, 500);
  }

  /** Show edit address */
  onClickEditAddress(addressRow: AddressRowViewModel) {
    this.notificationService.showLoading();

    addressRow.viewActions = false;

    this.router.navigate(['./address-edit/' + addressRow.address.id], { relativeTo: this.route });

    addressRow.viewEdit = !addressRow.viewEdit;
  }

  /** Show edit address */
  onClickDeleteAddress(addressId: number) {
    const self = this;
    swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      // delete confirmed
      .then(function () {
        self.addressService.delete(addressId).subscribe(result => {
          if (result) {
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            // update model
            self.componentModel = self.componentModel.filter(item => item.address.id !== addressId);
          } else {
            swal(
              'Not Deleted!',
              'An error occured. Your file has not been deleted.  Please contact an administrator.',
              'error'
            );
          }
        }, error => {
          swal(
            'Not Deleted!',
            'An error occured. Your file has not been deleted.  Please contact an administrator.',
            'error'
          );
          self.errorHandler.handleError(error);
        });
      },
      // delete canceled
      function (dismiss) {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          swal(
            'Cancelled',
            'Your address is safe :)',
            'error'
          )
        }
      });
  }

}
