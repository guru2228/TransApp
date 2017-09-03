using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.Domain.Common;
using TransApp.Domain.Shipment;

namespace TransApp.Domain.Services.Common
{
    public interface ICommonService
    {
        /// <summary>
        /// Get facilities list
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        Task<List<FacilityModel>> GetFacilities(string language);
    }
}
