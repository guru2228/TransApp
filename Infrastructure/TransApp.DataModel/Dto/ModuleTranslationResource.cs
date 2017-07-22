using System;

namespace TransApp.DataModel.Dto
{
    public class ModuleTranslationResource : IDataAccessObject
    {
        public int Id { get; set; }

        public string Nl { get; set; }

        public string De { get; set; }

        public string Fr { get; set; }

        public string En { get; set; }

        public string Ro { get; set; }

        public string KeyString { get; set; }

        public DateTime? DateCreated { get; set; }

        public DateTime? DateModified { get; set; }

        public int? UserIdCreated { get; set; }

        public int? UserIdModified { get; set; }
    }
}
