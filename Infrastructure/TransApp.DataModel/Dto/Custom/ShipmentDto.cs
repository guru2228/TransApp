using System.Collections.Generic;

namespace TransApp.DataModel.Dto.Custom
{
    public class ShipmentDto
    {
        public Shipment Shipment { get; set; }
        public List<ShipmentDetail> ShipmentDetails { get; set; }
        public List<ShipmentReceiverFacility> ShipmentReceiverFacilities { get; set; }
        public List<ShipmentReceiverRequirement> ShipmentReceiverRequirements { get; set; }
        public List<ShipmentReceiverTruck> ShipmentReceiverTrucks { get; set; }
        public List<ShipmentSenderFacility> ShipmentSenderFacilities { get; set; }
        public List<ShipmentSenderRequirement> ShipmentSenderRequirements { get; set; }
        public List<ShipmentSenderTruck> ShipmentSenderTrucks { get; set; }
        public List<ShipmentTransporter> ShipmentTransporters { get; set; }
    }
}
