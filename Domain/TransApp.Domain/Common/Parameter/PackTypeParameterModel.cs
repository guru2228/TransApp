﻿using System;

namespace TransApp.Domain.Common.Parameter
{
    public class PackTypeParameterModel
    {
        public int Id { get; set; }

        public string Code { get; set; }

        public bool HasExtra { get; set; }

        public int? DictionaryId { get; set; }

        public int? UserIdCreated { get; set; }

        public DateTime? DateCreated { get; set; }

        public int? UserIdModified { get; set; }

        public DateTime? DateModified { get; set; }

        public string UserCreated { get; set; }
        public string UserModified { get; set; }

        public string Description { get; set; }

        public int? CustomerId { get; set; }
        public int? PackLength { get; set; }
        public int? PackHeight { get; set; }
        public int? PackWidth { get; set; }
    }

}
