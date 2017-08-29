import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

declare interface User {
    text?: string; // required, must be 5-8 characters
    email?: string; // required, must be valid email format
    password?: string; // required, value must be equal to confirm password.
    confirmPassword?: string; // required, value must be equal to password.
    number?: number; // required, value must be equal to password.
    url?: string;
    idSource?: string;
    idDestination?: string;
}

declare var require: any

declare var google: any;
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'address-save-component',
    templateUrl: './address-save.component.html'
})

export class AddressSaveComponent {
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
    public user: User;
    public typeValidation: User;

    public latitude: number;
    public longitude: number;
    public searchByAddressControl: FormControl;
    public searchByZipCodeControl: FormControl;
    public zoom: number;

    @ViewChild("searchByAddress")
    public searchAddressElementRef: ElementRef;

    @ViewChild("searchByZipCode")
    public searchZipCodeElementRef: ElementRef;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) { }

    ngOnInit() {
        debugger;
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

            let zipCodeAutocomplete = new google.maps.places.Autocomplete(this.searchZipCodeElementRef.nativeElement, {
                types: ["establishment"]
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

            zipCodeAutocomplete.addListener("place_changed", () => {
                debugger;
                this.ngZone.run(() => {
                    debugger;
                    this.searchByAddressControl = new FormControl();

                    //get the place result
                    let place = zipCodeAutocomplete.getPlace();
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
    
    save(model: User, isValid: boolean) {
        // call API to save customer
        console.log(model, isValid);
    }
    onSubmit(value: any): void {
        console.log(value);
    }
}
