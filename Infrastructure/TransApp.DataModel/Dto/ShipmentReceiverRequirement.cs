using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto
{
    public class ShipmentReceiverRequirement : IDataAccessObject
    {
        public int Id { get; set; }

        public int? ShipmentId { get; set; }

        public int? RequirementId { get; set; }

        public decimal? AmountInsurance { get; set; }

        public bool Active { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

    }


}
