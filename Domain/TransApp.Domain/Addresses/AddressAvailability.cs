using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Addresses
{
    public class AddressAvailability
    {

        public int Id { get; set; }

        public int? AddressId { get; set; }

        public int? Day { get; set; }

        public TimeSpan? AmStart { get; set; }

        public TimeSpan? AmStop { get; set; }

        public TimeSpan? PmStart { get; set; }

        public TimeSpan? PmStop { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }
    }
}
