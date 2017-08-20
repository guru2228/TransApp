import { NgModule }       from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule }   from '@angular/common';
import { HttpModule } from "@angular/http";

import {AgmCoreModule} from '@agm/core';

import { MdModule } from "app/shared/md/md.module";
import { AddressCreateComponent } from "app/address/components/address-create.component";
import { AddressOverviewComponent } from "app/address/components/address-overview.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        MdModule,
        AgmCoreModule.forRoot({    libraries: ["places"],
            apiKey: 'AIzaSyChUim14iXhf6riJ73R3qxNxnMls2SGZDA'
        })
    ],
    exports: [
    ],
    declarations: [
        AddressCreateComponent,
        AddressOverviewComponent
    ],
    providers: [
    ]
})
export class AddressModule {}