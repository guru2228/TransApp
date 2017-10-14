using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Framework.Filter
{
    public class FilterShipmentTransporter
    {
        public int? ShipmentId { get; set; }
        public int? TransporterId { get; set; }
        public int? CustomerId { get; set; }
        public bool Unassigned { get; set; }
        public bool OpenMarket { get; set; }
        public bool Assigned { get; set; }
        public bool Confirmed { get; set; }
        public string Predicate { get; set; }
    }
}
