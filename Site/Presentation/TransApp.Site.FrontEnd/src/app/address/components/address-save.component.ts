import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

    //// models for each option panes are generated
    facilities: FacilityModel[];
    requirements: RequirementModel[];
    truks: TruckModel[];

     searchByAddressControl: FormControl;

    @ViewChild("searchByAddress")
    public searchAddressElementRef: ElementRef;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private helperService: HelperService,
        private addressService: AddressService,
        private parametersDataService: ParametersDataService,
        private translateService: TranslateService,
        private errorHandler: GlobalErrorHandler
    ) { }

    ngOnInit() {
        debugger;
        // get component state
        this.componentState = this.helperService.getComponentStateByUrl(this.router.url) as ComponentStateType;
        
        if (this.componentState == ComponentStateType.add) {
            this.componentModel = new AddressModel();
            this.componentModel.id = -1;
            this.componentModel.location  = new AddressLocationModel();
        }
        else {
            let addressId = 0;
            this.route.params.forEach((params: Params) => {
                addressId = params['id'];
                this.addressService.get(addressId, this.translateService.currentLanguage).subscribe(result => {
                    this.componentModel = result;
                }, error => {
                    this.errorHandler.handleError(error);
                })
            });
        }

      
        // load required data
        this.loadRequiredData().subscribe(executed => {
            debugger;
            var self = this;
            if (executed) {
            self.initDatetimePicker();
            self.initSelectionSlider();
            self.register_googleMapsPlaceHandler();
            }
        });
    }

    /**
     * Load required data used to render form
     */
    private loadRequiredData(): Observable<boolean> {
        return Observable.create(observer => {
            // return new Promise((resolve, reject) => {
            Observable.forkJoin([
                this.parametersDataService.getFacilities(this.translateService.currentLanguage)//, 
                //this.commonConfigurationDataService.getTruks(this.translateService.currentLanguage),
                //this.commonConfigurationDataService.getRequirements(this.translateService.currentLanguage),
            ])
                .subscribe(data => {
                    debugger;
                    var facilities = data[0];
                    observer.next(true);
                    //   resolve(true);
                }, error => {
                    //   reject(false);
                    observer.next(false);
                    this.errorHandler.handleError(error);
                });
            //  });
        });
    }

    /**
     * Register google maps place handler.
     * When palce is changed, handler to update model is registered
     */
    private register_googleMapsPlaceHandler() {
        //create search FormControl
        this.searchByAddressControl = new FormControl();
        //set current position
        debugger;
        this.getLocationCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            // create map
            this.createMap();
            let addressesAutocomplete = new google.maps.places.Autocomplete(this.searchAddressElementRef.nativeElement, {
                // types: ["address"]
            });
            // init place change listener
            addressesAutocomplete.addListener("place_changed", () => {
                debugger;
                this.ngZone.run(() => {
                    debugger;
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

        this.componentModel.location.latitude =  place.geometry.location.lat();
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

    /**
     * Get current position
     */
    private getLocationCurrentPosition() {
        debugger;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.componentModel.location.latitude = position.coords.latitude;
                this.componentModel.location.latitude = position.coords.longitude;
            });
        }
        else{
            this.componentModel.location.latitude = -34.397;
            this.componentModel.location.latitude = 150.644;
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

   

    save() {
        // call API to save customer
        console.log(this.componentModel);
        debugger;
        this.addressService.save(this.componentModel).subscribe(result => {
            alert("saved");
        }, error => {

        });
    }
    onSubmit(value: any): void {

    }
}
