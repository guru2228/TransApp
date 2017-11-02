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
        /// <param name="customerId"></param>
        /// <param name="length"></param>
        /// <param name="height"></param>
        /// <param name="width"></param>
        /// <returns></returns>
        Task<int> CreatepackType(string code, string iconName, Dictionary dictionary, IDbTransaction transaction = null,
            int? customerId = null,
            int? length = null, int? height = null, int? width = null);

        /// <summary>
        /// Delete pack type only if customer is set
        /// </summary>
        /// <param name="id"></param>
        /// <param name="customerId"></param>
        /// <returns></returns>
        Task<bool> DeletepackType(int id, int customerId);

        Task<List<RatingModel>> GetRating(string language, int? transporterId = null);
    }
}
