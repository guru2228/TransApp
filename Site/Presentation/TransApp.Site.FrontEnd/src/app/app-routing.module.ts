import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShipmentSearchComponent } from "app/shipment/components/shipment-search.component";
import { ShipmentCreateComponent } from "app/shipment/components/shipment-create.component";

import { ErrorComponent } from "app/common/error.component";
import { PageNotFoundComponent } from "app/common/pageNotFound.component";
import { AdminLayoutComponent } from "app/layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "app/layouts/auth/auth-layout.component";
import { LoginComponent } from "app/authentication/login.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'searchshipment',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                children: [{
                    path: 'searchshipment',
                    component: ShipmentSearchComponent
                }]
            },

            {
                path: 'createshipment',
                component: ShipmentCreateComponent
            },
        ]
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
            },

            {
                path: 'createshipment',
                component: ShipmentCreateComponent
            },
        ]
    },
    {
        path: '',
        component: AuthLayoutComponent,
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