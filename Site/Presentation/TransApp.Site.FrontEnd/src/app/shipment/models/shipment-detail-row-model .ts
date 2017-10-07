import { ShipmentDetailModel } from "app/shipment/models/shipment-detail-model";

export class ShipmentDetailRowModel {
    public master: ShipmentDetailModel;
    public extras: Array<ShipmentDetailModel>;
}
