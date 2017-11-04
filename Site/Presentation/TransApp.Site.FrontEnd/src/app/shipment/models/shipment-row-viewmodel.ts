import { ShipmentModel } from 'app/shipment/models/shipment-model';

export class ShipmentRowViewModel {
  public viewActions: boolean;
  public viewEdit: boolean;
  public showViewLoader: boolean;
  public shipment: ShipmentModel;
}
