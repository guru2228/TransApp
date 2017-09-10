
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Framework.Filter
{
    public class FilterAddress
    {
        public int? CustomerId { get; set; }
        public int StartItem { get; set; }
        public int Amount { get; set; }
        public string Name { get; set; }

        /// <summary>
        /// if present will filter on Name or Phone or Street1 or Street2 or City or Contry
        /// </summary>
        public string CustomFilter { get; set; }
    }
}
