import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterModule, Router, Routes } from '@angular/router';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AddressModel } from "app/address/models/address-model";
import { ComponentStateType } from "app/common/helper/component-state-type";
import { HelperService } from "app/common/services/helperService";
import { AddressService } from "app/address/services/address.service";

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

    public latitude: number;
    public longitude: number;
    public searchByAddressControl: FormControl;
    public searchByZipCodeControl: FormControl;
    public zoom: number;

    @ViewChild("searchByAddress")
    public searchAddressElementRef: ElementRef;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private helperService: HelperService,
        private addressService: AddressService,
    ) { }

    ngOnInit() {
        debugger;
        // get component state
      this.componentState =  this.helperService.getComponentStateByUrl(this.router.url);

      if(this.componentState == ComponentStateType.add){
          this.componentModel = new AddressModel();
          this.componentModel.id = -1;
      }
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

        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchByAddressControl = new FormControl();
        this.searchByZipCodeControl = new FormControl();

        //set current position
        this.setCurrentPosition();

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.createMap();
            debugger;
            let addressesAutocomplete = new google.maps.places.Autocomplete(this.searchAddressElementRef.nativeElement, {
               // types: ["address"]
            });

            addressesAutocomplete.addListener("place_changed", () => {
                debugger;
                this.ngZone.run(() => {
                    debugger;
                    this.searchByZipCodeControl = new FormControl();
                    //get the place result
                    let place = addressesAutocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;

                    this.createMap();

                    this.fillInAddressDetails(place);
                });
            });

        });
    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 15;
            });
        }
    }


    private createMap() {
        var myLatlng = new google.maps.LatLng(this.latitude, this.longitude);
        var mapOptions = {
            zoom: this.zoom,
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

     addressDetails = {
        street_number: '',
        route: '',
        locality: '',
        administrative_area_level_1: '',
        country: '',
        postal_code: ''
      };

    private fillInAddressDetails(place: any) {

       this.addressDetails = {
            street_number: '',
            route: '',
            locality: '',
            administrative_area_level_1: '',
            country: '',
            postal_code: ''
          };

debugger;
        var componentForm = {
            street_number: 'short_name',
            route: 'long_name',
            locality: 'long_name',
            administrative_area_level_1: 'short_name',
            country: 'long_name',
            postal_code: 'short_name'
          };

          
              // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentForm[addressType]) {
              var val = place.address_components[i][componentForm[addressType]];
              this.addressDetails[addressType] = val;
            }
          }
      }
    
    save() {
        // call API to save customer
        console.log(this.componentModel);
debugger;        
                this.addressService.save(this.componentModel).subscribe(result=>{
        alert("saved");
                }, error=>{
        
                });
    }
    onSubmit(value: any): void {
      
    }
}
