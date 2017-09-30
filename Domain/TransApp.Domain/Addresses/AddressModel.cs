using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.Domain.Common.Entity;

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

        public List<AvailabilityEntityModel> Availabilities { get; set; }
        public List<FacilityEntityModel> Facilities { get; set; }
        public List<RequirementEntityModel> Requirements { get; set; }
        public List<TruckEntityModel> Trucks { get; set; }

        public int? UserIdCreated { get; set; }

        public string UserCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public string UserModified { get; set; }

        public DateTime? DateModified { get; set; }

        public bool CommonAvailability { get; set; }

        public string State { get; set; }
        public string OpeningHours { get; set; }
    }
}
