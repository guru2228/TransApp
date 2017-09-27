namespace TransApp.Domain.Addresses
{
    public class AddressLocationModel
    {
        public decimal Latitude { get; set; }

        public decimal Longitude { get; set; }

        public string CountryCode { get; set; }

        public string Country { get; set; }

        public string City { get; set; }

        public string CityCode { get; set; }

        public string State { get; set; }

        public string StateCode { get; set; }

        public string Street { get; set; }

        public string StreetNumber { get; set; }

        public string ZipCode { get; set; }

    }
}
