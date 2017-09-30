using System;

namespace TransApp.Domain.Common.Entity
{
    public class RequirementEntityModel
    {
        public int Id { get; set; }

        public int? EntityId { get; set; }

        public int? RequirementId { get; set; }

        public decimal? AmountInsurance { get; set; }

        public bool Active { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }
    }
}
