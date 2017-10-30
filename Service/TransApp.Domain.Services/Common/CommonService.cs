using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
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

        /// <summary>
        /// CreatepackType
        /// </summary>
        /// <param name="code"></param>
        /// <param name="iconName"></param>
        /// <param name="dictionary"></param>
        /// <param name="transaction"></param>
        /// <returns></returns>
        public async  Task<int> CreatepackType(string code, string iconName, Dictionary dictionary, IDbTransaction transaction=null)
        {
            var item = _unitOfWork.PackTypeRepository.Get("Code='" + code + "'");
            if (item == null)
            {
                var dictionaryId =
                    await _unitOfWork.DictionaryRepository.AddAsync(dictionary, transaction, true, false);
                item = new PackType
                {
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    UserIdCreated = 1000,
                    Code = code,
                    DictionaryId = dictionaryId
                };
                return await _unitOfWork.PackTypeRepository.AddAsync(item);
            }
            if (!item.DictionaryId.HasValue)
            {
                item.DictionaryId =
                    await _unitOfWork.DictionaryRepository.AddAsync(dictionary, transaction, true, false);
            }
            if (item.DictionaryId == null) return item.Id;
            var currentDictionary =
                await _unitOfWork.DictionaryRepository.GetAsync(item.DictionaryId.Value);
            dictionary.Id = currentDictionary.Id;
            dictionary.DateModified = DateTime.Now;
            await
                _unitOfWork.DictionaryRepository.UpdateAsync(dictionary, transaction, true, null, false);
            item.DictionaryId = dictionary.Id;
            await _unitOfWork.PackTypeRepository.UpdateAsync(item, transaction);
            return item.Id;
        }
    }
}
