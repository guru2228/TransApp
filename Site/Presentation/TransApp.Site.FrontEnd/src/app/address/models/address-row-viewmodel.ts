

import { AddressModel } from "app/address/models/address-model";

export class AddressRowViewModel {
  public viewActions: boolean;
  public viewEdit: boolean;
  public address: AddressModel;
  public showViewLoader: boolean;
}
