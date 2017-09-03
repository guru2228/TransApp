using System;

namespace TransApp.Domain.Common
{
    public class TruckModel
    {
        public int Id { get; set; }


        public string Code { get; set; }


        public int? DictionaryId { get; set; }


        public byte[] Image { get; set; }

        public string IconName { get; set; }


        public int? UserIdCreated { get; set; }


        public DateTime? DateCreated { get; set; }


        public int? UserIdModified { get; set; }


        public DateTime? DateModified { get; set; }


        public bool? Active { get; set; }


    }

}
