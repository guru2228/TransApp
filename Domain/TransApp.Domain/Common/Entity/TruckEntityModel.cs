using System;

namespace TransApp.Domain.Common.Entity
{
    public class TruckEntityModel
    {
        public int Id { get; set; }

        public int? EntityId { get; set; }

        public int? TruckId { get; set; }

        public bool Active { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }
    }
}
