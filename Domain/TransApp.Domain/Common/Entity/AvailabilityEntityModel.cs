using System;

namespace TransApp.Domain.Common.Entity
{
    public class AvailabilityEntityModel
    {
        public int Id { get; set; }

        public int? EntityId { get; set; }
        public bool IsClosed { get; set; }

        public int? Day { get; set; }

        public string AmStart { get; set; }

        public string AmStop { get; set; }

        public string PmStart { get; set; }

        public string PmStop { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }
    }
}
