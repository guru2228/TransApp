import { AddressFacilityModel } from 'app/address/models/address-facility-model';
import { AddressRequirementModel } from 'app/address/models/address-requirment-model';
import { AddressTruckModel } from 'app/address/models/address-truck-model';
import { AddressLocationModel } from 'app/address/models/address-location-model';
import { AddressAvailabilityModel } from 'app/shared/common/models/address-availability-model';

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
    public availabilities: Array<AddressAvailabilityModel>;
    public facilities: Array<AddressFacilityModel>;
    public requirements: Array<AddressRequirementModel>;
    public trucks: Array<AddressTruckModel>;
    public commonAvailability: boolean;
}
