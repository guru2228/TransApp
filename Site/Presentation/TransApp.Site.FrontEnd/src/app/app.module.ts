import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "app/app-routing.module";

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { ShipmentModule } from "app/shipment/shipment.module";

import { LoginComponent } from "app/authentication/login.component";
import { RegisterComponent } from "app/authentication/register.component";
import { ErrorComponent } from "app/common/error.component";
import { PageNotFoundComponent } from "app/common/pageNotFound.component";
import { FooterModule } from "app/shared/footer/footer.module";
import { NavbarModule } from "app/shared/navbar/navbar.module";
import { SidebarModule } from "app/shared/sidebar/sidebar.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Register the modules
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ShipmentModule,
    FooterModule,
    NavbarModule,
    SidebarModule

  ], 
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
