using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Shipment
{
    public class ShipmentDetailModel 
    {
        public int Id { get; set; }

        public int? ShipmentId { get; set; }

        public decimal? Quantity { get; set; }

        public int? PackTypeId { get; set; }

        public int? Length { get; set; }

        public int? Width { get; set; }

        public int? Height { get; set; }

        public int? Weight { get; set; }

        public int? ParentDetailId { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

    }

}
