using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using TransApp.Core.ShipmentTransporter;

namespace TransApp.Domain.Shipment
{
    public class ShipmentTransporterFilterModel
    {
        /// <summary>
        /// Description
        /// </summary>
        public string Description => StatusType.ToString();

        /// <summary>
        /// Assigned,Unassigned,Complete,Accepted
        /// </summary>
        public ShipmentTransporterStatus StatusType { get; set; }

        /// <summary>
        /// amount of records for this customer with selected state
        /// </summary>
        public int Amount { get; set; }

        /// <summary>
        /// last modification done for a record with current status
        /// </summary>
        public DateTime? LastDateTime { get; set; }

        /// <summary>
        /// used only for assigned group
        /// </summary>
        public int Declined { get; set; }

        /// <summary>
        /// used only for assigned
        /// </summary>
        public int Pending { get; set; }

    }
}
