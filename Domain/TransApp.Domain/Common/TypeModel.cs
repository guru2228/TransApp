using System;

namespace TransApp.Domain.Common
{
    public class TypeModel
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public int? DictionaryId { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

    }

}
