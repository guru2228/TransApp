using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Shipment;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Domain.Services.Common
{
    public class CommonService: ICommonService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ICacheService _cacheService;

        public CommonService(IUnitOfWork unitOfWork, ICacheService cacheService)
        {
            _unitOfWork = unitOfWork;
            _cacheService = cacheService;
        }

        /// <summary>
        /// Get facilities list
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        public async Task<List<FacilityModel>> GetFacilities(string language)
        {
            var faciltyList =
                await _unitOfWork.FacilityRepository.GetFacilities(language);
            if (faciltyList != null)
            {
                return Mapper.Map<List<FacilityDto>, List<FacilityModel>>(faciltyList);
            }
            return new List<FacilityModel>();
        }

        public async Task<List<ShipmentStatusModel>> GetStatuses(string language)
        {
            var shipmentStatusList =
               await _unitOfWork.ShipmentStatusRepository.GetStatuses(language);
            if (shipmentStatusList != null)
            {
                return Mapper.Map<List<ShipmentStatusDto>, List<ShipmentStatusModel>>(shipmentStatusList);
            }
            return new List<ShipmentStatusModel>();
        }

        public async Task<List<TruckModel>> GetTrucks(string language)
        {
            var truckList =
               await _unitOfWork.TruckRepository.GetTrucks(language);
            if (truckList != null)
            {
                return Mapper.Map<List<TruckDto>, List<TruckModel>>(truckList);
            }
            return new List<TruckModel>();
        }

        public async Task<List<PackTypeModel>> GetTypes(string language)
        {
            var typeList =
              await _unitOfWork.PackTypeRepository.GetTypes(language);
            if (typeList != null)
            {
                return Mapper.Map<List<PackTypeDto>, List<PackTypeModel>>(typeList);
            }
            return new List<PackTypeModel>();
        }

        public async Task<List<RequirementModel>> GetRequirements(string language)
        {
            var requirementList =
                await _unitOfWork.RequirementRepository.GetRequirements(language);
            if (requirementList != null)
            {
                return Mapper.Map<List<RequirementDto>, List<RequirementModel>>(requirementList);
            }
            return new List<RequirementModel>();
        }
    }
}
