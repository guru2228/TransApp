using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Addresses
{
    public class AddressModel
    {

        public int Id { get; set; }

        public int? CustomerId { get; set; }

        public string Name { get; set; }

        public AddressLocationModel Location { get; set; }

        public string ContactPerson { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Remark { get; set; }

        public List<AddressAvailabilityModel> Availabilities { get; set; }
        public List<AddressFacilityModel> Facilities { get; set; }
        public List<AddressRequirementModel> Requirements { get; set; }
        public List<AddressTruckModel> Trucks { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }
    }
}
