using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto
{
    public class PackType : IDataAccessObject
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public int? DictionaryId { get; set; }

        public bool HasExtra { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

        public int? CustomerId { get; set; }
        public decimal? PackLength { get; set; }
        public decimal? PackHeight { get; set; }
        public decimal? PackWidth { get; set; }

    }
}