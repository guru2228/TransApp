import { AddressLocationModel } from 'app/address/models/address-location-model';
import { FacilityEntityModel } from 'app/shared/common/models/entity/facility-entity-model';
import { AvailabilityEntityModel } from 'app/shared/common/models/entity/availability-entity-model';
import { RequirementEntityModel } from 'app/shared/common/models/entity/requirement-entity-model';
import { TruckEntityModel } from 'app/shared/common/models/entity/truck-entity-model';

export class AddressModel {
    public id: number;
    public customerId: number;
    public name: string;
    public location: AddressLocationModel;
    public contactPerson: string;
    public email: string;
    public phone: string;
    public remark: string;
    public userIdCreated: number;
    public dateCreated: Date;
    public userIdModified: number;
    public dateModified: Date;
    public userCreated: string;
    public userModified: string;
    public availabilities: Array<AvailabilityEntityModel>;
    public facilities: Array<FacilityEntityModel>;
    public requirements: Array<RequirementEntityModel>;
    public trucks: Array<TruckEntityModel>;
    public commonAvailability: boolean;
}
