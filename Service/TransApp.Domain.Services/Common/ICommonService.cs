using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.Domain.Common;
using TransApp.Domain.Common.Parameter;
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
        Task<List<FacilityParameterModel>> GetFacilities(string language);

        Task<List<RequirementParameterModel>> GetRequirements(string language);

        Task<List<ShipmentStatusModel>> GetStatuses(string language);

        Task<List<TruckParameterModel>> GetTrucks(string language);

        Task<List<PackTypeParameterModel>> GetPackTypes(string language);
    }
}
