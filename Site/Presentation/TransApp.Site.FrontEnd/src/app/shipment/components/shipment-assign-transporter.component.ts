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

const moment = require("moment/moment");
declare var $: any;
declare var swal: any;
declare interface TableData2 {
  headerRow: string[];
  dataRows: string[][];
}
@Component({
  selector: "app-shipment-assign-transporter",
  templateUrl: "./shipment-assign-transporter.component.html"
})
export class ShipmentAssignTransporterComponent
  implements OnInit, OnDestroy, AfterViewInit {

  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  componentModel: ShipmentTransporterModel[];
  currentUser: ApplicationUser;

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
  ) { }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
    debugger;
    this.currentUser = this.authenticationService.getCurrentUser();

    this.getAssignedTransporters();
  };

  /**
   * Get addresses
   */
  private getAssignedTransporters() {
    let currentShipmentId = -1;
    this.parametersSubscription = this.route.params.subscribe(params => {
      currentShipmentId = +params['id'];
    });

    if (currentShipmentId > 0 && this.currentUser && this.currentUser.customerId) {
      this.shipmentService.getAssignedTransporters(currentShipmentId, this.currentUser.customerId, this.translateService.currentLanguage)
        .subscribe(
        result => {
          this.componentModel = result;

          this.helperService.sendSharedDataBetweenComponents({
            operation: 'loaded-transporters',
            shipmentId: currentShipmentId
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
