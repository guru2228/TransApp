import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from "app/common/error.component";
import { PageNotFoundComponent } from "app/common/pageNotFound.component";
import { AdminLayoutComponent } from "app/layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "app/layouts/auth/auth-layout.component";
import { LoginComponent } from "app/authentication/login.component";

import { AddressCreateComponent } from "app/address/components/address-create.component";
import { AddressOverviewComponent } from "app/address/components/address-overview.component";

import { ShipmentSaveComponent } from "app/shipment/components/shipment-save.component";
import { ShipmentOverviewComponent } from "app/shipment/components/shipment-overview.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'shipment-overview',
        pathMatch: 'full',
    },

    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                children: [{
                    path: 'login',
                    component: LoginComponent
                }]
            }
        ]
    },

    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                children: [{
                    path: 'shipment-overview',
                    component: ShipmentOverviewComponent,
                    children: [{
                        path: 'shipment-edit/:id',
                        component: ShipmentSaveComponent
                    }]
                }]
            },

            {
                path: 'shipment-create',
                component: ShipmentSaveComponent
            },
            {
                path: '',
                children: [{
                    path: 'address-overview',
                    component: AddressOverviewComponent
                }]
            },

            {
                path: 'address-create',
                component: AddressCreateComponent
            },
        ]
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