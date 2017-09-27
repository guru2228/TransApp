using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace TransApp.DataModel.Dto
{
    public class Address : IDataAccessObject
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

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

        public decimal? Latitude { get; set; }

        public decimal? Longitude { get; set; }
        public string CountryCode { get; set; }

        public string CityCode { get; set; }

        public string StateCode { get; set; }

        public string StreetNumber { get; set; }

        public bool CommonAvailability { get; set; }

        public string StateInfo { get; set; }
        public string OpeningHours { get; set; }
    }
}


