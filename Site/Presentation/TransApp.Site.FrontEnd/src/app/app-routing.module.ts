import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from "app/layouts/admin/app-layout.component";
import { AuthLayoutComponent } from "app/layouts/auth/auth-layout.component";

import { ErrorComponent } from "app/shared/common/components/error.component";
import { PageNotFoundComponent } from "app/shared/common/components/pageNotFound.component";
import { LoginComponent } from "app/authentication/components/login.component";

import { AddressSaveComponent } from "app/address/components/address-save.component";
import { AddressOverviewComponent } from "app/address/components/address-overview.component";

import { ShipmentSaveComponent } from "app/shipment/components/shipment-save.component";
import { ShipmentOverviewComponent } from "app/shipment/components/shipment-overview.component";
import { AuthGuard } from "app/authentication/guard/auth-guard.service";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'shipment-add',
        component: ShipmentSaveComponent
      },
      {
        path: 'shipment-edit/:id',
        component: ShipmentSaveComponent
      },
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
        path: 'address-add',
        component: AddressSaveComponent
      },
      {
        path: 'address-edit/:id',
        component: AddressSaveComponent
      },
      {
        path: '',
        children: [{
          path: 'address-overview',
          component: AddressOverviewComponent,
          children: [{
            path: 'address-edit/:id',
            component: AddressSaveComponent
          }]
        }]
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
