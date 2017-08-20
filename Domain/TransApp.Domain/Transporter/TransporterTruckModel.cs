using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Shipment
{
    public class TransporterTruckModel
    {
        public int Id { get; set; }

        public int? TransporterId { get; set; }

        public int? TruckId { get; set; }

        public bool Active { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

    }

}
