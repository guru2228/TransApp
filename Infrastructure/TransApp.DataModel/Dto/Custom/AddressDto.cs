using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto.Custom
{
    public class AddressDto
    {
        public Address Address { get; set; }
        public List<AddressAvailability> AddressAvailabilities { get; set; }
        public List<AddressFacility> AddressFacilities { get; set; }
        public List<AddressRequirement> AddressRequirements { get; set; }
        public List<AddressTruck> AddressTrucks { get; set; }
    }
}
