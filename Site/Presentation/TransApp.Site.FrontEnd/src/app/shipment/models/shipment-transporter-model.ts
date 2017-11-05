export class ShipmentTransporterModel {
  public id: number;
  public shipmentId: number;
  public transporterId: number;
  public transporterName: string;
  public iconName: string;

  public pickUpDate: Date;
  public deliveryDate: Date;

  public assigned: boolean;
  public accepted: boolean;
  public declined: boolean;
  public selected: boolean;

  public assignedDate: Date;
  public acceptedDate: Date;
  public declinedDate: Date;

  public selectedDate: Date;

  public price: number;

  public loadingOn: number;
  public deliveryOn: number;

  public expiredDate: Date;
  public amountReview: number;
  public rating: number;
  public contactPerson: string;
  public phone: string;


  public userIdCreated: number;
  public dateCreated: Date;
  public userIdModified: number;
  public dateModified: Date;

}
