using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransApp.Persistence
{
    public static class QueryExtensions
    {
        internal static bool ExistsList(this Dictionary<int, List<int>> lookup, int? entityId, int? childId)
        {
            if (!childId.HasValue || childId <= 0)
                return true;

            List<int> list;
            if (!lookup.TryGetValue(entityId.Value, out list))
            {
                list = new List<int> { childId.Value };
                lookup.Add(entityId.Value, list);
                return false;
            }

            if (list == null)
                list = new List<int>();

            if (list.Contains(childId.Value))
                return true;

            list.Add(childId.Value);
            return false;
        }
    }
}
