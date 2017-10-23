using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Common;
using TransApp.Domain.Common.Parameter;
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
        public async Task<List<FacilityParameterModel>> GetFacilities(string language)
        {
            var faciltyList =
                await _unitOfWork.FacilityRepository.GetFacilities(language);
            if (faciltyList != null)
            {
                return Mapper.Map<List<FacilityDto>, List<FacilityParameterModel>>(faciltyList);
            }
            return new List<FacilityParameterModel>();
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

        public async Task<List<TruckParameterModel>> GetTrucks(string language)
        {
            var truckList =
               await _unitOfWork.TruckRepository.GetTrucks(language);
            if (truckList != null)
            {
                return Mapper.Map<List<TruckDto>, List<TruckParameterModel>>(truckList);
            }
            return new List<TruckParameterModel>();
        }

        public async Task<List<PackTypeParameterModel>> GetPackTypes(string language)
        {
            var typeList =
              await _unitOfWork.PackTypeRepository.GetPackTypes(language);
            if (typeList != null)
            {
                return Mapper.Map<List<PackTypeDto>, List<PackTypeParameterModel>>(typeList);
            }
            return new List<PackTypeParameterModel>();
        }

        public async Task<List<RequirementParameterModel>> GetRequirements(string language)
        {
            var requirementList =
                await _unitOfWork.RequirementRepository.GetRequirements(language);
            if (requirementList != null)
            {
                return Mapper.Map<List<RequirementDto>, List<RequirementParameterModel>>(requirementList);
            }
            return new List<RequirementParameterModel>();
        }

    }
}
