﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.Core.Exceptions;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Common;
using TransApp.Domain.Common.Parameter;
using TransApp.Domain.Shipment;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Domain.Services.Common
{
    public class CommonService : ICommonService
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

        public async Task<List<PackTypeParameterModel>> GetPackTypes(string language, int? customerId)
        {
            var typeList =
                await _unitOfWork.PackTypeRepository.GetPackTypes(language);
            if (typeList != null)
            {
                return
                    Mapper.Map<List<PackTypeDto>, List<PackTypeParameterModel>>(typeList);
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
        /// <param name="customerId"></param>
        /// <param name="length"></param>
        /// <param name="height"></param>
        /// <param name="width"></param>
        /// <returns></returns>
        public async Task<int> CreatepackType(string code, string iconName, Dictionary dictionary,
            IDbTransaction transaction = null,
            int? customerId = null, int? length = null, int? height = null, int? width = null)
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
                    DictionaryId = dictionaryId,
                    CustomerId = customerId,
                    PackLength = length,
                    PackWidth = width,
                    PackHeight = height
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

        public async Task<bool> DeletepackType(int id, int customerId)
        {
            var packType = await _unitOfWork.PackTypeRepository.GetAsync(id);
            if(packType.CustomerId != customerId)
                throw new HttpResponseException(HttpStatusCode.InternalServerError,"Packtype doesn't belong to specified customer");
            _unitOfWork.PackTypeRepository.Delete(packType);
            return true;
        }

        public async Task<List<RatingModel>> GetRating(string language, int? transporterId)
        {
            var ratingList =
                await _unitOfWork.RatingRepository.GetRating(language, transporterId);
            if (ratingList != null)
            {
                return Mapper.Map<List<RatingDto>, List<RatingModel>>(ratingList);
            }
            return new List<RatingModel>();
        }
    }
}

