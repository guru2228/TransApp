using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto
{
    public class Facility : IDataAccessObject
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


       // public bool? Active { get; set; }


    }

}
