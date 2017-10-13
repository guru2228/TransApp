import { AvailabilityEntityModel } from 'app/shared/common/models/entity/availability-entity-model';
import { ShipmentTransporterModel } from 'app/shipment/models/shipment-transporter-model';
import { ShipmentDetailModel } from 'app/shipment/models/shipment-detail-model';
import { FacilityEntityModel } from 'app/shared/common/models/entity/facility-entity-model';
import { TruckEntityModel } from 'app/shared/common/models/entity/truck-entity-model';
import { RequirementEntityModel } from 'app/shared/common/models/entity/requirement-entity-model';
import { ShipmentDetailRowModel } from 'app/shipment/models/shipment-detail-row-model ';

export class ShipmentModel {
  public id: number;
  public reference: string;
  public poNumber: string;
  public pickUpDate: Date;
  public deliveryDate: Date;
  public customerId: number;
  // sender region
  public senderAddressId: number;
  public senderContactPerson: string;
  public senderPhone: string;
  public senderRemark: string;
  public senderAvailabilities: AvailabilityEntityModel[];
  public senderFacilities: Array<FacilityEntityModel>;
  public senderRequirements: Array<RequirementEntityModel>;
  public senderTrucks: Array<TruckEntityModel>;
  public senderAddressInfo: string;
  // receiver region
  public receiverAddressId: number;
  public receiverContactPerson: string;
  public receiverPhone: string;
  public receiverRemark: string;
  public receiverAvailabilities: AvailabilityEntityModel[];
  public receiverFacilities: Array<FacilityEntityModel>;
  public receiverRequirements: Array<RequirementEntityModel>;
  public receiverTrucks: Array<TruckEntityModel>;
  public receiverAddressInfo: string;

  public totalPrice: number;
  public totalVolume: number;
  public totalQuatity: number;
  public totalWeight: number;
  public shipmentStatus: string;
  public transporterId: number;
  public shipmentDetails: Array<ShipmentDetailRowModel>;
  public shipmentTransporters: Array<ShipmentTransporterModel>;

  public userIdCreated: number;
  public dateCreated: Date;
  public userIdModified: number;
  public userModified: string;
  public userCreated: string;
  public dateModified: Date;
}
