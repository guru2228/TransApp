export class ShipmentDetailModel {
  public id: number;
  public shipmentId: number;
  public quantity: number;
  public packTypeId: number;
  public length: number;
  public width: number;
  public height: number;
  public weight: number;
  public toRemove: boolean;
  public parentDetailId: number;
  public userIdCreated: number;
  public dateCreated: Date;
  public userIdModified: number;
  public dateModified: Date;
}
