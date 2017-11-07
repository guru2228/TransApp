using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Shipment
{
    public class ShipmentTransporterModel 
    {
        public int Id { get; set; }

        public int? ShipmentId { get; set; }

        public int? TransporterId { get; set; }

        public bool Assigned { get; set; }

        /// <summary>
        /// if assigned =  true then accept or decline, if both false (accepted and decline then return all assigned)
        /// </summary>
        public bool Accepted { get; set; }

        public bool Declined { get; set; }

        public bool Selected { get; set; }

        /// <summary>
        /// 
        /// </summary>
        public DateTime? AssignedDate { get; set; }

        public DateTime? AcceptedDate { get; set; }

        public DateTime? DeclinedDate { get; set; }

        public DateTime? SelectedDate { get; set; }

        public decimal? Price { get; set; }

        public int? LoadingOn { get; set; }

        public int? DeliveryOn { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

        /// <summary>
        /// Valability  of price when transporter offer in openmarket
        /// </summary>
        public DateTime? ExpiredDate { get; set; }
        public int? AmountReview { get; set; }
        public int? Rating { get; set; }
        public string ContactPerson { get; set; }
        public string Phone { get; set; }
        public string TransporterName { get; set; }
        public string IconName { get; set; }
        public DateTime? PickUpDate { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public string AddressName { get; set; }
    }

}
