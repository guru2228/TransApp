webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/address/address.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_md_md_module__ = __webpack_require__("../../../../../src/app/shared/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_address_components_address_overview_component__ = __webpack_require__("../../../../../src/app/address/components/address-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_address_components_address_save_component__ = __webpack_require__("../../../../../src/app/address/components/address-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_address_services_address_service__ = __webpack_require__("../../../../../src/app/address/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_common_common_app_module__ = __webpack_require__("../../../../../src/app/shared/common/common-app.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AddressModule = /** @class */ (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6_app_shared_md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({ libraries: ["places"],
                    apiKey: 'AIzaSyChUim14iXhf6riJ73R3qxNxnMls2SGZDA'
                }),
                __WEBPACK_IMPORTED_MODULE_10_app_shared_common_common_app_module__["a" /* CommonAppModule */]
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8_app_address_components_address_save_component__["a" /* AddressSaveComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_address_components_address_overview_component__["a" /* AddressOverviewComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9_app_address_services_address_service__["a" /* AddressService */]
            ]
        })
    ], AddressModule);
    return AddressModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address.module.js.map

/***/ }),

/***/ "../../../../../src/app/address/components/address-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div #maincontent class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10\">\r\n                <div class=\"form-group label-floating is-empty\">\r\n                    <label class=\"control-label\"></label>\r\n                    <input type=\"text\" class=\"form-control\" [formControl]=\"searchTerm\" placeholder=\"Search address\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-info\" [routerLink]=\"['/address-add']\">(+) Create a new address</button>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <!-- <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                        <i class=\"material-icons\">assignment</i>\r\n                    </div> -->\r\n                    <div *ngIf=\"componentModel && componentModel.length > 0\" class=\"card-content table-full-width\">\r\n                        <!--<h4 class=\"card-title\">Regular Table with Colors</h4>-->\r\n                        <div class=\"table-responsive\" id=\"addresseGrid\" *ngIf=\"componentModel && componentModel.length > 0\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Name</th>\r\n                                        <th>Street, Number, Zipcode, City</th>\r\n                                        <th>Country code</th>\r\n                                        <th>Contact person</th>\r\n                                        <th>Phone</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <ng-container *ngFor=\"let addressRow of componentModel; let rowindex = index\">\r\n                                        <tr (click)=\"onClickShowActions(addressRow, rowindex)\" [ngClass]=\"(addressRow.viewActions ||addressRow.viewEdit   ? 'danger' : (rowindex%2==0?'info':''))\">\r\n                                            <td>{{addressRow.address.name}}</td>\r\n                                            <td>{{addressRow.address.location.street + ', ' + addressRow.address.location.streetNumber + ', ' + addressRow.address.location.zipCode + ', ' + addressRow.address.location.city}}</td>\r\n                                            <td>{{addressRow.address.location.countryCode}}</td>\r\n                                            <td>{{addressRow.address.contactPerson}}</td>\r\n                                            <td>{{addressRow.address.phone}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr id=\"actionsRow\" *ngIf=\"addressRow.viewActions\">\r\n                                            <td id=\"actionsRowContent\" colspan=\"4\" align=\"center\">\r\n                                                <button class=\"btn btn-warning\" (click)=\"onClickEditAddress(addressRow)\">\r\n                                                            <span class=\"btn-label\">\r\n                                                                <i class=\"material-icons\">border_color</i>\r\n                                                            </span>\r\n                                                            Edit address\r\n                                                        </button>\r\n                                                <button class=\"btn btn-danger\" (click)=\"onClickDeleteAddress(addressRow.address.id)\">\r\n                                                            Delete address\r\n                                                            <span class=\"btn-label btn-label-right\">\r\n                                                                <i class=\"material-icons\">delete_forever</i>\r\n                                                            </span>\r\n                                                        </button>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr id=\"editAddressRow\" *ngIf=\"addressRow.viewEdit\">\r\n                                            <td colspan=\"4\">\r\n                                                <router-outlet></router-outlet>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </ng-container>\r\n                                </tbody>\r\n                            </table>\r\n\r\n                        </div>\r\n                        <ul *ngIf=\"pagesCollection && pagesCollection.length > 0\" class=\"pagination pagination-info\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate((currentPage -1 < 0 ? 0 : currentPage -1))\"> prev</a>\r\n                            </li>\r\n                            <li *ngFor=\"let page of pagesCollection;  let idx = index\" [ngClass]=\"currentPage == page ? 'active' : ''\">\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate(page)\"> {{page + 1}}</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate((currentPage +1 > pagesCollection.length -1 ? pagesCollection.length -1 : currentPage +1))\"> next</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <h4 *ngIf=\"componentModel && componentModel.length <= 0\">\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;There are no addresses. You can create a new one by clicking on 'Create new address' button\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/address/components/address-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_address_models_address_row_viewmodel__ = __webpack_require__("../../../../../src/app/address/models/address-row-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_address_services_address_service__ = __webpack_require__("../../../../../src/app/address/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_common_services_localization_translate_service__ = __webpack_require__("../../../../../src/app/shared/common/services/localization/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_helperService__ = __webpack_require__("../../../../../src/app/shared/common/services/helperService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_common_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/common/services/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var moment = __webpack_require__("../../../../moment/moment.js");
var AddressOverviewComponent = /** @class */ (function () {
    function AddressOverviewComponent(router, route, addressService, helperService, notificationService, errorHandler, authenticationService, translateService) {
        this.router = router;
        this.route = route;
        this.addressService = addressService;
        this.helperService = helperService;
        this.notificationService = notificationService;
        this.errorHandler = errorHandler;
        this.authenticationService = authenticationService;
        this.translateService = translateService;
        // search term
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormControl */]();
        this.currentAddressId = -1;
        this.currentPage = 0;
        this.pageSize = 20;
    }
    /**
     * Initialize data
     */
    AddressOverviewComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authenticationService.getCurrentUser();
        this.getNumberOfAddresses("", false);
        this.getAddresses();
        this.register_updateSavedModel_handler();
    };
    AddressOverviewComponent.prototype.ngAfterViewInit = function () {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    };
    AddressOverviewComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionReceiveUpdatedAddress) {
            this.subscriptionReceiveUpdatedAddress.unsubscribe();
        }
    };
    /**
     * Move to next/previous page
     * @param page
     */
    AddressOverviewComponent.prototype.paginate = function (page) {
        this.currentPage = page;
        this.getAddresses();
        this.helperService.scrollOnTop();
    };
    /**
     * Get addresses
     */
    AddressOverviewComponent.prototype.getAddresses = function () {
        var _this = this;
        var searchquery = "";
        this.route.queryParams.subscribe(function (params) {
            searchquery = params["searchquery"]
                ? params["searchquery"].toString()
                : "";
        });
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormControl */](searchquery);
        this.initSearchAddresses();
        if (this.currentUser && this.currentUser.customerId) {
            this.addressService
                .getAll(this.currentUser.customerId, searchquery, this.pageSize * this.currentPage + 1, this.pageSize, this.translateService.currentLanguage)
                .subscribe(function (result) {
                _this.componentModel = [];
                if (result && result.length > 0) {
                    if (_this.route.firstChild) {
                        _this.currentAddressId = +_this.route.firstChild.snapshot.params["id"];
                    }
                    for (var i = 0; i < result.length; i++) {
                        var addressRow = new __WEBPACK_IMPORTED_MODULE_2_app_address_models_address_row_viewmodel__["a" /* AddressRowViewModel */]();
                        addressRow.address = result[i];
                        // if url contains edit then open it by default
                        addressRow.viewActions = result[i].id === _this.currentAddressId;
                        _this.componentModel.push(addressRow);
                    }
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    /**
     * Get addresses count for current filters
     */
    AddressOverviewComponent.prototype.getNumberOfAddresses = function (searchQueryParam, ignoreQueryString) {
        var _this = this;
        this.pagesCollection = null;
        if (searchQueryParam.length <= 0 && !ignoreQueryString) {
            this.route.queryParams.subscribe(function (params) {
                searchQueryParam = params["searchquery"]
                    ? params["searchquery"].toString()
                    : "";
            });
        }
        if (this.currentUser && this.currentUser.customerId) {
            this.addressService
                .getCount(this.currentUser.customerId, searchQueryParam, this.translateService.currentLanguage)
                .subscribe(function (result) {
                _this.pagesCollection = [];
                var numberOfPages = Math.ceil(result / _this.pageSize);
                numberOfPages = numberOfPages < 0 ? 1 : numberOfPages;
                var self = _this;
                setTimeout(function () {
                    for (var i = 0; i < numberOfPages; i++) {
                        self.pagesCollection.push(i);
                    }
                }, 100);
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    AddressOverviewComponent.prototype.searchAddresses = function (searchTerm) {
        var _this = this;
        if (this.currentUser && this.currentUser.customerId) {
            this.currentPage = 0;
            this.addressService
                .getAll(this.currentUser.customerId, searchTerm, this.pageSize * this.currentPage + 1, this.pageSize, this.translateService.currentLanguage)
                .subscribe(function (result) {
                _this.componentModel = [];
                if (result && result.length > 0) {
                    for (var i = 0; i < result.length; i++) {
                        var addressRow = new __WEBPACK_IMPORTED_MODULE_2_app_address_models_address_row_viewmodel__["a" /* AddressRowViewModel */]();
                        addressRow.address = result[i];
                        // if url contains edit then open it by default
                        _this.componentModel.push(addressRow);
                    }
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    AddressOverviewComponent.prototype.initSearchAddresses = function () {
        var _this = this;
        this.searchTerm.valueChanges.debounceTime(600).subscribe(function (term) {
            _this.router.navigate(["/address-overview"], {
                relativeTo: _this.route,
                queryParams: {
                    searchquery: term ? term : ""
                }
            });
            var searchTerm = term && term.length > 0 ? term : "";
            _this.getNumberOfAddresses(term, true);
            _this.searchAddresses(searchTerm);
        });
    };
    AddressOverviewComponent.prototype.register_updateSavedModel_handler = function () {
        var _this = this;
        this.subscriptionReceiveUpdatedAddress = this.addressService.addressModelReceivedHandler$.subscribe(function (address) {
            if (address != null) {
                var modelToUpdate = _this.componentModel.filter(function (item) { return item.address.id === address.id; })[0];
                if (modelToUpdate) {
                    modelToUpdate.address = address;
                    _this.helperService.scrollOnTop();
                }
                _this.addressService.resetSendAddressModelHandler();
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
        });
    };
    /** Show row available actions on click */
    AddressOverviewComponent.prototype.onClickShowActions = function (addressRow, index) {
        for (var i = 0; i < this.componentModel.length; i++) {
            if (i !== index)
                this.componentModel[i].viewActions = false;
            this.componentModel[i].viewEdit = false;
        }
        addressRow.viewActions = !addressRow.viewActions;
        if (addressRow.viewActions) {
            addressRow.viewEdit = false;
            this.router.navigate(["/address-overview"]);
        }
        setTimeout(function () {
            // $('#actionsRowContent').slideToggle('slow');
        }, 500);
    };
    /** Show edit address */
    AddressOverviewComponent.prototype.onClickEditAddress = function (addressRow) {
        this.notificationService.showLoading();
        addressRow.viewActions = false;
        this.router.navigate(["./address-edit/" + addressRow.address.id], {
            relativeTo: this.route
        });
        addressRow.viewEdit = !addressRow.viewEdit;
    };
    /** Show edit address */
    AddressOverviewComponent.prototype.onClickDeleteAddress = function (addressId) {
        var self = this;
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(function () {
            self.addressService
                .delete(addressId, this.current.customerId, this.translateService.currentLanguage)
                .subscribe(function (result) {
                if (result) {
                    swal("Deleted!", "Your file has been deleted.", "success");
                    // update model
                    self.componentModel = self.componentModel.filter(function (item) { return item.address.id !== addressId; });
                }
                else {
                    swal("Not Deleted!", "An error occured. Your file has not been deleted.  Please contact an administrator.", "error");
                }
            }, function (error) {
                swal("Not Deleted!", "An error occured. Your file has not been deleted.  Please contact an administrator.", "error");
                self.errorHandler.handleError(error);
            });
        }, 
        // delete canceled
        function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === "cancel") {
                swal("Cancelled", "Your address is safe :)", "error");
            }
        });
    };
    AddressOverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: "app-address-overview",
            template: __webpack_require__("../../../../../src/app/address/components/address-overview.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_address_services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_address_services_address_service__["a" /* AddressService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_helperService__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_helperService__["a" /* HelperService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9_app_shared_common_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_shared_common_services_notification_service__["a" /* NotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_common_services_localization_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_common_services_localization_translate_service__["a" /* TranslateService */]) === "function" && _h || Object])
    ], AddressOverviewComponent);
    return AddressOverviewComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/address/components/address-save.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- style=\"margin-top:0px!important\" -->\r\n<div class=\"main-content\" *ngIf=\"componentModel\" [style.margin-top]=\"componentState > 0 ? '0px':'inherit;'\">\r\n    <div class=\"container-fluid\">\r\n        <form #formAddress=\"ngForm\" novalidate class=\"form-horizontal\" novalidate (ngSubmit)=\"save(formAddress.value, formAddress.valid)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-content\">\r\n                            <form id=\"searchForm\" #searchForm=\"ngForm\" [hidden]=\"componentState !== 0\">\r\n                                <div [ngClass]=\"'form-group label-floating ' + ((!searchControl || !searchControl.valid ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                    <label for=\"\" class=\"control-label\">\r\n                                            Search by address\r\n                                            <span class=\"star\">*</span>\r\n                                        </label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"searchControl\" name=\"searchControl\" type=\"text\" #searchElement [formControl]=\"searchControl\" placeholder=\"\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\">\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((componentModel.name  && componentModel.name.length > 0) ? '' : 'is-empty') + (!componentModel.name  && formAddress.submitted ? ' has-error' : '') \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Name\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" required class=\"form-control\" id=\"addressName\" name=\"addressName\" [(ngModel)]=\"componentModel.name\">\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'\">\r\n                                                <label for=\"\" class=\"\">Street <span class=\"star\">*</span></label>\r\n                                                <input type=\"text\" id=\"street\" name=\"street\" [ngClass]=\"'form-control nofocusline'\" disabled=\"\" [(ngModel)]=\"componentModel.location.street\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'\">\r\n                                                <label for=\"\" class=\"\">Number<span class=\"star\">*</span></label>\r\n                                                <input type=\"text\" id=\"streetNumber\" name=\"streetNumber\" [ngClass]=\"'form-control nofocusline'\" disabled=\"\" [(ngModel)]=\"componentModel.location.streetNumber\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-3\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'  + ((!componentModel.location || !componentModel.location.zipCode ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                                <label for=\"\" class=\"\">\r\n                                                        Zipcode\r\n                                                        <span class=\"star\">*</span>\r\n                                                    </label>\r\n                                                <input type=\"text\" id=\"zipcode\" name=\"zipCode\" [ngClass]=\"'form-control '  + ((!componentModel.location || !componentModel.location.zipCode ) && formAddress.submitted ? ' ' : 'nofocusline') \" disabled=\"\" [(ngModel)]=\"componentModel.location.zipCode\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'  + ((!componentModel.location || !componentModel.location.city ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                                <label for=\"\" class=\"\">City         <span class=\"star\">*</span></label>\r\n                                                <input type=\"text\" id=\"city\" name=\"city\" [ngClass]=\"'form-control '  + ((!componentModel.location || !componentModel.location.city ) && formAddress.submitted ? ' ' : 'nofocusline')\" disabled=\"\" [(ngModel)]=\"componentModel.location.city\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'  + ((!componentModel.location || !componentModel.location.country ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                                <label for=\"\" class=\"\">Country         <span class=\"star\">*</span></label>\r\n                                                <input type=\"text\" id=\"country\" name=\"country\" [ngClass]=\"'form-control '  + ((!componentModel.location || !componentModel.location.country ) && formAddress.submitted ? ' ' : 'nofocusline')\" disabled=\"\" [(ngModel)]=\"componentModel.location.country\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + (componentModel.contactPerson  && componentModel.contactPerson.length > 0 ? '' : 'is-empty ' + ((!componentModel.contactPerson ) && formAddress.submitted ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label \">\r\n                                        Contactperson\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.contactPerson\" id=\"contactperson\" name=\"contactPerson\">\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + (componentModel.email  && componentModel.email.length > 0 ? '' : 'is-empty ' + ((componentModel.email && !emailValidator(componentModel.email)) && formAddress.submitted ? ' has-error' : '')) \">\r\n                                <label class=\"control-label\">\r\n                                        Email address\r\n                                    </label>\r\n                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"componentModel.email\" id=\"email\" name=\"addressEmail\">\r\n\r\n                                <small *ngIf=\"(componentModel.email && !emailValidator(componentModel.email)) && formAddress.submitted\" class=\"text-danger\">\r\n                                        Email is required and format should be <i>john@doe.com</i>.\r\n                                    </small>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"'form-group label-floating ' + (componentModel.phone  && componentModel.phone.length > 0 ? '' : 'is-empty' + (((!componentModel.phone) && formAddress.submitted ) ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Phone\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.phone\" id=\"phone\" name=\"phone\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Remarks\r\n                                    </label>\r\n                                <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"componentModel.remark\" id=\"remark\" name=\"openremarkNow\"></textarea>\r\n                            </div>\r\n\r\n                            <!-- Opening hours -->\r\n                            <h3>Opening hours</h3>\r\n                            <div class=\"form-group label-floating\">\r\n                                <div class=\"togglebutton\">\r\n                                    <label>\r\n                                            <input type=\"checkbox\" (click)=\"onCommonAvailabilityClick()\" [(ngModel)]=\"componentModel.commonAvailability\" name=\"commonAvailability\"> Set the same interval for all week days\r\n                                        </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\" *ngFor=\"let availability of componentModel.availabilities\">\r\n                                <span>\r\n                                        {{getDay(availability.day)}}\r\n                                    </span>\r\n                                <address-availability-slider [sliderid]=\"'slider_address'\" [availability]=\"availability\"></address-availability-slider>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!--  ***************** Right side *************** -->\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-content\">\r\n                            <!-- Map -->\r\n                            <h4 class=\"card-title\">Map</h4>\r\n                            <div id=\"regularMap\" class=\"map\">\r\n                            </div>\r\n\r\n                            <!-- Facilities -->\r\n                            <h3>Facilities</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let facility of componentModel.facilities\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">{{facility.iconName}}</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"facility.active\" [checked]=\"facility.active\" name=\"facilityactive_{{facility.facilityId}}\"> {{facility.description}}\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Truck -->\r\n                            <h3>Truck</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let truck of componentModel.trucks\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">{{truck.iconName}}</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"truck.active\" [checked]=\"truck.active==true\" name=\"truckactive_{{truck.truckId}}\"> {{truck.description}}\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Transport requirments -->\r\n                            <h3>Transport requirements</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let requirement of componentModel.requirements\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">{{requirement.iconName}}</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"requirement.active\" [checked]=\"requirement.active\" name=\"requirementactive_{{requirement.requirementId}}\"> {{requirement.description}}\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-footer text-center\">\r\n                <button type=\"submit\" class=\"btn btn-rose btn-fill\">Save</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/address/components/address-save.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_address_models_address_model__ = __webpack_require__("../../../../../src/app/address/models/address-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_common_services_helperService__ = __webpack_require__("../../../../../src/app/shared/common/services/helperService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_address_services_address_service__ = __webpack_require__("../../../../../src/app/address/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_localization_translate_service__ = __webpack_require__("../../../../../src/app/shared/common/services/localization/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_address_models_address_location_model__ = __webpack_require__("../../../../../src/app/address/models/address-location-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_parameters_data_service__ = __webpack_require__("../../../../../src/app/shared/common/services/parameters-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_shared_common_helper_component_state_type__ = __webpack_require__("../../../../../src/app/shared/common/helper/component-state-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_shared_common_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/common/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_shared_common_models_entity_availability_entity_model__ = __webpack_require__("../../../../../src/app/shared/common/models/entity/availability-entity-model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressSaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AddressSaveComponent = /** @class */ (function () {
    function AddressSaveComponent(router, route, mapsAPILoader, ngZone, authenticationService, helperService, addressService, parametersDataService, translateService, errorHandler, notificationService) {
        this.router = router;
        this.route = route;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.authenticationService = authenticationService;
        this.helperService = helperService;
        this.addressService = addressService;
        this.parametersDataService = parametersDataService;
        this.translateService = translateService;
        this.errorHandler = errorHandler;
        this.notificationService = notificationService;
        /**
         * used to set map zoom mode
         *  1: World
            5: Landmass/continent
            10: City
            15: Streets
            20: Buildings
         *
        */
        this.zoomLevel = 15;
    }
    AddressSaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authenticationService.getCurrentUser();
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        // get component state
        this.componentState = this.helperService.getComponentStateByUrl(this.router.url);
        // load required data
        this.loadComponentModel(this.componentState).subscribe(function (modelLoaded) {
            if (modelLoaded) {
                _this.loadParamsData().subscribe(function (paramsDataLoaded) {
                    if (paramsDataLoaded) {
                        _this.register_googleMapsPlaceSearchHandler();
                    }
                });
            }
        });
    };
    AddressSaveComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        setTimeout(function () {
            self.setCursorToAddressSearch();
        }, 500);
    };
    AddressSaveComponent.prototype.save = function (model, isValid) {
        var _this = this;
        console.log(model, isValid);
        if (isValid && this.isModelValid()) {
            this.addressService.save(this.componentModel, this.translateService.currentLanguage).subscribe(function (result) {
                if (_this.componentState === __WEBPACK_IMPORTED_MODULE_13_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
                    _this.router.navigate(['/address-overview/address-edit/' + result]);
                    _this.notificationService.show('Address created.', 'success', 'center', 'top');
                }
                else {
                    //// send data to addreess coponent to be updated
                    _this.addressService.sendAddressModel(_this.componentModel);
                    _this.notificationService.show('Address saved. ', 'success', 'center', 'top');
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
        else {
            this.helperService.scrollOnTop();
            this.setCursorToAddressSearch();
        }
    };
    /**
  * When common availability state change
  */
    AddressSaveComponent.prototype.onCommonAvailabilityClick = function () {
        this.componentModel.commonAvailability = !this.componentModel.commonAvailability;
        this.generateAvailabilities();
    };
    /**
     * Load component model, or create a new one if component state is = Add
     * @param componentState
     */
    AddressSaveComponent.prototype.loadComponentModel = function (componentState) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            if (componentState === __WEBPACK_IMPORTED_MODULE_13_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
                _this.createEmptyModel();
                // set current position
                _this.createMap(50.89, 4.34);
                observer.next(true);
            }
            else {
                var addressId_1 = 0;
                _this.route.params.forEach(function (params) {
                    addressId_1 = params['id'];
                    _this.addressService.get(addressId_1, _this.currentUser.customerId, _this.translateService.currentLanguage).subscribe(function (result) {
                        _this.componentModel = result;
                        console.log(_this.componentModel);
                        var self = _this;
                        // settimeout used to let angular template engine to render map element (everything is displayed only when component model )
                        setTimeout(function () {
                            self.createMap(self.componentModel.location.latitude, self.componentModel.location.longitude);
                        }, 500);
                        observer.next(true);
                    }, function (error) {
                        _this.errorHandler.handleError(error);
                        observer.next(false);
                    });
                });
            }
        });
    };
    /**
     * Load required data used to render form
     */
    AddressSaveComponent.prototype.loadParamsData = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].create(function (observer) {
            // return new Promise((resolve, reject) => {
            _this.parametersDataService.getAddressRequirementsParameters(_this.translateService.currentLanguage)
                .subscribe(function (data) {
                _this.componentModel.facilities = _this.parametersDataService.generateFacilityEntitiesList(_this.componentModel.id, data['facilities'], _this.componentModel.facilities);
                _this.componentModel.requirements = _this.parametersDataService.generateRequirementsEntitiesList(_this.componentModel.id, data['requirements'], _this.componentModel.requirements);
                _this.componentModel.trucks = _this.parametersDataService.generateTruksEntitiesList(_this.componentModel.id, data['trucks'], _this.componentModel.trucks);
                observer.next(true);
            }, function (error) {
                _this.errorHandler.handleError(error);
                observer.next(false);
            });
        });
    };
    /**
     * Register google maps place handler.
     * When palce is changed, handler to update model is registered
     */
    AddressSaveComponent.prototype.register_googleMapsPlaceSearchHandler = function () {
        var _this = this;
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            // create map
            var addressesAutocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {});
            // init place change listener
            addressesAutocomplete.addListener('place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = addressesAutocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.updateLocationModel(place);
                    _this.updateOpeningHours(place);
                    _this.createMap(_this.componentModel.location.latitude, _this.componentModel.location.longitude);
                    if (_this.componentState === __WEBPACK_IMPORTED_MODULE_13_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add)
                        _this.searchElementRef.nativeElement.focus();
                });
            });
        });
    };
    /**
     *Get each component of the address from the place details
      and fill the corresponding field on the form.
     */
    AddressSaveComponent.prototype.updateLocationModel = function (place) {
        this.componentModel.location = new __WEBPACK_IMPORTED_MODULE_10_app_address_models_address_location_model__["a" /* AddressLocationModel */]();
        this.componentModel.phone = '';
        this.componentModel.name = '';
        this.componentModel.location.latitude = place.geometry.location.lat();
        this.componentModel.location.longitude = place.geometry.location.lng();
        for (var i = 0; i < place.address_components.length; i++) {
            var addressMember = place.address_components[i].types[0];
            switch (addressMember) {
                case 'country':
                    {
                        this.componentModel.location.countryCode = place.address_components[i]['short_name'];
                        this.componentModel.location.country = place.address_components[i]['long_name'];
                    }
                    break;
                case 'administrative_area_level_1':
                    {
                        this.componentModel.location.state = place.address_components[i]['short_name'];
                        this.componentModel.location.stateCode = place.address_components[i]['short_name'];
                    }
                    break;
                case 'locality':
                    {
                        this.componentModel.location.city = place.address_components[i]['short_name'];
                        this.componentModel.location.cityCode = place.address_components[i]['short_name'];
                    }
                    break;
                case 'route':
                    {
                        this.componentModel.location.street = place.address_components[i]['short_name'];
                    }
                    break;
                case 'street_number':
                    {
                        this.componentModel.location.streetNumber = place.address_components[i]['short_name'];
                    }
                    break;
                case 'postal_code':
                    {
                        this.componentModel.location.zipCode = place.address_components[i]['short_name'];
                    }
                    break;
            }
        }
        this.componentModel.name = '';
        if (place.name) {
            this.componentModel.name += place.name;
        }
        if (place.formatted_address) {
            if (this.componentModel.name.length > 0) {
                this.componentModel.name += ', ';
            }
            this.componentModel.name += place.formatted_address;
        }
        if (place.formatted_phone_number) {
            this.componentModel.location.phone = place.formatted_phone_number;
            this.componentModel.phone = place.formatted_phone_number;
        }
    };
    /**
    -	Openinghours
        o	If available, we copy the google opening hours
        o	If not, by default
            -	Monday – Friday 8h – 12h and 13h – 16h
            -	Saturday closed
            -	Sunday closed
  */
    AddressSaveComponent.prototype.updateOpeningHours = function (place) {
        this.componentModel.availabilities = [];
        // if is permanently closed then, send common availability = true and closed on day 0  = true
        if (place.permanently_closed) {
            this.componentModel.commonAvailability = true;
            var availability = new __WEBPACK_IMPORTED_MODULE_15_app_shared_common_models_entity_availability_entity_model__["a" /* AvailabilityEntityModel */]();
            availability.id = -1;
            availability.day = 0;
            availability.isClosed = true;
            this.componentModel.availabilities.push(availability);
        }
        else if (place.opening_hours) {
            var availabilitiesList = new Array();
            /**
             * periods[] is an array of opening periods covering seven days, starting from Sunday, in chronological order. Each period contains:
                -  open contains a pair of day and time objects describing when the place opens:
                     - day a number from 0–6, corresponding to the days of the week, starting on Sunday. For example, 2 means Tuesday.
                     - time may contain a time of day in 24-hour hhmm format. Values are in the range 0000–2359. The time will be reported in the place’s time zone.
                - close may contain a pair of day and time objects describing when the place closes. Note: If a place is always open, the close section will be missing from the response.
                 Clients can rely on always-open being represented as an open period containing day with value 0 and time with value 0000, and no close.
                     */
            // if is always open
            if (place.opening_hours.periods && place.opening_hours.periods.length === 1
                && place.opening_hours.periods[0].open && place.opening_hours.periods[0].open.day === 0 && place.opening_hours.periods[0].open.hours === 0
                && place.opening_hours.periods[0].open.minutes === 0 && !place.opening_hours.periods[0].close) {
                this.componentModel.commonAvailability = true;
                var availability = new __WEBPACK_IMPORTED_MODULE_15_app_shared_common_models_entity_availability_entity_model__["a" /* AvailabilityEntityModel */]();
                availability.id = -1;
                availability.day = 0;
                availability.amStart = '00:00';
                availability.amStop = '24:00';
                availability.pmStart = '24:00';
                availability.pmStop = '24:00';
                this.componentModel.availabilities.push(availability);
            }
            else {
                var _loop_1 = function (day) {
                    var googleDayIndex = day === 7 ? 0 : day;
                    var availability = new __WEBPACK_IMPORTED_MODULE_15_app_shared_common_models_entity_availability_entity_model__["a" /* AvailabilityEntityModel */]();
                    availability.id = -1;
                    availability.day = day;
                    var periods = place.opening_hours.periods.filter(function (item) { return item.open && item.open.day === googleDayIndex; });
                    if (periods && periods.length > 0) {
                        var periodStart = periods[0];
                        if (!periodStart.close) {
                            availability.amStart = '00:00';
                            availability.amStop = '24:00';
                        }
                        else {
                            availability.amStart = ('0' + periodStart.open.hours).slice(-2) + ':' + ('0' + periodStart.open.minutes).slice(-2);
                            availability.amStop = ('0' + (periodStart.close.hours === 0 ? 24 : periodStart.close.hours)).slice(-2) + ':' + ('0' + periodStart.close.minutes).slice(-2);
                        }
                        var periodEnd = periods.length > 1 ? periods[1] : null;
                        if (periodEnd) {
                            availability.pmStart = ('0' + periodEnd.open.hours).slice(-2) + ':' + ('0' + periodEnd.open.minutes).slice(-2);
                            availability.pmStop = ('0' + (periodEnd.close.hours === 0 ? 24 : periodEnd.close.hours)).slice(-2) + ':' + ('0' + periodEnd.close.minutes).slice(-2);
                        }
                        else {
                            availability.pmStart = null;
                            availability.pmStop = null;
                        }
                    }
                    else {
                        availability.isClosed = true;
                    }
                    availabilitiesList.push(availability);
                    this_1.componentModel.availabilities = availabilitiesList;
                };
                var this_1 = this;
                for (var day = 1; day <= 7; day++) {
                    _loop_1(day);
                }
            }
        }
        else {
            this.generateAvailabilities();
        }
    };
    /**
     * Create map based on address model
     */
    AddressSaveComponent.prototype.createMap = function (latitude, longitude) {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var myLatlng = new google.maps.LatLng(latitude, longitude);
            var mapOptions = {
                zoom: _this.zoomLevel,
                center: myLatlng,
                scrollwheel: false,
            };
            var map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                title: 'Map'
            });
            marker.setMap(map);
        });
    };
    /**
   * Create address initial model, on add
   */
    AddressSaveComponent.prototype.createEmptyModel = function () {
        this.componentModel = new __WEBPACK_IMPORTED_MODULE_5_app_address_models_address_model__["a" /* AddressModel */]();
        this.componentModel.id = -1;
        this.componentModel.commonAvailability = false;
        this.generateAvailabilities();
        this.componentModel.customerId = this.currentUser.customerId;
        this.componentModel.location = new __WEBPACK_IMPORTED_MODULE_10_app_address_models_address_location_model__["a" /* AddressLocationModel */]();
        this.componentModel.facilities = [];
        this.componentModel.requirements = [];
        this.componentModel.trucks = [];
    };
    AddressSaveComponent.prototype.isModelValid = function () {
        if (!this.componentModel.name)
            return false;
        if (!this.componentModel.location)
            return false;
        if (!this.componentModel.location.zipCode)
            return false;
        if (!this.componentModel.location.city)
            return false;
        if (!this.componentModel.location.country)
            return false;
        if (!this.componentModel.contactPerson)
            return false;
        if (!this.componentModel.phone)
            return false;
        if (this.componentModel.email && !this.emailValidator(this.componentModel.email))
            return false;
        return true;
    };
    AddressSaveComponent.prototype.generateAvailabilities = function () {
        var availabilitiesList = new Array();
        if (!this.componentModel.commonAvailability) {
            this.componentModel.availabilities = [];
            if (this.componentModel.availabilities.length < 7) {
                for (var day = 1; day <= 7; day++) {
                    var availability = new __WEBPACK_IMPORTED_MODULE_15_app_shared_common_models_entity_availability_entity_model__["a" /* AvailabilityEntityModel */]();
                    availability.id = -1;
                    availability.day = day;
                    if (day > 5) {
                        availability.isClosed = true;
                    }
                    availabilitiesList.push(availability);
                }
            }
        }
        else {
            var availability = new __WEBPACK_IMPORTED_MODULE_15_app_shared_common_models_entity_availability_entity_model__["a" /* AvailabilityEntityModel */]();
            availability.id = -1;
            availability.day = 0;
            availabilitiesList.push(availability);
        }
        this.componentModel.availabilities = availabilitiesList;
    };
    AddressSaveComponent.prototype.emailValidator = function (email) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(email)) {
            return false;
        }
        return true;
    };
    AddressSaveComponent.prototype.getDay = function (day) {
        var weekdays = [
            'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday',
            'Saturday', 'Sunday'
        ];
        if (day > 0) {
            return weekdays[day - 1];
        }
        else {
            return weekdays[0] + ' - ' + weekdays[6];
        }
    };
    AddressSaveComponent.prototype.setCursorToAddressSearch = function () {
        if (this.componentState === __WEBPACK_IMPORTED_MODULE_13_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
            var element = document.getElementById('searchControl');
            if (element) {
                element.focus();
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('searchElement'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */]) === "function" && _a || Object)
    ], AddressSaveComponent.prototype, "searchElementRef", void 0);
    AddressSaveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-address-save-component',
            template: __webpack_require__("../../../../../src/app/address/components/address-save.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_12_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_app_shared_common_services_helperService__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_shared_common_services_helperService__["a" /* HelperService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_app_address_services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_address_services_address_service__["a" /* AddressService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_parameters_data_service__["a" /* ParametersDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_parameters_data_service__["a" /* ParametersDataService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_localization_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_localization_translate_service__["a" /* TranslateService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_9_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_14_app_shared_common_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_app_shared_common_services_notification_service__["a" /* NotificationService */]) === "function" && _m || Object])
    ], AddressSaveComponent);
    return AddressSaveComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-save.component.js.map

/***/ }),

/***/ "../../../../../src/app/address/models/address-location-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressLocationModel; });
var AddressLocationModel = /** @class */ (function () {
    function AddressLocationModel() {
    }
    return AddressLocationModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-location-model.js.map

/***/ }),

/***/ "../../../../../src/app/address/models/address-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressModel; });
var AddressModel = /** @class */ (function () {
    function AddressModel() {
    }
    return AddressModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-model.js.map

/***/ }),

/***/ "../../../../../src/app/address/models/address-row-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressRowViewModel; });
var AddressRowViewModel = /** @class */ (function () {
    function AddressRowViewModel() {
    }
    return AddressRowViewModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-row-viewmodel.js.map

/***/ }),

/***/ "../../../../../src/app/address/services/address.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__ = __webpack_require__("../../../../../src/app/shared/common/services/httpService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_common_constants__ = __webpack_require__("../../../../../src/app/shared/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddressService = /** @class */ (function () {
    function AddressService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.serviceUrl = __WEBPACK_IMPORTED_MODULE_3_app_shared_common_constants__["a" /* Constants */].serverUrl + 'api/Addresses/';
        this.addressModel = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.addressModelReceivedHandler$ = this.addressModel.asObservable();
    }
    AddressService.prototype.sendAddressModel = function (value) {
        this.addressModel.next(value);
    };
    // don't forget to reset handler
    AddressService.prototype.resetSendAddressModelHandler = function () {
        this.addressModel.next(null);
    };
    /**
     * get biometrics
     * @param employeeEncryptedData
     * @param language
     */
    AddressService.prototype.get = function (id, customerId, language) {
        return this.http.get(this.serviceUrl +
            'get' +
            '/' + id +
            '/' + customerId +
            '/' + language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * Get all addresses
     * @param customerId
     * @param startItem
     * @param numberOfRetrievedItems
     * @param language
     */
    AddressService.prototype.getAll = function (customerId, searchTerm, startItem, numberOfRetrievedItems, language) {
        return this.http.get(this.serviceUrl +
            'getAll' +
            '/' + customerId +
            '/' + startItem +
            '/' + numberOfRetrievedItems +
            '/' + language +
            '?searchTerm=' + searchTerm)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
  * Get number of addresses, used for paging
  * @param customerId
  * @param startItem
  * @param numberOfRetrievedItems
  * @param language
  */
    AddressService.prototype.getCount = function (customerId, searchTerm, language) {
        return this.http.get(this.serviceUrl +
            'getCount' +
            '/' + customerId +
            '/' + language +
            '?searchTerm=' + searchTerm)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * Save address
     * @param medicalEncryptedData
     * @param componentName
     * @param language
     */
    AddressService.prototype.save = function (model, language) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        var data = JSON.stringify(model);
        return this.http.post(this.serviceUrl + 'save' + '/' + language, data, { headers: headers })
            .map(function (response) { return (response).json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
    * Delete address
    * @param medicalEncryptedData
    * @param componentName
    * @param language
    */
    AddressService.prototype.delete = function (addressId, customerId, language) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.delete(this.serviceUrl + 'delete/' + addressId + '/' + customerId + '/' + language)
            .map(function (response) { return (response).json(); });
    };
    AddressService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _b || Object])
    ], AddressService);
    return AddressService;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_layouts_admin_app_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/app-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_common_components_error_component__ = __webpack_require__("../../../../../src/app/shared/common/components/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_common_components_pageNotFound_component__ = __webpack_require__("../../../../../src/app/shared/common/components/pageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_authentication_components_login_component__ = __webpack_require__("../../../../../src/app/authentication/components/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_address_components_address_save_component__ = __webpack_require__("../../../../../src/app/address/components/address-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_address_components_address_overview_component__ = __webpack_require__("../../../../../src/app/address/components/address-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shipment_components_shipment_save_component__ = __webpack_require__("../../../../../src/app/shipment/components/shipment-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shipment_components_shipment_overview_component__ = __webpack_require__("../../../../../src/app/shipment/components/shipment-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_authentication_guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/authentication/guard/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3_app_layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [
            {
                path: '',
                children: [{
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_6_app_authentication_components_login_component__["a" /* LoginComponent */]
                    }]
            }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2_app_layouts_admin_app_layout_component__["a" /* AppLayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11_app_authentication_guard_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: 'shipment-add',
                component: __WEBPACK_IMPORTED_MODULE_9_app_shipment_components_shipment_save_component__["a" /* ShipmentSaveComponent */]
            },
            {
                path: 'shipment-edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_9_app_shipment_components_shipment_save_component__["a" /* ShipmentSaveComponent */]
            },
            {
                path: '',
                children: [{
                        path: 'shipment-overview',
                        component: __WEBPACK_IMPORTED_MODULE_10_app_shipment_components_shipment_overview_component__["a" /* ShipmentOverviewComponent */],
                        children: [{
                                path: 'shipment-edit/:id',
                                component: __WEBPACK_IMPORTED_MODULE_9_app_shipment_components_shipment_save_component__["a" /* ShipmentSaveComponent */]
                            }]
                    }]
            },
            {
                path: 'address-add',
                component: __WEBPACK_IMPORTED_MODULE_7_app_address_components_address_save_component__["a" /* AddressSaveComponent */]
            },
            {
                path: 'address-edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_7_app_address_components_address_save_component__["a" /* AddressSaveComponent */]
            },
            {
                path: '',
                children: [{
                        path: 'address-overview',
                        component: __WEBPACK_IMPORTED_MODULE_8_app_address_components_address_overview_component__["a" /* AddressOverviewComponent */],
                        children: [{
                                path: 'address-edit/:id',
                                component: __WEBPACK_IMPORTED_MODULE_7_app_address_components_address_save_component__["a" /* AddressSaveComponent */]
                            }]
                    }]
            },
        ]
    },
    {
        path: 'error',
        component: __WEBPACK_IMPORTED_MODULE_4_app_shared_common_components_error_component__["a" /* ErrorComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5_app_shared_common_components_pageNotFound_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n</router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(elRef) {
        this.elRef = elRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add("perfect-scrollbar-on");
        }
        else {
            body.classList.add("perfect-scrollbar-off");
        }
        $.material.init();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_layouts_admin_app_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/app-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_md_md_module__ = __webpack_require__("../../../../../src/app/shared/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_common_common_app_module__ = __webpack_require__("../../../../../src/app/shared/common/common-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_shared_sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_shipment_shipment_module__ = __webpack_require__("../../../../../src/app/shipment/shipment.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_address_address_module__ = __webpack_require__("../../../../../src/app/address/address.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import the Animations module












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_app_shared_md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_4_app_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11_app_authentication_authentication_module__["a" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_12_app_shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_13_app_shared_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_14_app_shared_sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_15_app_shipment_shipment_module__["a" /* ShipmentModule */],
                __WEBPACK_IMPORTED_MODULE_16_app_address_address_module__["a" /* AddressModule */],
                __WEBPACK_IMPORTED_MODULE_10_app_shared_common_common_app_module__["a" /* CommonAppModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_layouts_admin_app_layout_component__["a" /* AppLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8_app_layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_authentication_components_login_component__ = __webpack_require__("../../../../../src/app/authentication/components/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_authentication_components_register_component__ = __webpack_require__("../../../../../src/app/authentication/components/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_authentication_services_authentication_observer__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.observer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_authentication_guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/authentication/guard/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5_app_authentication_components_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_authentication_components_register_component__["a" /* RegisterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7_app_authentication_services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8_app_authentication_services_authentication_observer__["a" /* AuthenticationObserver */],
                __WEBPACK_IMPORTED_MODULE_9_app_authentication_guard_auth_guard_service__["a" /* AuthGuard */]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/components/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">Transapp</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li>\r\n                        <a href=\"/\">\r\n                            <i class=\"material-icons\">dashboard</i> Transapp\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/register\">\r\n                            <i class=\"material-icons\">person_add</i> Register\r\n                        </a>\r\n                    </li>\r\n                    <li class=\" active \">\r\n                        <a href=\"/login\">\r\n                            <i class=\"material-icons\">fingerprint</i> Login\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/lock\">\r\n                            <i class=\"material-icons\">lock_open</i> Lock\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"../../../assets/img/login.jpeg\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n                        <form id=\"LoginForm\" #loginForm=\"ngForm\">\r\n                            <div class=\"card card-login card-hidden\">\r\n                                <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                                    <h4 class=\"card-title\">Login</h4>\r\n                                    <div class=\"social-line\">\r\n                                        <!-- <a href=\"#btn\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-facebook-square\"></i>\r\n                                        </a>\r\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-twitter\"></i>\r\n                                        </a>\r\n                                        <a href=\"#eugen\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-google-plus\"></i>\r\n                                        </a> -->\r\n                                    </div>\r\n                                </div>\r\n                                <!--  <p class=\"category text-center\">\r\n                                    Or Be Classical\r\n                                </p>-->\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">email</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">Email address</label>\r\n                                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"applicationUser.login\" name=\"login\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">lock_outline</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">Password</label>\r\n                                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"applicationUser.password\" name=\"password\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"footer text-center\">\r\n                                    <button type=\"submit\" (click)=\"onLoginClick()\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Let's go</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav class=\"pull-left\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                Home\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                Company\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy; {{pageDate | date: 'yyyy'}}\r\n                    <a href=\"/\">Transapp</a>, transportation application\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/components/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_authentication_viewmodels_application_user__ = __webpack_require__("../../../../../src/app/authentication/viewmodels/application-user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.pageDate = new Date();
        this.applicationUser = new __WEBPACK_IMPORTED_MODULE_1_app_authentication_viewmodels_application_user__["a" /* ApplicationUser */]();
        this.errorMessage = '';
    }
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    /**
 * On login click
 * @returns {}
 */
    LoginComponent.prototype.onLoginClick = function () {
        var _this = this;
        this.errorMessage = '';
        this.authenticationService.login(this.applicationUser)
            .subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                //this.authenticationObserver.sendAuthenticationUpdates(true);
            }
            else {
                _this.errorMessage = '';
            }
        }, function (error) {
            _this.errorMessage = 'Invalid user or password';
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'login-cmp',
            template: __webpack_require__("../../../../../src/app/authentication/components/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/components/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal about-modal w3-agileits fade\" id=\"myModal3\" tabindex=\"-1\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n            </div>\r\n            <div class=\"modal-body login-page \">\r\n                <div class=\"login-top sign-top\">\r\n                    <div class=\"agileits-login\">\r\n                        <h5>Register</h5>\r\n                        <form action=\"#\" method=\"post\">\r\n                            <input type=\"text\" name=\"Username\" placeholder=\"Username\" required=\"\" />\r\n                            <input type=\"email\" name=\"Email\" placeholder=\"Email\" required=\"\" />\r\n                            <input type=\"password\" name=\"Password\" placeholder=\"Password\" required=\"\" />\r\n                            <div class=\"wthree-text\">\r\n                                <ul>\r\n                                    <li>\r\n                                        <label class=\"anim\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span> I accept the terms of use</span> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n                                    </li>\r\n                                </ul>\r\n                                <div class=\"clearfix\"> </div>\r\n                            </div>\r\n                            <div class=\"trans-submit\">\r\n                                <input type=\"submit\" value=\"Register\">\r\n                            </div>\r\n                        </form>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/components/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'register-component',
            template: __webpack_require__("../../../../../src/app/authentication/components/register.component.html")
        })
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/guard/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_localization_translate_service__ = __webpack_require__("../../../../../src/app/shared/common/services/localization/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Guard service, used to check, for each route if user is authenticated.
*/
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, translateService) {
        this.authService = authService;
        this.router = router;
        this.translateService = translateService;
    }
    /**
     * Check if user has permission over a route
     * @param route
     * @param state
     * @returns {}
     */
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        var hasAccess = this.isLoginValid(url);
        if (hasAccess) {
            this.loadApplicationTranslations();
        }
        return hasAccess;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    /**
     * Check if user is authenticated
     * @param url
     * @returns {}
     */
    AuthGuard.prototype.isLoginValid = function (url) {
        //// get logged in user
        var user = this.authService.getCurrentUser();
        //// get authentication date
        var expirationDate = this.authService.getTokenExpirationDate();
        if (user != null && (expirationDate == null || expirationDate.getTime() >= new Date().getTime())) {
            //// load application translations
            // this.translateService.currentLanguage = user.language.toLowerCase();
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.authService.logout();
        return false;
    };
    /**
     * Load application translations
     * @returns {}
     */
    AuthGuard.prototype.loadApplicationTranslations = function () {
        try {
            if (!this.translateService
                .applicationTranslations ||
                this.translateService.applicationTranslations.length <= 0) {
                //// set user language
                var currentUser = this.authService.getCurrentUser();
                //// get translation resources for this module, translations, can be re-used in all other submodules.
                /*      this.translateService.getApplicationTranslations(currentUser.language)
                          .subscribe(
                              translations => {
                                  this.translateService.applicationTranslations = translations;
                              },
                              () => {});*/
            }
        }
        catch (err) {
            console.log("Application translations not loaded");
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_localization_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_localization_translate_service__["a" /* TranslateService */]) === "function" && _c || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/services/authentication.observer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationObserver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthenticationObserver = /** @class */ (function () {
    function AuthenticationObserver() {
        // Observable flag source
        this.authenticationNotifier = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        // Observable flag stream
        this.authenticationUpdatesEmitter$ = this.authenticationNotifier.asObservable();
    }
    // service command
    AuthenticationObserver.prototype.sendAuthenticationUpdates = function (value) {
        this.authenticationNotifier.next(value);
    };
    AuthenticationObserver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])()
    ], AuthenticationObserver);
    return AuthenticationObserver;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/authentication.observer.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_observer__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.observer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_authentication_viewmodels_application_user__ = __webpack_require__("../../../../../src/app/authentication/viewmodels/application-user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_common_constants__ = __webpack_require__("../../../../../src/app/shared/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_httpService__ = __webpack_require__("../../../../../src/app/shared/common/services/httpService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_localization_translate_service__ = __webpack_require__("../../../../../src/app/shared/common/services/localization/translate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router, translateService, authenticationObserver) {
        this.http = http;
        this.router = router;
        this.translateService = translateService;
        this.authenticationObserver = authenticationObserver;
        this.getTokenUrl = __WEBPACK_IMPORTED_MODULE_6_app_shared_common_constants__["a" /* Constants */].serverUrl + 'api/connect/token';
        this.accountServiceUrl = '/api/Account/';
        this.redirectUrl = '';
        // set token if saved in local storage
        // let currentUser = JSON.parse(localStorage.getItem('id_token'));
        // this.token = currentUser && currentUser.token;
    }
    /**
     * login user
     * @param user
     * @returns {}
   */
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var data = this.toUrlEncodedString({ username: user.login, password: user.password });
        return this.http.post(this.getTokenUrl, data, { headers: headers }).map(function (response) {
            // let token = response.json() && response.json().access_token;
            var user = response.json() && response.json().user;
            var expiresIn = response.json() && response.json().expires_in;
            var access_token = response.json() && response.json().access_token;
            if (user) {
                // set token property
                // this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                //localStorage.setItem('id_token', token);
                localStorage.setItem('current_user', JSON.stringify(user));
                //localStorage.setItem('expires_in', expiresIn);
                localStorage.setItem('id_token', access_token),
                    // this.translateService.currentLanguage = user.Language.toLowerCase();
                    //this.authenticationObserver.sendAuthenticationUpdates(true);
                    _this.router.navigate(['/shipment-overview']);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    /**
     * Log out
     * clear translations
     * inform other components about authentication status
     * @returns {}
     */
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        //localStorage.removeItem('id_token');
        localStorage.removeItem('current_user');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('id_token');
        this.translateService.moduleTranslations = [];
        this.translateService.applicationTranslations = [];
        //this.translateService.anonymousTranslations = [];
        this.authenticationObserver.sendAuthenticationUpdates(false);
        this.router.navigate(['/login']);
    };
    /**The tokenNotExpired function can be used to check whether a JWT exists in local storage, and if it does,
     * whether it has expired or not. If the token is valid, tokenNotExpired returns true, otherwise it returns false.
    loggedIn() {
        return tokenNotExpired();
    }*/
    // get logged in user
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.getItem('current_user')) {
            var user = new __WEBPACK_IMPORTED_MODULE_5_app_authentication_viewmodels_application_user__["a" /* ApplicationUser */]();
            var userData = JSON.parse(localStorage.getItem('current_user'));
            user.id = userData.Id;
            user.login = userData.Login;
            user.firstName = userData.FirstName;
            user.name = userData.Name;
            user.customerId = userData.CustomerId;
            return user;
        }
        return null;
    };
    // get logged in user
    AuthenticationService.prototype.getTokenExpirationDate = function () {
        if (localStorage.getItem('expires_in')) {
            var dateStr = localStorage.getItem('expires_in');
            if (!isNaN(Date.parse(dateStr))) {
                var date = new Date(dateStr);
                return date;
            }
        }
        return null;
    };
    // Converts a Json object to urlencoded format
    AuthenticationService.prototype.toUrlEncodedString = function (data) {
        var body = "";
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (body.length) {
                    body += "&";
                }
                body += key + "=";
                body += encodeURIComponent(data[key]);
            }
        }
        return body;
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_httpService__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_localization_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_localization_translate_service__["a" /* TranslateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_observer__["a" /* AuthenticationObserver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_observer__["a" /* AuthenticationObserver */]) === "function" && _d || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/viewmodels/application-user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationUser; });
var ApplicationUser = /** @class */ (function () {
    function ApplicationUser() {
    }
    return ApplicationUser;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/application-user.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/app-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-active-color=\"white\" data-background-color=\"red\" data-image=\"assets/img/sidebar-1.jpg\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\" id=\"mainPanel\">\r\n        <app-navbar-cmp></app-navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <footer-cmp></footer-cmp>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/app-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_md_md_module__ = __webpack_require__("../../../../../src/app/shared/md/md.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent(router, location) {
        this.router = router;
        this.location = location;
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        this.navItems = [
            { type: __WEBPACK_IMPORTED_MODULE_5_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: __WEBPACK_IMPORTED_MODULE_5_app_shared_md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_5_app_shared_md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_5_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: __WEBPACK_IMPORTED_MODULE_5_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Account' },
            {
                type: __WEBPACK_IMPORTED_MODULE_5_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_5_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Log out' }
        ];
    };
    AppLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('sidebar'),
        __metadata("design:type", Object)
    ], AppLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
    ], AppLayoutComponent.prototype, "navbar", void 0);
    AppLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/admin/app-layout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* Location */]) === "function" && _c || Object])
    ], AppLayoutComponent);
    return AppLayoutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/app-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.html")
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/common-app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_common_components_error_component__ = __webpack_require__("../../../../../src/app/shared/common/components/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_common_components_pageNotFound_component__ = __webpack_require__("../../../../../src/app/shared/common/components/pageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_helperService__ = __webpack_require__("../../../../../src/app/shared/common/services/helperService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_httpService__ = __webpack_require__("../../../../../src/app/shared/common/services/httpService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_common_services_parameters_data_service__ = __webpack_require__("../../../../../src/app/shared/common/services/parameters-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_localization_translate_service__ = __webpack_require__("../../../../../src/app/shared/common/services/localization/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_shared_common_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/common/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_shared_common_components_address_availability_slider_component__ = __webpack_require__("../../../../../src/app/shared/common/components/address-availability-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_shared_common_services_pager_service__ = __webpack_require__("../../../../../src/app/shared/common/services/pager.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonAppModule; });
/* unused harmony export httpFactory */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CommonAppModule = /** @class */ (function () {
    function CommonAppModule() {
    }
    CommonAppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13_app_shared_common_components_address_availability_slider_component__["a" /* AddressAvailabilitySliderComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5_app_shared_common_components_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_shared_common_components_pageNotFound_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13_app_shared_common_components_address_availability_slider_component__["a" /* AddressAvailabilitySliderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_helperService__["a" /* HelperService */],
                __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_httpService__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_9_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */],
                __WEBPACK_IMPORTED_MODULE_12_app_shared_common_services_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_10_app_shared_common_services_parameters_data_service__["a" /* ParametersDataService */],
                __WEBPACK_IMPORTED_MODULE_14_app_shared_common_services_pager_service__["a" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_localization_translate_service__["a" /* TranslateService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_httpService__["a" /* HttpService */],
                    useFactory: httpFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]]
                }
            ]
        })
    ], CommonAppModule);
    return CommonAppModule;
}());

function httpFactory(backend, options) { return new __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_httpService__["a" /* HttpService */](backend, options); }
;
//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/common-app.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/components/address-availability-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"togglebutton\" style=\"padding-bottom: 10px;\">\r\n    <label>\r\n            <input type=\"checkbox\" (click)=\"onClosedDayClick()\" [(ngModel)]=\"availability.isClosed\" [checked]=\"availability.isClosed\"\r\n            name=\"availabilityClosedDay\"> Is closed on this day\r\n       </label>\r\n</div>\r\n\r\n<div *ngIf=\"!availability.isClosed\" id=\"{{sliderid}}_{{availability.day}}\" class=\"slider slider-info\"></div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/components/address-availability-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_common_models_entity_availability_entity_model__ = __webpack_require__("../../../../../src/app/shared/common/models/entity/availability-entity-model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressAvailabilitySliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var moment = __webpack_require__("../../../../moment/moment.js");
var AddressAvailabilitySliderComponent = /** @class */ (function () {
    function AddressAvailabilitySliderComponent() {
    }
    AddressAvailabilitySliderComponent.prototype.ngOnChanges = function (changes) {
        var availability = changes.availability;
        this.availability = availability.currentValue;
        this.initializeData();
    };
    AddressAvailabilitySliderComponent.prototype.ngOnInit = function () {
        this.initializeData();
    };
    AddressAvailabilitySliderComponent.prototype.onClosedDayClick = function () {
        this.availability.isClosed = !this.availability.isClosed;
        this.initializeData();
    };
    AddressAvailabilitySliderComponent.prototype.initializeData = function () {
        if (this.availability !== null) {
            this.getTimestamps();
            var self_1 = this;
            setTimeout(function () {
                if (self_1.availability !== null) {
                    if (!self_1.availability.isClosed) {
                        self_1.initSliderControl(self_1);
                    }
                }
            }, 500);
        }
    };
    /**
     * Based on day number get closest date with this day
     * based on this date init initial hours for intervals and for amstart and pmstart
     */
    AddressAvailabilitySliderComponent.prototype.getTimestamps = function () {
        // get closest date by current day
        var date = new Date();
        if (this.availability.day > 0) {
            date = moment().isoWeekday(this.availability.day).toDate();
        }
        if (this.availability.isClosed) {
            this.availability.amStart = '';
            this.availability.amStop = '';
            this.availability.pmStart = '';
            this.availability.pmStop = '';
        }
        else {
            this.range_min_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).getTime();
            this.range_max_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 24, 0, 0, 0).getTime();
            this.amStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0, 0, 0).getTime();
            this.amStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12, 0, 0, 0).getTime();
            this.pmStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 13, 0, 0, 0).getTime();
            this.pmStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 16, 0, 0, 0).getTime();
            if (this.availability.amStart && this.availability.amStart.length > 0) {
                var hoursArray = this.availability.amStart.split(':');
                if (hoursArray.length === 1) {
                    hoursArray.push('00');
                }
                this.amStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
            }
            else {
                // this.availability.amStart = null;
            }
            if (this.availability.amStop && this.availability.amStop.length > 0) {
                var hoursArray = this.availability.amStop.split(':');
                if (hoursArray.length === 1) {
                    hoursArray.push('00');
                }
                this.amStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
            }
            else {
                // this.availability.amStop= null;
            }
            if (this.availability.pmStart && this.availability.pmStart.length > 0) {
                var hoursArray = this.availability.pmStart.split(':');
                if (hoursArray.length === 1) {
                    hoursArray.push('00');
                }
                this.pmStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
            }
            else {
                this.pmStart_initial_timestamp = null;
            }
            if (this.availability.pmStop && this.availability.pmStop.length > 0) {
                var hoursArray = this.availability.pmStop.split(':');
                if (hoursArray.length === 1) {
                    hoursArray.push('00');
                }
                this.pmStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
            }
            else {
                this.pmStop_initial_timestamp = null;
            }
        }
    };
    /**
     * Init selection slider
     */
    AddressAvailabilitySliderComponent.prototype.initSliderControl = function (context) {
        var noUiSlider = __webpack_require__("../../../../nouislider/distribute/nouislider.js");
        var self = context;
        var sliderAvailability = document.getElementById(this.sliderid + '_' + self.availability.day);
        var itWasInitializedAlready = sliderAvailability && sliderAvailability.querySelectorAll('.noUi-origin').length > 0;
        var sliderConfig = {};
        if (this.pmStart_initial_timestamp != null && this.pmStop_initial_timestamp != null) {
            sliderConfig = {
                // Create two timestamps to define a range.
                range: {
                    min: self.range_min_timestamp,
                    max: self.range_max_timestamp
                },
                format: { to: self.toFormat, from: Number },
                connect: [false, true, true, true, false],
                // Steps of one week
                step: 15 * 60 * 1000,
                // Two more timestamps indicate the handle starting positions.
                start: [self.amStart_initial_timestamp, self.amStop_initial_timestamp, self.pmStart_initial_timestamp, self.pmStop_initial_timestamp],
                tooltips: [true, true, true, true]
            };
        }
        else {
            sliderConfig = {
                // Create two timestamps to define a range.
                range: {
                    min: self.range_min_timestamp,
                    max: self.range_max_timestamp
                },
                format: { to: self.toFormat, from: Number },
                connect: [false, true, false],
                // Steps of one week
                step: 15 * 60 * 1000,
                // Two more timestamps indicate the handle starting positions.
                start: [self.amStart_initial_timestamp, self.amStop_initial_timestamp],
                tooltips: [true, true]
            };
        }
        if (!itWasInitializedAlready) {
            noUiSlider.create(sliderAvailability, sliderConfig);
        }
        else {
            sliderAvailability.noUiSlider.updateOptions(sliderConfig);
        }
        //// set different collors between intervals
        var connect = sliderAvailability.querySelectorAll('.noUi-origin');
        var classes = ['sliderinfo', 'sliderwarning', 'slidersuccess', '', ''];
        for (var i = 0; i < connect.length; i++) {
            if (classes[i].length > 0)
                connect[i].classList.add(classes[i]);
        }
        sliderAvailability.noUiSlider.on('update', function (values, handle) {
            self.onSlide(values, handle);
        });
    };
    /**
     * update values when slide happen
     * @param values
     * @param handle
     */
    AddressAvailabilitySliderComponent.prototype.onSlide = function (values, handle) {
        var self = this;
        if (self.availability) {
            var selectedDate = values[handle];
            switch (handle) {
                case 0:
                    self.availability.amStart = selectedDate;
                    break;
                case 1:
                    self.availability.amStop = selectedDate;
                    break;
                case 2:
                    self.availability.pmStart = selectedDate;
                    break;
                case 3:
                    self.availability.pmStop = selectedDate;
                    break;
            }
        }
    };
    AddressAvailabilitySliderComponent.prototype.timestamp = function (str) {
        return new Date(str).getTime();
    };
    AddressAvailabilitySliderComponent.prototype.toFormat = function (v) {
        var date = new Date(v);
        var hours = ('0' + date.getHours()).slice(-2);
        var minutes = ('0' + date.getMinutes()).slice(-2);
        return hours + (date.getMinutes() > 0 ? (':' + minutes) : '');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])('sliderid'),
        __metadata("design:type", String)
    ], AddressAvailabilitySliderComponent.prototype, "sliderid", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])('availability'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_common_models_entity_availability_entity_model__["a" /* AvailabilityEntityModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_common_models_entity_availability_entity_model__["a" /* AvailabilityEntityModel */]) === "function" && _a || Object)
    ], AddressAvailabilitySliderComponent.prototype, "availability", void 0);
    AddressAvailabilitySliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])(({
            selector: 'address-availability-slider',
            template: __webpack_require__("../../../../../src/app/shared/common/components/address-availability-slider.component.html")
        }))
    ], AddressAvailabilitySliderComponent);
    return AddressAvailabilitySliderComponent;
    var _a;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-availability-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/components/error.component.html":
/***/ (function(module, exports) {

module.exports = "An error occured. Click <a routerLink=\"/\" routerLinkActive=\"active\">here</a> to go back to main page."

/***/ }),

/***/ "../../../../../src/app/shared/common/components/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])(({
            selector: 'error-component',
            template: __webpack_require__("../../../../../src/app/shared/common/components/error.component.html")
        }))
    ], ErrorComponent);
    return ErrorComponent;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/error.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/components/pageNotFound.component.html":
/***/ (function(module, exports) {

module.exports = "Page not found. Click <a routerLink=\"/\" routerLinkActive=\"active\">here</a> to go back to main page."

/***/ }),

/***/ "../../../../../src/app/shared/common/components/pageNotFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'page-not-found',
            template: __webpack_require__("../../../../../src/app/shared/common/components/pageNotFound.component.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/pageNotFound.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.serverUrl = "";
    return Constants;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/constants.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/helper/component-state-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentStateType; });
var ComponentStateType;
(function (ComponentStateType) {
    ComponentStateType[ComponentStateType["add"] = 0] = "add";
    ComponentStateType[ComponentStateType["edit"] = 1] = "edit";
    ComponentStateType[ComponentStateType["display"] = 2] = "display";
})(ComponentStateType || (ComponentStateType = {}));
//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/component-state-type.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/models/entity/availability-entity-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabilityEntityModel; });
var AvailabilityEntityModel = /** @class */ (function () {
    function AvailabilityEntityModel() {
    }
    return AvailabilityEntityModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/availability-entity-model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/models/entity/facility-entity-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilityEntityModel; });
var FacilityEntityModel = /** @class */ (function () {
    function FacilityEntityModel() {
    }
    return FacilityEntityModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/facility-entity-model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/models/entity/requirement-entity-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequirementEntityModel; });
var RequirementEntityModel = /** @class */ (function () {
    function RequirementEntityModel() {
    }
    return RequirementEntityModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/requirement-entity-model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/models/parameter/truck-parameter-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckParameterModel; });
var TruckParameterModel = /** @class */ (function () {
    function TruckParameterModel() {
    }
    return TruckParameterModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/truck-parameter-model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/services/globalErrorHandler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_authentication_services_authentication_observer__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.observer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_common_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/common/services/notification.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GlobalErrorHandler = /** @class */ (function () {
    // constructor
    function GlobalErrorHandler(router, authenticationObserver, authenticationService, notificationService) {
        this.router = router;
        this.authenticationObserver = authenticationObserver;
        this.authenticationService = authenticationService;
        this.notificationService = notificationService;
    }
    /**
     * Handle error
     * @param error
     * @returns {}
     */
    GlobalErrorHandler.prototype.throwError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    /**
     * Handle error
     * @param error
     * @returns {}
     */
    GlobalErrorHandler.prototype.handleError = function (error) {
        if (error.status === 401) {
            this.redirectToLogin();
        }
        else {
            if (error._body && error._body.trim() !== '') {
                var errorObject = JSON.parse(error._body);
                if (errorObject.errorType === 1) {
                    this.redirectToLogin();
                }
                else if (errorObject.errorType === 2) {
                    alert(errorObject.message);
                }
                else {
                    this.router.navigate(["/error"]);
                }
            }
        }
    };
    GlobalErrorHandler.prototype.redirectToLogin = function () {
        localStorage.removeItem('current_user');
        console.log("Your session has expired. please login again");
        this.authenticationService.logout();
        this.notificationService.show('Session expired. You have to login again.', 'danger', 'center', 'top');
        var self = this;
        setTimeout(function () {
            self.router.navigate(["/login"]);
        }, 1500);
    };
    GlobalErrorHandler = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_authentication_services_authentication_observer__["a" /* AuthenticationObserver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_authentication_services_authentication_observer__["a" /* AuthenticationObserver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_common_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_common_services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/globalErrorHandler.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/services/helperService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_common_helper_component_state_type__ = __webpack_require__("../../../../../src/app/shared/common/helper/component-state-type.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HelperService = /** @class */ (function () {
    function HelperService() {
    }
    /**
       * Get component state based on current url
       * @param url
       */
    HelperService.prototype.getComponentStateByUrl = function (url) {
        if (url.indexOf("-add") >= 0) {
            return __WEBPACK_IMPORTED_MODULE_1_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add;
        }
        else if (url.indexOf("-edit") >= 0) {
            return __WEBPACK_IMPORTED_MODULE_1_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].edit;
        }
        else if (url.indexOf("-edit") >= 0) {
            return __WEBPACK_IMPORTED_MODULE_1_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].display;
        }
    };
    HelperService.prototype.scrollOnTop = function () {
        var $main_panel = $(".main-panel");
        $main_panel.scrollTop(0).perfectScrollbar("update");
    };
    /**
       * Convert datetime to string
       * @param dateobj
       * @param format available formats: en, nl, fr, de, ro
       * @param include
       * @returns {}
       */
    HelperService.prototype.dateToString = function (dateobj, format, includeTime) {
        if (includeTime === void 0) { includeTime = false; }
        var year = dateobj.getFullYear();
        var month = ("0" + (dateobj.getMonth() + 1)).slice(-2);
        var day = ("0" + dateobj.getDate()).slice(-2);
        var hours = ("0" + dateobj.getHours()).slice(-2);
        var minutes = ("0" + dateobj.getMinutes()).slice(-2);
        var seconds = ("0" + dateobj.getSeconds()).slice(-2);
        var convertedDate = "";
        switch (format) {
            case "nl":
                convertedDate = day + "/" + month + "/" + year;
                break;
            case "fr":// dd-mm-yyyy
                convertedDate = day + "-" + month + "-" + year;
                break;
            case "de":// yyyy-mm-dd
                convertedDate = year + "-" + month + "-" + day;
                break;
            case "ro":// yyyy-mm-dd
                convertedDate = day + "." + month + "." + year;
                break;
            default:
                convertedDate = day + month + year;
                if (includeTime) {
                    convertedDate += hours + minutes + seconds;
                }
                return convertedDate;
        }
        if (includeTime) {
            convertedDate += " " + hours + ":" + minutes + ":" + seconds;
        }
        return convertedDate;
    };
    HelperService.prototype.convertToDateTime = function (datestring) {
        var dt1 = parseInt(datestring.substring(0, 2));
        var mon1 = parseInt(datestring.substring(2, 4));
        var yr1 = parseInt(datestring.substring(4, 8));
        var date1 = new Date(yr1, mon1 - 1, dt1);
        return date1;
    };
    /**
       * Receive user language parameter and return datetime format
       * @param language
       * @returns {}
       */
    HelperService.prototype.getLanguageSpecificFormatForDate = function (language, includeTime) {
        if (includeTime === void 0) { includeTime = false; }
        var format = "";
        switch (language) {
            case "nl":
                format = "dd/MM/yyyy";
                break;
            case "fr":// dd-mm-yyyy
                format = "dd-MM-yyyy";
                break;
            case "de":// yyyy-mm-dd
                format = "yyyy-MM-dd";
                break;
            case "ro":// yyyy-mm-dd
                format = "dd.MM.yyyy";
                break;
            default:
                format = "dd/MM/yyyy";
                break;
        }
        if (includeTime) {
            format += " hh:mm:ss";
        }
        return format;
    };
    HelperService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])()
    ], HelperService);
    return HelperService;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/helperService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/services/httpService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    HttpService.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    HttpService.prototype.get = function (url, options) {
        options = options || {};
        // options.search = new URLSearchParams();
        // options.search.set('timestamp', (new Date()).getTime().toString());
        return _super.prototype.get.call(this, url, options);
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]) === "function" && _b || Object])
    ], HttpService);
    return HttpService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]));

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/httpService.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/services/localization/translate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__ = __webpack_require__("../../../../../src/app/shared/common/services/httpService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_common_constants__ = __webpack_require__("../../../../../src/app/shared/common/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var moment = __webpack_require__("../../../../moment/moment.js");
var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        /**
         * store translations for an module
         */
        this.moduleTranslations = [];
        this.errorMessage = '';
        this.localizationServiceUrl = __WEBPACK_IMPORTED_MODULE_3_app_shared_common_constants__["a" /* Constants */].serverUrl + 'api/Localization/';
        this.setLanguage();
    }
    TranslateService.prototype.setLanguage = function () {
        // set current language
        var lang = navigator.language;
        if (lang) {
            this.currentLanguage = lang;
            //// set locale for moment js
            moment.locale(lang);
        }
        else {
            this.currentLanguage = 'en-EN';
            //// set locale for moment js
            moment.locale(lang);
        }
        console.log("The language is: " + lang);
    };
    TranslateService.prototype.formatToShortLocaleDate = function (datetime) {
        return moment(datetime).format('L');
    };
    TranslateService.prototype.generateFromNowOnString = function (date) {
        if (date)
            return moment(date).fromNow();
        else
            return '';
    };
    TranslateService.prototype.setModulePrefix = function (modulePrefix) {
        this.modulePrefix = modulePrefix;
    };
    /**
     * getModuleTranslation.
     * @param keyName
     * @returns {}
     */
    TranslateService.prototype.getModuleTranslation = function (keyName, params) {
        if (params === void 0) { params = null; }
        if (this.moduleTranslations) {
            for (var i = 0; i < this.moduleTranslations.length; i++) {
                var found = this.moduleTranslations[i].translations.filter(function (item) { return item.keyString === keyName; });
                if (found && found.length > 0) {
                    var keyValue = found[0].value;
                    // replace params with proper values
                    if (keyValue && params && params.length > 0) {
                        for (var k = 0; k < params.length; k++) {
                            keyValue = keyValue.replace('{' + k + '}', params[k]);
                        }
                    }
                    return keyValue;
                }
            }
        }
        return "key not found";
    };
    /**
     * getApplicationTranslation
     * @param keyName
     * @returns {}
     */
    TranslateService.prototype.getApplicationTranslation = function (keyName, params) {
        if (params === void 0) { params = null; }
        if (this.applicationTranslations) {
            var found = this.applicationTranslations.filter(function (item) { return item.keyString === keyName; });
            if (found && found.length > 0) {
                var keyValue = found[0].value;
                // replace params with proper values
                if (keyValue && params && params.length > 0) {
                    for (var k = 0; k < params.length; k++) {
                        keyValue = keyValue.replace('{' + k + '}', params[k]);
                    }
                }
                return keyValue;
            }
        }
        return "key not found";
    };
    /**
     * getLoginTranslation
     * @param keyName
     * @returns {}
     */
    TranslateService.prototype.getAnonymousTranslation = function (keyName) {
        if (this.anonymousTranslations) {
            var found = this.anonymousTranslations.filter(function (item) { return item.keyString === keyName; });
            if (found && found.length > 0) {
                return found[0].value;
            }
        }
        return "key not found";
    };
    /**
     * get translation resources for a module, translations, can be re-used in all other submodules.
     * If if modules translations are already loaded
     * @param modulePrefix
     * @param language
     * @returns {}
     */
    TranslateService.prototype.getModuleTranslations = function (language, modulePrefix) {
        var getModuleTranslationsUrl = this.localizationServiceUrl +
            'getModuleTranslations/' +
            language +
            "/" +
            modulePrefix +
            "/";
        return this.http.get(getModuleTranslationsUrl)
            .map(function (res) { return res.json(); });
        // .catch(this.errorHandler.throwError);
    };
    /**
     * Get application translations. Generic translations used in all modules
     * @param language
     * @returns {}
     */
    TranslateService.prototype.getApplicationTranslations = function (language) {
        var getGenericTranslationsUrl = this.localizationServiceUrl +
            'getApplicationTranslations/' +
            language +
            "/";
        return this.http.get(getGenericTranslationsUrl)
            .map(function (res) { return res.json(); });
        //  .catch(this.errorHandler.throwError);
    };
    /**
        * Get application translations. Generic translations used in all modules
        * @param language
        * @returns {}
        */
    TranslateService.prototype.getAnonymousTranslations = function (language) {
        var getAnonymousTranslationsUrl = this.localizationServiceUrl +
            'getAnonymousTranslations/' +
            language +
            "/";
        return this.http.get(getAnonymousTranslationsUrl)
            .map(function (res) { return res.json(); });
        // .catch(this.errorHandler.throwError);
    };
    TranslateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__["a" /* HttpService */]) === "function" && _a || Object])
    ], TranslateService);
    return TranslateService;
    var _a;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/translate.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationService = /** @class */ (function () {
    function NotificationService() {
    }
    /**
     * Show notification
     * @param message  notification message
     * @param notificationType type: allowed types ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary']
     * @param horizontalPosition vertical position, allowed: 'left', 'center','right'
     * @param verticalPosition horizontal position, allowed: 'bottom', 'top'
     */
    NotificationService.prototype.show = function (message, notificationType, horizontalPosition, verticalPosition) {
        var type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        var color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: message
        }, {
            type: notificationType,
            timer: 3000,
            placement: {
                from: verticalPosition,
                align: horizontalPosition
            }
        });
    };
    /**
     * show loading
     * @param message
     * @param timer  number of seconds to load
     */
    NotificationService.prototype.showLoading = function (timer, message) {
        if (timer === void 0) { timer = 1; }
        if (message === void 0) { message = 'Loading'; }
        if (timer <= 1) {
            var notify = $.notify(message, {
                type: 'info',
                allow_dismiss: false,
                showProgressbar: true,
                delay: 100,
                timer: timer * 1000
            });
        }
        else {
            var notify = $.notify(message, {
                type: 'info',
                allow_dismiss: false,
                showProgressbar: true,
            });
        }
        setTimeout(function () {
        }, timer * 1000);
    };
    NotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])()
    ], NotificationService);
    return NotificationService;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        // let pages = _.range(startPage, endPage + 1);
        var pages = [];
        for (var i = startPage; i < endPage + 1; i++) {
            pages.push(i);
        }
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/pager.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/services/parameters-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_common_services_httpService__ = __webpack_require__("../../../../../src/app/shared/common/services/httpService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_common_constants__ = __webpack_require__("../../../../../src/app/shared/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_common_models_parameter_truck_parameter_model__ = __webpack_require__("../../../../../src/app/shared/common/models/parameter/truck-parameter-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_common_models_entity_facility_entity_model__ = __webpack_require__("../../../../../src/app/shared/common/models/entity/facility-entity-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_common_models_entity_requirement_entity_model__ = __webpack_require__("../../../../../src/app/shared/common/models/entity/requirement-entity-model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ParametersDataService = /** @class */ (function () {
    function ParametersDataService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.serviceUrl = __WEBPACK_IMPORTED_MODULE_2_app_shared_common_constants__["a" /* Constants */].serverUrl + "api/ParametersData/";
    }
    /**
     * getFacilities
     * @param language
     */
    ParametersDataService.prototype.getAddressRequirementsParameters = function (language) {
        return this.http
            .get(this.serviceUrl + "getAddressRequirementsParameters" + "/" + language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * getFacilities
     * @param language
     */
    ParametersDataService.prototype.getFacilities = function (language) {
        return this.http
            .get(this.serviceUrl + "getFacilities" + "/" + language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * getTruks
     * @param language
     */
    ParametersDataService.prototype.getTruks = function (language) {
        return this.http
            .get(this.serviceUrl + "getTrucks" + "/" + language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * getRequirements
     * @param language
     */
    ParametersDataService.prototype.getRequirements = function (language) {
        return this.http
            .get(this.serviceUrl + "getRequirements" + "/" + language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
   * getTruks
   * @param language
   */
    ParametersDataService.prototype.getPackTypes = function (language) {
        return this.http
            .get(this.serviceUrl + "getPackTypes" + "/" + language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * update component model with facilities
     * @param entityId
     * @param parametersList
     * @param updatedEntitiesList
     */
    ParametersDataService.prototype.generateFacilityEntitiesList = function (entityId, parametersList, updatedEntitiesList) {
        if (updatedEntitiesList == null)
            updatedEntitiesList = new Array();
        ///// remove items from updated that are no longer in facility params list
        updatedEntitiesList = updatedEntitiesList.filter(function (item) {
            return parametersList.filter(function (paramitem) { return paramitem.id === item.facilityId; })
                .length > 0;
        });
        var _loop_1 = function (i) {
            var paramModel = updatedEntitiesList.find(function (item) { return item.facilityId === parametersList[i].id; });
            var modelItem = null;
            if (paramModel) {
                modelItem = paramModel;
                (modelItem.id = entityId < 0 ? -1 : modelItem.id),
                    (modelItem.description = parametersList[i].description);
                modelItem.iconName = parametersList[i].iconName;
            }
            else {
                modelItem = new __WEBPACK_IMPORTED_MODULE_5_app_shared_common_models_entity_facility_entity_model__["a" /* FacilityEntityModel */]();
                modelItem.id = -1;
                modelItem.addressId = entityId;
                modelItem.facilityId = parametersList[i].id;
                modelItem.active = entityId < 0 ? true : false;
                modelItem.description = parametersList[i].description;
                modelItem.iconName = parametersList[i].iconName;
                updatedEntitiesList.push(modelItem);
            }
        };
        for (var i = 0; i < parametersList.length; i++) {
            _loop_1(i);
        }
        return updatedEntitiesList;
    };
    /**
   * update component model with requirments
   * @param entityId
   * @param parametersList
   * @param updatedEntitiesList
   */
    ParametersDataService.prototype.generateRequirementsEntitiesList = function (entityId, parametersList, updatedEntitiesList) {
        if (updatedEntitiesList == null)
            updatedEntitiesList = new Array();
        ///// remove facilities from entities that are no longer in facility params list
        updatedEntitiesList = updatedEntitiesList.filter(function (item) {
            return parametersList.filter(function (paramitem) { return paramitem.id === item.requirementId; })
                .length > 0;
        });
        var _loop_2 = function (i) {
            var paramModel = updatedEntitiesList.find(function (item) { return item.requirementId === parametersList[i].id; });
            var modelItem = null;
            if (paramModel) {
                modelItem = paramModel;
                (modelItem.id = entityId < 0 ? -1 : modelItem.id),
                    (modelItem.description = parametersList[i].description);
                modelItem.iconName = parametersList[i].iconName;
            }
            else {
                modelItem = new __WEBPACK_IMPORTED_MODULE_6_app_shared_common_models_entity_requirement_entity_model__["a" /* RequirementEntityModel */]();
                modelItem.id = -1;
                modelItem.entityId = entityId;
                modelItem.requirementId = parametersList[i].id;
                modelItem.active = false;
                modelItem.description = parametersList[i].description;
                modelItem.iconName = parametersList[i].iconName;
                updatedEntitiesList.push(modelItem);
            }
        };
        // update component model requirements
        for (var i = 0; i < parametersList.length; i++) {
            _loop_2(i);
        }
        return updatedEntitiesList;
    };
    /**
   * update component model with truks
   * @param entityId
   * @param parametersList
   * @param updatedEntitiesList
   */
    ParametersDataService.prototype.generateTruksEntitiesList = function (entityId, parametersList, updatedEntitiesList) {
        if (updatedEntitiesList == null)
            updatedEntitiesList = new Array();
        ///// remove facilities from entities that are no longer in facility params list
        updatedEntitiesList = updatedEntitiesList.filter(function (item) {
            return parametersList.filter(function (paramitem) { return paramitem.id === item.truckId; })
                .length > 0;
        });
        var _loop_3 = function (i) {
            var paramModel = updatedEntitiesList.find(function (item) { return item.truckId === parametersList[i].id; });
            var modelItem = null;
            if (paramModel) {
                modelItem = paramModel;
                (modelItem.id = entityId < 0 ? -1 : modelItem.id),
                    (modelItem.description = parametersList[i].description);
                modelItem.iconName = parametersList[i].iconName;
            }
            else {
                modelItem = new __WEBPACK_IMPORTED_MODULE_4_app_shared_common_models_parameter_truck_parameter_model__["a" /* TruckParameterModel */]();
                modelItem.id = -1;
                modelItem.addressId = entityId;
                modelItem.truckId = parametersList[i].id;
                modelItem.active = entityId < 0 ? true : false;
                modelItem.description = parametersList[i].description;
                modelItem.iconName = parametersList[i].iconName;
                updatedEntitiesList.push(modelItem);
            }
        };
        // update component model trucks
        for (var i = 0; i < parametersList.length; i++) {
            _loop_3(i);
        }
        return updatedEntitiesList;
    };
    ParametersDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_common_services_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_common_services_httpService__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _b || Object])
    ], ParametersDataService);
    return ParametersDataService;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/parameters-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Portfolio\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"\">TransApp</a>\r\n        </p>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'footer-cmp',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_shared_footer_footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3_app_shared_footer_footer_component__["a" /* FooterComponent */]]
        })
    ], FooterModule);
    return FooterModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/md/md-table/md-table.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"content table-responsive\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n          <tr *ngFor=\"let row of data.dataRows\">\r\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\r\n            <td>\r\n                <div class=\"flag\">\r\n                    <img src=\"../../../assets/img/flags/{{row[0]}}.png\" alt=\"\">\r\n                </div>\r\n            </td>\r\n            <td>\r\n                {{row[1]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[2]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[3]}}\r\n            </td>\r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/md/md-table/md-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdTableComponent = /** @class */ (function () {
    function MdTableComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'md-table',
            template: __webpack_require__("../../../../../src/app/shared/md/md-table/md-table.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/md-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/md/md.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_md_md_table_md_table_component__ = __webpack_require__("../../../../../src/app/shared/md/md-table/md-table.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = /** @class */ (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3_app_shared_md_md_table_md_table_component__["a" /* MdTableComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3_app_shared_md_md_table_md_table_component__["a" /* MdTableComponent */],
            ]
        })
    ], MdModule);
    return MdModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/md.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-minimize\">\r\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\r\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\r\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}} </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <div *ngIf=\"isMobileMenu()\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"material-icons\">dashboard</i>\r\n                            <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"dropdown\">\r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"material-icons\">notifications</i>\r\n                            <span class=\"notification\">5</span>\r\n                            <p class=\"hidden-lg hidden-md\">\r\n                                Notifications\r\n                                <b class=\"caret\"></b>\r\n                            </p>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\">\r\n                            <li>\r\n                                <a href=\"#\">Mike John responded to your email</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">You have 5 new tasks</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">You're now friend with Andrew</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">Another Notification</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">Another One</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"material-icons\">person</i>\r\n                            <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"separator hidden-lg hidden-md\"></li>\r\n                </ul>\r\n                <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                    <div class=\"form-group form-search is-empty\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                        <span class=\"material-input\"></span>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_sidebar_sidebar_routes_config__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_2_app_shared_sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if ($('body').hasClass('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        $('#minimizeSidebar').click(function () {
            if (misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
        $('#hideSidebar').click(function () {
            if (misc.hide_sidebar_active === true) {
                setTimeout(function () {
                    $('body').removeClass('hide-sidebar');
                    misc.hide_sidebar_active = false;
                }, 300);
                setTimeout(function () {
                    $('.sidebar').removeClass('animation');
                }, 600);
                $('.sidebar').addClass('animation');
            }
            else {
                setTimeout(function () {
                    $('body').addClass('hide-sidebar');
                    // $('.sidebar').addClass('animation');
                    misc.hide_sidebar_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    ;
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ElementRef */]) === "function" && _c || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_shared_navbar_navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3_app_shared_navbar_navbar_component__["a" /* NavbarComponent */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
var ROUTES = [
    { path: '/address-add', title: 'Create Address', icon: 'add_location' },
    { path: '/address-overview', title: 'Overview Address', icon: 'add_location' },
    { path: '/shipment-add', title: 'Create Shipment', icon: 'local_shipping' },
    { path: '/shipment-overview', title: 'Overview Shipment', icon: 'local_shipping' }
];
//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/sidebar-routes.config.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <div class=\"logo-normal\">\r\n        <a href=\"#\" class=\"simple-text\">\r\n                   Transapp\r\n                </a>\r\n    </div>\r\n\r\n    <div class=\"logo-img\">\r\n        <img src=\"/assets/img/angular2-logo-white.png\" />\r\n    </div>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"user\">\r\n        <div class=\"photo\">\r\n            <img src=\"../assets/img/faces/marc.jpg\" />\r\n        </div>\r\n        <div class=\"info\">\r\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n                <span>\r\n                           {{currentUser.login}}\r\n                            <b class=\"caret\"></b>\r\n                        </span>\r\n            </a>\r\n            <div class=\"collapse\" id=\"collapseExample\">\r\n                <ul class=\"nav\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"sidebar-mini\">MP</span>\r\n                            <span class=\"sidebar-normal\">My Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"sidebar-mini\">EP</span>\r\n                            <span class=\"sidebar-normal\">Edit Profile</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"sidebar-mini\">S</span>\r\n                            <span class=\"sidebar-normal\">Settings</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"sidebar-mini\">S</span>\r\n                            <span class=\"sidebar-normal\" (click)=\"onClickSignOut()\">Sign out</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isNotMobileMenu()\">\r\n        <form class=\"navbar-form navbar-right\" role=\"search\">\r\n            <div class=\"form-group form-search is-empty\">\r\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\r\n                <span class=\"material-input\"></span>\r\n                <span class=\"material-input\"></span>\r\n            </div>\r\n            <button class=\"btn btn-white btn-round btn-just-icon\" type=\"submit\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n        </form>\r\n        <ul class=\"nav nav-mobile-menu\">\r\n            <li class=\"\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">dashboard</i>\r\n                    <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    <div class=\"ripple-container\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"dropdown\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">notifications</i>\r\n                    <span class=\"notification\">5</span>\r\n                    <p class=\"hidden-lg hidden-md\">\r\n                        Notifications\r\n                        <b class=\"caret\"></b>\r\n                    </p>\r\n                    <div class=\"ripple-container\"></div>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">Another Notification</a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </li>\r\n            <li class=\"\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\r\n                    <i class=\"material-icons\">person</i>\r\n                    <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    <div class=\"ripple-container\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"separator hidden-lg hidden-md\"></li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\">\r\n                <a [routerLink]=\"[menuItem.path]\" (click)=\"scroll()\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p>{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_sidebar_sidebar_routes_config__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_helperService__ = __webpack_require__("../../../../../src/app/shared/common/services/helperService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var sidebarTimer;
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authenticationService, router, helperService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.helperService = helperService;
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.scroll = function () {
        this.helperService.scrollOnTop();
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authenticationService.getCurrentUser();
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $sidebar = $('.sidebar-wrapper');
            $sidebar.perfectScrollbar();
        }
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1_app_shared_sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        // init Moving Tab after the view is initialisez
        setTimeout(function () {
            // if (mda.movingTabInitialised == false) {
            //mda.initMovingTab();
            //    mda.movingTabInitialised = true;
            // }
        }, 100);
    };
    SidebarComponent.prototype.onClickSignOut = function () {
        this.authenticationService.logout();
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'sidebar-cmp',
            template: __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_helperService__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_helperService__["a" /* HelperService */]) === "function" && _c || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b, _c;
}());

// The Moving Tab (the element that is moving on the sidebar, when you switch the pages) is depended on jQuery because it is doing a lot of calculations and changes based on Bootstrap collapse elements. If you have a better suggestion please send it to hello@creative-tim.com and we would be glad to talk more about this improvement. Thank you!
var mda = {
    movingTab: '<div class="sidebar-moving-tab"/>',
    isChild: false,
    sidebarMenuActive: '',
    movingTabInitialised: false,
    distance: 0,
    setMovingTabPosition: function ($currentActive) {
        $currentActive = mda.sidebarMenuActive;
        mda.distance = $currentActive.parent().position().top - 10;
        if ($currentActive.closest('.collapse').length != 0) {
            var parent_distance = $currentActive.closest('.collapse').parent().position().top;
            mda.distance = mda.distance + parent_distance;
        }
        mda.moveTab();
    },
    initMovingTab: function () {
        mda.movingTab = $(mda.movingTab);
        mda.sidebarMenuActive = $('.sidebar .nav-container > .nav > li.active > a:not([data-toggle="collapse"]');
        if (mda.sidebarMenuActive.length != 0) {
            mda.setMovingTabPosition(mda.sidebarMenuActive);
        }
        else {
            mda.sidebarMenuActive = $('.sidebar .nav-container .nav > li.active .collapse li.active > a');
            mda.isChild = true;
            this.setParentCollapse();
        }
        mda.sidebarMenuActive.parent().addClass('visible');
        var button_text = mda.sidebarMenuActive.html();
        mda.movingTab.html(button_text);
        $('.sidebar .nav-container').append(mda.movingTab);
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function () {
                setTimeout(function () {
                    mda.sidebarMenuActive = $('.sidebar .nav-container .nav li.active a:not([data-toggle="collapse"])');
                    if (mda.isChild == true) {
                        this.setParentCollapse();
                    }
                    clearTimeout(sidebarTimer);
                    var $currentActive = mda.sidebarMenuActive;
                    $('.sidebar .nav-container .nav li').removeClass('visible');
                    var $movingTab = mda.movingTab;
                    $movingTab.addClass('moving');
                    $movingTab.css('padding-left', $currentActive.css('padding-left'));
                    var button_text = $currentActive.html();
                    mda.setMovingTabPosition($currentActive);
                    sidebarTimer = setTimeout(function () {
                        $movingTab.removeClass('moving');
                        $currentActive.parent().addClass('visible');
                    }, 650);
                    setTimeout(function () {
                        $movingTab.html(button_text);
                    }, 10);
                }, 10);
            });
        }
        $('.sidebar .nav .collapse').on('hidden.bs.collapse', function () {
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
        });
        $('.sidebar .nav .collapse').on('shown.bs.collapse', function () {
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
        });
        $('.sidebar .nav-container .nav > li > a:not([data-toggle="collapse"])').click(function () {
            mda.sidebarMenuActive = $(this);
            var $parent = $(this).parent();
            if (mda.sidebarMenuActive.closest('.collapse').length == 0) {
                mda.isChild = false;
            }
            // we call the animation of the moving tab
            clearTimeout(sidebarTimer);
            var $currentActive = mda.sidebarMenuActive;
            $('.sidebar .nav-container .nav li').removeClass('visible');
            var $movingTab = mda.movingTab;
            $movingTab.addClass('moving');
            $movingTab.css('padding-left', $currentActive.css('padding-left'));
            var button_text = $currentActive.html();
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
            sidebarTimer = setTimeout(function () {
                $movingTab.removeClass('moving');
                $currentActive.parent().addClass('visible');
            }, 650);
            setTimeout(function () {
                $movingTab.html(button_text);
            }, 10);
        });
    },
    setParentCollapse: function () {
        if (mda.isChild == true) {
            var $sidebarParent = mda.sidebarMenuActive.parent().parent().parent();
            var collapseId = $sidebarParent.siblings('a').attr("href");
            $(collapseId).collapse("show");
            $(collapseId).collapse()
                .on('shown.bs.collapse', function () {
                mda.setMovingTabPosition();
            })
                .on('hidden.bs.collapse', function () {
                mda.setMovingTabPosition();
            });
        }
    },
    animateMovingTab: function () {
        clearTimeout(sidebarTimer);
        var $currentActive = mda.sidebarMenuActive;
        $('.sidebar .nav-container .nav li').removeClass('visible');
        var $movingTab = mda.movingTab;
        $movingTab.addClass('moving');
        $movingTab.css('padding-left', $currentActive.css('padding-left'));
        var button_text = $currentActive.html();
        mda.setMovingTabPosition($currentActive);
        sidebarTimer = setTimeout(function () {
            $movingTab.removeClass('moving');
            $currentActive.parent().addClass('visible');
        }, 650);
        setTimeout(function () {
            $movingTab.html(button_text);
        }, 10);
    },
    moveTab: function () {
        mda.movingTab.css({
            'transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-webkit-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-moz-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-ms-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-o-transform': 'translate3d(0px,' + mda.distance + 'px, 0)'
        });
    }
};
//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/sidebar/sidebar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3_app_shared_sidebar_sidebar_component__["a" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3_app_shared_sidebar_sidebar_component__["a" /* SidebarComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/components/shipment-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n\r\n            <div *ngFor=\"let shipmentFilter of shipmentFilters; let rowindex = index\" (click)=\"onFilterClick(shipmentFilter)\" [ngClass]=\"'col-lg-3 col-md-6 col-sm-6  filterpanels ' + (shipmentFilter.statusType == selectedShipmentFilter.statusType ? 'active':'')\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" [attr.data-background-color]=\"getFilterColor(shipmentFilter.statusType)\">\r\n                        <i class=\"material-icons\">{{getFilterIcon(shipmentFilter.statusType)}}</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">{{shipmentFilter.description}}</p>\r\n                        <h3 class=\"card-title\">{{shipmentFilter.statusType == 2 ? (shipmentFilter.inPending ? shipmentFilter.pending: shipmentFilter.declined) : shipmentFilter.amount}}</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">date_range</i> Last updated {{translateService.generateFromNowOnString(shipmentFilter.lastDateTime)}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div style=\"padding-left:25px\" *ngIf=\"selectedShipmentFilter && selectedShipmentFilter.statusType === 2 && shipmentFilter.statusType === 2\">\r\n                    <button class=\"btn btn-primary\" (click)=\"onAssignedSubfilterClick(true, shipmentFilter)\">\r\n                        <span *ngIf=\"selectedShipmentFilter.inPending\" class=\"btn-label\">\r\n                            <i class=\"material-icons\">check</i>\r\n                        </span>\r\n                        Pending</button>\r\n                    <button class=\"btn btn-info\" (click)=\"onAssignedSubfilterClick(false, shipmentFilter)\">\r\n                      <span *ngIf=\"!selectedShipmentFilter.inPending\" class=\"btn-label\">\r\n                        <i class=\"material-icons\">check</i>\r\n                    </span>Declined</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n\r\n\r\n                <div class=\"card\">\r\n                    <!-- <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                        <i class=\"material-icons\">assignment</i>\r\n                    </div> -->\r\n\r\n                    <mat-progress-bar [color]=\"'primary'\" [mode]=\"'indeterminate'\">\r\n                    </mat-progress-bar>\r\n\r\n                    <div *ngIf=\"componentModel && componentModel.length > 0\" class=\"card-content table-full-width\">\r\n                        <!--<h4 class=\"card-title\">Regular Table with Colors</h4>-->\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Pickup date</th>\r\n                                        <th>Delivery date</th>\r\n                                        <th>From</th>\r\n                                        <th>Destination</th>\r\n                                        <th>Quantity</th>\r\n                                        <th>Transporter</th>\r\n                                        <th>Price</th>\r\n                                        <th *ngIf=\"selectedShipmentFilter && selectedShipmentFilter.statusType === 1\">Offer count</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n\r\n                                    <ng-container *ngFor=\"let shipmentRow of componentModel; let rowindex = index\">\r\n                                        <tr (click)=\"onClickShowActions(shipmentRow, rowindex)\" [ngClass]=\"rowindex%2==0?'success':''\">\r\n                                            <td>{{translateService.formatToShortLocaleDate(shipmentRow.shipment.pickUpDate)}}</td>\r\n                                            <td>{{translateService.formatToShortLocaleDate(shipmentRow.shipment.deliveryDate)}}</td>\r\n                                            <td>{{shipmentRow.shipment.addressFrom}}</td>\r\n                                            <td>{{shipmentRow.shipment.addressTo}}</td>\r\n                                            <td>{{shipmentRow.shipment.totalQuatity}}</td>\r\n                                            <td>{{shipmentRow.shipment.transporterId}}</td>\r\n                                            <td>{{shipmentRow.shipment.totalPrice}}</td>\r\n                                            <td *ngIf=\"selectedShipmentFilter && selectedShipmentFilter.statusType === 1\">{{shipmentRow.shipment.offerCount}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr id=\"actionsRow\" *ngIf=\"shipmentRow.viewActions\">\r\n                                            <td id=\"actionsRowContent\" colspan=\"7\" align=\"center\">\r\n\r\n\r\n\r\n\r\n                                                <button *ngIf=\"selectedShipmentFilter && selectedShipmentFilter.editActionVisible\" class=\"btn btn-warning\" (click)=\"onClickEditShipment(shipmentRow)\">\r\n                                                            <span class=\"btn-label\">\r\n                                                                <i class=\"material-icons\">border_color</i>\r\n                                                            </span>\r\n                                                            Edit shipment\r\n                                                        </button>\r\n                                                <button *ngIf=\"selectedShipmentFilter && selectedShipmentFilter.deleteActionVisible\" class=\"btn btn-danger\" (click)=\"onClickDeleteShipment(shipmentRow.shipment.id)\">\r\n                                                            Delete shipment\r\n                                                            <span class=\"btn-label btn-label-right\">\r\n                                                                <i class=\"material-icons\">delete_forever</i>\r\n                                                            </span>\r\n                                                        </button>\r\n                                                <button *ngIf=\"selectedShipmentFilter && selectedShipmentFilter.moveToOpenMarketActionVisible\" class=\"btn btn-success\" (click)=\"assignToOpenMarket(shipmentRow.shipment.id)\">\r\n                                                            <span class=\"btn-label\">\r\n                                                                <i class=\"material-icons\">assignment_returned</i>\r\n                                                            </span>\r\n                                                            Assign to open market\r\n                                                        </button>\r\n                                                <button *ngIf=\"selectedShipmentFilter && selectedShipmentFilter.moveToUnassingedActionVisible\" (click)=\"moveToUnassigned(shipmentRow.shipment.id)\" class=\"btn btn-info\">\r\n                                                          <span class=\"btn-label\">\r\n                                                              <i class=\"material-icons\">assignment_turned_in</i>\r\n                                                          </span>\r\n                                                          Move to unassigned\r\n                                                      </button>\r\n                                                <button *ngIf=\"selectedShipmentFilter && selectedShipmentFilter.assignTransporterActionVisible\" class=\"btn btn-info\">\r\n                                                            <span class=\"btn-label\">\r\n                                                                <i class=\"material-icons\">assignment_turned_in</i>\r\n                                                            </span>\r\n                                                            Assign to haulier\r\n                                                        </button>\r\n\r\n                                                <button *ngIf=\"false\" class=\"btn btn-info\">\r\n                                                          <span class=\"btn-label\">\r\n                                                              <i class=\"material-icons\">assignment_turned_in</i>\r\n                                                          </span>\r\n                                                         Unassign and publish to open market\r\n                                                 </button>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr id=\"editShipmentRow\" *ngIf=\"shipmentRow.viewEdit\">\r\n                                            <td colspan=\"7\">\r\n                                                <router-outlet></router-outlet>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </ng-container>\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n\r\n                        <ul *ngIf=\"pagesCollection && pagesCollection.length > 0\" class=\"pagination pagination-info\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate((currentPage -1 < 0 ? 0 : currentPage -1))\"> prev</a>\r\n                            </li>\r\n                            <li *ngFor=\"let page of pagesCollection;  let idx = index\" [ngClass]=\"currentPage == page ? 'active' : ''\">\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate(page)\"> {{page + 1}}</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate((currentPage +1 > pagesCollection.length -1 ? pagesCollection.length -1 : currentPage +1))\"> next</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n                    </div>\r\n                    <h4 *ngIf=\"componentModel && componentModel.length <= 0\">\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;There are no shipments for selected filter.\r\n                    </h4>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shipment/components/shipment-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shipment_services_shipment_service__ = __webpack_require__("../../../../../src/app/shipment/services/shipment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/common/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__ = __webpack_require__("../../../../../src/app/shipment/models/shipment-transporter-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_localization_translate_service__ = __webpack_require__("../../../../../src/app/shared/common/services/localization/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_helperService__ = __webpack_require__("../../../../../src/app/shared/common/services/helperService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shipment_models_shipment_row_viewmodel__ = __webpack_require__("../../../../../src/app/shipment/models/shipment-row-viewmodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentOverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var moment = __webpack_require__("../../../../moment/moment.js");
var ShipmentOverviewComponent = /** @class */ (function () {
    function ShipmentOverviewComponent(router, shipmentService, notificationService, authenticationService, translateService, helperService, errorHandler, route) {
        this.router = router;
        this.shipmentService = shipmentService;
        this.notificationService = notificationService;
        this.authenticationService = authenticationService;
        this.translateService = translateService;
        this.helperService = helperService;
        this.errorHandler = errorHandler;
        this.route = route;
        // search term
        this.currentAddressId = -1;
        this.currentPage = 0;
        this.pageSize = 4;
    }
    // constructor(private navbarTitleService: NavbarTitleService) { }
    ShipmentOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authenticationService.getCurrentUser();
        this.notificationService.showLoading();
        this.getShipmentFilters().subscribe(function (filtersLoaded) {
            _this.selectedShipmentFilter = _this.shipmentFilters[0];
            _this.setActionsVisibility();
            _this.getNumberOfShipments(false);
            _this.getShipments();
        }, function (error) {
            _this.notificationService.show("Filter not loaded", "danger", "center", "top");
            _this.errorHandler.handleError(error);
        });
        this.register_updateSavedModel_handler();
    };
    ShipmentOverviewComponent.prototype.onFilterClick = function (shipmentFilter) {
        this.selectedShipmentFilter = shipmentFilter;
        this.setActionsVisibility();
        this.getNumberOfShipments(false);
        this.getShipments();
    };
    ShipmentOverviewComponent.prototype.onAssignedSubfilterClick = function (inPending, shipmentFilter) {
        shipmentFilter.inPending = inPending;
        this.selectedShipmentFilter = shipmentFilter;
        this.getNumberOfShipments(false);
        this.getShipments();
    };
    /**
     * Get addresses
     */
    ShipmentOverviewComponent.prototype.getShipments = function () {
        var _this = this;
        if (this.currentUser && this.currentUser.customerId) {
            this.shipmentService
                .getAll(this.currentUser.customerId, this.selectedShipmentFilter.statusType, this.selectedShipmentFilter.inPending, this.pageSize * this.currentPage + 1, this.pageSize, this.translateService.currentLanguage)
                .subscribe(function (result) {
                _this.componentModel = [];
                if (result && result.length > 0) {
                    if (_this.route.firstChild) {
                        _this.currentAddressId = +_this.route.firstChild.snapshot.params["id"];
                    }
                    for (var i = 0; i < result.length; i++) {
                        var shipmentRow = new __WEBPACK_IMPORTED_MODULE_9_app_shipment_models_shipment_row_viewmodel__["a" /* ShipmentRowViewModel */]();
                        shipmentRow.shipment = result[i];
                        // if url contains edit then open it by default
                        shipmentRow.viewActions =
                            result[i].id === _this.currentAddressId;
                        _this.componentModel.push(shipmentRow);
                    }
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    /**
     * Get addresses count for current filters
     */
    ShipmentOverviewComponent.prototype.getNumberOfShipments = function (ignoreQueryString) {
        var _this = this;
        this.pagesCollection = null;
        if (this.currentUser && this.currentUser.customerId) {
            this.shipmentService
                .getCount(this.currentUser.customerId, this.selectedShipmentFilter.statusType, this.translateService.currentLanguage)
                .subscribe(function (result) {
                debugger;
                _this.pagesCollection = [];
                var numberOfPages = Math.ceil(result / _this.pageSize);
                numberOfPages = numberOfPages < 0 ? 1 : numberOfPages;
                var self = _this;
                setTimeout(function () {
                    for (var i = 0; i < numberOfPages; i++) {
                        self.pagesCollection.push(i);
                    }
                }, 100);
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    /**
     * Get shipment filter
     */
    ShipmentOverviewComponent.prototype.getShipmentFilters = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].create(function (observer) {
            if (_this.currentUser && _this.currentUser.customerId) {
                _this.shipmentService
                    .getShipmentFilters(_this.currentUser.customerId, _this.translateService.currentLanguage)
                    .subscribe(function (result) {
                    _this.shipmentFilters = result;
                    observer.next(true);
                }, function (error) {
                    _this.errorHandler.handleError(error);
                    observer.next(false);
                });
            }
        });
    };
    ShipmentOverviewComponent.prototype.register_updateSavedModel_handler = function () {
        var _this = this;
        this.subscriptionReceiveUpdatedShipment = this.shipmentService.shipmentModelReceivedHandler$.subscribe(function (shipment) {
            if (shipment != null) {
                var modelToUpdate = _this.componentModel.filter(function (item) { return item.shipment.id === shipment.id; })[0];
                if (modelToUpdate) {
                    //modelToUpdate.shipment = shipment;
                    _this.helperService.scrollOnTop();
                }
                _this.shipmentService.resetSendShipmentModelHandler();
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
        });
    };
    /**
     * Show row available actions on click
     * */
    ShipmentOverviewComponent.prototype.onClickShowActions = function (shipmentRow, index) {
        for (var i = 0; i < this.componentModel.length; i++) {
            if (i !== index)
                this.componentModel[i].viewActions = false;
            this.componentModel[i].viewEdit = false;
        }
        shipmentRow.viewActions = !shipmentRow.viewActions;
        if (shipmentRow.viewActions) {
            shipmentRow.viewEdit = false;
            this.router.navigate(["/shipment-overview"]);
        }
        setTimeout(function () {
            // $('#actionsRowContent').slideToggle('slow');
        }, 500);
    };
    /**
     * Show edit
     * */
    ShipmentOverviewComponent.prototype.onClickEditShipment = function (shipmentRow) {
        this.notificationService.showLoading();
        shipmentRow.viewActions = false;
        this.router.navigate(["./shipment-edit/" + shipmentRow.shipment.id], {
            relativeTo: this.route
        });
        shipmentRow.viewEdit = !shipmentRow.viewEdit;
    };
    /**
   * assignToOpenMarket
   * */
    ShipmentOverviewComponent.prototype.assignToOpenMarket = function (shipmentId) {
        var self = this;
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, move it to open market!"
        })
            .then(function () {
            self.shipmentService
                .assignToOpenMarket(shipmentId, self.currentUser.customerId, self.translateService.currentLanguage)
                .subscribe(function (moved) {
                if (moved) {
                    self.componentModel = self.componentModel.filter(function (item) { return item.shipment.id !== shipmentId; });
                    var currentFilter = self.shipmentFilters.find(function (item) {
                        return item.statusType === self.selectedShipmentFilter.statusType;
                    });
                    if (currentFilter) {
                        currentFilter.amount = currentFilter.amount - 1;
                    }
                    var openMarketFilter = self.shipmentFilters.find(function (item) {
                        return item.statusType === __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].openMarket;
                    });
                    if (openMarketFilter) {
                        openMarketFilter.amount = openMarketFilter.amount + 1;
                        openMarketFilter.lastDateTime = new Date();
                    }
                    swal("Moved!", "Your shipment has been moved to open market.", "success");
                    // update model
                    self.componentModel = self.componentModel.filter(function (item) { return item.shipment.id !== shipmentId; });
                }
                else {
                    swal("Not moved!", "An error occured. Your shipment has not been moved to open market.  Please contact an administrator.", "error");
                }
            }, function (error) {
                swal("Not moved!", "An error occured. Your shipment has not been moved to open market.  Please contact an administrator.", "error");
                self.errorHandler.handleError(error);
            });
        }, function (dismiss) {
            if (dismiss === "cancel") {
                swal("Cancelled", "Your shipment is safe", "error");
            }
        });
    };
    /**
   * moveToUnassigned
   * */
    ShipmentOverviewComponent.prototype.moveToUnassigned = function (shipmentId) {
        var self = this;
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, move it to unassigned!"
        })
            .then(function () {
            self.shipmentService
                .moveToUnassigned(shipmentId, self.currentUser.customerId, self.translateService.currentLanguage)
                .subscribe(function (moved) {
                if (moved) {
                    debugger;
                    self.componentModel = self.componentModel.filter(function (item) { return item.shipment.id !== shipmentId; });
                    var currentFilter = self.shipmentFilters.find(function (item) {
                        return item.statusType === self.selectedShipmentFilter.statusType;
                    });
                    if (currentFilter) {
                        currentFilter.amount = currentFilter.amount - 1;
                    }
                    var unassignedFilter = self.shipmentFilters.find(function (item) {
                        return item.statusType === __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].unassigned;
                    });
                    if (unassignedFilter) {
                        unassignedFilter.amount = unassignedFilter.amount + 1;
                        unassignedFilter.lastDateTime = new Date();
                    }
                    swal("Moved!", "Your shipment has been moved to unassigned.", "success");
                    // update model
                    self.componentModel = self.componentModel.filter(function (item) { return item.shipment.id !== shipmentId; });
                }
                else {
                    swal("Not moved!", "An error occured. Your shipment has not been moved to unassigned. Please contact an administrator.", "error");
                }
            }, function (error) {
                swal("Not moved!", "An error occured. Your shipment has not been moved to unassigned. Please contact an administrator.", "error");
                self.errorHandler.handleError(error);
            });
        }, function (dismiss) {
            if (dismiss === "cancel") {
                swal("Cancelled", "Your shipment is safe", "error");
            }
        });
    };
    /** Show edit address */
    ShipmentOverviewComponent.prototype.onClickDeleteShipment = function (shipmentId) {
        var self = this;
        swal({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(function () {
            self.shipmentService
                .delete(shipmentId, self.currentUser.customerId, this.translateService.currentLanguage)
                .subscribe(function (result) {
                if (result) {
                    swal("Deleted!", "Your shipment has been deleted.", "success");
                    // update model
                    self.componentModel = self.componentModel.filter(function (item) { return item.shipment.id !== shipmentId; });
                }
                else {
                    swal("Not Deleted!", "An error occured. Your shipment has not been deleted.  Please contact an administrator.", "error");
                }
            }, function (error) {
                swal("Not Deleted!", "An error occured. Your shipment has not been deleted.  Please contact an administrator.", "error");
                self.errorHandler.handleError(error);
            });
        }, 
        // delete canceled
        function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === "cancel") {
                swal("Cancelled", "Your shipment is safe", "error");
            }
        });
    };
    /**
   * Move to next/previous page
   * @param page
   */
    ShipmentOverviewComponent.prototype.paginate = function (page) {
        this.currentPage = page;
        this.getShipments();
        this.helperService.scrollOnTop();
    };
    ShipmentOverviewComponent.prototype.ngAfterViewInit = function () {
        var breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                var $fix_button = $(this);
                var $card = $(this).parent(".card");
                $card.find(".fix-broken-card").click(function () {
                    console.log(this);
                    var $header = $(this)
                        .parent()
                        .parent()
                        .siblings(".card-header, .card-image");
                    $header.removeClass("hinge").addClass("fadeInDown");
                    $card.attr("data-count", 0);
                    setTimeout(function () {
                        $header.removeClass("fadeInDown animate");
                    }, 480);
                });
                $card.mouseenter(function () {
                    var $this = $(this);
                    var hover_count = parseInt($this.attr("data-count"), 10) + 1 || 0;
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
    };
    ShipmentOverviewComponent.prototype.getFilterColor = function (status) {
        switch (status) {
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].unassigned:
                return "red";
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].openMarket:
                return "blue";
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].assigned:
                return "orange";
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].completed:
                return "green";
            default:
                return "";
        }
    };
    ShipmentOverviewComponent.prototype.getFilterIcon = function (status) {
        switch (status) {
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].unassigned:
                return "assignment";
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].openMarket:
                return "shopping_cart";
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].assigned:
                return "done";
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].completed:
                return "done_all";
            default:
                return "";
        }
    };
    ShipmentOverviewComponent.prototype.setActionsVisibility = function () {
        var status = this.selectedShipmentFilter.statusType;
        switch (status) {
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].unassigned: {
                this.selectedShipmentFilter.deleteActionVisible = true;
                this.selectedShipmentFilter.editActionVisible = true;
                this.selectedShipmentFilter.moveToOpenMarketActionVisible = true;
                this.selectedShipmentFilter.moveToUnassingedActionVisible = false;
                this.selectedShipmentFilter.assignTransporterActionVisible = true;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].openMarket: {
                this.selectedShipmentFilter.deleteActionVisible = true;
                this.selectedShipmentFilter.editActionVisible = true;
                this.selectedShipmentFilter.moveToOpenMarketActionVisible = false;
                this.selectedShipmentFilter.moveToUnassingedActionVisible = true;
                this.selectedShipmentFilter.assignTransporterActionVisible = true;
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].assigned: {
                this.selectedShipmentFilter.deleteActionVisible = true;
                this.selectedShipmentFilter.editActionVisible = true;
                this.selectedShipmentFilter.moveToOpenMarketActionVisible = false;
                if (this.selectedShipmentFilter.inPending) {
                    this.selectedShipmentFilter.moveToUnassingedActionVisible = true;
                    this.selectedShipmentFilter.assignTransporterActionVisible = true;
                }
                else {
                    this.selectedShipmentFilter.moveToUnassingedActionVisible = false;
                    this.selectedShipmentFilter.assignTransporterActionVisible = false;
                }
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_5_app_shipment_models_shipment_transporter_status__["a" /* ShipmentTransporterStatus */].completed: {
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
    };
    ShipmentOverviewComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionReceiveUpdatedShipment) {
            this.subscriptionReceiveUpdatedShipment.unsubscribe();
        }
    };
    ShipmentOverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: "app-shipment-overview",
            template: __webpack_require__("../../../../../src/app/shipment/components/shipment-overview.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_shipment_services_shipment_service__["a" /* ShipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shipment_services_shipment_service__["a" /* ShipmentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_shared_common_services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_localization_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_localization_translate_service__["a" /* TranslateService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_helperService__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_helperService__["a" /* HelperService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _h || Object])
    ], ShipmentOverviewComponent);
    return ShipmentOverviewComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/components/shipment-save.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"componentModel\" [style.margin-top]=\"componentState > 0 ? '0px':'inherit;'\">\r\n    <div class=\"container-fluid\">\r\n        <form #formShipment=\"ngForm\" novalidate class=\"form-horizontal\" novalidate (ngSubmit)=\"save(formShipment.value, formShipment.valid)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-md-offset-3\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                            <i class=\"material-icons\">local_shipping</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">{{componentState > 0 ? 'Edit shipment' : 'Create new shipment'}}</h4>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + (componentModel.reference  && componentModel.reference.length > 0 ? '' : 'is-empty ' + ((!componentModel.reference ) && formShipment.submitted ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label \">\r\n                                    Transapp shipment reference\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.reference\" id=\"reference\" name=\"reference\" required>\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + (componentModel.poNumber  && componentModel.poNumber.length > 0 ? '' : 'is-empty ' + ((!componentModel.poNumber ) && formShipment.submitted ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label \">\r\n                                    PO Number\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.poNumber\" id=\"poNumber\" name=\"poNumber\" required>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                            <i class=\"material-icons\">send</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">Sender</h4>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((!senderSearchAddressControl || !senderSearchAddressControl.valid ) && formShipment.submitted ? ' has-error' : '')\">\r\n                                <label for=\"receiverSearchAddress\">\r\n                                    Type here to search for a sender\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n\r\n                                <mat-form-field class=\"autocomplete-address\">\r\n                                    <input matInput type=\"text\" name=\"senderSearchAddress\" [formControl]=\"senderSearchAddressControl\" md-min-length=\"0\" [matAutocomplete]=\"senderAutocomplete\" aria-label=\"Select sender\">\r\n                                    <mat-autocomplete #senderAutocomplete=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let address of senderFoundAddresses\" [value]=\"address.name\" (onSelectionChange)=\"onSenderAddressSelected($event, address)\">\r\n                                            {{ address.name }}\r\n                                        </mat-option>\r\n                                        <mat-option *ngIf='!senderFoundAddresses || senderFoundAddresses.length <=0' [value]=\"-1\" (onSelectionChange)=\"onSenderAddressSelected($event, null)\">\r\n                                            No results found. Click here to create a new address\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!-- Adress info -->\r\n                            <h3>Address info</h3>\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((componentModel.pickUpDate ) ? '' : 'is-empty') + (!componentModel.pickUpDate  && formShipment.submitted ? ' has-error' : '') \">\r\n\r\n                                <label for=\"pickupDatePicker\">\r\n                                  Pickup date\r\n                                    <span class=\"star\">*</span>\r\n                                </label> <br>\r\n                                <mat-datepicker-toggle mdSuffix [for]=\"pickupDatePicker\">\r\n                                </mat-datepicker-toggle>\r\n                                <mat-input-container>\r\n                                    <input matInput [matDatepicker]=\"pickupDatePicker\" [(ngModel)]=\"componentModel.pickUpDate\" id=\"pickUpDate\" name=\"pickUpDate\" (dateChange)=\"onPickupDateSelected($event)\" required>\r\n                                </mat-input-container>\r\n                                <mat-datepicker #pickupDatePicker [touchUi]=\"touch\" [startView]=\"'month'\">\r\n                                </mat-datepicker>\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((componentModel.senderAddressInfo  && componentModel.senderAddressInfo.length > 0) ? '' : 'is-empty') + (!componentModel.senderAddressInfo  && formShipment.submitted ? ' has-error' : '') \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                    Pickup adress\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <textarea class=\"form-control\" name=\"senderAddress\" [(ngModel)]=\"componentModel.senderAddressInfo\" rows=\"2\" disabled></textarea>\r\n                            </div>\r\n\r\n                            <!-- Opening hours -->\r\n                            <h3>Opening hours</h3>\r\n                            <div [ngClass]=\" 'form-group label-floating ' + (!componentModel.senderAvailabilities || (componentModel.senderAvailabilities && componentModel.senderAvailabilities.length == 1 && componentModel.senderAvailabilities[0].isClosed) && formShipment.submitted ? ' has-error' : '')\">\r\n                                <address-availability-slider *ngIf=\"componentModel.senderAvailabilities && componentModel.senderAvailabilities.length == 1\" [sliderid]=\"'slider_sender'\" [availability]=\"componentModel.senderAvailabilities[0]\"></address-availability-slider>\r\n                                <small *ngIf=\"(!componentModel.senderAvailabilities || (componentModel.senderAvailabilities && componentModel.senderAvailabilities.length == 1 && componentModel.senderAvailabilities[0].isClosed)) && formShipment.submitted\" class=\"text-danger\">\r\n                                  Selected pickup address is not open on this day. Please select another pickup date.\r\n                               </small>\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + (componentModel.senderContactPerson  && componentModel.senderContactPerson.length > 0 ? '' : 'is-empty ' + ((!componentModel.senderContactPerson ) && formShipment.submitted ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label \">\r\n                                    Contactperson\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.senderContactPerson\" id=\"senderContactPerson\" name=\"senderContactPerson\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"'form-group label-floating ' + (componentModel.senderPhone  && componentModel.senderPhone.length > 0 ? '' : 'is-empty' + (((!componentModel.senderPhone) && formShipment.submitted ) ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                    Phone\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.senderPhone\" id=\"senderPhone\" name=\"senderPhone\">\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((componentModel.senderRemark  && componentModel.senderRemark.length > 0) ? '' : 'is-empty') \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                    Info\r\n                                </label>\r\n                                <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"componentModel.senderRemark\" id=\"senderRemark\" name=\"senderRemark\"></textarea>\r\n                            </div>\r\n\r\n                            <!-- Sender Facilities -->\r\n                            <h3>Facilities</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let facility of componentModel.senderFacilities\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <i class=\"material-icons\">{{facility.iconName}}</i>\r\n                                </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"facility.active\" [checked]=\"facility.active\" name=\"facilityactive_{{facility.facilityId}}\"> {{facility.description}}\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Sender Truck -->\r\n                            <h3>Truck</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let truck of componentModel.senderTrucks\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <i class=\"material-icons\">{{truck.iconName}}</i>\r\n                                </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"truck.active\" [checked]=\"truck.active==true\" name=\"truckactive_{{truck.truckId}}\"> {{truck.description}}\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Sender Transport requirments -->\r\n                            <h3>Transport requirements</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let requirement of componentModel.senderRequirements\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <i class=\"material-icons\">{{requirement.iconName}}</i>\r\n                                </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"requirement.active\" [checked]=\"requirement.active\" name=\"requirementactive_{{requirement.requirementId}}\"> {{requirement.description}}\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--  ***************** Receiver *************** -->\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                            <i class=\"material-icons\">call_received</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">Receiver</h4>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((!receiverSearchAddressControl || !receiverSearchAddressControl.valid ) && formShipment.submitted ? ' has-error' : '')\">\r\n\r\n                                <label for=\"receiverSearchAddress\">\r\n                                    Type here to search for a receiver\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <mat-form-field class=\"autocomplete-address\">\r\n                                    <input type=\"text\" matInput name=\"receiverSearchAddress\" [formControl]=\"receiverSearchAddressControl\" [matAutocomplete]=\"receiverAutocomplete\" aria-label=\"Select receiver\">\r\n                                    <mat-autocomplete #receiverAutocomplete=\"matAutocomplete\">\r\n                                        <mat-option *ngFor=\"let address of receiverFoundAddresses\" [value]=\"address.name\" (onSelectionChange)=\"onReceiverAddressSelected($event, address)\">\r\n                                            {{ address.name }}\r\n                                        </mat-option>\r\n                                        <mat-option *ngIf='!receiverFoundAddresses || receiverFoundAddresses.length <=0' [value]=\"-1\" (onSelectionChange)=\"onReceiverAddressSelected($event, null)\">\r\n                                            No results found. Click here to create a new address\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                                </mat-form-field>\r\n                            </div>\r\n\r\n                            <!-- Adress info -->\r\n                            <h3>Address info</h3>\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((componentModel.deliveryDate ) ? '' : 'is-empty') + (!componentModel.deliveryDate  && formShipment.submitted ? ' has-error' : '')\">\r\n                                <label for=\"\">\r\n                                    Delivery date\r\n                                    <span class=\"star\">*</span>\r\n                                </label><br>\r\n\r\n                                <mat-datepicker-toggle mdSuffix [for]=\" deliveryDatePicker \">\r\n                                </mat-datepicker-toggle>\r\n                                <mat-input-container>\r\n                                    <input matInput [matDatepicker]=\"deliveryDatePicker \" [(ngModel)]=\"componentModel.deliveryDate \" id=\"deliveryDate \" name=\"deliveryDate \" (dateChange)=\"onDeliveryDateSelected($event) \" required>\r\n                                </mat-input-container>\r\n                                <mat-datepicker #deliveryDatePicker [touchUi]=\"touch \" [startView]=\" 'month' \">\r\n                                </mat-datepicker>\r\n                            </div>\r\n\r\n                            <div [ngClass]=\" 'form-group label-floating ' + ((componentModel.receiverAddressInfo && componentModel.receiverAddressInfo.length> 0) ? '' : 'is-empty') + (!componentModel.receiverAddressInfo && formShipment.submitted ? ' has-error' : '')\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                    Delivery adress\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <textarea class=\"form-control\" name=\"receiverAddressInfo\" [ngModel]=\"componentModel.receiverAddressInfo\" rows=\"2\" disabled></textarea>\r\n                            </div>\r\n\r\n                            <!-- Opening hours -->\r\n                            <h3>Opening hours</h3>\r\n                            <div [ngClass]=\" 'form-group label-floating ' + (!componentModel.receiverAvailabilities || (componentModel.receiverAvailabilities && componentModel.receiverAvailabilities.length == 1 && componentModel.receiverAvailabilities[0].isClosed) && formShipment.submitted ? ' has-error' : '')\">\r\n                                <address-availability-slider *ngIf=\"componentModel.receiverAvailabilities && componentModel.receiverAvailabilities.length == 1\" [sliderid]=\"'slider_receiver'\" [availability]=\"componentModel.receiverAvailabilities[0]\"></address-availability-slider>\r\n                                <small *ngIf=\"(!componentModel.receiverAvailabilities || (componentModel.receiverAvailabilities && componentModel.receiverAvailabilities.length == 1 && componentModel.receiverAvailabilities[0].isClosed)) && formShipment.submitted\" class=\"text-danger\">\r\n                                 Selected delivery address is not open on this day. Please select another dalivery date.\r\n                              </small>\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + (componentModel.receiverContactPerson  && componentModel.receiverContactPerson.length > 0 ? '' : 'is-empty ' + ((!componentModel.receiverContactPerson ) && formShipment.submitted ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label \">\r\n                                    Contactperson\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.receiverContactPerson\" id=\"receiverContactPerson\" name=\"receiverContactPerson\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"'form-group label-floating ' + (componentModel.receiverPhone  && componentModel.receiverPhone.length > 0 ? '' : 'is-empty' + (((!componentModel.receiverPhone) && formShipment.submitted ) ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                    Phone\r\n                                    <span class=\"star\">*</span>\r\n                                </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.receiverPhone\" id=\"receiverPhone\" name=\"receiverPhone\">\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((componentModel.receiverRemark  && componentModel.receiverRemark.length > 0) ? '' : 'is-empty') \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                    Info\r\n                                </label>\r\n                                <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"componentModel.receiverRemark\" id=\"receiverRemark\" name=\"receiverRemark\"></textarea>\r\n                            </div>\r\n\r\n                            <!-- Sender Facilities -->\r\n                            <h3>Facilities</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let facility of componentModel.receiverFacilities\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <i class=\"material-icons\">{{facility.iconName}}</i>\r\n                                </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"facility.active\" [checked]=\"facility.active\" name=\"receiver_facilityactive_{{facility.facilityId}}\"> {{facility.description}}\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Sender Truck -->\r\n                            <h3>Truck</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let truck of componentModel.receiverTrucks\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <i class=\"material-icons\">{{truck.iconName}}</i>\r\n                                </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"truck.active\" [checked]=\"truck.active==true\" name=\"receiver_truckactive_{{truck.truckId}}\"> {{truck.description}}\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Sender Transport requirments -->\r\n                            <h3>Transport requirements</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let requirement of componentModel.receiverRequirements\">\r\n                                <span class=\"input-group-addon\">\r\n                                    <i class=\"material-icons\">{{requirement.iconName}}</i>\r\n                                </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"requirement.active\" [checked]=\"requirement.active\" name=\"receiver_requirementactive_{{requirement.requirementId}}\"> {{requirement.description}}\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- Goods -->\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                            <i class=\"material-icons\">add_shopping_cart</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">Goods</h4>\r\n                            <div class=\"table-responsive\">\r\n                                <table>\r\n                                    <tbody>\r\n                                        <ng-container *ngFor=\"let detailRow of componentModel.shipmentDetails; let detailRowIndex = index\">\r\n                                            <!-- Master row -->\r\n                                            <tr *ngIf=\"!detailRow.master.toRemove\">\r\n                                                <td>\r\n                                                    <div [ngClass]=\"'form-group label-floating is-focused'  + ((!detailRow.master.quantity || detailRow.master.quantity <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                        <label class=\"control-label\">Quantity <span class=\"star\">*</span></label>\r\n                                                        <input class=\"form-control\" type=\"number\" min=\"1\" max=\"9999\" step=\"1\" (input)=\"computeTotals()\" [(ngModel)]=\"detailRow.master.quantity\" name=\"shipmentDetail_quantity_{{detailRowIndex}}\" class=\"form-control\" number=\"true\" required>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td style=\"min-width: 150px;\">\r\n                                                    <div [ngClass]=\"'form-group label-floating is-focused'  + ((!detailRow.master.packTypeId || detailRow.master.packTypeId <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                        <label class=\"control-label\">Choose pack type<span class=\"star\">*</span></label>\r\n                                                        <select [(ngModel)]=\"detailRow.master.packTypeId\" (change)=\"onMasterPackTypeChange(detailRow)\" name=\"shipmentDetail_packtype_{{detailRowIndex}}\" class=\"form-control\">\r\n                                                        <option *ngFor=\"let packtype of packTypes\" [ngValue]=\"packtype.id\">{{packtype.description}}</option>\r\n                                                    </select>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div [ngClass]=\"'form-group label-floating is-focused'  + ((!detailRow.master.length || detailRow.master.length <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                        <label class=\"control-label\">Length(cm)<span class=\"star\">*</span></label>\r\n                                                        <input class=\"form-control\" type=\"number\" min=\"1\" (input)=\"computeTotals()\" [(ngModel)]=\"detailRow.master.length\" name=\"shipmentDetail_length_{{detailRowIndex}}\" number=\"true\" required>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div [ngClass]=\"'form-group label-floating is-focused'  + ((!detailRow.master.width || detailRow.master.width <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                        <label class=\"control-label\">Width(cm)<span class=\"star\">*</span></label>\r\n                                                        <input class=\"form-control\" type=\"number\" min=\"1\" (input)=\"computeTotals()\" [(ngModel)]=\"detailRow.master.width\" name=\"shipmentDetail_width_{{detailRowIndex}}\" number=\"true\" required>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div [ngClass]=\"'form-group label-floating is-focused'  + ((!detailRow.master.height || detailRow.master.height <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                        <label class=\"control-label\">Height(cm)<span class=\"star\">*</span></label>\r\n                                                        <input class=\"form-control\" type=\"number\" min=\"1\" (input)=\"computeTotals()\" [(ngModel)]=\"detailRow.master.height\" name=\"shipmentDetail_height_{{detailRowIndex}}\" number=\"true\" required>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td>\r\n                                                    <div [ngClass]=\"'form-group label-floating is-focused'  + ((!detailRow.master.weight || detailRow.master.weight <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                        <label class=\"control-label\">Weight(kg)<span class=\"star\">*</span></label>\r\n                                                        <input class=\"form-control\" type=\"number\" min=\"1\" (input)=\"computeTotals()\" [(ngModel)]=\"detailRow.master.weight\" name=\"shipmentDetail_weigth_{{detailRowIndex}}\" number=\"true\" required>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td class=\"td-actions\">\r\n                                                    <button class=\"btn btn-simple\" (click)=\"onShipmentDetailsMasterRemove(detailRow, detailRowIndex)\" data-placement=\"left\" rel=\"tooltip\" title=\"Remove item\" type=\"button\">\r\n                                                  <i class=\"material-icons\">close</i>\r\n                                              </button>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <!-- Child rows -->\r\n                                            <ng-container *ngFor=\"let rowExtra of detailRow.extras; let rowExtraIndex = index\">\r\n                                                <tr *ngIf=\"!detailRow.master.toRemove && !rowExtra.toRemove\">\r\n                                                    <td colspan=\"2\"></td>\r\n                                                    <td>\r\n                                                        <div [ngClass]=\"'form-group label-floating is-focused'  + ((!rowExtra.quantity || rowExtra.quantity <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                            <label class=\"control-label\">Quantity</label>\r\n                                                            <input class=\"form-control\" type=\"number\" min=\"1\" [(ngModel)]=\"rowExtra.quantity\" name=\"shipmentDetail_quantity_{{detailRowIndex}}_{{rowExtraIndex}}\" number=\"true\" required>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td style=\"min-width: 150px;\">\r\n                                                        <div [ngClass]=\"'form-group label-floating is-focused'  + ((!rowExtra.packTypeId || rowExtra.packTypeId <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                            <label class=\"control-label\">Choose pack type</label>\r\n                                                            <select [(ngModel)]=\"rowExtra.packTypeId\" name=\"shipmentDetail_packtype_{{detailRowIndex}}_{{rowExtraIndex}}\" class=\"form-control\">\r\n                                                      <option *ngFor=\"let packtype of packTypes\" [ngValue]=\"packtype.id\">{{packtype.description}}</option>\r\n                                                  </select>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div [ngClass]=\"'form-group label-floating is-focused'  + ((!rowExtra.length || rowExtra.length <= 0) && formShipment.submitted ? ' has-error' : '')\">\r\n                                                            <label class=\"control-label\">Length(cm)</label>\r\n                                                            <input class=\"form-control\" type=\"number\" min=\"1\" [(ngModel)]=\"rowExtra.length\" name=\"shipmentDetail_length_{{detailRowIndex}}_{{rowExtraIndex}}\" number=\"true\" required>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td class=\"td-actions\">\r\n                                                        <button class=\"btn btn-simple\" (click)=\"onShipmentDetailsExtraRemove(detailRow, rowExtra, rowExtraIndex)\" data-placement=\"left\" rel=\"tooltip\" title=\"Remove item\" type=\"button\">\r\n                                                  <i class=\"material-icons\">close</i>\r\n                                              </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </tbody>\r\n                                </table>\r\n                                <div>\r\n                                    <small *ngIf=\"(!componentModel.shipmentDetails || componentModel.shipmentDetails.length <= 0) && formShipment.submitted\" class=\"text-danger\">\r\n                                  Good are required. You have to add at least one row in goods grid.\r\n                               </small></div>\r\n                                <div>\r\n                                    <button type=\"submit\" class=\"btn btn-fill btn-rose\" (click)=\"onAddPackageClick()\">+ Add more packages</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Total -->\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-4\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-content text-center\">\r\n                            <span class=\"input-group-addon\">\r\n                                <i class=\"fa fa-list  fa-2x\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                            <div class=\"form-group label-floating\">\r\n                                <h4>Total quantity: {{componentModel.totalQuatity? formatNumber(componentModel.totalQuatity) + ' items': ''}} </h4>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-4\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-content text-center\">\r\n                            <span class=\"input-group-addon\">\r\n                                <i class=\"fa fa-cube  fa-2x\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                            <div class=\"form-group label-floating\">\r\n                                <h4>Total volume: {{componentModel.totalVolume? formatNumber(componentModel.totalVolume) + ' &#13221;': ''}} </h4>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-4\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-content text-center\">\r\n                            <span class=\"input-group-addon\">\r\n                                <i class=\"fa fa-balance-scale  fa-2x\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                            <div class=\"form-group label-floating\">\r\n                                <h4>Total weight: {{componentModel.totalWeight ? formatNumber(componentModel.totalWeight) + ' kg': ''}} </h4>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-footer text-center\">\r\n                <button type=\"submit\" class=\"btn btn-rose btn-fill\">Save</button>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shipment/components/shipment-save.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_helperService__ = __webpack_require__("../../../../../src/app/shared/common/services/helperService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_address_services_address_service__ = __webpack_require__("../../../../../src/app/address/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_common_services_parameters_data_service__ = __webpack_require__("../../../../../src/app/shared/common/services/parameters-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_localization_translate_service__ = __webpack_require__("../../../../../src/app/shared/common/services/localization/translate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_shared_common_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/common/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_shared_common_helper_component_state_type__ = __webpack_require__("../../../../../src/app/shared/common/helper/component-state-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_shipment_models_shipment_model__ = __webpack_require__("../../../../../src/app/shipment/models/shipment-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_shipment_models_shipment_detail_model__ = __webpack_require__("../../../../../src/app/shipment/models/shipment-detail-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_shipment_services_shipment_service__ = __webpack_require__("../../../../../src/app/shipment/services/shipment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_shipment_models_shipment_detail_row_model___ = __webpack_require__("../../../../../src/app/shipment/models/shipment-detail-row-model .ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentSaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var ShipmentSaveComponent = /** @class */ (function () {
    function ShipmentSaveComponent(router, route, authenticationService, helperService, addressService, shipmentService, parametersDataService, translateService, errorHandler, notificationService, dateAdapter) {
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.helperService = helperService;
        this.addressService = addressService;
        this.shipmentService = shipmentService;
        this.parametersDataService = parametersDataService;
        this.translateService = translateService;
        this.errorHandler = errorHandler;
        this.notificationService = notificationService;
        this.dateAdapter = dateAdapter;
        /** search controls */
        this.senderSearchAddressControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("");
        this.receiverSearchAddressControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("");
        // set datepickerlocale
    }
    ShipmentSaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authenticationService.getCurrentUser();
        // get component state
        this.componentState = this.helperService.getComponentStateByUrl(this.router.url);
        // create search FormControl
        this.senderSearchAddressControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.receiverSearchAddressControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.senderFoundAddresses = new Array();
        this.receiverFoundAddresses = new Array();
        // get component state
        this.componentState = this.helperService.getComponentStateByUrl(this.router.url);
        // load required data
        this.loadComponentModel(this.componentState).subscribe(function (modelLoaded) {
            if (modelLoaded) {
                _this.loadParamsData().subscribe(function (paramsDataLoaded) { });
            }
        });
        this.initSenderSearchAddresses();
        this.initReceiverSearchAddresses();
    };
    ShipmentSaveComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        setTimeout(function () {
            self.setCursorToFirstElement();
        }, 500);
    };
    /**
     * On save click
     * @param model
     * @param isValid
     */
    ShipmentSaveComponent.prototype.save = function (model, isValid) {
        var _this = this;
        console.log(model, isValid);
        console.log(this.componentModel);
        if (isValid && this.isModelValid()) {
            this.shipmentService
                .save(this.componentModel, this.translateService.currentLanguage)
                .subscribe(function (shipmentId) {
                if (_this.componentState === __WEBPACK_IMPORTED_MODULE_14_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
                    _this.router.navigate([
                        "/shipment-overview/shipment-edit/" + shipmentId
                    ]);
                    _this.notificationService.show("Address created.", "success", "center", "top");
                }
                else {
                    //// send data to addreess coponent to be updated
                    // this.addressService.sendAddressModel(this.componentModel);
                    _this.notificationService.show("Address saved. ", "success", "center", "top");
                    _this.shipmentService.sendShipmentModel(_this.componentModel);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.helperService.scrollOnTop();
            this.setCursorToFirstElement();
        }
    };
    /**
     * Load component model, or create a new one if component state is = Add
     * @param componentState
     */
    ShipmentSaveComponent.prototype.loadComponentModel = function (componentState) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            if (componentState === __WEBPACK_IMPORTED_MODULE_14_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
                _this.componentModel = new __WEBPACK_IMPORTED_MODULE_15_app_shipment_models_shipment_model__["a" /* ShipmentModel */]();
                _this.componentModel.id = -1;
                _this.componentModel.customerId = _this.currentUser.customerId;
                _this.componentModel.senderAddressInfo = "";
                _this.componentModel.senderFacilities = new Array();
                _this.componentModel.senderRequirements = new Array();
                _this.componentModel.senderTrucks = new Array();
                // receiver region
                _this.componentModel.receiverAddressInfo = "";
                _this.componentModel.receiverFacilities = new Array();
                _this.componentModel.receiverRequirements = new Array();
                _this.componentModel.receiverTrucks = new Array();
                _this.componentModel.shipmentDetails = new Array();
                _this.componentModel.shipmentTransporters = new Array();
                observer.next(true);
            }
            else {
                var shipmentId_1 = 0;
                _this.route.params.forEach(function (params) {
                    shipmentId_1 = params["id"];
                });
                _this.shipmentService
                    .get(shipmentId_1, _this.currentUser.customerId, _this.translateService.currentLanguage)
                    .subscribe(function (result) {
                    result.pickUpDate = new Date(result.pickUpDate);
                    result.deliveryDate = new Date(result.deliveryDate);
                    _this.componentModel = result;
                    //// load sender address
                    _this.addressService
                        .get(_this.componentModel.senderAddressId, _this.currentUser.customerId, _this.translateService.currentLanguage)
                        .subscribe(function (senderAddress) {
                        if (result) {
                            _this.senderSelectedAddress = senderAddress;
                            _this.senderSearchAddressControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](_this.senderSelectedAddress.name);
                            _this.initSenderSearchAddresses();
                            _this.componentModel.senderAddressInfo =
                                _this.senderSelectedAddress.location.street +
                                    ", " +
                                    _this.senderSelectedAddress.location.streetNumber +
                                    ", " +
                                    _this.senderSelectedAddress.location.zipCode +
                                    ", " +
                                    _this.senderSelectedAddress.location.city;
                        }
                    }, function (error) {
                        _this.errorHandler.handleError("Error on retrieving sender address for this shipment. Please contact and administrator!");
                    });
                    //// load receiver address
                    _this.addressService
                        .get(_this.componentModel.receiverAddressId, _this.currentUser.customerId, _this.translateService.currentLanguage)
                        .subscribe(function (receiverAddress) {
                        if (result) {
                            _this.receiverSelectedAddress = receiverAddress;
                            _this.receiverSearchAddressControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](_this.receiverSelectedAddress.name);
                            _this.initReceiverSearchAddresses();
                            _this.componentModel.receiverAddressInfo =
                                _this.receiverSelectedAddress.location.street +
                                    ", " +
                                    _this.receiverSelectedAddress.location.streetNumber +
                                    ", " +
                                    _this.receiverSelectedAddress.location.zipCode +
                                    ", " +
                                    _this.receiverSelectedAddress.location.city;
                        }
                    }, function (error) {
                        _this.errorHandler.handleError("Error on retrieving receiver address for this shipment. Please contact and administrator!");
                    });
                    console.log(_this.componentModel);
                    var self = _this;
                    observer.next(true);
                }, function (error) {
                    _this.errorHandler.handleError(error);
                    observer.next(false);
                });
            }
        });
    };
    /**
     * Load required data used to render form
     */
    ShipmentSaveComponent.prototype.loadParamsData = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            // return new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([
                _this.parametersDataService.getAddressRequirementsParameters(_this.translateService.currentLanguage),
                _this.parametersDataService.getPackTypes(_this.translateService.currentLanguage)
            ]).subscribe(function (data) {
                _this.facilitiesData = data[0]["facilities"];
                _this.requirementsData = data[0]["requirements"];
                _this.trucksData = data[0]["trucks"];
                _this.packTypes = data[1];
                _this.componentModel.senderFacilities = _this.parametersDataService.generateFacilityEntitiesList(_this.componentModel.id, _this.facilitiesData, _this.componentModel.senderFacilities);
                _this.componentModel.senderRequirements = _this.parametersDataService.generateRequirementsEntitiesList(_this.componentModel.id, _this.requirementsData, _this.componentModel.senderRequirements);
                _this.componentModel.senderTrucks = _this.parametersDataService.generateTruksEntitiesList(_this.componentModel.id, _this.trucksData, _this.componentModel.senderTrucks);
                _this.componentModel.receiverFacilities = _this.parametersDataService.generateFacilityEntitiesList(_this.componentModel.id, _this.facilitiesData, _this.componentModel.receiverFacilities);
                _this.componentModel.receiverRequirements = _this.parametersDataService.generateRequirementsEntitiesList(_this.componentModel.id, _this.requirementsData, _this.componentModel.receiverRequirements);
                _this.componentModel.receiverTrucks = _this.parametersDataService.generateTruksEntitiesList(_this.componentModel.id, _this.trucksData, _this.componentModel.receiverTrucks);
                observer.next(true);
                //   resolve(true);
            }, function (error) {
                _this.errorHandler.handleError(error);
                observer.next(false);
            });
        });
    };
    /**
     * On sender address selected
     * @param event
     * @param address
     */
    ShipmentSaveComponent.prototype.onSenderAddressSelected = function (event, address) {
        var _this = this;
        this.senderSelectedAddress = address;
        this.addressService
            .get(address.id, this.currentUser.customerId, this.translateService.currentLanguage)
            .subscribe(function (result) {
            if (result) {
                _this.senderSelectedAddress = result;
                _this.componentModel.senderAddressId = address.id;
                _this.componentModel.senderAddressInfo =
                    _this.senderSelectedAddress.location.street +
                        ", " +
                        _this.senderSelectedAddress.location.streetNumber +
                        ", " +
                        _this.senderSelectedAddress.location.zipCode +
                        ", " +
                        _this.senderSelectedAddress.location.city;
                _this.componentModel.senderContactPerson = _this.senderSelectedAddress.contactPerson;
                _this.componentModel.senderPhone = _this.senderSelectedAddress.phone;
                _this.componentModel.senderRemark = _this.senderSelectedAddress.remark;
                _this.componentModel.senderFacilities = _this.senderSelectedAddress.facilities;
                _this.componentModel.senderRequirements = _this.senderSelectedAddress.requirements;
                _this.componentModel.senderTrucks = _this.senderSelectedAddress.trucks;
                _this.componentModel.senderFacilities = _this.parametersDataService.generateFacilityEntitiesList(_this.componentModel.id, _this.facilitiesData, _this.senderSelectedAddress.facilities);
                _this.componentModel.senderRequirements = _this.parametersDataService.generateRequirementsEntitiesList(_this.componentModel.id, _this.requirementsData, _this.senderSelectedAddress.requirements);
                _this.componentModel.senderTrucks = _this.parametersDataService.generateTruksEntitiesList(_this.componentModel.id, _this.trucksData, _this.senderSelectedAddress.trucks);
                if (_this.componentModel.pickUpDate &&
                    _this.senderSelectedAddress.availabilities) {
                    _this.componentModel.senderAvailabilities = [];
                    if (_this.componentModel.pickUpDate &&
                        _this.senderSelectedAddress.availabilities) {
                        _this.componentModel.senderAvailabilities.push(_this.getAvailability(_this.componentModel.pickUpDate, _this.senderSelectedAddress.availabilities));
                    }
                }
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
        });
    };
    /**
     * On pickupdate selected
     * @param event
     */
    ShipmentSaveComponent.prototype.onPickupDateSelected = function (event) {
        if (this.componentModel.pickUpDate &&
            this.senderSelectedAddress &&
            this.senderSelectedAddress.availabilities) {
            this.componentModel.senderAvailabilities = [];
            if (this.componentModel.pickUpDate) {
                this.componentModel.senderAvailabilities.push(this.getAvailability(this.componentModel.pickUpDate, this.senderSelectedAddress.availabilities));
            }
        }
    };
    /**
     * On sender address selected
     * @param event
     * @param address
     */
    ShipmentSaveComponent.prototype.onReceiverAddressSelected = function (event, address) {
        var _this = this;
        this.receiverSelectedAddress = address;
        this.addressService
            .get(address.id, this.currentUser.customerId, this.translateService.currentLanguage)
            .subscribe(function (result) {
            if (result) {
                _this.receiverSelectedAddress = result;
                console.log(result);
                _this.componentModel.receiverAddressId = address.id;
                _this.componentModel.receiverAddressInfo =
                    _this.receiverSelectedAddress.location.street +
                        ", " +
                        _this.receiverSelectedAddress.location.streetNumber +
                        ", " +
                        _this.receiverSelectedAddress.location.zipCode +
                        ", " +
                        _this.receiverSelectedAddress.location.city;
                _this.componentModel.receiverContactPerson = _this.receiverSelectedAddress.contactPerson;
                _this.componentModel.receiverPhone = _this.receiverSelectedAddress.phone;
                _this.componentModel.receiverRemark = _this.receiverSelectedAddress.remark;
                _this.componentModel.receiverFacilities = _this.receiverSelectedAddress.facilities;
                _this.componentModel.receiverRequirements = _this.receiverSelectedAddress.requirements;
                _this.componentModel.receiverTrucks = _this.receiverSelectedAddress.trucks;
                _this.componentModel.receiverFacilities = _this.parametersDataService.generateFacilityEntitiesList(_this.componentModel.id, _this.facilitiesData, _this.receiverSelectedAddress.facilities);
                _this.componentModel.receiverRequirements = _this.parametersDataService.generateRequirementsEntitiesList(_this.componentModel.id, _this.requirementsData, _this.receiverSelectedAddress.requirements);
                _this.componentModel.receiverTrucks = _this.parametersDataService.generateTruksEntitiesList(_this.componentModel.id, _this.trucksData, _this.receiverSelectedAddress.trucks);
                _this.componentModel.receiverAvailabilities = [];
                if (_this.componentModel.deliveryDate &&
                    _this.receiverSelectedAddress.availabilities) {
                    _this.componentModel.receiverAvailabilities.push(_this.getAvailability(_this.componentModel.deliveryDate, _this.receiverSelectedAddress.availabilities));
                }
            }
        }, function (error) {
            _this.errorHandler.handleError(error);
        });
    };
    /**
     * On pickupdate selected
     * @param event
     */
    ShipmentSaveComponent.prototype.onDeliveryDateSelected = function (event) {
        if (this.componentModel.deliveryDate &&
            this.receiverSelectedAddress &&
            this.receiverSelectedAddress.availabilities) {
            this.componentModel.receiverAvailabilities = [];
            if (this.componentModel.deliveryDate &&
                this.receiverSelectedAddress.availabilities) {
                this.componentModel.receiverAvailabilities.push(this.getAvailability(this.componentModel.deliveryDate, this.receiverSelectedAddress.availabilities));
            }
        }
    };
    ShipmentSaveComponent.prototype.getAvailability = function (selectedData, availabilities) {
        var pickupDateDay = selectedData.getDay();
        pickupDateDay = pickupDateDay === 0 ? 7 : pickupDateDay;
        var availability = null;
        if (availabilities.length === 1 && availabilities[0].day === 0) {
            availability = availabilities[0];
        }
        else {
            availability = availabilities.find(function (item) { return item.day === pickupDateDay; });
        }
        availability.id = -1;
        return availability;
    };
    ShipmentSaveComponent.prototype.initSenderSearchAddresses = function () {
        var _this = this;
        this.senderSearchAddressControl.valueChanges
            .startWith(null)
            .debounceTime(600)
            .subscribe(function (term) {
            var searchTerm = term && term.length > 0 ? term : "";
            _this.searchSenderAddresses(searchTerm);
        });
    };
    ShipmentSaveComponent.prototype.initReceiverSearchAddresses = function () {
        var _this = this;
        this.receiverSearchAddressControl.valueChanges
            .startWith(null)
            .debounceTime(600)
            .subscribe(function (term) {
            var searchTerm = term && term.length > 0 ? term : "";
            _this.searchReceiverAddresses(searchTerm);
        });
    };
    ShipmentSaveComponent.prototype.searchSenderAddresses = function (searchTerm) {
        var _this = this;
        if (this.currentUser && this.currentUser.customerId) {
            this.addressService
                .getAll(this.currentUser.customerId, searchTerm, 0, 1000, this.translateService.currentLanguage)
                .subscribe(function (result) {
                _this.senderFoundAddresses = result;
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    ShipmentSaveComponent.prototype.searchReceiverAddresses = function (searchTerm) {
        var _this = this;
        if (this.currentUser && this.currentUser.customerId) {
            this.addressService
                .getAll(this.currentUser.customerId, searchTerm, 0, 1000, this.translateService.currentLanguage)
                .subscribe(function (result) {
                _this.receiverFoundAddresses = result;
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    /**
     * Add package row when add package is clicked
     */
    ShipmentSaveComponent.prototype.onAddPackageClick = function () {
        if (!this.componentModel.shipmentDetails) {
            this.componentModel.shipmentDetails = [];
        }
        var shipmentpackage = new __WEBPACK_IMPORTED_MODULE_18_app_shipment_models_shipment_detail_row_model___["a" /* ShipmentDetailRowModel */]();
        var shipmentMaster = new __WEBPACK_IMPORTED_MODULE_16_app_shipment_models_shipment_detail_model__["a" /* ShipmentDetailModel */]();
        shipmentMaster.id = -1;
        shipmentpackage.master = shipmentMaster;
        this.componentModel.shipmentDetails.push(shipmentpackage);
        return false;
    };
    /**
     * Add extra row when master pack is selected
     * @param currentShipmentRow
     */
    ShipmentSaveComponent.prototype.onMasterPackTypeChange = function (currentShipmentRow) {
        if (currentShipmentRow.master.packTypeId === 1) {
            var shipmentExtra = new __WEBPACK_IMPORTED_MODULE_16_app_shipment_models_shipment_detail_model__["a" /* ShipmentDetailModel */]();
            shipmentExtra.id = -1;
            currentShipmentRow.extras = [];
            currentShipmentRow.extras.push(shipmentExtra);
        }
        else {
            currentShipmentRow.extras = [];
        }
    };
    /**
     * Add extra row when master pack is selected
     * @param currentShipmentRow
     */
    ShipmentSaveComponent.prototype.onShipmentDetailsMasterRemove = function (currentShipmentRow, index) {
        if (currentShipmentRow.master.id > 0) {
            currentShipmentRow.master.toRemove = true;
            for (var i = 0; i < currentShipmentRow.extras.length; i++) {
                currentShipmentRow.extras[i].toRemove = true;
            }
        }
        else {
            this.componentModel.shipmentDetails.splice(index, 1);
        }
        this.computeTotals();
    };
    /**
     * Add extra row when master pack is selected
     * @param currentShipmentRow
     */
    ShipmentSaveComponent.prototype.onShipmentDetailsExtraRemove = function (currentShipmentRow, extra, index) {
        if (extra.id > 0) {
            extra.toRemove = true;
        }
        else {
            currentShipmentRow.extras.splice(index, 1);
        }
    };
    /**
     * Compute totals
     */
    ShipmentSaveComponent.prototype.computeTotals = function () {
        var totalQuantity = 0;
        var totalVolume = 0;
        var totalWeight = 0;
        if (this.componentModel &&
            this.componentModel.shipmentDetails &&
            this.componentModel.shipmentDetails.filter(function (item) { return !item.master.toRemove; })
                .length > 0) {
            var rows = this.componentModel.shipmentDetails.filter(function (item) { return !item.master.toRemove; });
            for (var i = 0; i < rows.length; i++) {
                var shipmentDetail = rows[i];
                if (shipmentDetail.master.quantity)
                    totalQuantity += shipmentDetail.master.quantity;
                if (shipmentDetail.master.quantity && shipmentDetail.master.weight)
                    totalWeight +=
                        shipmentDetail.master.quantity * shipmentDetail.master.weight;
                if (shipmentDetail.master.quantity &&
                    shipmentDetail.master.length &&
                    shipmentDetail.master.width &&
                    shipmentDetail.master.height)
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
    };
    ShipmentSaveComponent.prototype.isModelValid = function () {
        if (!this.componentModel.senderAvailabilities ||
            (this.componentModel.senderAvailabilities &&
                this.componentModel.senderAvailabilities.length === 1 &&
                this.componentModel.senderAvailabilities[0].isClosed))
            return false;
        if (!this.componentModel.receiverAvailabilities ||
            (this.componentModel.receiverAvailabilities &&
                this.componentModel.receiverAvailabilities.length === 1 &&
                this.componentModel.receiverAvailabilities[0].isClosed))
            return false;
        if (!this.componentModel.shipmentDetails ||
            this.componentModel.shipmentDetails.length <= 0)
            return false;
        return true;
    };
    ShipmentSaveComponent.prototype.setCursorToFirstElement = function () {
        if (this.componentState === __WEBPACK_IMPORTED_MODULE_14_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
            var element = document.getElementById("reference");
            if (element) {
                element.focus();
            }
        }
    };
    ShipmentSaveComponent.prototype.formatNumber = function (number) {
        var str = number.toFixed(3).replace(/\.000$/, "");
        return str;
    };
    ShipmentSaveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: "app-shipment-save-component",
            template: __webpack_require__("../../../../../src/app/shipment/components/shipment-save.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_helperService__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_helperService__["a" /* HelperService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9_app_address_services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_address_services_address_service__["a" /* AddressService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_17_app_shipment_services_shipment_service__["a" /* ShipmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17_app_shipment_services_shipment_service__["a" /* ShipmentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10_app_shared_common_services_parameters_data_service__["a" /* ParametersDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_shared_common_services_parameters_data_service__["a" /* ParametersDataService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_localization_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_localization_translate_service__["a" /* TranslateService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_12_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_13_app_shared_common_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_shared_common_services_notification_service__["a" /* NotificationService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* DateAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* DateAdapter */]) === "function" && _l || Object])
    ], ShipmentSaveComponent);
    return ShipmentSaveComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-save.component.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/models/shipment-detail-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentDetailModel; });
var ShipmentDetailModel = /** @class */ (function () {
    function ShipmentDetailModel() {
    }
    return ShipmentDetailModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-detail-model.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/models/shipment-detail-row-model .ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentDetailRowModel; });
var ShipmentDetailRowModel = /** @class */ (function () {
    function ShipmentDetailRowModel() {
    }
    return ShipmentDetailRowModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-detail-row-model .js.map

/***/ }),

/***/ "../../../../../src/app/shipment/models/shipment-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentModel; });
var ShipmentModel = /** @class */ (function () {
    function ShipmentModel() {
    }
    return ShipmentModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-model.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/models/shipment-row-viewmodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentRowViewModel; });
var ShipmentRowViewModel = /** @class */ (function () {
    function ShipmentRowViewModel() {
    }
    return ShipmentRowViewModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-row-viewmodel.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/models/shipment-transporter-status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentTransporterStatus; });
var ShipmentTransporterStatus;
(function (ShipmentTransporterStatus) {
    ShipmentTransporterStatus[ShipmentTransporterStatus["unassigned"] = 0] = "unassigned";
    ShipmentTransporterStatus[ShipmentTransporterStatus["openMarket"] = 1] = "openMarket";
    ShipmentTransporterStatus[ShipmentTransporterStatus["assigned"] = 2] = "assigned";
    ShipmentTransporterStatus[ShipmentTransporterStatus["completed"] = 3] = "completed";
})(ShipmentTransporterStatus || (ShipmentTransporterStatus = {}));
//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-transporter-status.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/services/shipment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__ = __webpack_require__("../../../../../src/app/shared/common/services/httpService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_common_constants__ = __webpack_require__("../../../../../src/app/shared/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShipmentService = /** @class */ (function () {
    function ShipmentService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
        this.serviceUrl = __WEBPACK_IMPORTED_MODULE_3_app_shared_common_constants__["a" /* Constants */].serverUrl + "api/Shipments/";
        this.shipmentModel = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.shipmentModelReceivedHandler$ = this.shipmentModel.asObservable();
    }
    ShipmentService.prototype.sendShipmentModel = function (value) {
        this.shipmentModel.next(value);
    };
    // don't forget to reset handler
    ShipmentService.prototype.resetSendShipmentModelHandler = function () {
        this.shipmentModel.next(null);
    };
    /**
     * get biometrics
     * @param employeeEncryptedData
     * @param language
     */
    ShipmentService.prototype.get = function (id, customerId, language) {
        return this.http
            .get(this.serviceUrl + "get" + "/" + id + "/" + customerId + "/" + language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * Get all shipments
     * @param customerId
     * @param startItem
     * @param numberOfRetrievedItems
     * @param language
     */
    ShipmentService.prototype.getAll = function (customerId, shipmentStatus, getPending, startItem, numberOfRetrievedItems, language) {
        return this.http
            .get(this.serviceUrl +
            "getAll" +
            "/" +
            customerId +
            "/" +
            shipmentStatus +
            "/" +
            getPending +
            "/" +
            startItem +
            "/" +
            numberOfRetrievedItems +
            "/" +
            language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
  * Get number of shipments, used for paging
  * @param customerId
  * @param startItem
  * @param numberOfRetrievedItems
  * @param language
  */
    ShipmentService.prototype.getCount = function (customerId, shipmentStatus, language) {
        return this.http
            .get(this.serviceUrl +
            "getCount" +
            "/" +
            customerId +
            "/" +
            shipmentStatus +
            "/" +
            language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * Save shipment
     * @param medicalEncryptedData
     * @param componentName
     * @param language
     */
    ShipmentService.prototype.save = function (model, language) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ "Content-Type": "application/json" });
        var data = JSON.stringify(model);
        return this.http
            .post(this.serviceUrl + "save/" + language, data, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
   * assignToOpenMarket shipment
   * @param medicalEncryptedData
   * @param componentName
   * @param language
   */
    ShipmentService.prototype.assignToOpenMarket = function (shipmentId, customerId, language) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ "Content-Type": "application/json" });
        var data = JSON.stringify({});
        return this.http
            .post(this.serviceUrl +
            "assignToOpenMarket/" +
            shipmentId +
            "/" +
            customerId +
            "/" +
            language, data, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
   * moveToUnassigned shipment
   * @param medicalEncryptedData
   * @param componentName
   * @param language
   */
    ShipmentService.prototype.moveToUnassigned = function (shipmentId, customerId, language) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ "Content-Type": "application/json" });
        var data = JSON.stringify({});
        return this.http
            .post(this.serviceUrl +
            "moveToUnassigned/" +
            shipmentId +
            "/" +
            customerId +
            "/" +
            language, data, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
    * Delete address
    * @param medicalEncryptedData
    * @param componentName
    * @param language
    */
    ShipmentService.prototype.delete = function (shipmentId, customerId, language) {
        return this.http
            .delete(this.serviceUrl +
            "delete/" +
            shipmentId +
            "/" +
            customerId +
            "/" +
            language)
            .map(function (response) { return response.json(); });
    };
    /**
   * Get all shipments
   * @param customerId
   * @param startItem
   * @param numberOfRetrievedItems
   * @param language
   */
    ShipmentService.prototype.getShipmentFilters = function (customerId, language) {
        return this.http
            .get(this.serviceUrl +
            "getShipmentFilters" +
            "/" +
            customerId +
            "/" +
            language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    ShipmentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_shared_common_services_httpService__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _b || Object])
    ], ShipmentService);
    return ShipmentService;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment.service.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/shipment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_md_md_module__ = __webpack_require__("../../../../../src/app/shared/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shipment_components_shipment_overview_component__ = __webpack_require__("../../../../../src/app/shipment/components/shipment-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shipment_components_shipment_save_component__ = __webpack_require__("../../../../../src/app/shipment/components/shipment-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_common_common_app_module__ = __webpack_require__("../../../../../src/app/shared/common/common-app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shipment_services_shipment_service__ = __webpack_require__("../../../../../src/app/shipment/services/shipment.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ShipmentModule = /** @class */ (function () {
    function ShipmentModule() {
    }
    ShipmentModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_app_shared_md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_10_app_shared_common_common_app_module__["a" /* CommonAppModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyChUim14iXhf6riJ73R3qxNxnMls2SGZDA'
                }),
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8_app_shipment_components_shipment_overview_component__["a" /* ShipmentOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_9_app_shipment_components_shipment_save_component__["a" /* ShipmentSaveComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11_app_shipment_services_shipment_service__["a" /* ShipmentService */]
            ]
        })
    ], ShipmentModule);
    return ShipmentModule;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map