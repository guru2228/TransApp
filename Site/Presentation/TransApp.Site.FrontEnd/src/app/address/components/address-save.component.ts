import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit } from '@angular/core';
import { NgForm, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

import { ActivatedRoute, Params, RouterModule, Router, Routes } from '@angular/router';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { AddressModel } from 'app/address/models/address-model';
import { HelperService } from 'app/shared/common/services/helperService';
import { AddressService } from 'app/address/services/address.service';
import { TranslateService } from 'app/shared/common/services/localization/translate.service';
import { FacilityParameterModel } from 'app/shared/common/models/parameter/facility-parameter-model';
import { RequirementParameterModel } from 'app/shared/common/models/parameter/requirement-parameter-model';
import { TruckParameterModel } from 'app/shared/common/models/parameter/truck-parameter-model';
import { GlobalErrorHandler } from 'app/shared/common/services/globalErrorHandler';
import { AddressLocationModel } from 'app/address/models/address-location-model';
import { ParametersDataService } from 'app/shared/common/services/parameters-data.service';
import { AuthenticationService } from 'app/authentication/services/authentication.service';
import { ApplicationUser } from 'app/authentication/viewmodels/application-user';
import { ComponentStateType } from 'app/shared/common/helper/component-state-type';
import { NotificationService } from 'app/shared/common/services/notification.service';
import { AvailabilityEntityModel } from 'app/shared/common/models/entity/availability-entity-model';
import { FacilityEntityModel } from 'app/shared/common/models/entity/facility-entity-model';
import { RequirementEntityModel } from 'app/shared/common/models/entity/requirement-entity-model';

declare var require: any
declare var google: any;
declare var $: any;

@Component({
  moduleId: module.id,
  selector: 'app-address-save-component',
  templateUrl: './address-save.component.html'
})

export class AddressSaveComponent implements OnInit, AfterViewInit {
  /** main component model */
  componentModel: AddressModel;
  /** component state : display, add or edit */
  componentState: ComponentStateType;

  public searchControl: FormControl;

  @ViewChild('searchElement')
  public searchElementRef: ElementRef;

  currentUser: ApplicationUser;
  /**
   * used to set map zoom mode
   *  1: World
      5: Landmass/continent
      10: City
      15: Streets
      20: Buildings
   *
  */
  private zoomLevel = 15;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private authenticationService: AuthenticationService,
    private helperService: HelperService,
    private addressService: AddressService,
    private parametersDataService: ParametersDataService,
    private translateService: TranslateService,
    private errorHandler: GlobalErrorHandler,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();
    // create search FormControl
    this.searchControl = new FormControl();
    // get component state
    this.componentState = this.helperService.getComponentStateByUrl(this.router.url) as ComponentStateType;
    // load required data
    this.loadComponentModel(this.componentState).subscribe(modelLoaded => {
      if (modelLoaded) {
        this.loadParamsData().subscribe(paramsDataLoaded => {
          if (paramsDataLoaded) {
            this.register_googleMapsPlaceSearchHandler();
            if (this.componentState > 0) {
              this.addressService.sendAddressModel({
                operation: 'loaded',
                address: this.componentModel
              });
            }
          }
        })
      }
    });
  }

  ngAfterViewInit(): void {
    const self = this;
    setTimeout(function () {
      self.setCursorToAddressSearch();
    }, 500);
  }

  save(model: AddressModel, isValid: boolean) {
    console.log(model, isValid);
    if (isValid && this.isModelValid()) {
      this.addressService.save(this.componentModel, this.translateService.currentLanguage).subscribe(result => {
        if (this.componentState === ComponentStateType.add) {
          this.router.navigate(['/address-overview/address-edit/' + result]);
          this.notificationService.show('Address created.', 'success', 'center', 'top');
        } else {
          //// send data to addreess coponent to be updated
          this.addressService.sendAddressModel({
            operation: 'saved',
            address: this.componentModel
          });
          this.notificationService.show('Address saved. ', 'success', 'center', 'top');
        }
      }, error => {
        this.errorHandler.handleError(error);
      });
    } else {
      this.helperService.scrollOnTop();
      this.setCursorToAddressSearch();
    }
  }

  /**
* When common availability state change
*/
  onCommonAvailabilityClick() {
    this.componentModel.commonAvailability = !this.componentModel.commonAvailability;
    this.generateAvailabilities();
  }

  /**
   * Load component model, or create a new one if component state is = Add
   * @param componentState
   */
  private loadComponentModel(componentState: ComponentStateType): Observable<boolean> {
    return Observable.create(observer => {
      if (componentState === ComponentStateType.add) {

        this.createEmptyModel();
        // set current position
        this.createMap(50.89, 4.34);
        observer.next(true);
      } else {
        let addressId = 0;
        this.route.params.forEach((params: Params) => {
          addressId = params['id'];
          this.addressService.get(addressId, this.currentUser.customerId, this.translateService.currentLanguage).subscribe(result => {
            this.componentModel = result as AddressModel;
            console.log(this.componentModel);
            const self = this;
            // settimeout used to let angular template engine to render map element (everything is displayed only when component model )
            setTimeout(function () {
              self.createMap(self.componentModel.location.latitude, self.componentModel.location.longitude);
            }, 500);

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
      this.parametersDataService.getAddressRequirementsParameters(this.translateService.currentLanguage)
        .subscribe(data => {
          this.componentModel.facilities = this.parametersDataService.generateFacilityEntitiesList(this.componentModel.id, data['facilities'] as any, this.componentModel.facilities);
          this.componentModel.requirements = this.parametersDataService.generateRequirementsEntitiesList(this.componentModel.id, data['requirements'] as any, this.componentModel.requirements);
          this.componentModel.trucks = this.parametersDataService.generateTruksEntitiesList(this.componentModel.id, data['trucks'] as any, this.componentModel.trucks);
          observer.next(true);
        }, error => {
          this.errorHandler.handleError(error);
          observer.next(false);
        });
    });
  }

  /**
   * Register google maps place handler.
   * When palce is changed, handler to update model is registered
   */
  private register_googleMapsPlaceSearchHandler() {
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      // create map
      const addressesAutocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        // types: ["address"]
      });
      // init place change listener
      addressesAutocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place = addressesAutocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // set latitude, longitude and zoom
          this.updateLocationModel(place);
          this.updateOpeningHours(place);

          this.createMap(this.componentModel.location.latitude, this.componentModel.location.longitude);

          if (this.componentState === ComponentStateType.add)
            this.searchElementRef.nativeElement.focus();
        });
      });

    });
  }


  /**
   *Get each component of the address from the place details
    and fill the corresponding field on the form.
   */
  private updateLocationModel(place: any) {
    this.componentModel.location = new AddressLocationModel();
    this.componentModel.phone = '';
    this.componentModel.name = '';

    this.componentModel.location.latitude = place.geometry.location.lat();
    this.componentModel.location.longitude = place.geometry.location.lng();

    for (let i = 0; i < place.address_components.length; i++) {
      const addressMember = place.address_components[i].types[0];
      switch (addressMember) {
        case 'country':
          {
            this.componentModel.location.countryCode = place.address_components[i]['short_name'];
            this.componentModel.location.country = place.address_components[i]['long_name'];
          }
          break;
        case 'administrative_area_level_1':
          {
            this.componentModel.location.state = place.address_components[i]['long_name'];
            this.componentModel.location.stateCode = place.address_components[i]['short_name'];
          }
          break;
        case 'locality':
        case "postal_town":
          {
            this.componentModel.location.city = place.address_components[i]['long_name'];
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

  }


  /**
  -	Openinghours
      o	If available, we copy the google opening hours
      o	If not, by default
          -	Monday – Friday 8h – 12h and 13h – 16h
          -	Saturday closed
          -	Sunday closed
*/
  private updateOpeningHours(place: any) {
    this.componentModel.availabilities = [];
    // if is permanently closed then, send common availability = true and closed on day 0  = true
    if (place.permanently_closed) {
      this.componentModel.commonAvailability = true;
      const availability = new AvailabilityEntityModel();
      availability.id = -1;
      availability.day = 0;
      availability.isClosed = true;
      this.componentModel.availabilities.push(availability);
    } else if (place.opening_hours) {
      const availabilitiesList = new Array<AvailabilityEntityModel>();
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
        const availability = new AvailabilityEntityModel();


        availability.id = -1;
        availability.day = 0;
        availability.amStart = '00:00';
        availability.amStop = '24:00';
        availability.pmStart = '24:00';
        availability.pmStop = '24:00';
        this.componentModel.availabilities.push(availability);
      } else {
        for (let day = 1; day <= 7; day++) {
          const googleDayIndex = day === 7 ? 0 : day;

          const availability = new AvailabilityEntityModel();
          availability.id = -1;
          availability.day = day;

          const periods = place.opening_hours.periods.filter(item => item.open && item.open.day === googleDayIndex);
          if (periods && periods.length > 0) {
            const periodStart = periods[0];
            if (!periodStart.close) {
              availability.amStart = '00:00';
              availability.amStop = '24:00';
            } else {
              availability.amStart = ('0' + periodStart.open.hours).slice(-2) + ':' + ('0' + periodStart.open.minutes).slice(-2);
              availability.amStop = ('0' + (periodStart.close.hours === 0 ? 24 : periodStart.close.hours)).slice(-2) + ':' + ('0' + periodStart.close.minutes).slice(-2);
            }

            const periodEnd = periods.length > 1 ? periods[1] : null;

            if (periodEnd) {
              availability.pmStart = ('0' + periodEnd.open.hours).slice(-2) + ':' + ('0' + periodEnd.open.minutes).slice(-2);
              availability.pmStop = ('0' + (periodEnd.close.hours === 0 ? 24 : periodEnd.close.hours)).slice(-2) + ':' + ('0' + periodEnd.close.minutes).slice(-2);
            } else {
              availability.pmStart = null;
              availability.pmStop = null;
            }

          } else {
            availability.isClosed = true;
          }

          availabilitiesList.push(availability);
          this.componentModel.availabilities = availabilitiesList;

        }
      }

    } else {
      this.generateAvailabilities();
    }
  }

  /**
   * Create map based on address model
   */
  private createMap(latitude: number, longitude: number) {
    this.mapsAPILoader.load().then(() => {
      const myLatlng = new google.maps.LatLng(latitude, longitude);
      const mapOptions = {
        zoom: this.zoomLevel,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
      }

      const map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);

      const marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Map'
      });

      marker.setMap(map);
    });
  }

  /**
 * Create address initial model, on add
 */
  private createEmptyModel() {
    this.componentModel = new AddressModel();
    this.componentModel.id = -1;
    this.componentModel.commonAvailability = false;
    this.generateAvailabilities();
    this.componentModel.customerId = this.currentUser.customerId;
    this.componentModel.location = new AddressLocationModel();
    this.componentModel.facilities = [];
    this.componentModel.requirements = [];
    this.componentModel.trucks = [];
  }

  private isModelValid(): boolean {
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
  }

  private generateAvailabilities() {
    const availabilitiesList = new Array<AvailabilityEntityModel>();
    if (!this.componentModel.commonAvailability) {
      this.componentModel.availabilities = [];
      if (this.componentModel.availabilities.length < 7) {
        for (let day = 1; day <= 7; day++) {
          const availability = new AvailabilityEntityModel();
          availability.id = -1;
          availability.day = day;
          if (day > 5) {
            availability.isClosed = true;
          }
          availabilitiesList.push(availability);
        }
      }
    } else {
      const availability = new AvailabilityEntityModel();
      availability.id = -1;
      availability.day = 0;
      availabilitiesList.push(availability);
    }
    this.componentModel.availabilities = availabilitiesList;
  }

  emailValidator(email: string): boolean {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!EMAIL_REGEXP.test(email)) {
      return false;
    }
    return true;
  }

  private getDay(day: number): string {
    const weekdays = [
      'Monday', 'Tuesday',
      'Wednesday', 'Thursday', 'Friday',
      'Saturday', 'Sunday'
    ];
    if (day > 0) {
      return weekdays[day - 1];
    } else {
      return weekdays[0] + ' - ' + weekdays[6];
    }
  }

  private setCursorToAddressSearch() {
    if (this.componentState === ComponentStateType.add) {
      const element = document.getElementById('searchControl');
      if (element) {
        element.focus();
      }
    }
  }
}
