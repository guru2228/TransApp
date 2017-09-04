using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto
{
    public class PickupDelay
    {
        public int Id { get; set; }

        public int? RegionId { get; set; }

        public int? Delay { get; set; }

        public TimeSpan? DelayMaxHour { get; set; }

        public decimal? SurtaxFixed { get; set; }

        public int? SurtaxPercentage { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

    }

}
