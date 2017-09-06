using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto.Custom
{
    public class TariffDto
    {
        public int Id { get; set; }

        public int? PickupRegionId { get; set; }

        public int? DeliveryRegionId { get; set; }

        public int? WeightFrom { get; set; }

        public int? WeightTill { get; set; }

        public decimal? Tariff { get; set; }

        public DateTime? DateActive { get; set; }

        public DateTime? DateInactive { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

    }

}
