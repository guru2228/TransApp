using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Addresses
{
    public class AddressFullModel
    {
        public AddressModel Addresses { get; set; }
        public List<AddressAvailabilityModel> Availabilities { get; set; }
        public List<AddressFacilityModel> Facilities { get; set; }
        public List<AddressRequirementModel> Requirements { get; set; }
        public List<AddressTruckModel> Trucks { get; set; }

        ///// and other fields necessary for address business object (combination of one or multiple dtos)
    }
}
