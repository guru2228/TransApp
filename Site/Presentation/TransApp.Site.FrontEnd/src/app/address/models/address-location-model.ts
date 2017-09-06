export class AddressLocationModel {
    public latitude: number;
    public latitudeStr: string;
    public longitude: number;
    public longitudeStr: string;
    public countryCode: string;
    public country: string;
    public city: string;
    public cityCode: string;
    public state: string;
    public stateCode: string;
    public street: string;
    public streetNumber: number;
    public zipCode: string;

    public phone: string;
    public openNow: string;
    public openingHours: string;

    public mapZoom :number = 15;
}