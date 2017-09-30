import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/authentication/services/authentication.service';
import { HelperService } from 'app/shared/common/services/helperService';
import { AddressService } from 'app/address/services/address.service';
import { ParametersDataService } from 'app/shared/common/services/parameters-data.service';
import { TranslateService } from 'app/shared/common/services/localization/translate.service';
import { GlobalErrorHandler } from 'app/shared/common/services/globalErrorHandler';
import { NotificationService } from 'app/shared/common/services/notification.service';
import { ApplicationUser } from 'app/authentication/viewmodels/application-user';
import { AddressModel } from 'app/address/models/address-model';
import { MdOptionSelectionChange } from '@angular/material';

declare var google: any;
declare var $: any;


@Component({
  moduleId: module.id,
  selector: 'app-shipment-save-component',
  templateUrl: './shipment-save.component.html'
})

export class ShipmentSaveComponent implements OnInit, AfterViewInit {

  currentUser: ApplicationUser;
  addresses: AddressModel[];
  addressesSearchTerm = new FormControl();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private helperService: HelperService,
    private addressService: AddressService,
    private parametersDataService: ParametersDataService,
    private translateService: TranslateService,
    private errorHandler: GlobalErrorHandler,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {

    this.currentUser = this.authenticationService.getCurrentUser();
    this.initSearchAddresses();
    //  Init Bootstrap Select Picker
    if ($('.selectpicker').length !== 0) {
      $('.selectpicker').selectpicker();
    }
    $('.datetimepicker').datetimepicker({
      icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-chevron-up',
        down: 'fa fa-chevron-down',
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });
  }
selectedAddress :AddressModel;
  selected(event: MdOptionSelectionChange, country: AddressModel) {
    if (event.source.selected) {
      this.selectedAddress = country;
    }
}
callSomeFunction(event: MdOptionSelectionChange, country: AddressModel){
}

  private initSearchAddresses() {
    this.addressesSearchTerm.valueChanges.startWith(null)
      .debounceTime(600)
      .subscribe(term => {
        const searchTerm = term && term.length > 0 ? term : '';
        this.searchAddresses(searchTerm);
      });
  }

  private searchAddresses(searchTerm: string) {
    if (this.currentUser && this.currentUser.customerId) {
      this.addressService.getAll(this.currentUser.customerId, searchTerm, 0, 1000, this.translateService.currentLanguage)
        .subscribe(result => {

          this.addresses = result;
        }, error => {
          this.errorHandler.handleError(error);
        });
    }
  }

  ngAfterViewInit() {
    var availableTags = [
      'ActionScript',
      'AppleScript',
      'Asp',
      'BASIC',
      'C',
      'C++',
      'Clojure',
      'COBOL',
      'ColdFusion longer resut here and even longer  longer resut here and even longer',
      'Erlang',
      'Fortran',
      'Groovy',
      'Haskell',
      'Java',
      'JavaScript',
      'Lisp',
      'Perl',
      'PHP',
      'Python',
      'Ruby',
      'Scala',
      'Scheme'
    ];
    debugger;
    $('#autocomplete_procedure').autocomplete({
      source: availableTags,
      open: function (event, ui) {
        var $input = $(event.target);
        var $results = $input.autocomplete('widget');
        var scrollTop = $(window).scrollTop();
        var top = $results.position().top;
        var height = $results.outerHeight();
        if (top + height > $(window).innerHeight() + scrollTop) {
          let newTop = top - height - $input.outerHeight();
          if (newTop > scrollTop)
            $results.css('top', newTop + 'px');
        }
      }
    });
  }

  onSubmit(value: any): void {
    console.log(value);
  }
}
