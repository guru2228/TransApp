import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule, XHRBackend, RequestOptions } from "@angular/http";
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from "app/common/components/error.component";
import { PageNotFoundComponent } from "app/common/components/pageNotFound.component";
import { HelperService } from "app/common/services/helperService";
import { HttpService } from "app/common/services/httpService";
import { TranslateService } from "app/common/services/localization/translate.service";
import { GlobalErrorHandler } from "app/common/services/globalErrorHandler";
import { ParametersDataService } from "app/common/services/parameters-data.service";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
    ],
    declarations: [
        ErrorComponent,
        PageNotFoundComponent
    ],
    providers: [
        HelperService,
        HttpService,
        GlobalErrorHandler,
        ParametersDataService,
        TranslateService,
        {
            provide: HttpService,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }
        
    ]
})
export class CommonAppModule { }
export function httpFactory(backend: XHRBackend, options: RequestOptions) {  return new HttpService(backend, options)};
