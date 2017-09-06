using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto
{
    public class Region
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int? CountryCode { get; set; }

        public int? TransporterId { get; set; }

        public int? ZipCodeFrom { get; set; }

        public int? ZipCodeTill { get; set; }

        public string ZipCodeSpecified { get; set; }

        public DateTime? DateActive { get; set; }

        public DateTime? DateInactive { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

    }

}
