using System;
using System.Collections.Generic;
using TransApp.Domain.Addresses;
using TransApp.Domain.Common.Entity;

namespace TransApp.Domain.Shipment
{
    public class ShipmentModel
    {
        public int Id { get; set; }

        public string Reference { get; set; }

        public string PoNumber { get; set; }

        public DateTime? PickUpDate { get; set; }

        public DateTime? DeliveryDate { get; set; }

        public int? CustomerId { get; set; }

        public int? SenderAddressId { get; set; }

        public string SenderContactPerson { get; set; }

        public string SenderPhone { get; set; }

        public string SenderRemark { get; set; }

        public AvailabilityEntityModel SenderAvailability { get; set; }

        public int? ReceiverAddressId { get; set; }

        public string ReceiverContactPerson { get; set; }

        public string ReceiverPhone { get; set; }

        public string ReceiverRemark { get; set; }

        public AvailabilityEntityModel ReceiverAvailability { get; set; }

        public decimal? TotalPrice { get; set; }

        public decimal? TotalVolume { get; set; }

        public decimal? TotalQuatity { get; set; }

        public decimal? TotalWeight { get; set; }

        public int? ShipmentStatusId { get; set; }

        public int? TransporterId { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public string UserModified { get; set; }

        public string UserCreated { get; set; }

        public DateTime? DateModified { get; set; }

        public List<ShipmentDetailModel> ShipmentDetails { get; set; }

        public List<FacilityEntityModel> ReceiverFacilities { get; set; }
        public List<RequirementEntityModel> ReceiverRequirements { get; set; }
        public List<TruckEntityModel> ReceiverTrucks { get; set; }

        public List<FacilityEntityModel> SenderFacilities { get; set; }
        public List<RequirementEntityModel> SenderRequirements { get; set; }
        public List<TruckEntityModel> SenderTrucks { get; set; }

        public List<ShipmentTransporterModel> Transporters { get; set; }
    }
}
