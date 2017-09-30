import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from 'app/app-routing.module';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppLayoutComponent } from 'app/layouts/admin/app-layout.component';
import { AuthLayoutComponent } from 'app/layouts/auth/auth-layout.component';


import { MdModule } from 'app/shared/md/md.module';
import { CommonAppModule } from 'app/shared/common/common-app.module';


import { AuthenticationModule } from 'app/authentication/authentication.module';
import { FooterModule } from 'app/shared/footer/footer.module';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { SidebarModule } from 'app/shared/sidebar/sidebar.module';

import { ShipmentModule } from 'app/shipment/shipment.module';
import { AddressModule } from 'app/address/address.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AuthenticationModule,
    FooterModule,
    NavbarModule,
    SidebarModule,
    ShipmentModule,
    AddressModule,
    CommonAppModule
  ],
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
