import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TableData } from "app/shared/md/md-table/md-table.component";
import { ShipmentModel } from 'app/shipment/models/shipment-model';
import { ApplicationUser } from 'app/authentication/viewmodels/application-user';
import { ShipmentService } from 'app/shipment/services/shipment.service';
import { NotificationService } from 'app/shared/common/services/notification.service';
import { AuthenticationService } from 'app/authentication/services/authentication.service';
import { ShipmentTransporterStatus } from 'app/shipment/models/shipment-transporter-status';
import { GlobalErrorHandler } from 'app/shared/common/services/globalErrorHandler';
import { TranslateService } from 'app/shared/common/services/localization/translate.service';
import { Subscription } from 'rxjs/Subscription';
import { HelperService } from 'app/shared/common/services/helperService';
import { ShipmentTransporterFilterModel } from 'app/shipment/models/shipment-transporter-filter-model';
import { ShipmentRowViewModel } from 'app/shipment/models/shipment-row-viewmodel';

const moment = require('moment/moment');
declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-shipment-overview',
  templateUrl: './shipment-overview.component.html'
})
export class ShipmentOverviewComponent implements OnInit, OnDestroy, AfterViewInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  componentModel: ShipmentRowViewModel[] = [];
  filters: ShipmentTransporterFilterModel[];
  currentUser: ApplicationUser;
  // search term
  currentAddressId = -1;
  currentPage = 0;
  pagesCollection: Array<number>;
  pageSize = 4;

  selectedShipmentStatus: ShipmentTransporterStatus = ShipmentTransporterStatus.none;

  private subscriptionReceiveUpdatedShipment: Subscription;

  constructor(private router: Router,
    private shipmentService: ShipmentService,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
    private translateService: TranslateService,
    private helperService: HelperService,
    private errorHandler: GlobalErrorHandler,
    private route: ActivatedRoute) {

  }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {

    this.currentUser = this.authenticationService.getCurrentUser();

    this.notificationService.showLoading();

    this.getShipmentFilters();

    this.getNumberOfShipments('', false);

    this.getShipments();
  }

  /**
   * Get addresses
   */
  private getShipments() {
    if (this.currentUser && this.currentUser.customerId) {
      this.shipmentService.getAll(this.currentUser.customerId, this.selectedShipmentStatus, (this.pageSize * this.currentPage) + 1, this.pageSize, this.translateService.currentLanguage).subscribe(result => {
        this.componentModel = [];
        if (result && result.length > 0) {
          if (this.route.firstChild) {
            this.currentAddressId = +this.route.firstChild.snapshot.params['id']
          }
          for (let i = 0; i < result.length; i++) {
            debugger;
            const shipmentRow = new ShipmentRowViewModel();
            shipmentRow.shipment = result[i];
            // if url contains edit then open it by default
            shipmentRow.viewActions = result[i].id === this.currentAddressId;
            this.componentModel.push(shipmentRow);
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
  private getNumberOfShipments(searchQueryParam: string, ignoreQueryString: boolean) {
    this.pagesCollection = null;
    if (searchQueryParam.length <= 0 && !ignoreQueryString) {
      this.route.queryParams.subscribe(params => {
        searchQueryParam = params['searchquery'] ? params['searchquery'].toString() : '';
      });
    }
    if (this.currentUser && this.currentUser.customerId) {
      this.shipmentService.getCount(this.currentUser.customerId, this.selectedShipmentStatus, this.translateService.currentLanguage).subscribe(result => {
        this.pagesCollection = [];
        debugger;
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

  /**
   * Get addresses
   */
  private getShipmentFilters() {
    if (this.currentUser && this.currentUser.customerId) {
      debugger;
      this.shipmentService.getShipmentFilters(this.currentUser.customerId, this.translateService.currentLanguage).subscribe(result => {
        this.filters = result;
      }, error => {
        this.errorHandler.handleError(error);
      });
    }
  }

  private register_updateSavedModel_handler() {
    this.subscriptionReceiveUpdatedShipment = this.shipmentService.shipmentModelReceivedHandler$.subscribe(shipment => {
      if (shipment != null) {
        const modelToUpdate = this.componentModel.filter(item => item.shipment.id === shipment.id)[0];
        if (modelToUpdate) {
          modelToUpdate.shipment = shipment;
          this.helperService.scrollOnTop();
        }
        this.shipmentService.resetSendShipmentModelHandler();
      }
    }, error => {
      this.errorHandler.handleError(error);
    });
  }
  /**
   * Show row available actions on click
   * */
  onClickShowActions(shipmentRow: ShipmentRowViewModel, index: number) {
    for (let i = 0; i < this.componentModel.length; i++) {
      if (i !== index)
        this.componentModel[i].viewActions = false;
      this.componentModel[i].viewEdit = false;
    }
    shipmentRow.viewActions = !shipmentRow.viewActions;
    if (shipmentRow.viewActions) {
      shipmentRow.viewEdit = false;
      this.router.navigate(['/shipment-overview']);
    }

    setTimeout(function () {
      // $('#actionsRowContent').slideToggle('slow');
    }, 500);
  }

  /**
   * Show edit address
   * */
  onClickEditShipment(shipmentRow: ShipmentRowViewModel) {
    this.notificationService.showLoading();

    shipmentRow.viewActions = false;

    this.router.navigate(['./shipment-edit/' + shipmentRow.shipment.id], { relativeTo: this.route });

    shipmentRow.viewEdit = !shipmentRow.viewEdit;
  }

  /** Show edit address */
  onClickDeleteShipment(shipmentId: number) {
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
        self.shipmentService.delete(shipmentId).subscribe(result => {
          if (result) {
            swal(
              'Deleted!',
              'Your shipment has been deleted.',
              'success'
            );
            // update model
            self.componentModel = self.componentModel.filter(item => item.shipment.id !== shipmentId);
          } else {
            swal(
              'Not Deleted!',
              'An error occured. Your shipment has not been deleted.  Please contact an administrator.',
              'error'
            );
          }
        }, error => {
          swal(
            'Not Deleted!',
            'An error occured. Your shipment has not been deleted.  Please contact an administrator.',
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
            'Your shipment is safe :)',
            'error'
          )
        }
      });
  }

  ngAfterViewInit() {
    var breakCards = true;
    if (breakCards == true) {
      // We break the cards headers if there is too much stress on them :-)
      $('[data-header-animation="true"]').each(function () {
        var $fix_button = $(this);
        var $card = $(this).parent('.card');
        $card.find('.fix-broken-card').click(function () {
          console.log(this);
          var $header = $(this).parent().parent().siblings('.card-header, .card-image');
          $header.removeClass('hinge').addClass('fadeInDown');

          $card.attr('data-count', 0);

          setTimeout(function () {
            $header.removeClass('fadeInDown animate');
          }, 480);
        });

        $card.mouseenter(function () {
          var $this = $(this);
          var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
          $this.attr("data-count", hover_count);
          if (hover_count >= 20) {
            $(this).children('.card-header, .card-image').addClass('hinge animated');
          }
        });
      });
    }
    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();
  }

    /**
   * Move to next/previous page
   * @param page
   */
  paginate(page: number) {
    this.currentPage = page;
    this.getShipments();

    this.helperService.scrollOnTop();
  }


  ngOnDestroy(): void {
    if (this.subscriptionReceiveUpdatedShipment) {
      this.subscriptionReceiveUpdatedShipment.unsubscribe();
    }
  }
  /** Show row available actions on click
  onClickShowActions(shipmentRow: ShipmentRow, index: number) {
    for (let i = 0; i < this.shipmentModel.length; i++) {
      if (i !== index)
        this.shipmentModel[i].viewActions = false;
    }
    shipmentRow.viewActions = !shipmentRow.viewActions;
    if (shipmentRow.viewActions) {
      shipmentRow.viewEdit = false;
      this.router.navigate(['/shipment-overview']);
    }
    setTimeout(function () {

    }, 500);
  }
*/

  /** Show edit shipment
  onClickEditShipment(shipmentRow: ShipmentRow) {
    shipmentRow.viewEdit = !shipmentRow.viewEdit;
    this.router.navigate(['./shipment-edit/1'], { relativeTo: this.route });
  } */
}
