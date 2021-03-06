﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto
{
    public class Dictionary : IDataAccessObject
    {
        public int Id { get; set; }


        public string EN { get; set; }


        public string NL { get; set; }


        public string FR { get; set; }

        public string DE { get; set; }


        public string RO { get; set; }


        public int? UserIdCreated { get; set; }


        public DateTime? DateCreated { get; set; }


        public int? UserIdModified { get; set; }


        public DateTime? DateModified { get; set; }


    }

}
