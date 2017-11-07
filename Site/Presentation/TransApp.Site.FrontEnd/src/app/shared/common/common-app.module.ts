import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from "app/shared/common/components/error.component";
import { PageNotFoundComponent } from "app/shared/common/components/pageNotFound.component";
import { HelperService } from "app/shared/common/services/helperService";
import { HttpService } from "app/shared/common/services/httpService";
import { GlobalErrorHandler } from "app/shared/common/services/globalErrorHandler";
import { ParametersDataService } from "app/shared/common/services/parameters-data.service";
import { TranslateService } from "app/shared/common/services/localization/translate.service";

import { NotificationService } from 'app/shared/common/services/notification.service';
import { AddressAvailabilitySliderComponent } from "app/shared/common/components/address-availability-slider.component";
import { PagerService } from 'app/shared/common/services/pager.service';
import { StarRatingModule } from 'angular-star-rating';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    StarRatingModule.forRoot()
  ],
  exports: [
    MaterialModule,
    AddressAvailabilitySliderComponent,
    StarRatingModule

  ],
  declarations: [
    ErrorComponent,
    PageNotFoundComponent,
    AddressAvailabilitySliderComponent,
  ],
  providers: [
    HelperService,
    HttpService,
    GlobalErrorHandler,
    NotificationService,
    ParametersDataService,
    PagerService,
    TranslateService,
    {
      provide: HttpService,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }

  ]
})
export class CommonAppModule { }
export function httpFactory(backend: XHRBackend, options: RequestOptions) { return new HttpService(backend, options) };
