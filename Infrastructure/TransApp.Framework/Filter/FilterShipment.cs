﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.Core.ShipmentTransporter;

namespace TransApp.Framework.Filter
{
    public class FilterShipment
    {
        public int? CustomerId { get; set; }
        public int StartItem { get; set; }
        public int Amount { get; set; }
        public string ShipmentStatus { get; set; }
        public int? TransporterId { get; set; }
        public ShipmentTransporterStatus TransporterStatus { get; set; }
        public bool Declined { get; set; }
        public bool Pending { get; set; }

    }
}
