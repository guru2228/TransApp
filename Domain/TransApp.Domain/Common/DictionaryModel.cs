using System;

namespace TransApp.Domain.Common
{
    public class DictionaryModel
    {
        public int Id { get; set; }


        public string EN { get; set; }


        public string NL { get; set; }


        public string FR { get; set; }


        public int? UserIdCreated { get; set; }


        public DateTime? DateCreated { get; set; }


        public int? UserIdModified { get; set; }


        public DateTime? DateModified { get; set; }

        public string UserCreated { get; set; }
        public string UserModified { get; set; }

    }

}
