using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto.Custom
{
    public class ShipmentSimpleDto
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

        public TimeSpan SenderAmStart { get; set; }

        public TimeSpan SenderAmStop { get; set; }

        public TimeSpan SenderPmStart { get; set; }

        public TimeSpan SenderPmStop { get; set; }

        public int? ReceiverAddressId { get; set; }

        public string ReceiverContactPerson { get; set; }

        public string ReceiverPhone { get; set; }

        public string ReceiverRemark { get; set; }

        public TimeSpan ReceiverAmStart { get; set; }

        public TimeSpan ReceiverAmStop { get; set; }

        public TimeSpan ReceiverPmStart { get; set; }

        public TimeSpan ReceiverPmStop { get; set; }

        public decimal? TotalPrice { get; set; }

        public decimal? TotalVolume { get; set; }

        public decimal? TotalQuatity { get; set; }

        public decimal? TotalWeight { get; set; }

        public string ShipmentStatus { get; set; }

        public int? TransporterId { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }
        public string UserCreated { get; set; }
        public string UserModified { get; set; }
        public string TransporterName { get; set; }
        public string AddressFrom { get; set; }
        public string AddressTo { get; set; }
        public int OfferCount { get; set; }
        public decimal? InvoiceAmount { get; set; }
        public string InvoiceComment { get; set; }
        public DateTime? InvoiceDate { get; set; }
        public string PickUpComment { get; set; }
        public string DeliveryComment { get; set; }
        public bool? DeliveryPod { get; set; }
    }
}
