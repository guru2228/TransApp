using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto.Custom
{
    public class AddressDto
    {
        public int Id { get; set; }

        public int? CustomerId { get; set; }

        public string Name { get; set; }

        public string Street1 { get; set; }

        public string Street2 { get; set; }

        public string ZipCode { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string ContactPerson { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Remark { get; set; }

        //  public Point? Location { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

        public List<AddressAvailability> AddressAvailability { get; set; }
    }
}
