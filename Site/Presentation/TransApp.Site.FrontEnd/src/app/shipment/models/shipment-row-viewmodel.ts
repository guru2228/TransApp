import { ShipmentModel } from 'app/shipment/models/shipment-model';

export class ShipmentRowViewModel {
  public viewActions: boolean;
  public viewEdit: boolean;
  public showViewShipmentLoader: boolean;
  public shipment: ShipmentModel;
}
