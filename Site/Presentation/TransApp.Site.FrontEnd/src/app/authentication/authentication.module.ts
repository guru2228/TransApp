import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "app/authentication/components/login.component";
import { RegisterComponent } from "app/authentication/components/register.component";
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { AuthenticationObserver } from "app/authentication/services/authentication.observer";
import { AuthGuard } from "app/authentication/guard/auth-guard.service";
import { HttpService } from "app/shared/common/services/httpService";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
    ],
    exports: [
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthenticationService,
        AuthenticationObserver,
        AuthGuard
    ]
})
export class AuthenticationModule { }
