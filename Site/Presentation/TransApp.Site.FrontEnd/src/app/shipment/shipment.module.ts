import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { MdModule } from "app/shared/md/md.module";
import { ShipmentOverviewComponent } from "app/shipment/components/shipment-overview.component";
import { ShipmentSaveComponent } from "app/shipment/components/shipment-save.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MdModule,
        RouterModule,
        
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyChUim14iXhf6riJ73R3qxNxnMls2SGZDA'
        })
    ],
    exports: [
    ],
    declarations: [
        ShipmentOverviewComponent,
        ShipmentSaveComponent
    ],
    providers: [
    ]
})
export class ShipmentModule { }