using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto.Custom
{
    public class ShipmentTransporterDto
    {
        public int Id { get; set; }

        public int? ShipmentId { get; set; }

        public int? TransporterId { get; set; }

        public bool Assigned { get; set; }

        public bool Accepted { get; set; }

        public bool Declined { get; set; }

        public bool Selected { get; set; }

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
        public string UserCreated { get; set; }
        public string UserModified { get; set; }

        public List<int> ShipmentIdList { get; set; }

        public int AmountAssigned { get; set; }
        public int AmountDeclined { get; set; }
        public int AmoutPending { get; set; }
    }
}
