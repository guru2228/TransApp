using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
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

        Task<List<PackTypeParameterModel>> GetPackTypes(string language, int? customerId);

        /// <summary>
        /// CreatepackType
        /// </summary>
        /// <param name="code"></param>
        /// <param name="iconName"></param>
        /// <param name="dictionary"></param>
        /// <param name="transaction"></param>
        /// <returns></returns>
        Task<int> CreatepackType(string code, string iconName, Dictionary dictionary, IDbTransaction transaction = null, int? customerId = null,
            decimal? length = null, decimal? height = null, decimal? width = null);
    }
}
