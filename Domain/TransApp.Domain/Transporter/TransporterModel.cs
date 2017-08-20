using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Domain.Shipment
{
    public class TransporterModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int? AddressId { get; set; }

        public byte[] Image { get; set; }

        public string IconName { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

    }


}
