using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Addresses;
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
    }
}
