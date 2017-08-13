﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.DataModel.Dto
{
    public class CustomerUser : IDataAccessObject
    {
        public int Id { get; set; }

        public int? CustomerId { get; set; }

        public int? UserId { get; set; }

        public DateTime? UserIdCreated { get; set; }

        public int? DateCreated { get; set; }

        public DateTime? UserIdModified { get; set; }

        public int? DateModified { get; set; }

    }

}
