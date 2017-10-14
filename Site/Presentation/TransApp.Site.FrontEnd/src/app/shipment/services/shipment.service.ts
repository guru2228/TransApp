import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { HttpService } from "app/shared/common/services/httpService";
import { Constants } from "app/shared/common/constants";
import { GlobalErrorHandler } from "app/shared/common/services/globalErrorHandler";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShipmentModel } from 'app/shipment/models/shipment-model';
import { ShipmentTransporterFilterModel } from 'app/shipment/models/shipment-transporter-filter-model';


@Injectable()
export class ShipmentService {

  private serviceUrl = Constants.serverUrl + 'api/Shipments/';
  private shipmentModel = new BehaviorSubject<ShipmentModel>(null);
  shipmentModelReceivedHandler$ = this.shipmentModel.asObservable();
  sendShipmentModel(value) {
    this.shipmentModel.next(value);
  }
  // don't forget to reset handler
  resetSendShipmentModelHandler() {
    this.shipmentModel.next(null);
  }

  constructor(public http: HttpService, private errorHandler: GlobalErrorHandler) { }

  /**
   * get biometrics
   * @param employeeEncryptedData
   * @param language
   */
  get(id: number,  customerId:number, language: string): Observable<ShipmentModel> {
    return this.http.get(this.serviceUrl +
      'get' +
      '/' + id +
      '/' + customerId +
      '/' + language)
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }

  /**
   * Get all shipments
   * @param customerId
   * @param startItem
   * @param numberOfRetrievedItems
   * @param language
   */
  getAll(customerId: number, shipmentStatus: number, startItem: number, numberOfRetrievedItems: number, language: string): Observable<ShipmentModel[]> {
    return this.http.get(this.serviceUrl +
      'getAll' +
      '/' + customerId +
      '/' + shipmentStatus +
      '/' + startItem +
      '/' + numberOfRetrievedItems +
      '/' + language )
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }

  /**
* Get number of shipments, used for paging
* @param customerId
* @param startItem
* @param numberOfRetrievedItems
* @param language
*/
  getCount(customerId: number, shipmentStatus: number,  language: string): Observable<number> {
    return this.http.get(this.serviceUrl +
      'getCount' +
      '/' + customerId +
      '/' + shipmentStatus +
      '/' + language )
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }

  /**
   * Save shipment
   * @param medicalEncryptedData
   * @param componentName
   * @param language
   */
  save(model: ShipmentModel) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const data = JSON.stringify(model);

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
  */
  delete(shipmentId: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.delete(this.serviceUrl + 'delete/' + shipmentId)
      .map(response => (response).json());
  }

    /**
   * Get all shipments
   * @param customerId
   * @param startItem
   * @param numberOfRetrievedItems
   * @param language
   */
  getShipmentFilters(customerId: number, language: string): Observable<ShipmentTransporterFilterModel[]> {
    return this.http.get(this.serviceUrl +
      'getShipmentFilters' +
      '/' + customerId +
      '/' + language )
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }
}
