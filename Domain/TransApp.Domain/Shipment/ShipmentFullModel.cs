using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Shipment
{
    public class ShipmentFullModel
    {
        public ShipmentModel Shipment { get; set; }
        public List<ShipmentDetailModel> ShipmentDetails { get; set; }
        public List<ShipmentReceiverFacilityModel> ShipmentReceiverFacilities { get; set; }
        public List<ShipmentReceiverRequirementModel> ShipmentReceiverRequirements { get; set; }
        public List<ShipmentReceiverTruckModel> ShipmentReceiverTrucks { get; set; }
        public List<ShipmentSenderFacilityModel> ShipmentSenderFacilities { get; set; }
        public List<ShipmentSenderRequirementModel> ShipmentSenderRequirements { get; set; }
        public List<ShipmentSenderTruckModel> ShipmentSenderTrucks { get; set; }
        public List<ShipmentTransporterModel> ShipmentTransporters { get; set; }
    }
}
