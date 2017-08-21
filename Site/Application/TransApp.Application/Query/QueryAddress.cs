using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.Core.Cqrs;

namespace TransApp.Application.Query
{
    public class QueryAddress:IQuery
    {
        public int Id { get; set; }

        public string Language { get; set; }

        public int User { get; set; }
        public int? CustomerId { get; set; }
    }
}
