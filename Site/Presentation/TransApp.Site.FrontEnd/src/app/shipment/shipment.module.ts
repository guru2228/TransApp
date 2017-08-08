import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { HttpModule } from "@angular/http";

import { ShipmentSearchComponent } from "app/shipment/components/shipment-search.component";
import { ShipmentCreateComponent } from "app/shipment/components/shipment-create.component";
import { MdModule } from "app/shared/md/md.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MdModule
    ],
    exports: [
    ],
    declarations: [
        ShipmentSearchComponent,
        ShipmentCreateComponent
    ],
    providers: [
    ]
})
export class ShipmentModule {}