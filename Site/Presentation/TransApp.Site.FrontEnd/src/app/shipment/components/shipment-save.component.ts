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
import { ComponentStateType } from 'app/shared/common/helper/component-state-type';
import { ShipmentModel } from 'app/shipment/models/shipment-model';
import { TruckParameterModel } from 'app/shared/common/models/parameter/truck-parameter-model';
import { RequirementEntityModel } from 'app/shared/common/models/entity/requirement-entity-model';
import { RequirementParameterModel } from 'app/shared/common/models/parameter/requirement-parameter-model';
import { FacilityParameterModel } from 'app/shared/common/models/parameter/facility-parameter-model';
import { FacilityEntityModel } from 'app/shared/common/models/entity/facility-entity-model';
import { AvailabilityEntityModel } from 'app/shared/common/models/entity/availability-entity-model';
import { TruckEntityModel } from 'app/shared/common/models/entity/truck-entity-model';
import { ShipmentDetailModel } from 'app/shipment/models/shipment-detail-model';
import { ShipmentTransporterModel } from 'app/shipment/models/shipment-transporter-model';

declare var google: any;
declare var $: any;


@Component({
  moduleId: module.id,
  selector: 'app-shipment-save-component',
  templateUrl: './shipment-save.component.html'
})

export class ShipmentSaveComponent implements OnInit, AfterViewInit {
  currentUser: ApplicationUser;
  /** main component model */
  componentModel: ShipmentModel;
  /** component state : display, add or edit */
  componentState: ComponentStateType;
  /** search controls */
  senderSearchAddressControl = new FormControl();
  receiverSearchAddressControl = new FormControl();

  senderAddress: AddressModel;
  receiverAddress: AddressModel;
  senderFoundAddresses: AddressModel[];
  receiverFoundAddresses: AddressModel[];

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

    // create search FormControl
    this.senderSearchAddressControl = new FormControl();
    this.receiverSearchAddressControl = new FormControl();

    // get component state
    this.componentState = this.helperService.getComponentStateByUrl(this.router.url) as ComponentStateType;
    // load required data
    this.loadComponentModel(this.componentState).subscribe(modelLoaded => {
      if (modelLoaded) {
        this.loadParamsData().subscribe(paramsDataLoaded => {
          if (paramsDataLoaded) {
          }
        })
      }
    });
    this.initSearchAddresses();
  }

  /**
      * Load component model, or create a new one if component state is = Add
      * @param componentState
      */
  private loadComponentModel(componentState: ComponentStateType): Observable<boolean> {
    return Observable.create(observer => {
      if (componentState === ComponentStateType.add) {

        this.componentModel = new ShipmentModel();
        this.componentModel.id = -1;
        this.componentModel.senderAvailability = new AvailabilityEntityModel();
        this.componentModel.senderFacilities = new Array<FacilityEntityModel>();
        this.componentModel.senderRequirements = new Array<RequirementEntityModel>();
        this.componentModel.senderTrucks = new Array<TruckEntityModel>();
        // receiver region
        this.componentModel.receiverAvailability = new AvailabilityEntityModel();
        this.componentModel.receiverFacilities = new Array<FacilityEntityModel>();
        this.componentModel.receiverRequirements = new Array<RequirementEntityModel>();
        this.componentModel.receiverTrucks = new Array<TruckEntityModel>();

        this.componentModel.shipmentDetails = new Array<ShipmentDetailModel>();
        this.componentModel.shipmentTransporters = new Array<ShipmentTransporterModel>();
        observer.next(true);
      } else {
        /*let addressId = 0;
        this.route.params.forEach((params: Params) => {
          addressId = params['id'];
          this.addressService.get(addressId, this.translateService.currentLanguage).subscribe(result => {
            this.componentModel = result as AddressModel;
            const self = this;
            // settimeout used to let angular template engine to render map element (everything is displayed only when component model )
            setTimeout(function () {
              self.createMap(self.componentModel.location.latitude, self.componentModel.location.longitude);
            }, 500);

            observer.next(true);
          }, error => {
            this.errorHandler.handleError(error);
            observer.next(false);
          })
        });*/
      }
    });
  }
  /**
   * Load required data used to render form
   */
  private loadParamsData(): Observable<boolean> {
    return Observable.create(observer => {
      // return new Promise((resolve, reject) => {
      Observable.forkJoin([
        this.parametersDataService.getFacilities(this.translateService.currentLanguage),
        this.parametersDataService.getRequirements(this.translateService.currentLanguage),
        this.parametersDataService.getTruks(this.translateService.currentLanguage),
      ])
        .subscribe(data => {

          this.parametersDataService.generateFacilityEntitiesList(this.componentModel.id, data[0] as any, this.componentModel.senderFacilities);
          this.parametersDataService.generateRequirementsEntitiesList(this.componentModel.id,data[1] as any, this.componentModel.senderRequirements);
          this.parametersDataService.generateTruksEntitiesList(this.componentModel.id, data[2] as any, this.componentModel.senderTrucks);

          this.parametersDataService.generateFacilityEntitiesList(this.componentModel.id, data[0] as any, this.componentModel.receiverFacilities);
          this.parametersDataService.generateRequirementsEntitiesList(this.componentModel.id,data[1] as any, this.componentModel.receiverRequirements);
          this.parametersDataService.generateTruksEntitiesList(this.componentModel.id, data[2] as any, this.componentModel.receiverTrucks);

          observer.next(true);
          //   resolve(true);
        }, error => {
          this.errorHandler.handleError(error);
          observer.next(false);
        });
    });
  }

  onSenderAddressSelected(event: MdOptionSelectionChange, address: AddressModel) {
  }

  onReceiverAddressSelected(event: MdOptionSelectionChange, address: AddressModel) {
  }

  private initSearchAddresses() {
    this.senderSearchAddressControl.valueChanges.startWith(null)
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

          this.senderFoundAddresses = result;
        }, error => {
          this.errorHandler.handleError(error);
        });
    }
  }

  ngAfterViewInit() {
  }

  onSubmit(value: any): void {
    console.log(value);
  }
}
