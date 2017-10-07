import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
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
import { ShipmentService } from 'app/shipment/services/shipment.service';

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

  senderSelectedAddress: AddressModel;
  receiverSelectedAddress: AddressModel;
  senderFoundAddresses: AddressModel[];
  receiverFoundAddresses: AddressModel[];

  facilitiesData: any;
  requirementsData: any;
  truksData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private helperService: HelperService,
    private addressService: AddressService,
    private shipmentService: ShipmentService,
    private parametersDataService: ParametersDataService,
    private translateService: TranslateService,
    private errorHandler: GlobalErrorHandler,
    private notificationService: NotificationService,
    private dateAdapter: DateAdapter<NativeDateAdapter>
  ) {
    // set datepickerlocale
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();

    // create search FormControl
    this.senderSearchAddressControl = new FormControl();
    this.receiverSearchAddressControl = new FormControl();
    this.senderFoundAddresses = new Array<AddressModel>();
    this.receiverFoundAddresses = new Array<AddressModel>();

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
    this.initSenderSearchAddresses();
    this.initReceiverSearchAddresses();
  }

  ngAfterViewInit() {
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
        this.componentModel.customerId = this.currentUser.customerId;

        this.componentModel.senderAddressInfo = '';
        this.componentModel.senderFacilities = new Array<FacilityEntityModel>();
        this.componentModel.senderRequirements = new Array<RequirementEntityModel>();
        this.componentModel.senderTrucks = new Array<TruckEntityModel>();
        // receiver region
        this.componentModel.receiverAddressInfo = '';
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
          this.facilitiesData = data[0] as any;
          this.requirementsData = data[1] as any;
          this.truksData = data[2] as any;
          this.componentModel.senderFacilities = this.parametersDataService.generateFacilityEntitiesList(this.componentModel.id, this.facilitiesData, this.componentModel.senderFacilities);
          this.componentModel.senderRequirements = this.parametersDataService.generateRequirementsEntitiesList(this.componentModel.id, this.requirementsData, this.componentModel.senderRequirements);
          this.componentModel.senderTrucks = this.parametersDataService.generateTruksEntitiesList(this.componentModel.id, this.truksData, this.componentModel.senderTrucks);

          this.componentModel.receiverFacilities = this.parametersDataService.generateFacilityEntitiesList(this.componentModel.id, this.facilitiesData, this.componentModel.receiverFacilities);
          this.componentModel.receiverRequirements = this.parametersDataService.generateRequirementsEntitiesList(this.componentModel.id, this.requirementsData, this.componentModel.receiverRequirements);
          this.componentModel.receiverTrucks = this.parametersDataService.generateTruksEntitiesList(this.componentModel.id, this.truksData, this.componentModel.receiverTrucks);

          observer.next(true);
          //   resolve(true);
        }, error => {
          this.errorHandler.handleError(error);
          observer.next(false);
        });
    });
  }

  /**
   * On sender address selected
   * @param event
   * @param address
   */
  onSenderAddressSelected(event: MdOptionSelectionChange, address: AddressModel) {
    this.senderSelectedAddress = address as AddressModel;
    this.addressService.get(address.id, this.translateService.currentLanguage).subscribe(result => {
      if (result) {
        this.senderSelectedAddress = result as AddressModel;
        console.log(result);

        this.componentModel.senderAddressInfo = this.senderSelectedAddress.location.street + ', ' + this.senderSelectedAddress.location.streetNumber
          + ', ' + this.senderSelectedAddress.location.zipCode + ', ' + this.senderSelectedAddress.location.city;
        this.componentModel.senderContactPerson = this.senderSelectedAddress.contactPerson;
        this.componentModel.senderPhone = this.senderSelectedAddress.phone;
        this.componentModel.senderRemark = this.senderSelectedAddress.remark;
        this.componentModel.senderFacilities = this.senderSelectedAddress.facilities;
        this.componentModel.senderRequirements = this.senderSelectedAddress.requirements;
        this.componentModel.senderTrucks = this.senderSelectedAddress.trucks;

        this.componentModel.senderFacilities = this.parametersDataService.generateFacilityEntitiesList(this.componentModel.id, this.facilitiesData, this.senderSelectedAddress.facilities);
        this.componentModel.senderRequirements = this.parametersDataService.generateRequirementsEntitiesList(this.componentModel.id, this.requirementsData, this.senderSelectedAddress.requirements);
        this.componentModel.senderTrucks = this.parametersDataService.generateTruksEntitiesList(this.componentModel.id, this.truksData, this.senderSelectedAddress.trucks);

        if (this.componentModel.pickUpDate && this.senderSelectedAddress.availabilities) {
          this.componentModel.senderAvailabilities = [];
          if (this.componentModel.pickUpDate && this.senderSelectedAddress.availabilities) {
            this.componentModel.senderAvailabilities.push(this.getAvailability(this.componentModel.pickUpDate, this.senderSelectedAddress.availabilities));
          }
        }
      }
    }, error => {
      this.errorHandler.handleError(error);
    })
  }

  /**
   * On pickupdate selected
   * @param event
   */
  onPickupDateSelected(event: any) {
    if (this.componentModel.pickUpDate && this.senderSelectedAddress.availabilities) {
      this.componentModel.senderAvailabilities = [];
      if (this.componentModel.pickUpDate && this.senderSelectedAddress.availabilities) {
        this.componentModel.senderAvailabilities.push(this.getAvailability(this.componentModel.pickUpDate, this.senderSelectedAddress.availabilities));
      }
    }
  }


   /**
   * On sender address selected
   * @param event
   * @param address
   */
  onReceiverAddressSelected(event: MdOptionSelectionChange, address: AddressModel) {
    this.receiverSelectedAddress = address as AddressModel;
    this.addressService.get(address.id, this.translateService.currentLanguage).subscribe(result => {
      if (result) {
        this.receiverSelectedAddress = result as AddressModel;
        console.log(result);

        this.componentModel.receiverAddressInfo = this.receiverSelectedAddress.location.street + ', ' + this.receiverSelectedAddress.location.streetNumber
          + ', ' + this.receiverSelectedAddress.location.zipCode + ', ' + this.receiverSelectedAddress.location.city;
        this.componentModel.receiverContactPerson = this.receiverSelectedAddress.contactPerson;
        this.componentModel.receiverPhone = this.receiverSelectedAddress.phone;
        this.componentModel.receiverRemark = this.receiverSelectedAddress.remark;
        this.componentModel.receiverFacilities = this.receiverSelectedAddress.facilities;
        this.componentModel.receiverRequirements = this.receiverSelectedAddress.requirements;
        this.componentModel.receiverTrucks = this.receiverSelectedAddress.trucks;

        this.componentModel.receiverFacilities = this.parametersDataService.generateFacilityEntitiesList(this.componentModel.id, this.facilitiesData, this.receiverSelectedAddress.facilities);
        this.componentModel.receiverRequirements = this.parametersDataService.generateRequirementsEntitiesList(this.componentModel.id, this.requirementsData, this.receiverSelectedAddress.requirements);
        this.componentModel.receiverTrucks = this.parametersDataService.generateTruksEntitiesList(this.componentModel.id, this.truksData, this.receiverSelectedAddress.trucks);

        this.componentModel.receiverAvailabilities = [];
        if (this.componentModel.deliveryDate && this.receiverSelectedAddress.availabilities) {
          this.componentModel.receiverAvailabilities.push(this.getAvailability(this.componentModel.deliveryDate, this.receiverSelectedAddress.availabilities));
        }
      }
    }, error => {
      this.errorHandler.handleError(error);
    })
  }

  /**
   * On pickupdate selected
   * @param event
   */
  onDeliveryDateSelected(event: any) {
    if (this.componentModel.deliveryDate && this.receiverSelectedAddress.availabilities) {
      this.componentModel.receiverAvailabilities = [];
      if (this.componentModel.deliveryDate && this.receiverSelectedAddress.availabilities) {
        this.componentModel.receiverAvailabilities.push(this.getAvailability(this.componentModel.deliveryDate, this.receiverSelectedAddress.availabilities));
      }
    }
  }

  private getAvailability(selectedData: Date, availabilities: AvailabilityEntityModel[]) {
    let pickupDateDay = selectedData.getDay();
    pickupDateDay = pickupDateDay === 0 ? 7 : pickupDateDay;

    if (availabilities.length === 1 && availabilities[0].day === 0) {
      return availabilities[0];
    } else {
      return availabilities.find(item => item.day === pickupDateDay);
    }
  }



  private initSenderSearchAddresses() {
    this.senderSearchAddressControl.valueChanges.startWith(null)
      .debounceTime(600)
      .subscribe(term => {
        const searchTerm = term && term.length > 0 ? term : '';
        this.searchSenderAddresses(searchTerm);
      });
  }

  private initReceiverSearchAddresses() {
    this.receiverSearchAddressControl.valueChanges.startWith(null)
      .debounceTime(600)
      .subscribe(term => {
        const searchTerm = term && term.length > 0 ? term : '';
        this.searchReceiverAddresses(searchTerm);
      });
  }

  private searchSenderAddresses(searchTerm: string) {
    if (this.currentUser && this.currentUser.customerId) {
      this.addressService.getAll(this.currentUser.customerId, searchTerm, 0, 1000, this.translateService.currentLanguage)
        .subscribe(result => {
          this.senderFoundAddresses = result;
        }, error => {
          this.errorHandler.handleError(error);
        });
    }
  }

  private searchReceiverAddresses(searchTerm: string) {
    if (this.currentUser && this.currentUser.customerId) {
      this.addressService.getAll(this.currentUser.customerId, searchTerm, 0, 1000, this.translateService.currentLanguage)
        .subscribe(result => {
          this.receiverFoundAddresses = result;
        }, error => {
          this.errorHandler.handleError(error);
        });
    }
  }



  onSubmit(value: any): void {
    console.log(value);
  }

  save(model: ShipmentModel, isValid: boolean) {
    console.log(model, isValid);
    console.log(this.componentModel);

    this.shipmentService.save(this.componentModel).subscribe(resut=>{
      alert("saved");
    },
  error => {
    console.log(error);
  });
  }
}
