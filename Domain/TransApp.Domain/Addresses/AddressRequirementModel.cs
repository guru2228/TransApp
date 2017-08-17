using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Addresses
{
    public class AddressRequirementModel
    {
        public int Id { get; set; }

        public int? AddressId { get; set; }

        public int? RequirementId { get; set; }

        public bool Active { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }
    }
}
