import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Observable } from "rxjs/Rx";

import { ActivatedRoute, Params, RouterModule, Router, Routes } from '@angular/router';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AddressModel } from "app/address/models/address-model";
import { ComponentStateType } from "app/common/helper/component-state-type";
import { HelperService } from "app/common/services/helperService";
import { AddressService } from "app/address/services/address.service";
import { TranslateService } from "app/common/services/localization/translate.service";
import { FacilityModel } from "app/common/models/facility-model";
import { RequirementModel } from "app/common/models/requirement-model";
import { TruckModel } from "app/common/models/truck-model";
import { GlobalErrorHandler } from "app/common/services/globalErrorHandler";
import { AddressLocationModel } from "app/address/models/address-location-model";
import { ParametersDataService } from "app/common/services/parameters-data.service";
import { AddressFacilityModel } from "app/address/models/address-facility-model";
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { ApplicationUser } from "app/authentication/viewmodels/application-user";

declare var require: any
declare var google: any;
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'address-save-component',
    templateUrl: './address-save.component.html'
})

export class AddressSaveComponent {

    /** main component model */
    componentModel: AddressModel;
    /** component state : display, add or edit */
    componentState: ComponentStateType;

    public searchControl: FormControl;

    @ViewChild("searchElement")
    public searchElementRef: ElementRef;

    currentUser:ApplicationUser;
    
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private authenticationService:AuthenticationService,
        private helperService: HelperService,
        private addressService: AddressService,
        private parametersDataService: ParametersDataService,
        private translateService: TranslateService,
        private errorHandler: GlobalErrorHandler
    ) { }

    ngOnInit() {
        debugger;
        this.currentUser = this.authenticationService.getCurrentUser();

        //create search FormControl
        this.searchControl = new FormControl();

        // get component state
        this.componentState = this.helperService.getComponentStateByUrl(this.router.url) as ComponentStateType;

        // load required data
        this.loadComponentModel(this.componentState).subscribe(modelLoaded => {
            if (modelLoaded) {
                this.loadParamsData().subscribe(paramsDataLoaded => {
                    if (paramsDataLoaded) {
                        this.initDatetimePicker();
                        this.initSelectionSlider();
                        this.register_googleMapsPlaceHandler();
                    }
                })
            }
        });
    }

    /**
     * Load component model, or create a new one if component state is = Add
     * @param componentState 
     */
    private loadComponentModel(componentState: ComponentStateType): Observable<boolean> {
        return Observable.create(observer => {
            if (componentState == ComponentStateType.add) {
                debugger;
                this.componentModel = new AddressModel();
                this.componentModel.id = -1;
                this.componentModel.customerId  = this.currentUser.customerId;
                this.componentModel.location = new AddressLocationModel();
                this.componentModel.facilities = [];
                this.componentModel.requirements = [];
                this.componentModel.trucks = [];
                observer.next(true);
            }
            else {
                let addressId = 0;
                this.route.params.forEach((params: Params) => {
                    addressId = params['id'];
                    this.addressService.get(addressId, this.translateService.currentLanguage).subscribe(result => {
                        this.componentModel = result;
                        observer.next(true);
                    }, error => {
                        this.errorHandler.handleError(error);
                        observer.next(false);
                    })
                });
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
                    this.updateModelWithFacilities(data[0] as any);
                    this.updateModelWithRequirements(data[1] as any);
                    this.updateModelWithTrucks(data[2] as any);

                    observer.next(true);
                    //   resolve(true);
                }), error => {
                    //   reject(false);
                    observer.next(false);
                    this.errorHandler.handleError(error);
                };
            //  });
        });
    }

    /**
     * Register google maps place handler.
     * When palce is changed, handler to update model is registered
     */
    private register_googleMapsPlaceHandler() {
        //set current position
        this.getLocationCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            // create map
            this.createMap();
            let addressesAutocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                // types: ["address"]
            });
            // init place change listener
            addressesAutocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = addressesAutocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    this.updateLocationModel(place);

                    this.createMap();

                    this.componentModel.location.latitudeStr = this.componentModel.location.latitude.toFixed(2);
                    this.componentModel.location.longitudeStr = this.componentModel.location.longitude.toFixed(2);

                });
            });

        });
    }

    /**
     *Get each component of the address from the place details
      and fill the corresponding field on the form.
     */
    private updateLocationModel(place: any) {

        this.componentModel.location.latitude = place.geometry.location.lat();
        this.componentModel.location.longitude = place.geometry.location.lng();

        for (let i = 0; i < place.address_components.length; i++) {
            let addressMember = place.address_components[i].types[0];
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

        if (place.formatted_phone_number) {
            this.componentModel.location.phone = place.formatted_phone_number;
        }

        if (place.opening_hours) {
            this.componentModel.location.openNow = place.opening_hours.open_now ? 'open' : 'closed';
            let opening_hours = place.opening_hours.weekday_text;
            this.componentModel.location.openingHours = place.formatted_phone_number;
            this.componentModel.location.openingHours = opening_hours.join('<br> ')
        }
    }


    /**
     * Get current position
     */
    private getLocationCurrentPosition() {
        this.componentModel.location.latitude = 50.82;
        this.componentModel.location.longitude = 3.26;

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.componentModel.location.latitude = position.coords.latitude;
                this.componentModel.location.longitude = position.coords.longitude;
            }, function () {
                this.componentModel.location.latitude = -34.397;
                this.componentModel.location.longitude = 150.644;
            });
        }

    }

    /**
     * Create map based on address model
     */
    private createMap() {
        var myLatlng = new google.maps.LatLng(this.componentModel.location.latitude, this.componentModel.location.longitude);
        var mapOptions = {
            zoom: this.componentModel.location.mapZoom,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        }

        var map = new google.maps.Map(document.getElementById("regularMap"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Map"
        });

        marker.setMap(map);
    }

    /**
     * update component model with facilities
     * @param paramsList 
     */
    private updateModelWithFacilities(paramsList: FacilityModel[]) {
        ///// remove facilities from address that are no longer in facility params list
        this.componentModel.facilities = this.componentModel.facilities.filter(adritem => paramsList.filter(paramitem => paramitem.id == adritem.id).length > 0);

        // update component model facilities
        for (let i = 0; i < paramsList.length; i++) {
            let existModel = this.componentModel.facilities.find(item => item.id == paramsList[i].id);
            let modelItem=null;
            if (existModel) {
                modelItem = existModel[0];
                modelItem.description = paramsList[i].description
                modelItem.iconName = paramsList[i].iconName
            }
            else {
                modelItem = new AddressFacilityModel();
                modelItem.id = -1;
                modelItem.addressId = this.componentModel.id;
                modelItem.facilityId = paramsList[i].id;
                modelItem.active = false;
                modelItem.description = paramsList[i].description;
                modelItem.iconName =paramsList[i].iconName;
                this.componentModel.facilities.push(modelItem);
            }
        }
    }

    /**
     * update component model with requirments
     * @param paramsList 
     */
    private updateModelWithRequirements(paramsList: RequirementModel[]) {
        ///// remove facilities from address that are no longer in facility params list
        this.componentModel.requirements = this.componentModel.requirements.filter(adritem => paramsList.filter(paramitem => paramitem.id == adritem.id).length > 0);

        // update component model requirements
        for (let i = 0; i < paramsList.length; i++) {
            let existModel = this.componentModel.requirements.find(item => item.id == paramsList[i].id);
            let modelItem=null;
            if (existModel) {
                modelItem = existModel[0];
                modelItem.description = paramsList[i].description;
                modelItem.iconName = paramsList[i].iconName;
            }
            else {
                modelItem = new RequirementModel();
                modelItem.id = -1;
                modelItem.addressId = this.componentModel.id;
                modelItem.requirementId = paramsList[i].id;
                modelItem.active = false;
                modelItem.description = paramsList[i].description;
                modelItem.iconName =paramsList[i].iconName;
                this.componentModel.requirements.push(modelItem);
            }
        }
    }

    /**
     * update component model with truks
     * @param paramsList 
     */
    private updateModelWithTrucks(paramsList: TruckModel[]) {
        ///// remove facilities from address that are no longer in facility params list
        this.componentModel.trucks = this.componentModel.trucks.filter(adritem => paramsList.filter(paramitem => paramitem.id == adritem.id).length > 0);

        // update component model trucks
        for (let i = 0; i < paramsList.length; i++) {
            let existModel = this.componentModel.trucks.find(item => item.id == paramsList[i].id);
            let modelItem=null;
            if (existModel) {
                modelItem = existModel[0];
                modelItem.description = paramsList[i].description;
                modelItem.iconName = paramsList[i].iconName;
            }
            else {
                modelItem = new TruckModel();
                modelItem.id = -1;
                modelItem.addressId = this.componentModel.id;
                modelItem.truckId = paramsList[i].id;
                modelItem.active = false;
                modelItem.description = paramsList[i].description;
                modelItem.iconName =paramsList[i].iconName;
                this.componentModel.trucks.push(modelItem);
            }
        }
    }


    /**
     * Init datetime picker
     */
    private initDatetimePicker() {
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
    }

    /**
     * Init selection slider
     */
    private initSelectionSlider() {
        var noUiSlider = require('nouislider');

        var sliderDouble = document.getElementById('sliderDouble');
        noUiSlider.create(sliderDouble, {
            start: [6, 11, 14, 18],
            connect: true,
            range: {
                min: 0,
                max: 24
            }
        });
    }

    save() {
        // call API to save customer
        console.log(this.componentModel);
        this.addressService.save(this.componentModel).subscribe(result => {
            alert("saved");
        }, error => {

        });
    }
    onSubmit(value: any): void {

    }
}
