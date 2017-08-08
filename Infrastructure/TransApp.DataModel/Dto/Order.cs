using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto
{
    public class Order : IDataAccessObject
    {
        public int Id { get; set; }


        public int? UserId { get; set; }


        public int? CustomerId { get; set; }


        public int? TransporterId { get; set; }


        public float? TotalPrice { get; set; }


        public float? TotalVolume { get; set; }


        public float? TotalQuatity { get; set; }


        public float? TotalWeight { get; set; }


        public int? UserIdCreated { get; set; }


        public DateTime? DateCreated { get; set; }


        public int? UserIdModified { get; set; }


        public DateTime? DateModified { get; set; }


    }

