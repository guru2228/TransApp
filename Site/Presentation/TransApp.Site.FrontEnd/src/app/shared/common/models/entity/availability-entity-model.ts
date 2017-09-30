export class AvailabilityEntityModel {
    public id: number;
    public entityId: number;
    public day: number;

    public isClosed: boolean;

    public amStart: string;
    public amStop: string;
    public pmStart: string;
    public pmStop: string;

    public userIdCreated: number;
    public dateCreated: Date;
    public userIdModified: number;
    public dateModified: Date;
}
