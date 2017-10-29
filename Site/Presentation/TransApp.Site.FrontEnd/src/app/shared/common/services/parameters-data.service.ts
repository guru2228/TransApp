import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { HttpService } from "app/shared/common/services/httpService";
import { Constants } from "app/shared/common/constants";
import { GlobalErrorHandler } from "app/shared/common/services/globalErrorHandler";
import { FacilityParameterModel } from "app/shared/common/models/parameter/facility-parameter-model";
import { TruckParameterModel } from "app/shared/common/models/parameter/truck-parameter-model";
import { RequirementParameterModel } from "app/shared/common/models/parameter/requirement-parameter-model";
import { FacilityEntityModel } from "app/shared/common/models/entity/facility-entity-model";
import { RequirementEntityModel } from "app/shared/common/models/entity/requirement-entity-model";
import { TruckEntityModel } from "app/shared/common/models/entity/truck-entity-model";
import { PackTypeParameterModel } from "app/shared/common/models/parameter/pack-type-parameter-model";

@Injectable()
export class ParametersDataService {
  private serviceUrl = Constants.serverUrl + "api/ParametersData/";

  constructor(
    public http: HttpService,
    private errorHandler: GlobalErrorHandler
  ) { }

  /**
   * getFacilities
   * @param language
   */
  getAddressRequirementsParameters(
    language: string
  ): Observable<FacilityParameterModel[]> {
    return this.http
      .get(
      this.serviceUrl + "getAddressRequirementsParameters" + "/" + language
      )
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }

  /**
   * getFacilities
   * @param language
   */
  getFacilities(language: string): Observable<FacilityParameterModel[]> {
    return this.http
      .get(this.serviceUrl + "getFacilities" + "/" + language)
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }

  /**
   * getTruks
   * @param language
   */
  getTruks(language: string): Observable<TruckParameterModel[]> {
    return this.http
      .get(this.serviceUrl + "getTrucks" + "/" + language)
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }

  /**
   * getRequirements
   * @param language
   */
  getRequirements(language: string): Observable<RequirementParameterModel[]> {
    return this.http
      .get(this.serviceUrl + "getRequirements" + "/" + language)
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }

  /**
 * getTruks
 * @param language
 */
  getPackTypes(language: string): Observable<PackTypeParameterModel[]> {
    return this.http
      .get(this.serviceUrl + "getPackTypes" + "/" + language)
      .map((res: Response) => res.json())
      .catch(this.errorHandler.throwError);
  }

  /**
 * Save pack type
 * @param language
 */
  savePackType(model: PackTypeParameterModel, language: string) {
    const headers = new Headers({ "Content-Type": "application/json" });
    const data = JSON.stringify(model);

    return this.http
      .post(this.serviceUrl + "savePackType/" + language, data, { headers })
      .map(response => response.json())
      .catch(this.errorHandler.throwError);
  }


  /**
   * update component model with facilities
   * @param entityId
   * @param parametersList
   * @param updatedEntitiesList
   */
  generateFacilityEntitiesList(
    entityId: number,
    parametersList: FacilityParameterModel[],
    updatedEntitiesList: FacilityEntityModel[]
  ): FacilityEntityModel[] {
    if (updatedEntitiesList == null)
      updatedEntitiesList = new Array<FacilityEntityModel>();
    ///// remove items from updated that are no longer in facility params list
    updatedEntitiesList = updatedEntitiesList.filter(
      item =>
        parametersList.filter(paramitem => paramitem.id === item.facilityId)
          .length > 0
    );

    for (let i = 0; i < parametersList.length; i++) {
      const paramModel = updatedEntitiesList.find(
        item => item.facilityId === parametersList[i].id
      );
      let modelItem = null;
      if (paramModel) {
        modelItem = paramModel;
        (modelItem.id = entityId < 0 ? -1 : modelItem.id),
          (modelItem.description = parametersList[i].description);
        modelItem.iconName = parametersList[i].iconName;
      } else {
        modelItem = new FacilityEntityModel();
        modelItem.id = -1;
        modelItem.addressId = entityId;
        modelItem.facilityId = parametersList[i].id;
        modelItem.active = entityId < 0 ? true : false;
        modelItem.description = parametersList[i].description;
        modelItem.iconName = parametersList[i].iconName;
        updatedEntitiesList.push(modelItem);
      }
    }
    return updatedEntitiesList;
  }

  /**
 * update component model with requirments
 * @param entityId
 * @param parametersList
 * @param updatedEntitiesList
 */
  generateRequirementsEntitiesList(
    entityId: number,
    parametersList: RequirementParameterModel[],
    updatedEntitiesList: RequirementEntityModel[]
  ): RequirementEntityModel[] {
    if (updatedEntitiesList == null)
      updatedEntitiesList = new Array<RequirementEntityModel>();
    ///// remove facilities from entities that are no longer in facility params list
    updatedEntitiesList = updatedEntitiesList.filter(
      item =>
        parametersList.filter(paramitem => paramitem.id === item.requirementId)
          .length > 0
    );

    // update component model requirements
    for (let i = 0; i < parametersList.length; i++) {
      const paramModel = updatedEntitiesList.find(
        item => item.requirementId === parametersList[i].id
      );
      let modelItem = null;
      if (paramModel) {
        modelItem = paramModel;
        (modelItem.id = entityId < 0 ? -1 : modelItem.id),
          (modelItem.description = parametersList[i].description);
        modelItem.iconName = parametersList[i].iconName;
      } else {
        modelItem = new RequirementEntityModel();
        modelItem.id = -1;
        modelItem.entityId = entityId;
        modelItem.requirementId = parametersList[i].id;
        modelItem.active = false;
        modelItem.description = parametersList[i].description;
        modelItem.iconName = parametersList[i].iconName;
        updatedEntitiesList.push(modelItem);
      }
    }
    return updatedEntitiesList;
  }

  /**
 * update component model with truks
 * @param entityId
 * @param parametersList
 * @param updatedEntitiesList
 */
  generateTruksEntitiesList(
    entityId: number,
    parametersList: TruckParameterModel[],
    updatedEntitiesList: TruckEntityModel[]
  ): TruckEntityModel[] {
    if (updatedEntitiesList == null)
      updatedEntitiesList = new Array<TruckEntityModel>();
    ///// remove facilities from entities that are no longer in facility params list
    updatedEntitiesList = updatedEntitiesList.filter(
      item =>
        parametersList.filter(paramitem => paramitem.id === item.truckId)
          .length > 0
    );
    // update component model trucks
    for (let i = 0; i < parametersList.length; i++) {
      const paramModel = updatedEntitiesList.find(
        item => item.truckId === parametersList[i].id
      );
      let modelItem = null;
      if (paramModel) {
        modelItem = paramModel;
        (modelItem.id = entityId < 0 ? -1 : modelItem.id),
          (modelItem.description = parametersList[i].description);
        modelItem.iconName = parametersList[i].iconName;
      } else {
        modelItem = new TruckParameterModel();
        modelItem.id = -1;
        modelItem.addressId = entityId;
        modelItem.truckId = parametersList[i].id;
        modelItem.active = entityId < 0 ? true : false;
        modelItem.description = parametersList[i].description;
        modelItem.iconName = parametersList[i].iconName;
        updatedEntitiesList.push(modelItem);
      }
    }
    return updatedEntitiesList;
  }
}
