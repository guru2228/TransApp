import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';


import { AgmCoreModule } from '@agm/core';
import { MdModule } from "app/shared/md/md.module";
import { ShipmentOverviewComponent } from "app/shipment/components/shipment-overview.component";
import { ShipmentSaveComponent } from "app/shipment/components/shipment-save.component";
import { CommonAppModule } from 'app/shared/common/common-app.module';
import { ShipmentService } from 'app/shipment/services/shipment.service';
import { PackTypeSaveDialog } from 'app/shipment/components/packtype-save.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdModule,
    RouterModule,
    CommonAppModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChUim14iXhf6riJ73R3qxNxnMls2SGZDA'
    }),
  ],
  exports: [
  ],
  declarations: [
    ShipmentOverviewComponent,
    ShipmentSaveComponent,
    PackTypeSaveDialog

  ],
  entryComponents: [PackTypeSaveDialog],
  providers: [
    ShipmentService
  ]
})
export class ShipmentModule { }
