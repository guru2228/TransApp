using System.Collections;
using System.Collections.Generic;

namespace TransApp.Domain.Addresses
{
    public class Address
    {
        public int Id { get; set; }


        public string Name { get; set; }


        public string Street1 { get; set; }

        public List<AddressAvailability> Availabilities { get; set; }
        ///// and other fields necessary for address business object (combination of one or multiple dtos)
    }
}
