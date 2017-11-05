import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { MdModule } from "app/shared/md/md.module";
import { AddressOverviewComponent } from "app/address/components/address-overview.component";
import { AddressSaveComponent } from "app/address/components/address-save.component";
import { AddressService } from "app/address/services/address.service";
import { AddressAvailabilitySliderComponent } from "app/shared/common/components/address-availability-slider.component";
import { CommonAppModule } from "app/shared/common/common-app.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MdModule,
    AgmCoreModule.forRoot({
      libraries: ["places"],
      apiKey: 'AIzaSyChUim14iXhf6riJ73R3qxNxnMls2SGZDA'
    }),
    CommonAppModule
  ],
  exports: [
  ],
  declarations: [
    AddressSaveComponent,
    AddressOverviewComponent
  ],
  providers: [
    AddressService
  ]
})
export class AddressModule { }
