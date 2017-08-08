using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto.Custom
{
    public class AddressDto
    {
        public Address Address { get; set; }

        public AddressAvailability AddressAvailability { get; set; }
    }
}
