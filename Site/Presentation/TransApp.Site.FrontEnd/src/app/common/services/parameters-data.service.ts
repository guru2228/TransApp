﻿import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { HttpService } from "app/common/services/httpService";
import { Constants } from "app/common/constants";
import { GlobalErrorHandler } from "app/common/services/globalErrorHandler";
import { FacilityModel } from "app/common/models/facility-model";
import { TruckModel } from "app/common/models/truck-model";
import { RequirementModel } from "app/common/models/requirement-model";


@Injectable()
export class ParametersDataService {

    private serviceUrl = Constants.serverUrl + 'api/ParametersData/';

    constructor(public http: HttpService, private errorHandler: GlobalErrorHandler) { }

    /**
     * getFacilities
     * @param language 
     */
    getFacilities(language: string): Observable<FacilityModel[]> {
        return this.http.get(this.serviceUrl +
            'getFacilities' +
            '/' +
            language)
            .map((res: Response) => res.json())
            .catch(this.errorHandler.throwError);
    }

    /**
     * getTruks
     * @param language 
     */
    getTruks(language: string): Observable<TruckModel[]> {
        return this.http.get(this.serviceUrl +
            'getTrucks' +
            '/' +
            language)
            .map((res: Response) => res.json())
            .catch(this.errorHandler.throwError);
    }

    /**
     * getRequirements
     * @param language 
     */
    getRequirements(language: string): Observable<RequirementModel[]> {
        return this.http.get(this.serviceUrl +
            'getRequirements' +
            '/' +
            language)
            .map((res: Response) => res.json())
            .catch(this.errorHandler.throwError);
    }
}