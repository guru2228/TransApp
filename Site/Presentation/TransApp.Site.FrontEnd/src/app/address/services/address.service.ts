import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { HttpService } from "app/shared/common/services/httpService";
import { Constants } from "app/shared/common/constants";
import { GlobalErrorHandler } from "app/shared/common/services/globalErrorHandler";
import { AddressModel } from "app/address/models/address-model";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class AddressService {

    private serviceUrl = Constants.serverUrl + 'api/Addresses/';

    constructor(public http: HttpService, private errorHandler: GlobalErrorHandler) { }

        private addressModel = new BehaviorSubject<AddressModel>(null);
        addressModelReceivedHandler$ = this.addressModel.asObservable();
        sendAddressModel(value) {
            this.addressModel.next(value);
        }
        // don't forget to reset handler
        resetSendAddressModelHandler(){
            this.addressModel.next(null);
        }
        
    /**
     * get biometrics
     * @param employeeEncryptedData 
     * @param language 
     */
    get(id: number, language: string): Observable<AddressModel> {
        return this.http.get(this.serviceUrl +
            'get' +
            '/' + id + 
            '/' + language)
            .map((res: Response) => res.json())
            .catch(this.errorHandler.throwError);
    }

    /**
     * Get all addresses
     * @param customerId 
     * @param startItem 
     * @param numberOfRetrievedItems 
     * @param language 
     */
    getAll(customerId: number,searchTerm:string, startItem: number, numberOfRetrievedItems: number, language: string): Observable<AddressModel[]> {
        return this.http.get(this.serviceUrl +
            'getAll' +
            '/' + customerId +
            '/' + startItem +
            '/' + numberOfRetrievedItems +
            '/' + language +
            '?searchTerm='+searchTerm)
            .map((res: Response) => res.json())
            .catch(this.errorHandler.throwError);
    }

        /**
     * Get number of addresses, used for paging
     * @param customerId 
     * @param startItem 
     * @param numberOfRetrievedItems 
     * @param language 
     */
    getCount(customerId: number,searchTerm:string,  language: string): Observable<number> {
        return this.http.get(this.serviceUrl +
            'getCount' +
            '/' + customerId +
            '/' + language +
            '?searchTerm='+searchTerm)
            .map((res: Response) => res.json())
            .catch(this.errorHandler.throwError);
    }

    /**
     * Save address
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
            .map(response => (response).json())
            .catch(this.errorHandler.throwError);
    }

     /**
     * Delete address
     * @param medicalEncryptedData 
     * @param componentName 
     * @param language 
     * @param clinicalNote 
     */
    delete(addressId: number) {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.delete(this.serviceUrl + 'delete/' + addressId)
            .map(response => (response).json());
    }
}