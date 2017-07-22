import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipmentSearchComponent } from "app/shipment/components/shipment-search.component";
import { ShipmentCreateComponent } from "app/shipment/components/shipment-create.component";

import { ErrorComponent } from "app/common/error.component";
import { PageNotFoundComponent } from "app/common/pageNotFound.component";

const routes: Routes = [
    { path: '', component: ShipmentSearchComponent },
    {
        path: 'createshipment',
        component: ShipmentCreateComponent
    },

    {
        path: 'error',
        component: ErrorComponent
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }