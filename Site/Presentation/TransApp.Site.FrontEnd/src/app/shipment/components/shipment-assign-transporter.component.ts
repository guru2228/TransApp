import { Component, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { TableData } from "app/shared/md/md-table/md-table.component";
import { ShipmentModel } from "app/shipment/models/shipment-model";
import { ApplicationUser } from "app/authentication/viewmodels/application-user";
import { ShipmentService } from "app/shipment/services/shipment.service";
import { NotificationService } from "app/shared/common/services/notification.service";
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { ShipmentTransporterStatus } from "app/shipment/models/shipment-transporter-status";
import { GlobalErrorHandler } from "app/shared/common/services/globalErrorHandler";
import { TranslateService } from "app/shared/common/services/localization/translate.service";
import { Subscription } from "rxjs/Subscription";
import { HelperService } from "app/shared/common/services/helperService";
import { ShipmentTransporterFilterModel } from "app/shipment/models/shipment-transporter-filter-model";
import { ShipmentRowViewModel } from "app/shipment/models/shipment-row-viewmodel";
import { Observable } from "rxjs/Observable";
import { ShipmentTransporterModel } from "app/shipment/models/shipment-transporter-model";
import { ComponentStateType } from "app/shared/common/helper/component-state-type";

declare var $: any;
declare var swal: any;

@Component({
  selector: "app-shipment-assign-transporter",
  templateUrl: "./shipment-assign-transporter.component.html"
})
export class ShipmentAssignTransporterComponent
  implements OnInit, OnDestroy, AfterViewInit {

  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  componentModel: ShipmentTransporterModel[];
  currentUser: ApplicationUser;
  currentShipmentId: number;
  /** component state : display, add or edit */
  componentState: ComponentStateType;

  showLoader = false;
  parametersSubscription: Subscription;

  constructor(
    private router: Router,
    private shipmentService: ShipmentService,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
    public translateService: TranslateService,
    public helperService: HelperService,
    private errorHandler: GlobalErrorHandler,
    private route: ActivatedRoute
  ) {
  }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
    debugger;
    this.currentUser = this.authenticationService.getCurrentUser();

    this.parametersSubscription = this.route.params.subscribe(params => {
      this.currentShipmentId = +params['id'];
    });


    this.getAssignedTransporters();
  };

  onClickAssignToTransporter(shipmentTransporter: ShipmentTransporterModel) {
    debugger;
    this.shipmentService.assignToTransporter(this.currentShipmentId, shipmentTransporter.id, this.currentUser.customerId, this.translateService.currentLanguage)
      .subscribe(
      result => {
        if (result) {
          const otherAssignedTransporter = this.componentModel.find(item => item.assigned);
          if (otherAssignedTransporter) {
            otherAssignedTransporter.assigned = false;

          }

          shipmentTransporter.assigned = true;
          shipmentTransporter.assignedDate = new Date();

          this.notificationService.show('Transporter assigned', 'success');
        }
      }
      , error => {
        this.errorHandler.handleError(error);
      });
  }

  /**
   * Get addresses
   */
  private getAssignedTransporters() {

    if (this.currentShipmentId > 0 && this.currentUser && this.currentUser.customerId) {
      this.shipmentService.getAssignedTransporters(this.currentShipmentId, this.currentUser.customerId, this.translateService.currentLanguage)
        .subscribe(
        result => {
          this.componentModel = result;

          this.helperService.sendSharedDataBetweenComponents({
            operation: 'loaded-transporters',
            shipmentId: this.currentShipmentId
          });
        },
        error => {
          this.errorHandler.handleError(error);
        });
    }

  }


  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    if (this.parametersSubscription) {
      this.parametersSubscription.unsubscribe();
    }
  }
}
