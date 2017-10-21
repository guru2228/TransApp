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

const moment = require("moment/moment");
declare var $: any;
declare var swal: any;

@Component({
  selector: "app-shipment-overview",
  templateUrl: "./shipment-overview.component.html"
})
export class ShipmentOverviewComponent
  implements OnInit, OnDestroy, AfterViewInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  componentModel: ShipmentRowViewModel[];
  shipmentFilters: ShipmentTransporterFilterModel[];
  currentUser: ApplicationUser;
  // search term
  currentAddressId = -1;
  currentPage = 0;
  pagesCollection: Array<number>;
  pageSize = 4;

  selectedShipmentFilter: ShipmentTransporterFilterModel;

  private subscriptionReceiveUpdatedShipment: Subscription;

  constructor(
    private router: Router,
    private shipmentService: ShipmentService,
    private notificationService: NotificationService,
    private authenticationService: AuthenticationService,
    public translateService: TranslateService,
    private helperService: HelperService,
    private errorHandler: GlobalErrorHandler,
    private route: ActivatedRoute
  ) {}
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();

    this.notificationService.showLoading();

    this.getShipmentFilters().subscribe(
      filtersLoaded => {
        this.selectedShipmentFilter = this.shipmentFilters[0];
        this.setActionsVisibility();

        this.getNumberOfShipments(false);

        this.getShipments();
      },
      error => {
        this.notificationService.show(
          "Filter not loaded",
          "danger",
          "center",
          "top"
        );
        this.errorHandler.handleError(error);
      }
    );

    this.register_updateSavedModel_handler();
  }

  onFilterClick(shipmentFilter: ShipmentTransporterFilterModel): void {
    this.selectedShipmentFilter = shipmentFilter;

    this.setActionsVisibility();

    this.getNumberOfShipments(false);

    this.getShipments();
  }

  onAssignedSubfilterClick(
    inPending: boolean,
    shipmentFilter: ShipmentTransporterFilterModel
  ): void {
    shipmentFilter.inPending = inPending;

    this.selectedShipmentFilter = shipmentFilter;

    this.getNumberOfShipments(false);

    this.getShipments();
  }




  /**
   * Get addresses
   */
  private getShipments() {
    if (this.currentUser && this.currentUser.customerId) {
      this.shipmentService
        .getAll(
          this.currentUser.customerId,
          this.selectedShipmentFilter.statusType,
          this.selectedShipmentFilter.inPending,
          this.pageSize * this.currentPage + 1,
          this.pageSize,
          this.translateService.currentLanguage
        )
        .subscribe(
          result => {
            this.componentModel = [];
            if (result && result.length > 0) {
              if (this.route.firstChild) {
                this.currentAddressId = +this.route.firstChild.snapshot.params[
                  "id"
                ];
              }
              for (let i = 0; i < result.length; i++) {
                const shipmentRow = new ShipmentRowViewModel();
                shipmentRow.shipment = result[i];
                // if url contains edit then open it by default
                shipmentRow.viewActions =
                  result[i].id === this.currentAddressId;
                this.componentModel.push(shipmentRow);
              }
            }
          },
          error => {
            this.errorHandler.handleError(error);
          }
        );
    }
  }

  /**
   * Get addresses count for current filters
   */
  private getNumberOfShipments(ignoreQueryString: boolean) {
    this.pagesCollection = null;
    if (this.currentUser && this.currentUser.customerId) {
      this.shipmentService
        .getCount(
          this.currentUser.customerId,
          this.selectedShipmentFilter.statusType,
          this.translateService.currentLanguage
        )
        .subscribe(
          result => {
            debugger;
            this.pagesCollection = [];
            let numberOfPages = Math.ceil(result / this.pageSize);
            numberOfPages = numberOfPages < 0 ? 1 : numberOfPages;
            const self = this;
            setTimeout(function() {
              for (let i = 0; i < numberOfPages; i++) {
                self.pagesCollection.push(i);
              }
            }, 100);
          },
          error => {
            this.errorHandler.handleError(error);
          }
        );
    }
  }

  /**
   * Get shipment filter
   */
  private getShipmentFilters(): Observable<boolean> {
    return Observable.create(observer => {
      if (this.currentUser && this.currentUser.customerId) {
        this.shipmentService
          .getShipmentFilters(
            this.currentUser.customerId,
            this.translateService.currentLanguage
          )
          .subscribe(
            result => {
              this.shipmentFilters = result;
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

  private register_updateSavedModel_handler() {
    this.subscriptionReceiveUpdatedShipment = this.shipmentService.shipmentModelReceivedHandler$.subscribe(
      shipment => {
        if (shipment != null) {
          const modelToUpdate = this.componentModel.filter(
            item => item.shipment.id === shipment.id
          )[0];
          if (modelToUpdate) {
            //modelToUpdate.shipment = shipment;
            this.helperService.scrollOnTop();
          }
          this.shipmentService.resetSendShipmentModelHandler();
        }
      },
      error => {
        this.errorHandler.handleError(error);
      }
    );
  }
  /**
   * Show row available actions on click
   * */
  onClickShowActions(shipmentRow: ShipmentRowViewModel, index: number) {
    for (let i = 0; i < this.componentModel.length; i++) {
      if (i !== index) this.componentModel[i].viewActions = false;
      this.componentModel[i].viewEdit = false;
    }
    shipmentRow.viewActions = !shipmentRow.viewActions;
    if (shipmentRow.viewActions) {
      shipmentRow.viewEdit = false;
      this.router.navigate(["/shipment-overview"]);
    }

    setTimeout(function() {
      // $('#actionsRowContent').slideToggle('slow');
    }, 500);
  }

  /**
   * Show edit
   * */
  onClickEditShipment(shipmentRow: ShipmentRowViewModel) {
    this.notificationService.showLoading();

    shipmentRow.viewActions = false;

    this.router.navigate(["./shipment-edit/" + shipmentRow.shipment.id], {
      relativeTo: this.route
    });

    shipmentRow.viewEdit = !shipmentRow.viewEdit;
  }

  /**
 * assignToOpenMarket
 * */
  assignToOpenMarket(shipmentId: number) {
    const self = this;
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, move it to open market!"
    })
      // delete confirmed
      .then(
        function() {
          self.shipmentService
            .assignToOpenMarket(
              shipmentId,
              self.currentUser.customerId,
              self.translateService.currentLanguage
            )
            .subscribe(
              moved => {
                if (moved) {
                  self.componentModel = self.componentModel.filter(
                    item => item.shipment.id !== shipmentId
                  );

                  const currentFilter = self.shipmentFilters.find(
                    item =>
                      item.statusType === self.selectedShipmentFilter.statusType
                  );
                  if (currentFilter) {
                    currentFilter.amount = currentFilter.amount - 1;
                  }

                  const openMarketFilter = self.shipmentFilters.find(
                    item =>
                      item.statusType === ShipmentTransporterStatus.openMarket
                  );
                  if (openMarketFilter) {
                    openMarketFilter.amount = openMarketFilter.amount + 1;
                    openMarketFilter.lastDateTime = new Date();
                  }

                  swal(
                    "Moved!",
                    "Your shipment has been moved to open market.",
                    "success"
                  );
                  // update model
                  self.componentModel = self.componentModel.filter(
                    item => item.shipment.id !== shipmentId
                  );
                } else {
                  swal(
                    "Not moved!",
                    "An error occured. Your shipment has not been moved to open market.  Please contact an administrator.",
                    "error"
                  );
                }
              },
              error => {
                swal(
                  "Not moved!",
                  "An error occured. Your shipment has not been moved to open market.  Please contact an administrator.",
                  "error"
                );
                self.errorHandler.handleError(error);
              }
            );
        },
        function(dismiss) {
          if (dismiss === "cancel") {
            swal("Cancelled", "Your shipment is safe", "error");
          }
        }
      );
  }

  /**
 * moveToUnassigned
 * */
  moveToUnassigned(shipmentId: number) {
    const self = this;
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, move it to unassigned!"
    })
      // move confirmed
      .then(
        function() {
          self.shipmentService
            .moveToUnassigned(
              shipmentId,
              self.currentUser.customerId,
              self.translateService.currentLanguage
            )
            .subscribe(
              moved => {
                if (moved) {
                  debugger;
                  self.componentModel = self.componentModel.filter(
                    item => item.shipment.id !== shipmentId
                  );

                  const currentFilter = self.shipmentFilters.find(
                    item =>
                      item.statusType === self.selectedShipmentFilter.statusType
                  );
                  if (currentFilter) {
                    currentFilter.amount = currentFilter.amount - 1;
                  }

                  const unassignedFilter = self.shipmentFilters.find(
                    item =>
                      item.statusType === ShipmentTransporterStatus.unassigned
                  );
                  if (unassignedFilter) {
                    unassignedFilter.amount = unassignedFilter.amount + 1;
                    unassignedFilter.lastDateTime = new Date();
                  }

                  swal(
                    "Moved!",
                    "Your shipment has been moved to unassigned.",
                    "success"
                  );
                  // update model
                  self.componentModel = self.componentModel.filter(
                    item => item.shipment.id !== shipmentId
                  );
                } else {
                  swal(
                    "Not moved!",
                    "An error occured. Your shipment has not been moved to unassigned. Please contact an administrator.",
                    "error"
                  );
                }
              },
              error => {
                swal(
                  "Not moved!",
                  "An error occured. Your shipment has not been moved to unassigned. Please contact an administrator.",
                  "error"
                );
                self.errorHandler.handleError(error);
              }
            );
        },
        function(dismiss) {
          if (dismiss === "cancel") {
            swal("Cancelled", "Your shipment is safe", "error");
          }
        }
      );
  }

  /** Show edit address */
  onClickDeleteShipment(shipmentId: number) {
    const self = this;
    swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      // delete confirmed
      .then(
        function() {
          self.shipmentService
            .delete(
              shipmentId,
              self.currentUser.customerId,
              this.translateService.currentLanguage
            )
            .subscribe(
              result => {
                if (result) {
                  swal(
                    "Deleted!",
                    "Your shipment has been deleted.",
                    "success"
                  );
                  // update model
                  self.componentModel = self.componentModel.filter(
                    item => item.shipment.id !== shipmentId
                  );
                } else {
                  swal(
                    "Not Deleted!",
                    "An error occured. Your shipment has not been deleted.  Please contact an administrator.",
                    "error"
                  );
                }
              },
              error => {
                swal(
                  "Not Deleted!",
                  "An error occured. Your shipment has not been deleted.  Please contact an administrator.",
                  "error"
                );
                self.errorHandler.handleError(error);
              }
            );
        },
        // delete canceled
        function(dismiss) {
          // dismiss can be 'cancel', 'overlay',
          // 'close', and 'timer'
          if (dismiss === "cancel") {
            swal("Cancelled", "Your shipment is safe", "error");
          }
        }
      );
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

  ngAfterViewInit() {
    const breakCards = true;
    if (breakCards === true) {
      // We break the cards headers if there is too much stress on them :-)
      $('[data-header-animation="true"]').each(function() {
        const $fix_button = $(this);
        const $card = $(this).parent(".card");
        $card.find(".fix-broken-card").click(function() {
          console.log(this);
          const $header = $(this)
            .parent()
            .parent()
            .siblings(".card-header, .card-image");
          $header.removeClass("hinge").addClass("fadeInDown");

          $card.attr("data-count", 0);

          setTimeout(function() {
            $header.removeClass("fadeInDown animate");
          }, 480);
        });

        $card.mouseenter(function() {
          const $this = $(this);
          const hover_count = parseInt($this.attr("data-count"), 10) + 1 || 0;
          $this.attr("data-count", hover_count);
          if (hover_count >= 20) {
            $(this)
              .children(".card-header, .card-image")
              .addClass("hinge animated");
          }
        });
      });
    }
    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();
  }

  getFilterColor(status: ShipmentTransporterStatus): string {
    switch (status) {
      case ShipmentTransporterStatus.unassigned:
        return "red";
      case ShipmentTransporterStatus.openMarket:
        return "blue";
      case ShipmentTransporterStatus.assigned:
        return "orange";
      case ShipmentTransporterStatus.completed:
        return "green";
      default:
        return "";
    }
  }

  getFilterIcon(status: ShipmentTransporterStatus): string {
    switch (status) {
      case ShipmentTransporterStatus.unassigned:
        return "assignment";
      case ShipmentTransporterStatus.openMarket:
        return "shopping_cart";
      case ShipmentTransporterStatus.assigned:
        return "done";
      case ShipmentTransporterStatus.completed:
        return "done_all";
      default:
        return "";
    }
  }

  setActionsVisibility() {
    const status = this.selectedShipmentFilter.statusType;
    switch (status) {
      case ShipmentTransporterStatus.unassigned: {
        this.selectedShipmentFilter.deleteActionVisible = true;
        this.selectedShipmentFilter.editActionVisible = true;
        this.selectedShipmentFilter.moveToOpenMarketActionVisible = true;
        this.selectedShipmentFilter.moveToUnassingedActionVisible = false;
        this.selectedShipmentFilter.assignTransporterActionVisible = true;
        break;
      }
      case ShipmentTransporterStatus.openMarket: {
        this.selectedShipmentFilter.deleteActionVisible = true;
        this.selectedShipmentFilter.editActionVisible = true;
        this.selectedShipmentFilter.moveToOpenMarketActionVisible = false;
        this.selectedShipmentFilter.moveToUnassingedActionVisible = true;
        this.selectedShipmentFilter.assignTransporterActionVisible = true;
        break;
      }
      case ShipmentTransporterStatus.assigned: {
        this.selectedShipmentFilter.deleteActionVisible = true;
        this.selectedShipmentFilter.editActionVisible = true;
        this.selectedShipmentFilter.moveToOpenMarketActionVisible = false;
        if (this.selectedShipmentFilter.inPending) {
          this.selectedShipmentFilter.moveToUnassingedActionVisible = true;
          this.selectedShipmentFilter.assignTransporterActionVisible = true;
        } else {
          this.selectedShipmentFilter.moveToUnassingedActionVisible = false;
          this.selectedShipmentFilter.assignTransporterActionVisible = false;
        }
        break;
      }
      case ShipmentTransporterStatus.completed: {
        this.selectedShipmentFilter.deleteActionVisible = true;
        this.selectedShipmentFilter.editActionVisible = true;
        this.selectedShipmentFilter.moveToOpenMarketActionVisible = false;
        this.selectedShipmentFilter.moveToUnassingedActionVisible = false;
        this.selectedShipmentFilter.assignTransporterActionVisible = false;
        break;
      }
      default: {
        this.selectedShipmentFilter.deleteActionVisible = true;
        this.selectedShipmentFilter.editActionVisible = true;
        this.selectedShipmentFilter.moveToOpenMarketActionVisible = false;
        this.selectedShipmentFilter.moveToUnassingedActionVisible = false;
        this.selectedShipmentFilter.assignTransporterActionVisible = false;
        break;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptionReceiveUpdatedShipment) {
      this.subscriptionReceiveUpdatedShipment.unsubscribe();
    }
  }
}
