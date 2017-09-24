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
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
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

module.exports = "<div #maincontent class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10\">\r\n                <div class=\"form-group label-floating is-empty\">\r\n                    <label class=\"control-label\"></label>\r\n                    <input type=\"text\" class=\"form-control\" [formControl]=\"searchTerm\" placeholder=\"Search address\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button class=\"btn btn-info\" [routerLink]=\"['/address-add']\">(+) Create a new address</button>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <!-- <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                        <i class=\"material-icons\">assignment</i>\r\n                    </div> -->\r\n                    <div *ngIf=\"componentModel && componentModel.length > 0\" class=\"card-content table-full-width\">\r\n                        <!--<h4 class=\"card-title\">Regular Table with Colors</h4>-->\r\n                        <div class=\"table-responsive\" id=\"addresseGrid\" *ngIf=\"componentModel && componentModel.length > 0\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Name</th>\r\n                                        <th>Street, Number, Zipcode, City</th>\r\n                                        <th>Country code</th>\r\n                                        <th>Contact person</th>\r\n                                        <th>Phone</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n\r\n                                    <ng-container *ngFor=\"let addressRow of componentModel; let rowindex = index\">\r\n                                        <tr (click)=\"onClickShowActions(addressRow, rowindex)\" [ngClass]=\"(addressRow.viewActions ||addressRow.viewEdit   ? 'danger' : (rowindex%2==0?'info':''))\">\r\n                                            <td>{{addressRow.address.name}}</td>\r\n                                            <td>{{addressRow.address.location.street + ', ' + addressRow.address.location.streetNumber + ', ' + addressRow.address.location.zipCode + ', ' + addressRow.address.location.city}}</td>\r\n                                            <td>{{addressRow.address.location.countryCode}}</td>\r\n                                            <td>{{addressRow.address.contactPerson}}</td>\r\n                                            <td>{{addressRow.address.phone}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr id=\"actionsRow\" *ngIf=\"addressRow.viewActions\">\r\n                                            <td id=\"actionsRowContent\" colspan=\"4\" align=\"center\">\r\n                                                <button class=\"btn btn-warning\" (click)=\"onClickEditAddress(addressRow)\">\r\n                                                            <span class=\"btn-label\">\r\n                                                                <i class=\"material-icons\">border_color</i>\r\n                                                            </span>\r\n                                                            Edit address\r\n                                                        </button>\r\n                                                <button class=\"btn btn-danger\" (click)=\"onClickDeleteAddress(addressRow.address.id)\">\r\n                                                            Delete address\r\n                                                            <span class=\"btn-label btn-label-right\">\r\n                                                                <i class=\"material-icons\">delete_forever</i>\r\n                                                            </span>\r\n                                                        </button>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr id=\"editAddressRow\" *ngIf=\"addressRow.viewEdit\">\r\n                                            <td colspan=\"4\">\r\n                                                <router-outlet></router-outlet>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </ng-container>\r\n                                </tbody>\r\n                            </table>\r\n\r\n                        </div>\r\n                        <ul *ngIf=\"pagesCollection && pagesCollection.length > 0\" class=\"pagination pagination-info\">\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate((currentPage -1 < 0 ? 0 : currentPage -1))\"> prev</a>\r\n                            </li>\r\n                            <li *ngFor=\"let page of pagesCollection;  let idx = index\" [ngClass]=\"currentPage == page ? 'active' : ''\">\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate(page)\"> {{page + 1}}</a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"javascript:void(0);\" (click)=\"paginate((currentPage +1 > pagesCollection.length -1 ? pagesCollection.length -1 : currentPage +1))\"> next</a>\r\n                            </li>\r\n                        </ul>\r\n\r\n                    </div>\r\n                    <h4 *ngIf=\"!componentModel || componentModel.length <= 0\">\r\n                        &nbsp;&nbsp;&nbsp;&nbsp;There are no addresses. You can create a new one by clicking on 'Create new address' button\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
    function AddressOverviewComponent(router, route, addressService, helperService, errorHandler, authenticationService, translateService) {
        this.router = router;
        this.route = route;
        this.addressService = addressService;
        this.helperService = helperService;
        this.errorHandler = errorHandler;
        this.authenticationService = authenticationService;
        this.translateService = translateService;
        // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
        this.componentModel = [];
        // search term
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormControl */]();
        this.currentAddressId = -1;
        this.currentPage = 0;
        this.pageSize = 4;
    }
    AddressOverviewComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authenticationService.getCurrentUser();
        this.getNumberOfAddresses('', false);
        this.getAddresses();
        this.register_updateSavedModel_handler();
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
    AddressOverviewComponent.prototype.getAddresses = function () {
        var _this = this;
        var searchquery = '';
        this.route.queryParams.subscribe(function (params) {
            searchquery = params['searchquery'] ? params['searchquery'].toString() : '';
        });
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormControl */](searchquery);
        this.initSearchAddresses();
        if (this.currentUser && this.currentUser.customerId) {
            this.addressService.getAll(this.currentUser.customerId, searchquery, (this.pageSize * this.currentPage) + 1, this.pageSize, this.translateService.currentLanguage).subscribe(function (result) {
                _this.componentModel = [];
                if (result && result.length > 0) {
                    if (_this.route.firstChild) {
                        _this.currentAddressId = +_this.route.firstChild.snapshot.params['id'];
                    }
                    for (var i = 0; i < result.length; i++) {
                        var addressRow = new __WEBPACK_IMPORTED_MODULE_2_app_address_models_address_row_viewmodel__["a" /* AddressRowViewModel */]();
                        addressRow.address = result[i];
                        // if url contains edit then open it by default
                        //addressRow.viewActions = result[i].id == this.currentAddressId;
                        addressRow.viewActions = result[i].id == _this.currentAddressId;
                        _this.componentModel.push(addressRow);
                    }
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    AddressOverviewComponent.prototype.getNumberOfAddresses = function (searchQueryParam, ignoreQueryString) {
        var _this = this;
        this.pagesCollection = null;
        if (searchQueryParam.length <= 0 && !ignoreQueryString) {
            this.route.queryParams.subscribe(function (params) {
                searchQueryParam = params['searchquery'] ? params['searchquery'].toString() : '';
            });
        }
        if (this.currentUser && this.currentUser.customerId) {
            this.addressService.getAll(this.currentUser.customerId, searchQueryParam, 0, 10000, this.translateService.currentLanguage).subscribe(function (result) {
                _this.pagesCollection = [];
                if (result) {
                    var numberOfPages_1 = Math.round(result.length / _this.pageSize);
                    numberOfPages_1 = numberOfPages_1 < 0 ? 1 : numberOfPages_1;
                    var self_1 = _this;
                    setTimeout(function () {
                        for (var i = 0; i < numberOfPages_1; i++) {
                            self_1.pagesCollection.push(i);
                        }
                    }, 100);
                }
            }, function (error) {
                _this.errorHandler.handleError(error);
            });
        }
    };
    AddressOverviewComponent.prototype.searchAddresses = function (searchTerm) {
        var _this = this;
        if (this.currentUser && this.currentUser.customerId) {
            this.currentPage = 0;
            this.addressService.getAll(this.currentUser.customerId, searchTerm, (this.pageSize * this.currentPage) + 1, this.pageSize, this.translateService.currentLanguage).subscribe(function (result) {
                _this.componentModel = [];
                if (result && result.length > 0) {
                    for (var i = 0; i < result.length; i++) {
                        var addressRow = new __WEBPACK_IMPORTED_MODULE_2_app_address_models_address_row_viewmodel__["a" /* AddressRowViewModel */]();
                        addressRow.address = result[i];
                        // if url contains edit then open it by default
                        //addressRow.viewActions = result[i].id == this.currentAddressId;
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
        this.searchTerm.valueChanges
            .debounceTime(600)
            .subscribe(function (term) {
            _this.router.navigate(['/address-overview'], {
                relativeTo: _this.route,
                queryParams: {
                    searchquery: term ? term : ''
                }
            });
            var searchTerm = term && term.length > 0 ? term : '';
            _this.getNumberOfAddresses(term, true);
            _this.searchAddresses(searchTerm);
        });
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
    AddressOverviewComponent.prototype.register_updateSavedModel_handler = function () {
        var _this = this;
        this.subscriptionReceiveUpdatedAddress = this.addressService.addressModelReceivedHandler$.subscribe(function (address) {
            if (address != null) {
                var modelToUpdate = _this.componentModel.filter(function (item) { return item.address.id == address.id; })[0];
                if (modelToUpdate) {
                    modelToUpdate.address = address;
                    var $main_panel = $('.main-panel');
                    $main_panel.scrollTop(100).perfectScrollbar('update');
                    // $('body').scrollTop(100).perfectScrollbar('update');
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
            if (i != index)
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
    };
    /** Show edit address */
    AddressOverviewComponent.prototype.onClickEditAddress = function (addressRow) {
        addressRow.viewActions = false;
        this.router.navigate(['./address-edit/' + addressRow.address.id], { relativeTo: this.route });
        addressRow.viewEdit = !addressRow.viewEdit;
    };
    /** Show edit address */
    AddressOverviewComponent.prototype.onClickDeleteAddress = function (addressId) {
        var self = this;
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(function () {
            self.addressService.delete(addressId).subscribe(function (result) {
                if (result) {
                    swal('Deleted!', 'Your file has been deleted.', 'success');
                    // update model
                    self.componentModel = self.componentModel.filter(function (item) { return item.address.id != addressId; });
                }
                else {
                    swal('Not Deleted!', 'An error occured. Your file has not been deleted.  Please contact an administrator.', 'error');
                }
            }, function (error) {
                swal('Not Deleted!', 'An error occured. Your file has not been deleted.  Please contact an administrator.', 'error');
                self.errorHandler.handleError(error);
            });
        }, 
        // delete canceled
        function (dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                swal('Cancelled', 'Your address is safe :)', 'error');
            }
        });
    };
    AddressOverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'address-overview',
            template: __webpack_require__("../../../../../src/app/address/components/address-overview.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_address_services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_address_services_address_service__["a" /* AddressService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_helperService__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_shared_common_services_helperService__["a" /* HelperService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_app_shared_common_services_localization_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_shared_common_services_localization_translate_service__["a" /* TranslateService */]) === "function" && _g || Object])
    ], AddressOverviewComponent);
    return AddressOverviewComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/address/components/address-save.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- style=\"margin-top:0px!important\" -->\r\n<div class=\"main-content\" *ngIf=\"componentModel\" [style.margin-top]=\"componentState > 0 ? '0px':'inherit;'\">\r\n    <div class=\"container-fluid\">\r\n        <form #formAddress=\"ngForm\" novalidate class=\"form-horizontal\" novalidate (ngSubmit)=\"save(formAddress.value, formAddress.valid)\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-content\">\r\n                            <form id=\"searchForm\" #searchForm=\"ngForm\" [hidden]=\"componentState !== 0 \">\r\n                                <div [ngClass]=\"'form-group label-floating ' + ((!searchControl || !searchControl.valid ) && formAddress.submitted ? ' has-error' : '') \">\r\n                                    <label for=\"\" class=\"control-label\">\r\n                                            Search by address\r\n                                            <span class=\"star\">*</span>\r\n                                        </label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"searchControl\" name=\"searchControl\" type=\"text\" #searchElement [formControl]=\"searchControl\" placeholder=\"\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\">\r\n                                </div>\r\n                            </form>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + ((componentModel.name  && componentModel.name.length > 0) ? '' : 'is-empty') + (!componentModel.name  && formAddress.submitted ? ' has-error' : '') \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Name\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" required class=\"form-control\" id=\"addressName\" name=\"addressName\" [(ngModel)]=\"componentModel.name\">\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-8\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'  + ((!componentModel.location || !componentModel.location.street ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                                <label for=\"\" class=\"\">Street <span class=\"star\">*</span></label>\r\n                                                <input type=\"text\" id=\"street\" name=\"street\" [ngClass]=\"'form-control '  + ((!componentModel.location || !componentModel.location.street ) && formAddress.submitted ? ' ' : 'nofocusline')\" disabled=\"\" [(ngModel)]=\"componentModel.location.street\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'  + ((!componentModel.location || !componentModel.location.streetNumber ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                                <label for=\"\" class=\"\">Number<span class=\"star\">*</span></label>\r\n                                                <input type=\"text\" id=\"streetNumber\" name=\"streetNumber\" [ngClass]=\"'form-control '  + ((!componentModel.location || !componentModel.location.streetNumber ) && formAddress.submitted ? ' ' : 'nofocusline')\" disabled=\"\" [(ngModel)]=\"componentModel.location.streetNumber\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-3\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'  + ((!componentModel.location || !componentModel.location.zipCode ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                                <label for=\"\" class=\"\">\r\n                                                        Zipcode\r\n                                                        <span class=\"star\">*</span>\r\n                                                    </label>\r\n                                                <input type=\"text\" id=\"zipcode\" name=\"zipCode\" [ngClass]=\"'form-control '  + ((!componentModel.location || !componentModel.location.zipCode ) && formAddress.submitted ? ' ' : 'nofocusline') \" disabled=\"\" [(ngModel)]=\"componentModel.location.zipCode\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'  + ((!componentModel.location || !componentModel.location.city ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                                <label for=\"\" class=\"\">City         <span class=\"star\">*</span></label>\r\n                                                <input type=\"text\" id=\"city\" name=\"city\" [ngClass]=\"'form-control '  + ((!componentModel.location || !componentModel.location.city ) && formAddress.submitted ? ' ' : 'nofocusline')\" disabled=\"\" [(ngModel)]=\"componentModel.location.city\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <div [ngClass]=\"'form-group label-floating is-focused'  + ((!componentModel.location || !componentModel.location.country ) && formAddress.submitted ? ' has-error' : '')\">\r\n                                                <label for=\"\" class=\"\">Country         <span class=\"star\">*</span></label>\r\n                                                <input type=\"text\" id=\"country\" name=\"country\" [ngClass]=\"'form-control '  + ((!componentModel.location || !componentModel.location.country ) && formAddress.submitted ? ' ' : 'nofocusline')\" disabled=\"\" [(ngModel)]=\"componentModel.location.country\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + (componentModel.contactPerson  && componentModel.contactPerson.length > 0 ? '' : 'is-empty ' + ((!componentModel.contactPerson ) && formAddress.submitted ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label \">\r\n                                        Contactperson\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.contactPerson\" id=\"contactperson\" name=\"contactPerson\">\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"'form-group label-floating ' + (componentModel.email  && componentModel.email.length > 0 ? '' : 'is-empty ' + ((!componentModel.email || !email || !email.valid) && formAddress.submitted ? ' has-error' : '')) \">\r\n                                <label class=\"control-label\">\r\n                                        Email address\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"email\" required class=\"form-control\" [(ngModel)]=\"componentModel.email\" id=\"email\" name=\"addressEmail\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$\">\r\n\r\n                                <small *ngIf=\"(!componentModel.email || !emailValidator(componentModel.email)) && formAddress.submitted\" class=\"text-danger\">\r\n                                        Email is required and format should be <i>john@doe.com</i>.\r\n                                    </small>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"form-group label-floating\" [ngClass]=\"'form-group label-floating ' + (componentModel.phone  && componentModel.phone.length > 0 ? '' : 'is-empty' + (((!componentModel.phone) && formAddress.submitted ) ? ' has-error' : '')) \">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Phone\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"componentModel.phone\" id=\"phone\" name=\"phone\">\r\n                            </div>\r\n\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Remarks\r\n                                    </label>\r\n                                <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"componentModel.remark\" id=\"remark\" name=\"openremarkNow\"></textarea>\r\n                            </div>\r\n\r\n                            <!-- Opening hours -->\r\n                            <h3>Opening hours</h3>\r\n                            <div class=\"form-group label-floating\">\r\n                                <div class=\"togglebutton\">\r\n                                    <label>\r\n                                            <input type=\"checkbox\" (click)=\"onCommonAvailabilityClick()\" [(ngModel)]=\"componentModel.commonAvailability\" name=\"commonAvailability\"> Set the same interval for all week days\r\n                                        </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\" *ngFor=\"let availability of componentModel.availabilities\">\r\n                                <span>\r\n                                        {{getDay(availability.day)}}\r\n                                    </span>\r\n\r\n                                <!-- <div id=\"sliderDouble\" class=\"slider slider-info\"></div> -->\r\n                                <address-availability-slider [availability]=\"availability\"></address-availability-slider>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!--  ***************** Right side *************** -->\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-content\">\r\n                            <!-- Map -->\r\n                            <h4 class=\"card-title\">Map</h4>\r\n                            <div id=\"regularMap\" class=\"map\">\r\n                            </div>\r\n\r\n                            <!-- Facilities -->\r\n                            <h3>Facilities</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let facility of componentModel.facilities\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">{{facility.iconName}}</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"facility.active\" [checked]=\"facility.active\" name=\"facilityactive_{{facility.facilityId}}\"> {{facility.description}}\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Truck -->\r\n                            <h3>Truck</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let truck of componentModel.trucks\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">{{truck.iconName}}</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"truck.active\" [checked]=\"truck.active==true\" name=\"truckactive_{{truck.truckId}}\"> {{truck.description}}\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Transport requirments -->\r\n                            <h3>Transport requirements</h3>\r\n                            <div class=\"input-group\" *ngFor=\"let requirement of componentModel.requirements\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">{{requirement.iconName}}</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"requirement.active\" [checked]=\"requirement.active\" name=\"requirementactive_{{requirement.requirementId}}\"> {{requirement.description}}\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card-footer text-center\">\r\n                <button type=\"submit\" class=\"btn btn-rose btn-fill\">Save</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_common_models_requirement_model__ = __webpack_require__("../../../../../src/app/shared/common/models/requirement-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_common_models_truck_model__ = __webpack_require__("../../../../../src/app/shared/common/models/truck-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_globalErrorHandler__ = __webpack_require__("../../../../../src/app/shared/common/services/globalErrorHandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_address_models_address_location_model__ = __webpack_require__("../../../../../src/app/address/models/address-location-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_shared_common_services_parameters_data_service__ = __webpack_require__("../../../../../src/app/shared/common/services/parameters-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_authentication_services_authentication_service__ = __webpack_require__("../../../../../src/app/authentication/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_shared_common_helper_component_state_type__ = __webpack_require__("../../../../../src/app/shared/common/helper/component-state-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_address_models_address_facility_model__ = __webpack_require__("../../../../../src/app/address/models/address-facility-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_shared_common_models_address_availability_model__ = __webpack_require__("../../../../../src/app/shared/common/models/address-availability-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_shared_common_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/common/services/notification.service.ts");
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
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        // get component state
        this.componentState = this.helperService.getComponentStateByUrl(this.router.url);
        // load required data
        this.loadComponentModel(this.componentState).subscribe(function (modelLoaded) {
            if (modelLoaded) {
                _this.loadParamsData().subscribe(function (paramsDataLoaded) {
                    if (paramsDataLoaded) {
                        _this.initDatetimePicker();
                        //this.initSelectionSlider();
                        _this.register_googleMapsPlaceSearchHandler();
                    }
                });
            }
        });
    };
    AddressSaveComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        setTimeout(function () {
            if (self.componentState == __WEBPACK_IMPORTED_MODULE_15_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
                var element = document.getElementById("searchControl");
                if (element) {
                    element.focus();
                }
            }
        }, 1000);
    };
    AddressSaveComponent.prototype.save = function (model, isValid) {
        var _this = this;
        console.log(model, isValid);
        if (isValid) {
            this.addressService.save(this.componentModel).subscribe(function (result) {
                if (_this.componentState == __WEBPACK_IMPORTED_MODULE_15_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
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
            debugger;
            if (componentState == __WEBPACK_IMPORTED_MODULE_15_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add) {
                _this.createAddressEmptyModel();
                //set current position
                _this.createMap(50.89, 4.34);
                observer.next(true);
            }
            else {
                var addressId_1 = 0;
                _this.route.params.forEach(function (params) {
                    addressId_1 = params['id'];
                    _this.addressService.get(addressId_1, _this.translateService.currentLanguage).subscribe(function (result) {
                        _this.componentModel = result;
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
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].forkJoin([
                _this.parametersDataService.getFacilities(_this.translateService.currentLanguage),
                _this.parametersDataService.getRequirements(_this.translateService.currentLanguage),
                _this.parametersDataService.getTruks(_this.translateService.currentLanguage),
            ])
                .subscribe(function (data) {
                _this.updateModelWithFacilities(data[0]);
                _this.updateModelWithRequirements(data[1]);
                _this.updateModelWithTrucks(data[2]);
                observer.next(true);
                //   resolve(true);
            }), function (error) {
                //   reject(false);
                observer.next(false);
                _this.errorHandler.handleError(error);
            };
            //  });
        });
    };
    /**
     * Register google maps place handler.
     * When palce is changed, handler to update model is registered
     */
    AddressSaveComponent.prototype.register_googleMapsPlaceSearchHandler = function () {
        var _this = this;
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            // create map
            var addressesAutocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {});
            // init place change listener
            addressesAutocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = addressesAutocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.updateLocationModel(place);
                    _this.updateOpeningHours(place);
                    _this.createMap(_this.componentModel.location.latitude, _this.componentModel.location.longitude);
                    if (_this.componentState == __WEBPACK_IMPORTED_MODULE_15_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add)
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
        this.componentModel.location = new __WEBPACK_IMPORTED_MODULE_12_app_address_models_address_location_model__["a" /* AddressLocationModel */]();
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
        if (place.formatted_address) {
            this.componentModel.name = place.formatted_address;
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
            var availability = new __WEBPACK_IMPORTED_MODULE_17_app_shared_common_models_address_availability_model__["a" /* AddressAvailabilityModel */]();
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
            if (place.opening_hours.periods && place.opening_hours.periods.length == 1
                && place.opening_hours.periods[0].open && place.opening_hours.periods[0].open.day == 0 && place.opening_hours.periods[0].open.hours == 0
                && place.opening_hours.periods[0].open.minutes == 0 && !place.opening_hours.periods[0].close) {
                this.componentModel.commonAvailability = true;
                var availability = new __WEBPACK_IMPORTED_MODULE_17_app_shared_common_models_address_availability_model__["a" /* AddressAvailabilityModel */]();
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
                    var googleDayIndex = day == 7 ? 0 : day;
                    var availability = new __WEBPACK_IMPORTED_MODULE_17_app_shared_common_models_address_availability_model__["a" /* AddressAvailabilityModel */]();
                    availability.id = -1;
                    availability.day = day;
                    var periods = place.opening_hours.periods.filter(function (item) { return item.open && item.open.day == googleDayIndex; });
                    if (periods && periods.length > 0) {
                        var periodStart = periods[0];
                        if (!periodStart.close) {
                            availability.amStart = '00:00';
                            availability.amStop = '24:00';
                        }
                        else {
                            availability.amStart = ("0" + periodStart.open.hours).slice(-2) + ':' + ("0" + periodStart.open.minutes).slice(-2);
                            availability.amStop = ("0" + periodStart.close.hours).slice(-2) + ':' + ("0" + periodStart.close.minutes).slice(-2);
                        }
                        var periodEnd = periods.length > 1 ? periods[1] : null;
                        if (periodEnd) {
                            availability.pmStart = ("0" + periodEnd.open.hours).slice(-2) + ':' + ("0" + periodEnd.open.minutes).slice(-2);
                            availability.pmStop = ("0" + periodEnd.close.hours).slice(-2) + ':' + ("0" + periodEnd.close.minutes).slice(-2);
                        }
                        else {
                            availability.pmStart = availability.amStop;
                            availability.pmStop = availability.amStop;
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
            var map = new google.maps.Map(document.getElementById("regularMap"), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                title: "Map"
            });
            marker.setMap(map);
        });
    };
    /**
   * Create address initial model, on add
   */
    AddressSaveComponent.prototype.createAddressEmptyModel = function () {
        this.componentModel = new __WEBPACK_IMPORTED_MODULE_5_app_address_models_address_model__["a" /* AddressModel */]();
        this.componentModel.id = -1;
        this.componentModel.commonAvailability = false;
        this.generateAvailabilities();
        this.componentModel.customerId = this.currentUser.customerId;
        this.componentModel.location = new __WEBPACK_IMPORTED_MODULE_12_app_address_models_address_location_model__["a" /* AddressLocationModel */]();
        this.componentModel.facilities = [];
        this.componentModel.requirements = [];
        this.componentModel.trucks = [];
    };
    AddressSaveComponent.prototype.generateAvailabilities = function () {
        var availabilitiesList = new Array();
        if (!this.componentModel.commonAvailability) {
            this.componentModel.availabilities = [];
            if (this.componentModel.availabilities.length < 7) {
                for (var day = 1; day <= 7; day++) {
                    var availability = new __WEBPACK_IMPORTED_MODULE_17_app_shared_common_models_address_availability_model__["a" /* AddressAvailabilityModel */]();
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
            var availability = new __WEBPACK_IMPORTED_MODULE_17_app_shared_common_models_address_availability_model__["a" /* AddressAvailabilityModel */]();
            availability.id = -1;
            availability.day = 0;
            availabilitiesList.push(availability);
        }
        this.componentModel.availabilities = availabilitiesList;
    };
    /**
     * update component model with facilities
     * @param paramsList
     */
    AddressSaveComponent.prototype.updateModelWithFacilities = function (paramsList) {
        ///// remove items from address that are no longer in facility params list
        this.componentModel.facilities = this.componentModel.facilities.filter(function (item) { return paramsList.filter(function (paramitem) { return paramitem.id == item.facilityId; }).length > 0; });
        var _loop_2 = function (i) {
            var paramModel = this_2.componentModel.facilities.find(function (item) { return item.facilityId == paramsList[i].id; });
            var modelItem = null;
            if (paramModel) {
                modelItem = paramModel;
                modelItem.description = paramsList[i].description;
                modelItem.iconName = paramsList[i].iconName;
            }
            else {
                modelItem = new __WEBPACK_IMPORTED_MODULE_16_app_address_models_address_facility_model__["a" /* AddressFacilityModel */]();
                modelItem.id = -1;
                modelItem.addressId = this_2.componentModel.id;
                modelItem.facilityId = paramsList[i].id;
                modelItem.active = true;
                modelItem.description = paramsList[i].description;
                modelItem.iconName = paramsList[i].iconName;
                this_2.componentModel.facilities.push(modelItem);
            }
        };
        var this_2 = this;
        // update component model 
        for (var i = 0; i < paramsList.length; i++) {
            _loop_2(i);
        }
    };
    /**
     * update component model with requirments
     * @param paramsList
     */
    AddressSaveComponent.prototype.updateModelWithRequirements = function (paramsList) {
        ///// remove facilities from address that are no longer in facility params list
        this.componentModel.requirements = this.componentModel.requirements.filter(function (item) { return paramsList.filter(function (paramitem) { return paramitem.id == item.requirementId; }).length > 0; });
        var _loop_3 = function (i) {
            var paramModel = this_3.componentModel.requirements.find(function (item) { return item.requirementId == paramsList[i].id; });
            var modelItem = null;
            if (paramModel) {
                modelItem = paramModel;
                modelItem.description = paramsList[i].description;
                modelItem.iconName = paramsList[i].iconName;
            }
            else {
                modelItem = new __WEBPACK_IMPORTED_MODULE_9_app_shared_common_models_requirement_model__["a" /* RequirementModel */]();
                modelItem.id = -1;
                modelItem.addressId = this_3.componentModel.id;
                modelItem.requirementId = paramsList[i].id;
                modelItem.active = false;
                modelItem.description = paramsList[i].description;
                modelItem.iconName = paramsList[i].iconName;
                this_3.componentModel.requirements.push(modelItem);
            }
        };
        var this_3 = this;
        // update component model requirements
        for (var i = 0; i < paramsList.length; i++) {
            _loop_3(i);
        }
    };
    /**
     * update component model with truks
     * @param paramsList
     */
    AddressSaveComponent.prototype.updateModelWithTrucks = function (paramsList) {
        ///// remove facilities from address that are no longer in facility params list
        this.componentModel.trucks = this.componentModel.trucks.filter(function (item) { return paramsList.filter(function (paramitem) { return paramitem.id == item.truckId; }).length > 0; });
        var _loop_4 = function (i) {
            var paramModel = this_4.componentModel.trucks.find(function (item) { return item.truckId == paramsList[i].id; });
            var modelItem = null;
            if (paramModel) {
                modelItem = paramModel;
                modelItem.description = paramsList[i].description;
                modelItem.iconName = paramsList[i].iconName;
            }
            else {
                modelItem = new __WEBPACK_IMPORTED_MODULE_10_app_shared_common_models_truck_model__["a" /* TruckModel */]();
                modelItem.id = -1;
                modelItem.addressId = this_4.componentModel.id;
                modelItem.truckId = paramsList[i].id;
                modelItem.active = true;
                modelItem.description = paramsList[i].description;
                modelItem.iconName = paramsList[i].iconName;
                this_4.componentModel.trucks.push(modelItem);
            }
        };
        var this_4 = this;
        // update component model trucks
        for (var i = 0; i < paramsList.length; i++) {
            _loop_4(i);
        }
    };
    /**
     * Init datetime picker
     */
    AddressSaveComponent.prototype.initDatetimePicker = function () {
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker();
        }
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
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
            "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday",
            "Saturday", "Sunday"
        ];
        if (day > 0) {
            return weekdays[day - 1];
        }
        else {
            return weekdays[0] + ' - ' + weekdays[6];
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("searchElement"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _a || Object)
    ], AddressSaveComponent.prototype, "searchElementRef", void 0);
    AddressSaveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'address-save-component',
            template: __webpack_require__("../../../../../src/app/address/components/address-save.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_14_app_authentication_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_app_authentication_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_app_shared_common_services_helperService__["a" /* HelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_shared_common_services_helperService__["a" /* HelperService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7_app_address_services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_address_services_address_service__["a" /* AddressService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_13_app_shared_common_services_parameters_data_service__["a" /* ParametersDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_shared_common_services_parameters_data_service__["a" /* ParametersDataService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_localization_translate_service__["a" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_shared_common_services_localization_translate_service__["a" /* TranslateService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_app_shared_common_services_globalErrorHandler__["a" /* GlobalErrorHandler */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_18_app_shared_common_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18_app_shared_common_services_notification_service__["a" /* NotificationService */]) === "function" && _m || Object])
    ], AddressSaveComponent);
    return AddressSaveComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-save.component.js.map

/***/ }),

/***/ "../../../../../src/app/address/models/address-facility-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressFacilityModel; });
var AddressFacilityModel = /** @class */ (function () {
    function AddressFacilityModel() {
    }
    return AddressFacilityModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-facility-model.js.map

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
    AddressService.prototype.get = function (id, language) {
        return this.http.get(this.serviceUrl +
            'get' +
            '/' + id +
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
     * Save address
     * @param medicalEncryptedData
     * @param componentName
     * @param language
     * @param clinicalNote
     */
    AddressService.prototype.save = function (model) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        var data = JSON.stringify(model);
        return this.http.post(this.serviceUrl + 'save', data, { headers: headers })
            .map(function (response) { return (response).json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
    * Delete address
    * @param medicalEncryptedData
    * @param componentName
    * @param language
    * @param clinicalNote
    */
    AddressService.prototype.delete = function (addressId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.delete(this.serviceUrl + 'delete/' + addressId)
            .map(function (response) { return (response).json(); });
    };
    AddressService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
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
                path: 'shipment-add',
                component: __WEBPACK_IMPORTED_MODULE_9_app_shipment_components_shipment_save_component__["a" /* ShipmentSaveComponent */]
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
            {
                path: 'address-add',
                component: __WEBPACK_IMPORTED_MODULE_7_app_address_components_address_save_component__["a" /* AddressSaveComponent */]
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _a || Object])
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
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
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

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\r\n        <div class=\"container\">\r\n            <div class=\"navbar-header\">\r\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\r\n                    <span class=\"sr-only\">Toggle navigation</span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                    <span class=\"icon-bar\"></span>\r\n                </button>\r\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\r\n            </div>\r\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li>\r\n                        <a href=\"/\">\r\n                            <i class=\"material-icons\">dashboard</i> Transapp\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/register\">\r\n                            <i class=\"material-icons\">person_add</i> Register\r\n                        </a>\r\n                    </li>\r\n                    <li class=\" active \">\r\n                        <a href=\"/login\">\r\n                            <i class=\"material-icons\">fingerprint</i> Login\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"/pages/lock\">\r\n                            <i class=\"material-icons\">lock_open</i> Lock\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"../../../assets/img/login.jpeg\">\r\n        <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n        <div class=\"content\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n                        <form id=\"LoginForm\" #loginForm=\"ngForm\">\r\n                            <div class=\"card card-login card-hidden\">\r\n                                <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                                    <h4 class=\"card-title\">Login</h4>\r\n                                    <div class=\"social-line\">\r\n                                        <!-- <a href=\"#btn\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-facebook-square\"></i>\r\n                                        </a>\r\n                                        <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-twitter\"></i>\r\n                                        </a>\r\n                                        <a href=\"#eugen\" class=\"btn btn-just-icon btn-simple\">\r\n                                            <i class=\"fa fa-google-plus\"></i>\r\n                                        </a> -->\r\n                                    </div>\r\n                                </div>\r\n                                <!--  <p class=\"category text-center\">\r\n                                    Or Be Classical\r\n                                </p>-->\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">email</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">Email address</label>\r\n                                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"applicationUser.login\" name=\"login\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i class=\"material-icons\">lock_outline</i>\r\n                                        </span>\r\n                                        <div class=\"form-group label-floating\">\r\n                                            <label class=\"control-label\">Password</label>\r\n                                            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"applicationUser.password\" name=\"password\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"footer text-center\">\r\n                                    <button type=\"submit\" (click)=\"onLoginClick()\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Let's go</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <footer class=\"footer\">\r\n            <div class=\"container\">\r\n                <nav class=\"pull-left\">\r\n                    <ul>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                Home\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                Company\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </nav>\r\n                <p class=\"copyright pull-right\">\r\n                    &copy; {{pageDate | date: 'yyyy'}}\r\n                    <a href=\"/\">Transapp</a>, transportation application\r\n                </p>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n</div>"

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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])()
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
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

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-active-color=\"white\" data-background-color=\"red\" data-image=\"assets/img/sidebar-1.jpg\">\r\n        <sidebar-cmp></sidebar-cmp>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\" id=\"mainPanel\">\r\n        <navbar-cmp></navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <footer-cmp></footer-cmp>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/app-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_md_md_module__ = __webpack_require__("../../../../../src/app/shared/md/md.module.ts");
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



var mda = {
    misc: {
        movingTab: '<div class="sidebar-moving-tab"/>',
        isChild: false,
        sidebarMenuActive: '',
        movingTabInitialised: false
    }
};
var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var AppLayoutComponent = /** @class */ (function () {
    function AppLayoutComponent(location) {
        this.location = location;
    }
    AppLayoutComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        this.navItems = [
            { type: __WEBPACK_IMPORTED_MODULE_2_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: __WEBPACK_IMPORTED_MODULE_2_app_shared_md_md_module__["b" /* NavItemType */].NavbarRight,
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
                type: __WEBPACK_IMPORTED_MODULE_2_app_shared_md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: "pe-7s-mail", title: 'Messages' },
                    { iconClass: "pe-7s-help1", title: 'Help Center' },
                    { iconClass: "pe-7s-tools", title: 'Settings' },
                    'separator',
                    { iconClass: "pe-7s-lock", title: 'Lock Screen' },
                    { iconClass: "pe-7s-close-circle", title: 'Log Out' }
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_2_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: __WEBPACK_IMPORTED_MODULE_2_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Account' },
            {
                type: __WEBPACK_IMPORTED_MODULE_2_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft,
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
            { type: __WEBPACK_IMPORTED_MODULE_2_app_shared_md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Log out' }
        ];
        this.initFixedPluginDemo();
    };
    AppLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) == '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AppLayoutComponent.prototype.initFixedPluginDemo = function () {
        //fixed plugin
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        var $full_page = $('.full-page');
        //
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($full_page.length != 0) {
                $full_page.attr('filter-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($('.switch-sidebar-image input:checked').length == 0) {
                var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch-sidebar-image input').change(function () {
            var $full_page_background = $('.full-page-background');
            var $input = $(this);
            if ($input.is(':checked')) {
                if ($sidebar_img_container.length != 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }
                if ($full_page_background.length != 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }
                var background_image = true;
            }
            else {
                if ($sidebar_img_container.length != 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }
                if ($full_page_background.length != 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }
                background_image = false;
            }
        });
        $('.switch-sidebar-mini input').change(function () {
            var $body = $('body');
            var $input = $(this);
            if (md.misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
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
    AppLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/admin/app-layout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */]) === "function" && _a || Object])
    ], AppLayoutComponent);
    return AppLayoutComponent;
    var _a;
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
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
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

module.exports = "<div class=\"togglebutton\" style=\"padding-bottom: 10px;\">\r\n    <label>\r\n            <input type=\"checkbox\" (click)=\"onClosedDayClick()\" [(ngModel)]=\"availability.isClosed\" [checked]=\"availability.isClosed\"  \r\n            name=\"availabilityClosedDay\"> Is closed on this day\r\n       </label>\r\n</div>\r\n\r\n<div *ngIf=\"!availability.isClosed\" id=\"slider_availability_{{availability.day}}\" class=\"slider slider-info\"></div>"

/***/ }),

/***/ "../../../../../src/app/shared/common/components/address-availability-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_common_models_address_availability_model__ = __webpack_require__("../../../../../src/app/shared/common/models/address-availability-model.ts");
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
    AddressAvailabilitySliderComponent.prototype.ngOnInit = function () {
        this.initInitialDates();
    };
    AddressAvailabilitySliderComponent.prototype.ngAfterViewInit = function () {
        var noUiSlider = __webpack_require__("../../../../nouislider/distribute/nouislider.js");
        if (!this.availability.isClosed) {
            this.initSlider(noUiSlider);
        }
    };
    /**
     * Based on day number get closest date with this day
     * based on this date init initial hours for intervals and for amstart and pmstart
     */
    AddressAvailabilitySliderComponent.prototype.initInitialDates = function () {
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
                var hoursArray = this.availability.amStart.split(":");
                this.amStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
            }
            else {
                this.availability.amStart = this.toFormat(this.amStart_initial_timestamp);
            }
            if (this.availability.amStop && this.availability.amStop.length > 0) {
                var hoursArray = this.availability.amStop.split(":");
                this.amStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
            }
            else {
                this.availability.amStop = this.toFormat(this.amStop_initial_timestamp);
            }
            if (this.availability.pmStart && this.availability.pmStart.length > 0) {
                var hoursArray = this.availability.pmStart.split(":");
                this.pmStart_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
            }
            else {
                this.availability.pmStart = this.toFormat(this.pmStart_initial_timestamp);
            }
            if (this.availability.pmStop && this.availability.pmStop.length > 0) {
                var hoursArray = this.availability.pmStop.split(":");
                this.pmStop_initial_timestamp = new Date(date.getFullYear(), date.getMonth(), date.getDate(), +hoursArray[0], +hoursArray[1], 0, 0).getTime();
            }
            else {
                this.availability.pmStop = this.toFormat(this.pmStop_initial_timestamp);
            }
        }
    };
    AddressAvailabilitySliderComponent.prototype.onClosedDayClick = function () {
        this.availability.isClosed = !this.availability.isClosed;
        this.initInitialDates();
        if (!this.availability.isClosed) {
            var self_1 = this;
            setTimeout(function () {
                var noUiSlider = __webpack_require__("../../../../nouislider/distribute/nouislider.js");
                self_1.initSlider(noUiSlider);
            }, 500);
        }
    };
    /**
     * Init selection slider
     */
    AddressAvailabilitySliderComponent.prototype.initSlider = function (noUiSlider) {
        var self = this;
        var sliderAvailability = document.getElementById('slider_availability_' + self.availability.day);
        var itWasInitializedAlready = sliderAvailability && sliderAvailability.querySelectorAll('.noUi-origin').length > 0;
        if (!itWasInitializedAlready) {
            noUiSlider.create(sliderAvailability, {
                // Create two timestamps to define a range.
                range: {
                    min: self.range_min_timestamp,
                    max: self.range_max_timestamp
                },
                format: { to: self.toFormat, from: Number },
                connect: [false, true, true, true, true],
                // Steps of one week
                step: 15 * 60 * 1000,
                // Two more timestamps indicate the handle starting positions.
                start: [self.amStart_initial_timestamp, self.amStop_initial_timestamp, self.pmStart_initial_timestamp, self.pmStop_initial_timestamp],
                tooltips: [true, true, true, true]
            });
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
        }
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
        var hours = ("0" + date.getHours()).slice(-2);
        var minutes = ("0" + date.getMinutes()).slice(-2);
        return hours + (date.getMinutes() > 0 ? (":" + minutes) : '');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])('availability'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_common_models_address_availability_model__["a" /* AddressAvailabilityModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_common_models_address_availability_model__["a" /* AddressAvailabilityModel */]) === "function" && _a || Object)
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

/***/ "../../../../../src/app/shared/common/models/address-availability-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressAvailabilityModel; });
var AddressAvailabilityModel = /** @class */ (function () {
    function AddressAvailabilityModel() {
    }
    return AddressAvailabilityModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/address-availability-model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/models/requirement-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequirementModel; });
var RequirementModel = /** @class */ (function () {
    function RequirementModel() {
    }
    return RequirementModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/requirement-model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/common/models/truck-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruckModel; });
var TruckModel = /** @class */ (function () {
    function TruckModel() {
    }
    return TruckModel;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/truck-model.js.map

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
            if (error._body && error._body.trim() != '') {
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
        //this.authenticationObserver.sendAuthenticationUpdates(false);
        this.authenticationService.logout();
        this.notificationService.show('Session expired. You have to login again.', 'danger', 'center', 'top');
        var self = this;
        setTimeout(function () {
            self.router.navigate(["/login"]);
        }, 1500);
    };
    GlobalErrorHandler = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
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
        if (url.indexOf('-add') >= 0) {
            return __WEBPACK_IMPORTED_MODULE_1_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].add;
        }
        else if (url.indexOf('-edit') >= 0) {
            return __WEBPACK_IMPORTED_MODULE_1_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].edit;
        }
        else if (url.indexOf('-edit') >= 0) {
            return __WEBPACK_IMPORTED_MODULE_1_app_shared_common_helper_component_state_type__["a" /* ComponentStateType */].display;
        }
    };
    HelperService.prototype.scrollOnTop = function () {
        var $main_panel = $('.main-panel');
        $main_panel.scrollTop(0).perfectScrollbar('update');
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
            case "fr"://dd-mm-yyyy
                convertedDate = day + "-" + month + "-" + year;
                break;
            case "de"://yyyy-mm-dd
                convertedDate = year + "-" + month + "-" + day;
                break;
            case "ro"://yyyy-mm-dd
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
        var format = '';
        switch (language) {
            case "nl":
                format = "dd/MM/yyyy";
                break;
            case "fr"://dd-mm-yyyy
                format = "dd-MM-yyyy";
                break;
            case "de"://yyyy-mm-dd
                format = "yyyy-MM-dd";
                break;
            case "ro"://yyyy-mm-dd
                format = "dd.MM.yyyy";
                break;
            default:
                format = 'dd/MM/yyyy';
                break;
        }
        if (includeTime) {
            format += " hh:mm:ss";
        }
        return format;
    };
    HelperService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])()
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
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




var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.currentLanguage = 'en';
        /**
         * store translations for an module
         */
        this.moduleTranslations = [];
        this.errorMessage = '';
        this.localizationServiceUrl = __WEBPACK_IMPORTED_MODULE_3_app_shared_common_constants__["a" /* Constants */].serverUrl + 'api/Localization/';
    }
    TranslateService.prototype.setLanguage = function (lang) {
        // set current language
        this.currentLanguage = lang;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
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
    NotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])()
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
        this.serviceUrl = __WEBPACK_IMPORTED_MODULE_2_app_shared_common_constants__["a" /* Constants */].serverUrl + 'api/ParametersData/';
    }
    /**
     * getFacilities
     * @param language
     */
    ParametersDataService.prototype.getFacilities = function (language) {
        return this.http.get(this.serviceUrl +
            'getFacilities' +
            '/' +
            language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * getTruks
     * @param language
     */
    ParametersDataService.prototype.getTruks = function (language) {
        return this.http.get(this.serviceUrl +
            'getTrucks' +
            '/' +
            language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    /**
     * getRequirements
     * @param language
     */
    ParametersDataService.prototype.getRequirements = function (language) {
        return this.http.get(this.serviceUrl +
            'getRequirements' +
            '/' +
            language)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler.throwError);
    };
    ParametersDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Injectable */])(),
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
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'md-table',
            template: __webpack_require__("../../../../../src/app/shared/md/md-table/md-table.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ChangeDetectionStrategy */].OnPush
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
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
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
        $('#minimizeSidebar').click(function () {
            var $btn = $(this);
            if (misc.sidebar_mini_active == true) {
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
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path.indexOf(titlee) >= 0 || titlee.indexOf(this.listTitles[item].path) >= 0) {
                return this.listTitles[item].title;
            }
        }
        return 'Home';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'navbar-cmp',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ElementRef */]) === "function" && _c || Object])
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
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
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
        this.helperService.scrollOnTop;
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
            if (mda.movingTabInitialised == false) {
                mda.initMovingTab();
                mda.movingTabInitialised = true;
            }
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
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
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

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6  filterpanels active\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\">\r\n                        <i class=\"material-icons\">weekend</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Unassigned</p>\r\n                        <h3 class=\"card-title\">184</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6 filterpanels \">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <i class=\"material-icons\">equalizer</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Open market</p>\r\n                        <h3 class=\"card-title\">184</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6  filterpanels\">\r\n                <div class=\"card card-stats \">\r\n                    <div class=\"card-header\" data-background-color=\"green\">\r\n                        <i class=\"material-icons\">assignment_turned_in</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Assigned</p>\r\n                        <h3 class=\"card-title\">184</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6 filterpanels\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"blue\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Confirmed</p>\r\n                        <h3 class=\"card-title\">184</h3>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"stats\">\r\n                            <i class=\"material-icons\">update</i> Just Updated\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <!--   <div class=\"nav-center\">\r\n                    <ul class=\"nav nav-pills nav-pills-warning nav-pills-icons\" role=\"tablist\">\r\n                        \r\n                    color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\r\n            \r\n                        <li>\r\n                            <a href=\"#description-1\" role=\"tab\" data-toggle=\"tab\">\r\n                                <i class=\"material-icons\">info</i> Unassigned\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"active\">\r\n                            <a href=\"#schedule-1\" role=\"tab\" data-toggle=\"tab\">\r\n                                <i class=\"material-icons\">location_on</i> Open merket\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#tasks-1\" role=\"tab\" data-toggle=\"tab\">\r\n                                <i class=\"material-icons\">gavel</i> Assigned\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"#tasks-2\" role=\"tab\" data-toggle=\"tab\">\r\n                                <i class=\"material-icons\">help_outline</i> Confirmed\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </div>    -->\r\n\r\n                <button class=\"btn btn-warning\">\r\n                        <i class=\"material-icons\">warning</i> Pending\r\n                    </button>\r\n                <button class=\"btn btn-danger\">\r\n                        <i class=\"material-icons\">close</i> Declined\r\n                    </button>\r\n\r\n                <div class=\"card\">\r\n                    <!-- <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                        <i class=\"material-icons\">assignment</i>\r\n                    </div> -->\r\n                    <div class=\"card-content table-full-width\">\r\n                        <!--<h4 class=\"card-title\">Regular Table with Colors</h4>-->\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th *ngFor=\"let cell of headerRow\">{{ cell }}</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n\r\n                                    <ng-container *ngFor=\"let shipmentRow of shipmentModel; let rowindex = index\">\r\n                                        <tr (click)=\"onClickShowActions(shipmentRow, rowindex)\" [ngClass]=\"rowindex%2==0?'success':''\">\r\n                                            <td>{{shipmentRow.shipment.pickupdate}}</td>\r\n                                            <td>{{shipmentRow.shipment.deliverydate}}</td>\r\n                                            <td>{{shipmentRow.shipment.from}}</td>\r\n                                            <td>{{shipmentRow.shipment.destionation}}</td>\r\n                                            <td>{{shipmentRow.shipment.quantity}}</td>\r\n                                            <td>{{shipmentRow.shipment.transporter}}</td>\r\n                                            <td>{{shipmentRow.shipment.price}}</td>\r\n                                        </tr>\r\n\r\n                                        <tr id=\"actionsRow\" *ngIf=\"shipmentRow.viewActions\">\r\n                                            <td id=\"actionsRowContent\" colspan=\"7\" align=\"center\">\r\n                                                <button class=\"btn btn-warning\" (click)=\"onClickEditShipment(shipmentRow)\">\r\n                                                            <span class=\"btn-label\">\r\n                                                                <i class=\"material-icons\">border_color</i>\r\n                                                            </span>\r\n                                                            Edit shipment\r\n                                                        </button>\r\n                                                <button class=\"btn btn-danger\">\r\n                                                            Delete shipment\r\n                                                            <span class=\"btn-label btn-label-right\">\r\n                                                                <i class=\"material-icons\">delete_forever</i>\r\n                                                            </span>\r\n                                                        </button>\r\n                                                <button class=\"btn btn-success\">\r\n                                                            <span class=\"btn-label\">\r\n                                                                <i class=\"material-icons\">assignment_returned</i>\r\n                                                            </span>\r\n                                                            Assign to open market\r\n                                                        </button>\r\n                                                <button class=\"btn btn-info\">\r\n                                                            <span class=\"btn-label\">\r\n                                                                <i class=\"material-icons\">assignment_turned_in</i>\r\n                                                            </span>\r\n                                                            Assign to haulier\r\n                                                        </button>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr id=\"editShipmentRow\" *ngIf=\"shipmentRow.viewActions && shipmentRow.viewEdit\">\r\n                                            <td colspan=\"7\">\r\n                                                <router-outlet></router-outlet>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </ng-container>\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shipment/components/shipment-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shipment_models_shipment__ = __webpack_require__("../../../../../src/app/shipment/models/shipment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shipment_models_shipment_row__ = __webpack_require__("../../../../../src/app/shipment/models/shipment-row.ts");
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
    function ShipmentOverviewComponent(router, route) {
        this.router = router;
        this.route = route;
        // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
        this.shipmentModel = [];
    }
    // constructor(private navbarTitleService: NavbarTitleService) { }
    ShipmentOverviewComponent.prototype.ngOnInit = function () {
        this.headerRow = ['Pickup data', 'Delivery date', 'From', 'Destination', 'Quantity', 'Transport company', 'Price'];
        var shipment = new __WEBPACK_IMPORTED_MODULE_2_app_shipment_models_shipment__["a" /* Shipment */]();
        shipment.deliverydate = new Date();
        shipment.pickupdate = new Date();
        shipment.from = 'Joske, Belgium, Brakel';
        shipment.destionation = 'Polleke, France, Quimper';
        shipment.quantity = 100;
        shipment.transporter = 'DHL';
        shipment.price = 100;
        for (var i = 0; i < 10; i++) {
            shipment.id = i;
            shipment.deliverydate = moment(shipment.deliverydate).format('YYYY-MM-DD');
            shipment.pickupdate = moment(shipment.pickupdate).format('YYYY-MM-DD');
            var shipmentRow = new __WEBPACK_IMPORTED_MODULE_3_app_shipment_models_shipment_row__["a" /* ShipmentRow */]();
            shipmentRow.shipment = shipment;
            shipmentRow.viewActions = i == 2 ? true : false;
            this.shipmentModel.push(shipmentRow);
        }
    };
    ShipmentOverviewComponent.prototype.ngAfterViewInit = function () {
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
    };
    /** Show row available actions on click */
    ShipmentOverviewComponent.prototype.onClickShowActions = function (shipmentRow, index) {
        for (var i = 0; i < this.shipmentModel.length; i++) {
            if (i != index)
                this.shipmentModel[i].viewActions = false;
        }
        shipmentRow.viewActions = !shipmentRow.viewActions;
        if (shipmentRow.viewActions) {
            shipmentRow.viewEdit = false;
            this.router.navigate(['/shipment-overview']);
        }
        setTimeout(function () {
            // $('#actionsRowContent').slideToggle('slow');
        }, 500);
    };
    /** Show edit shipment */
    ShipmentOverviewComponent.prototype.onClickEditShipment = function (shipmentRow) {
        shipmentRow.viewEdit = !shipmentRow.viewEdit;
        this.router.navigate(['./shipment-edit/1'], { relativeTo: this.route });
    };
    ShipmentOverviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'shipment-overview',
            template: __webpack_require__("../../../../../src/app/shipment/components/shipment-overview.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ShipmentOverviewComponent);
    return ShipmentOverviewComponent;
    var _a, _b;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/components/shipment-save.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-md-offset-3\">\r\n                <div class=\"card\">\r\n                    <form #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                            <i class=\"material-icons\">local_shipping</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">Create new shipment</h4>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Transapp shipment reference\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"sender\" required>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        PO Number\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"sender\" required>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <form #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                            <i class=\"material-icons\">send</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">Sender</h4>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Sender\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"sender\" required>\r\n                            </div>\r\n                            <!-- Adress info -->\r\n                            <h3>Address info</h3>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Pickup date\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control datetimepicker\" value=\"10/05/2016\" />\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Pickup adress\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                            </div>\r\n                            <!-- Opening hours -->\r\n                            <h3>Opening hours</h3>\r\n                            <div class=\"form-group label-floating\">\r\n                                <div id=\"sliderDouble\" class=\"slider slider-info\"></div>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\" for=\"\">\r\n                                        Contact\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"email\">\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\" for=\"\">\r\n                                        Phone\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"email\">\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\" for=\"\">\r\n                                        Info\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"email\">\r\n                            </div>\r\n                            <!-- Truck -->\r\n                            <h3>Truck</h3>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Van (&lt;8m)\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Distri (8m)\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Tautliner (<8m)\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Boxtrailer (<8m)\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Transport requirments -->\r\n                            <h3>Transport requirments</h3>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Frigo\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Hidraulic lift\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> All risk insurance\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Adr\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Facilities -->\r\n                            <h3>Facilities</h3>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Pallet jack\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Loading dock\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Forklift\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!--  ***************** Receiver *************** -->\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <form #f=\"ngForm\" novalidate (ngSubmit)=\"save(f.value, f.valid)\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                            <i class=\"material-icons\">call_received</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">Receiver</h4>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Sender\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"sender\">\r\n                            </div>\r\n                            <!-- Adress info -->\r\n                            <h3>Address info</h3>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Pickup date\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control datetimepicker\" value=\"10/05/2016\" />\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label for=\"\" class=\"control-label\">\r\n                                        Pickup adress\r\n                                        <span class=\"star\">*</span>\r\n                                    </label>\r\n                                <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                            </div>\r\n                            <!-- Opening hours -->\r\n                            <h3>Opening hours</h3>\r\n                            <div class=\"form-group label-floating\">\r\n                                <div id=\"sliderDoubleReceiver\" class=\"slider slider-info\"></div>\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\" for=\"\">\r\n                                        Contact\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"email\">\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\" for=\"\">\r\n                                        Phone\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"email\">\r\n                            </div>\r\n                            <div class=\"form-group label-floating\">\r\n                                <label class=\"control-label\" for=\"\">\r\n                                        Info\r\n                                    </label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"email\">\r\n                            </div>\r\n                            <!-- Truck -->\r\n                            <h3>Truck</h3>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Van (&lt;8m)\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Distri (8m)\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Tautliner (<8m)\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Boxtrailer (<8m)\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Transport requirments -->\r\n                            <h3>Transport requirments</h3>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Frigo\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Hidraulic lift\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> All risk insurance\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Adr\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Facilities -->\r\n                            <h3>Facilities</h3>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Pallet jack\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Loading dock\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                        <i class=\"material-icons\">local_shipping</i>\r\n                                    </span>\r\n                                <div class=\"form-group label-floating\">\r\n                                    <div class=\"togglebutton\">\r\n                                        <label>\r\n                                                <input type=\"checkbox\" checked> Forklift\r\n                                            </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Goods -->\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n                        <i class=\"material-icons\">add_shopping_cart</i>\r\n                    </div>\r\n                    <div class=\"card-content table-full-width\">\r\n                        <h4 class=\"card-title\">Goods</h4>\r\n                        <div class=\"table-responsive\">\r\n                            <table style=\"min-width: 400px;\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <label class=\"control-label\"></label>\r\n                                                <select name=\"country\" class=\"form-control\">\r\n                                                        <option disabled=\"\" selected=\"\">Choose Quantity</option>\r\n                                                        <option value=\"1\"> 1 </option>\r\n                                                        <option value=\"2\"> 2 </option>\r\n                                                        <option value=\"3\"> 3 </option>\r\n                                                        <option value=\"...\">...</option>\r\n                                                    </select>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <label class=\"control-label\"></label>\r\n                                                <select name=\"country\" class=\"form-control\">\r\n                                                        <option disabled=\"\" selected=\"\">Choose type</option>\r\n                                                        <option value=\"Box\"> Box </option>\r\n                                                        <option value=\"...\">...</option>\r\n                                                    </select>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <label class=\"control-label\">Length(cm)</label>\r\n                                                <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" required>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <label class=\"control-label\">Width(cm)</label>\r\n                                                <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" required>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <label class=\"control-label\">Height(cm)</label>\r\n                                                <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" required>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <label class=\"control-label\">Weight(cm)</label>\r\n                                                <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" required>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n\r\n                                    <tr>\r\n                                        <td colspan=\"2\"></td>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <select name=\"country\" class=\"form-control\">\r\n                                                        <option disabled=\"\" selected=\"\">Choose Quantity</option>\r\n                                                        <option value=\"1\"> 1 </option>\r\n                                                        <option value=\"2\"> 2 </option>\r\n                                                        <option value=\"3\"> 3 </option>\r\n                                                        <option value=\"...\">...</option>\r\n                                                    </select>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <select name=\"country\" class=\"form-control\">\r\n                                                        <option disabled=\"\" selected=\"\">Choose type</option>\r\n                                                        <option value=\"Box\"> Box </option>\r\n                                                        <option value=\"...\">...</option>\r\n                                                    </select>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"form-group label-floating\">\r\n                                                <label class=\"control-label\">Length(cm)</label>\r\n                                                <input class=\"form-control\" type=\"number\" name=\"number\" number=\"true\" required>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                            <button type=\"submit\" class=\"btn btn-fill btn-rose\">+ Add more packages</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content text-center\">\r\n                        <span class=\"input-group-addon\">\r\n                                <i class=\"fa fa-list  fa-2x\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        <div class=\"form-group label-floating\">\r\n                            <h4>Total quantity: 4 items</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content text-center\">\r\n                        <span class=\"input-group-addon\">\r\n                                <i class=\"fa fa-cube  fa-2x\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        <div class=\"form-group label-floating\">\r\n                            <h4>Total volume: 8172 m2</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-content text-center\">\r\n                        <span class=\"input-group-addon\">\r\n                                <i class=\"fa fa-balance-scale  fa-2x\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        <div class=\"form-group label-floating\">\r\n                            <h4>Total weight: 1530 kg</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shipment/components/shipment-save.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentSaveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShipmentSaveComponent = /** @class */ (function () {
    function ShipmentSaveComponent() {
    }
    // rangeValidation : FormGroup;
    //
    // // We are passing an instance of the FormBuilder to our constructor
    // constructor(fb: FormBuilder){
    //   // Here we are using the FormBuilder to build out our form.
    //   this.rangeValidation = fb.group({
    //     // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    //     // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
    //   'firstName' : [null, Validators.required],
    //   // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
    //   'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
    //   'gender' : [null, Validators.required],
    //
    //   })
    // }
    ShipmentSaveComponent.prototype.ngOnInit = function () {
        // $.getScript('../../../assets/js/plugins/bootstrap-datetimepicker.js');
        // $.getScript('../../../assets/js/plugins/jquery.tagsinput.js');
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker();
        }
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
        var noUiSlider = __webpack_require__("../../../../nouislider/distribute/nouislider.js");
        var sliderDouble = document.getElementById('sliderDouble');
        noUiSlider.create(sliderDouble, {
            start: [6, 11, 14, 18],
            connect: true,
            range: {
                min: 0,
                max: 24
            }
        });
        var sliderDouble = document.getElementById('sliderDoubleReceiver');
        noUiSlider.create(sliderDouble, {
            start: [6, 11, 14, 18],
            connect: true,
            range: {
                min: 0,
                max: 24
            }
        });
    };
    ShipmentSaveComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    ShipmentSaveComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'shipment-save-component',
            template: __webpack_require__("../../../../../src/app/shipment/components/shipment-save.component.html")
        })
    ], ShipmentSaveComponent);
    return ShipmentSaveComponent;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-save.component.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/models/shipment-row.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentRow; });
var ShipmentRow = /** @class */ (function () {
    function ShipmentRow() {
    }
    return ShipmentRow;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment-row.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/models/shipment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shipment; });
var Shipment = /** @class */ (function () {
    function Shipment() {
    }
    return Shipment;
}());

//# sourceMappingURL=C:/Users/fasavei/Source/Repos/TransApp2/Site/Presentation/TransApp.Site.FrontEnd/src/shipment.js.map

/***/ }),

/***/ "../../../../../src/app/shipment/shipment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_md_md_module__ = __webpack_require__("../../../../../src/app/shared/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shipment_components_shipment_overview_component__ = __webpack_require__("../../../../../src/app/shipment/components/shipment-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shipment_components_shipment_save_component__ = __webpack_require__("../../../../../src/app/shipment/components/shipment-save.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_app_shared_md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyChUim14iXhf6riJ73R3qxNxnMls2SGZDA'
                })
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7_app_shipment_components_shipment_overview_component__["a" /* ShipmentOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_8_app_shipment_components_shipment_save_component__["a" /* ShipmentSaveComponent */]
            ],
            providers: []
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