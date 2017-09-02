﻿import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import { HttpService } from "app/common/services/httpService";
import { Constants } from "app/common/constants";
import { GlobalErrorHandler } from "app/common/services/globalErrorHandler";
import { AddressModel } from "app/address/models/address-model";


@Injectable()
export class AddressService {

    private serviceUrl = Constants.serverUrl + 'api/Address/';

    constructor(public http:HttpService, private errorHandler: GlobalErrorHandler) { }

   /**
    * get biometrics
    * @param employeeEncryptedData 
    * @param language 
    */
    get(id: number, language: string): Observable<AddressModel> {
        return this.http.get(this.serviceUrl +
            'get' +
            '/' +
            language)
            .map((res: Response) => res.json())
            .catch(this.errorHandler.throwError);
    }

    /**
     * Save biometrics
     * @param medicalEncryptedData 
     * @param componentName 
     * @param language 
     * @param clinicalNote 
     */
    save(model: AddressModel) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let data = JSON.stringify(model);

        return this.http.post(this.serviceUrl + 'save',
                data,
                { headers })
            .map(response => (response).json());
    }
}