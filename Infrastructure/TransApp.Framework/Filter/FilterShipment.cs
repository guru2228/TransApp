﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Framework.Filter
{
    public class FilterShipment
    {
        public int? CustomerId { get; set; }
        public int StartItem { get; set; }
        public int Amount { get; set; }
        public int? ShipmentStatusId { get; set; }
        public int? TransporterId { get; set; }
    }
}
