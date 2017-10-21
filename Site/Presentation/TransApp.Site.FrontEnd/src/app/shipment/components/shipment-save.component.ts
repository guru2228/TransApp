import { Component, OnInit, AfterViewInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { DateAdapter, NativeDateAdapter } from "@angular/material";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/map";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { HelperService } from "app/shared/common/services/helperService";
import { AddressService } from "app/address/services/address.service";
import { ParametersDataService } from "app/shared/common/services/parameters-data.service";
import { TranslateService } from "app/shared/common/services/localization/translate.service";
import { GlobalErrorHandler } from "app/shared/common/services/globalErrorHandler";
import { NotificationService } from "app/shared/common/services/notification.service";
import { ApplicationUser } from "app/authentication/viewmodels/application-user";
import { AddressModel } from "app/address/models/address-model";
import { MatOptionSelectionChange } from "@angular/material";
import { ComponentStateType } from "app/shared/common/helper/component-state-type";
import { ShipmentModel } from "app/shipment/models/shipment-model";
import { TruckParameterModel } from "app/shared/common/models/parameter/truck-parameter-model";
import { RequirementEntityModel } from "app/shared/common/models/entity/requirement-entity-model";
import { RequirementParameterModel } from "app/shared/common/models/parameter/requirement-parameter-model";
import { FacilityParameterModel } from "app/shared/common/models/parameter/facility-parameter-model";
import { FacilityEntityModel } from "app/shared/common/models/entity/facility-entity-model";
import { AvailabilityEntityModel } from "app/shared/common/models/entity/availability-entity-model";
import { TruckEntityModel } from "app/shared/common/models/entity/truck-entity-model";
import { ShipmentDetailModel } from "app/shipment/models/shipment-detail-model";
import { ShipmentTransporterModel } from "app/shipment/models/shipment-transporter-model";
import { ShipmentService } from "app/shipment/services/shipment.service";
import { PackTypeParameterModel } from "app/shared/common/models/parameter/pack-type-parameter-model";
import { ShipmentDetailRowModel } from "app/shipment/models/shipment-detail-row-model ";

declare var google: any;
declare var $: any;
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  moduleId: module.id,
  selector: "app-shipment-save-component",
  templateUrl: "./shipment-save.component.html"
})
export class ShipmentSaveComponent implements OnInit, AfterViewInit {
  currentUser: ApplicationUser;
  /** main component model */
  componentModel: ShipmentModel;
  /** component state : display, add or edit */
  componentState: ComponentStateType;
  /** search controls */
  senderSearchAddressControl = new FormControl("");
  receiverSearchAddressControl = new FormControl("");

  senderSelectedAddress: AddressModel;
  receiverSelectedAddress: AddressModel;
  senderFoundAddresses: AddressModel[];
  receiverFoundAddresses: AddressModel[];

  facilitiesData: any;
  requirementsData: any;
  trucksData: any;
  packTypes: any;

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
      private dateAdapter: DateAdapter < NativeDateAdapter >
  ) {
      // set datepickerlocale
  }

  ngOnInit() {
      this.currentUser = this.authenticationService.getCurrentUser();

      // get component state
      this.componentState = this.helperService.getComponentStateByUrl(
          this.router.url
      ) as ComponentStateType;

      // create search FormControl
      this.senderSearchAddressControl = new FormControl();
      this.receiverSearchAddressControl = new FormControl();
      this.senderFoundAddresses = new Array < AddressModel > ();
      this.receiverFoundAddresses = new Array < AddressModel > ();

      // get component state
      this.componentState = this.helperService.getComponentStateByUrl(
          this.router.url
      ) as ComponentStateType;
      // load required data
      this.loadComponentModel(this.componentState).subscribe(modelLoaded => {
          if (modelLoaded) {
              this.loadParamsData().subscribe(paramsDataLoaded => {});
          }
      });
      this.initSenderSearchAddresses();
      this.initReceiverSearchAddresses();
  }

  ngAfterViewInit() {
      const self = this;
      setTimeout(function() {
          self.setCursorToFirstElement();
      }, 500);
  }

  /**
   * On save click
   * @param model
   * @param isValid
   */
  save(model: ShipmentModel, isValid: boolean) {
      console.log(model, isValid);
      console.log(this.componentModel);
      if (isValid && this.isModelValid()) {
          this.shipmentService
              .save(this.componentModel, this.translateService.currentLanguage)
              .subscribe(
                  shipmentId => {
                      if (this.componentState === ComponentStateType.add) {
                          this.router.navigate([
                              "/shipment-overview/shipment-edit/" + shipmentId
                          ]);
                          this.notificationService.show(
                              "Address created.",
                              "success",
                              "center",
                              "top"
                          );
                      } else {
                          //// send data to addreess coponent to be updated
                          // this.addressService.sendAddressModel(this.componentModel);
                          this.notificationService.show(
                              "Address saved. ",
                              "success",
                              "center",
                              "top"
                          );

                          this.shipmentService.sendShipmentModel(this.componentModel);
                      }
                  },
                  error => {
                      console.log(error);
                  }
              );
      } else {
          this.helperService.scrollOnTop();
          this.setCursorToFirstElement();
      }
  }

  /**
   * Load component model, or create a new one if component state is = Add
   * @param componentState
   */
  private loadComponentModel(
      componentState: ComponentStateType
  ): Observable < boolean > {
      return Observable.create(observer => {
          if (componentState === ComponentStateType.add) {
              this.componentModel = new ShipmentModel();
              this.componentModel.id = -1;
              this.componentModel.customerId = this.currentUser.customerId;

              this.componentModel.senderAddressInfo = "";
              this.componentModel.senderFacilities = new Array < FacilityEntityModel > ();
              this.componentModel.senderRequirements = new Array <
                  RequirementEntityModel >
                  ();
              this.componentModel.senderTrucks = new Array < TruckEntityModel > ();
              // receiver region
              this.componentModel.receiverAddressInfo = "";
              this.componentModel.receiverFacilities = new Array <
                  FacilityEntityModel >
                  ();
              this.componentModel.receiverRequirements = new Array <
                  RequirementEntityModel >
                  ();
              this.componentModel.receiverTrucks = new Array < TruckEntityModel > ();

              this.componentModel.shipmentDetails = new Array <
                  ShipmentDetailRowModel >
                  ();
              this.componentModel.shipmentTransporters = new Array <
                  ShipmentTransporterModel >
                  ();

              observer.next(true);
          } else {
              let shipmentId = 0;
              this.route.params.forEach((params: Params) => {
                  shipmentId = params["id"];
              });
              this.shipmentService
                  .get(
                      shipmentId,
                      this.currentUser.customerId,
                      this.translateService.currentLanguage
                  )
                  .subscribe(
                      result => {
                          result.pickUpDate = new Date(result.pickUpDate);
                          result.deliveryDate = new Date(result.deliveryDate);
                          this.componentModel = result as ShipmentModel;

                          //// load sender address
                          this.addressService
                              .get(
                                  this.componentModel.senderAddressId,
                                  this.currentUser.customerId,
                                  this.translateService.currentLanguage
                              )
                              .subscribe(
                                  senderAddress => {
                                      if (result) {
                                          this.senderSelectedAddress = senderAddress as AddressModel;
                                          this.senderSearchAddressControl = new FormControl(
                                              this.senderSelectedAddress.name
                                          );
                                          this.initSenderSearchAddresses();
                                          this.componentModel.senderAddressInfo =
                                              this.senderSelectedAddress.location.street +
                                              ", " +
                                              this.senderSelectedAddress.location.streetNumber +
                                              ", " +
                                              this.senderSelectedAddress.location.zipCode +
                                              ", " +
                                              this.senderSelectedAddress.location.city;
                                      }
                                  },
                                  error => {
                                      this.errorHandler.handleError(
                                          "Error on retrieving sender address for this shipment. Please contact and administrator!"
                                      );
                                  }
                              );

                          //// load receiver address
                          this.addressService
                              .get(
                                  this.componentModel.receiverAddressId,
                                  this.currentUser.customerId,
                                  this.translateService.currentLanguage
                              )
                              .subscribe(
                                  receiverAddress => {
                                      if (result) {
                                          this.receiverSelectedAddress = receiverAddress as AddressModel;
                                          this.receiverSearchAddressControl = new FormControl(
                                              this.receiverSelectedAddress.name
                                          );
                                          this.initReceiverSearchAddresses();
                                          this.componentModel.receiverAddressInfo =
                                              this.receiverSelectedAddress.location.street +
                                              ", " +
                                              this.receiverSelectedAddress.location.streetNumber +
                                              ", " +
                                              this.receiverSelectedAddress.location.zipCode +
                                              ", " +
                                              this.receiverSelectedAddress.location.city;
                                      }
                                  },
                                  error => {
                                      this.errorHandler.handleError(
                                          "Error on retrieving receiver address for this shipment. Please contact and administrator!"
                                      );
                                  }
                              );

                          console.log(this.componentModel);
                          const self = this;

                          observer.next(true);
                      },
                      error => {
                          this.errorHandler.handleError(error);
                          observer.next(false);
                      }
                  );
          }
      });
  }
  /**
   * Load required data used to render form
   */
  private loadParamsData(): Observable < boolean > {
      return Observable.create(observer => {
          // return new Promise((resolve, reject) => {
          Observable.forkJoin([
              this.parametersDataService.getAddressRequirementsParameters(
                  this.translateService.currentLanguage
              ),
              this.parametersDataService.getPackTypes(
                  this.translateService.currentLanguage
              )
          ]).subscribe(
              data => {
                  this.facilitiesData = data[0]["facilities"] as any;
                  this.requirementsData = data[0]["requirements"] as any;
                  this.trucksData = data[0]["trucks"] as any;
                  this.packTypes = data[1] as any;
                  this.componentModel.senderFacilities = this.parametersDataService.generateFacilityEntitiesList(
                      this.componentModel.id,
                      this.facilitiesData,
                      this.componentModel.senderFacilities
                  );
                  this.componentModel.senderRequirements = this.parametersDataService.generateRequirementsEntitiesList(
                      this.componentModel.id,
                      this.requirementsData,
                      this.componentModel.senderRequirements
                  );
                  this.componentModel.senderTrucks = this.parametersDataService.generateTruksEntitiesList(
                      this.componentModel.id,
                      this.trucksData,
                      this.componentModel.senderTrucks
                  );

                  this.componentModel.receiverFacilities = this.parametersDataService.generateFacilityEntitiesList(
                      this.componentModel.id,
                      this.facilitiesData,
                      this.componentModel.receiverFacilities
                  );
                  this.componentModel.receiverRequirements = this.parametersDataService.generateRequirementsEntitiesList(
                      this.componentModel.id,
                      this.requirementsData,
                      this.componentModel.receiverRequirements
                  );
                  this.componentModel.receiverTrucks = this.parametersDataService.generateTruksEntitiesList(
                      this.componentModel.id,
                      this.trucksData,
                      this.componentModel.receiverTrucks
                  );
                  observer.next(true);
                  //   resolve(true);
              },
              error => {
                  this.errorHandler.handleError(error);
                  observer.next(false);
              }
          );
      });
  }

  /**
   * On sender address selected
   * @param event
   * @param address
   */
  onSenderAddressSelected(
      event: MatOptionSelectionChange,
      address: AddressModel
  ) {
      this.senderSelectedAddress = address as AddressModel;
      this.addressService
          .get(
              address.id,
              this.currentUser.customerId,
              this.translateService.currentLanguage
          )
          .subscribe(
              result => {
                  if (result) {
                      this.senderSelectedAddress = result as AddressModel;

                      this.componentModel.senderAddressId = address.id;
                      this.componentModel.senderAddressInfo =
                          this.senderSelectedAddress.location.street +
                          ", " +
                          this.senderSelectedAddress.location.streetNumber +
                          ", " +
                          this.senderSelectedAddress.location.zipCode +
                          ", " +
                          this.senderSelectedAddress.location.city;
                      this.componentModel.senderContactPerson = this.senderSelectedAddress.contactPerson;
                      this.componentModel.senderPhone = this.senderSelectedAddress.phone;
                      this.componentModel.senderRemark = this.senderSelectedAddress.remark;
                      this.componentModel.senderFacilities = this.senderSelectedAddress.facilities;
                      this.componentModel.senderRequirements = this.senderSelectedAddress.requirements;
                      this.componentModel.senderTrucks = this.senderSelectedAddress.trucks;

                      this.componentModel.senderFacilities = this.parametersDataService.generateFacilityEntitiesList(
                          this.componentModel.id,
                          this.facilitiesData,
                          this.senderSelectedAddress.facilities
                      );
                      this.componentModel.senderRequirements = this.parametersDataService.generateRequirementsEntitiesList(
                          this.componentModel.id,
                          this.requirementsData,
                          this.senderSelectedAddress.requirements
                      );
                      this.componentModel.senderTrucks = this.parametersDataService.generateTruksEntitiesList(
                          this.componentModel.id,
                          this.trucksData,
                          this.senderSelectedAddress.trucks
                      );

                      if (
                          this.componentModel.pickUpDate &&
                          this.senderSelectedAddress.availabilities
                      ) {
                          this.componentModel.senderAvailabilities = [];
                          if (
                              this.componentModel.pickUpDate &&
                              this.senderSelectedAddress.availabilities
                          ) {
                              this.componentModel.senderAvailabilities.push(
                                  this.getAvailability(
                                      this.componentModel.pickUpDate,
                                      this.senderSelectedAddress.availabilities
                                  )
                              );
                          }
                      }
                  }
              },
              error => {
                  this.errorHandler.handleError(error);
              }
          );
  }

  /**
   * On pickupdate selected
   * @param event
   */
  onPickupDateSelected(event: any) {
      if (
          this.componentModel.pickUpDate &&
          this.senderSelectedAddress &&
          this.senderSelectedAddress.availabilities
      ) {
          this.componentModel.senderAvailabilities = [];
          if (this.componentModel.pickUpDate) {
              this.componentModel.senderAvailabilities.push(
                  this.getAvailability(
                      this.componentModel.pickUpDate,
                      this.senderSelectedAddress.availabilities
                  )
              );
          }
      }
  }

  /**
   * On sender address selected
   * @param event
   * @param address
   */
  onReceiverAddressSelected(
      event: MatOptionSelectionChange,
      address: AddressModel
  ) {
      this.receiverSelectedAddress = address as AddressModel;
      this.addressService
          .get(
              address.id,
              this.currentUser.customerId,
              this.translateService.currentLanguage
          )
          .subscribe(
              result => {
                  if (result) {
                      this.receiverSelectedAddress = result as AddressModel;
                      console.log(result);

                      this.componentModel.receiverAddressId = address.id;
                      this.componentModel.receiverAddressInfo =
                          this.receiverSelectedAddress.location.street +
                          ", " +
                          this.receiverSelectedAddress.location.streetNumber +
                          ", " +
                          this.receiverSelectedAddress.location.zipCode +
                          ", " +
                          this.receiverSelectedAddress.location.city;
                      this.componentModel.receiverContactPerson = this.receiverSelectedAddress.contactPerson;
                      this.componentModel.receiverPhone = this.receiverSelectedAddress.phone;
                      this.componentModel.receiverRemark = this.receiverSelectedAddress.remark;
                      this.componentModel.receiverFacilities = this.receiverSelectedAddress.facilities;
                      this.componentModel.receiverRequirements = this.receiverSelectedAddress.requirements;
                      this.componentModel.receiverTrucks = this.receiverSelectedAddress.trucks;

                      this.componentModel.receiverFacilities = this.parametersDataService.generateFacilityEntitiesList(
                          this.componentModel.id,
                          this.facilitiesData,
                          this.receiverSelectedAddress.facilities
                      );
                      this.componentModel.receiverRequirements = this.parametersDataService.generateRequirementsEntitiesList(
                          this.componentModel.id,
                          this.requirementsData,
                          this.receiverSelectedAddress.requirements
                      );
                      this.componentModel.receiverTrucks = this.parametersDataService.generateTruksEntitiesList(
                          this.componentModel.id,
                          this.trucksData,
                          this.receiverSelectedAddress.trucks
                      );

                      this.componentModel.receiverAvailabilities = [];
                      if (
                          this.componentModel.deliveryDate &&
                          this.receiverSelectedAddress.availabilities
                      ) {
                          this.componentModel.receiverAvailabilities.push(
                              this.getAvailability(
                                  this.componentModel.deliveryDate,
                                  this.receiverSelectedAddress.availabilities
                              )
                          );
                      }
                  }
              },
              error => {
                  this.errorHandler.handleError(error);
              }
          );
  }

  /**
   * On pickupdate selected
   * @param event
   */
  onDeliveryDateSelected(event: any) {
      if (
          this.componentModel.deliveryDate &&
          this.receiverSelectedAddress &&
          this.receiverSelectedAddress.availabilities
      ) {
          this.componentModel.receiverAvailabilities = [];
          if (
              this.componentModel.deliveryDate &&
              this.receiverSelectedAddress.availabilities
          ) {
              this.componentModel.receiverAvailabilities.push(
                  this.getAvailability(
                      this.componentModel.deliveryDate,
                      this.receiverSelectedAddress.availabilities
                  )
              );
          }
      }
  }

  private getAvailability(
      selectedData: Date,
      availabilities: AvailabilityEntityModel[]
  ) {
      let pickupDateDay = selectedData.getDay();
      pickupDateDay = pickupDateDay === 0 ? 7 : pickupDateDay;

      let availability = null;
      if (availabilities.length === 1 && availabilities[0].day === 0) {
          availability = availabilities[0];
      } else {
          availability = availabilities.find(item => item.day === pickupDateDay);
      }
      availability.id = -1;
      return availability;
  }

  private initSenderSearchAddresses() {
      this.senderSearchAddressControl.valueChanges
          .startWith(null)
          .debounceTime(600)
          .subscribe(term => {
              const searchTerm = term && term.length > 0 ? term : "";
              this.searchSenderAddresses(searchTerm);
          });
  }

  private initReceiverSearchAddresses() {
      this.receiverSearchAddressControl.valueChanges
          .startWith(null)
          .debounceTime(600)
          .subscribe(term => {
              const searchTerm = term && term.length > 0 ? term : "";
              this.searchReceiverAddresses(searchTerm);
          });
  }

  private searchSenderAddresses(searchTerm: string) {
      if (this.currentUser && this.currentUser.customerId) {
          this.addressService
              .getAll(
                  this.currentUser.customerId,
                  searchTerm,
                  0,
                  1000,
                  this.translateService.currentLanguage
              )
              .subscribe(
                  result => {
                      this.senderFoundAddresses = result;
                  },
                  error => {
                      this.errorHandler.handleError(error);
                  }
              );
      }
  }

  private searchReceiverAddresses(searchTerm: string) {
      if (this.currentUser && this.currentUser.customerId) {
          this.addressService
              .getAll(
                  this.currentUser.customerId,
                  searchTerm,
                  0,
                  1000,
                  this.translateService.currentLanguage
              )
              .subscribe(
                  result => {
                      this.receiverFoundAddresses = result;
                  },
                  error => {
                      this.errorHandler.handleError(error);
                  }
              );
      }
  }

  /**
   * Add package row when add package is clicked
   */
  onAddPackageClick(): boolean {
      if (!this.componentModel.shipmentDetails) {
          this.componentModel.shipmentDetails = [];
      }

      const shipmentpackage = new ShipmentDetailRowModel();

      const shipmentMaster = new ShipmentDetailModel();
      shipmentMaster.id = -1;
      shipmentpackage.master = shipmentMaster;

      this.componentModel.shipmentDetails.push(shipmentpackage);
      return false;
  }

  /**
   * Add extra row when master pack is selected
   * @param currentShipmentRow
   */
  onMasterPackTypeChange(currentShipmentRow: ShipmentDetailRowModel): void {
      if (currentShipmentRow.master.packTypeId === 1) {
          const shipmentExtra = new ShipmentDetailModel();
          shipmentExtra.id = -1;
          currentShipmentRow.extras = [];
          currentShipmentRow.extras.push(shipmentExtra);
      } else {
          currentShipmentRow.extras = [];
      }
  }

  /**
   * Add extra row when master pack is selected
   * @param currentShipmentRow
   */
  onShipmentDetailsMasterRemove(
      currentShipmentRow: ShipmentDetailRowModel,
      index: number
  ): void {
      if (currentShipmentRow.master.id > 0) {
          currentShipmentRow.master.toRemove = true;
          for (let i = 0; i < currentShipmentRow.extras.length; i++) {
              currentShipmentRow.extras[i].toRemove = true;
          }
      } else {
          this.componentModel.shipmentDetails.splice(index, 1);
      }

      this.computeTotals();
  }

  /**
   * Add extra row when master pack is selected
   * @param currentShipmentRow
   */
  onShipmentDetailsExtraRemove(currentShipmentRow: ShipmentDetailRowModel, extra: ShipmentDetailModel, index: number): void {
      if (extra.id > 0) {
          extra.toRemove = true;
      } else {
          currentShipmentRow.extras.splice(index, 1);
      }
  }

  /**
   * Compute totals
   */
  computeTotals() {
      let totalQuantity = 0;
      let totalVolume = 0;
      let totalWeight = 0;

      if (
          this.componentModel &&
          this.componentModel.shipmentDetails &&
          this.componentModel.shipmentDetails.filter(item => !item.master.toRemove)
          .length > 0
      ) {
          let rows = this.componentModel.shipmentDetails.filter(
              item => !item.master.toRemove
          );
          for (let i = 0; i < rows.length; i++) {
              const shipmentDetail = rows[i];
              if (shipmentDetail.master.quantity)
                  totalQuantity += shipmentDetail.master.quantity;
              if (shipmentDetail.master.quantity && shipmentDetail.master.weight)
                  totalWeight +=
                  shipmentDetail.master.quantity * shipmentDetail.master.weight;
              if (
                  shipmentDetail.master.quantity &&
                  shipmentDetail.master.length &&
                  shipmentDetail.master.width &&
                  shipmentDetail.master.height
              )
                  totalVolume +=
                  shipmentDetail.master.quantity *
                  (shipmentDetail.master.length /
                      100 *
                      (shipmentDetail.master.width / 100) *
                      (shipmentDetail.master.height / 100));
          }
      }

      this.componentModel.totalQuatity = totalQuantity;
      this.componentModel.totalWeight = totalWeight;
      this.componentModel.totalVolume = totalVolume;
  }

  private isModelValid(): boolean {
      if (!this.componentModel.senderAvailabilities ||
          (this.componentModel.senderAvailabilities &&
              this.componentModel.senderAvailabilities.length === 1 &&
              this.componentModel.senderAvailabilities[0].isClosed)
      )
          return false;

      if (!this.componentModel.receiverAvailabilities ||
          (this.componentModel.receiverAvailabilities &&
              this.componentModel.receiverAvailabilities.length === 1 &&
              this.componentModel.receiverAvailabilities[0].isClosed)
      )
          return false;

      if (!this.componentModel.shipmentDetails ||
          this.componentModel.shipmentDetails.length <= 0
      )
          return false;

      return true;
  }

  private setCursorToFirstElement() {
      if (this.componentState === ComponentStateType.add) {
          const element = document.getElementById("reference");
          if (element) {
              element.focus();
          }
      }
  }

  formatNumber(number: number) {
      const str = number.toFixed(3).replace(/\.000$/, "");
      return str;
  }
}
