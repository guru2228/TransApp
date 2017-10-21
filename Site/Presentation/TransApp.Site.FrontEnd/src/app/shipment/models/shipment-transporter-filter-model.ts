import { ShipmentTransporterStatus } from "app/shipment/models/shipment-transporter-status";

export class ShipmentTransporterFilterModel {
  public description: string;
  public statusType: ShipmentTransporterStatus;
  public inPending = true;
  public amount: number;
  public lastDateTime: Date;
  public declined: number;
  public pending: number;

  // view actions
  deleteActionVisible = false;
  editActionVisible = false;
  moveToOpenMarketActionVisible = false;
  moveToUnassingedActionVisible = false;
  assignTransporterActionVisible = false;
}
