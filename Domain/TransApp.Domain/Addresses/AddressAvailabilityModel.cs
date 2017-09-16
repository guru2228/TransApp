using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Addresses
{
    public class AddressAvailabilityModel
    {

        public int Id { get; set; }

        public int? AddressId { get; set; }
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
