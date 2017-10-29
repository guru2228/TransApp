using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransApp.Core.CacheService;
using TransApp.Core.Exceptions;
using TransApp.Domain.Common.Parameter;
using TransApp.Domain.Services.Authentication;
using TransApp.Domain.Services.Common;
using TransApp.Core.Helper;
using TransApp.DataModel.Dto;

namespace TransApp.Site.ApiControllers
{

    [Route("api/[controller]")]
    public class ParametersDataController : Controller
    {
        /// <summary>
        /// AddressesService
        /// </summary>
        private readonly ICommonService _commonService;

        /// <summary>
        /// IAccountService
        /// </summary>
        private readonly IAuthenticationService _authenticationService;

        /// <summary>
        /// ICacheService
        /// </summary>
        private readonly ICacheService _cacheService;

        public ParametersDataController( IAuthenticationService accountService, ICommonService commonService, ICacheService cacheService)
        {
            _authenticationService = accountService;
            _commonService = commonService;
            _cacheService = cacheService;
        }

        /// <summary>
        /// Get facilities list
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAddressRequirementsParameters/{language}")]
        public async Task<object> GetAddressRequirementsParameters(string language)
        {
            language.ConvertLocaleStringToServerLanguage();

            var facilities = await this.GetFacilities(language);

            var requirements = await this.GetRequirements(language);

            var trucks = await this.GetTrucks(language);

            return new
            {
                facilities,
                requirements,
                trucks
            };
        }

        /// <summary>
        /// Get facilities list
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getPackTypes/{language}")]
        public async Task<IEnumerable<PackTypeParameterModel>> GetPackTypes(string language)
        {
           // var items = _cacheService.Get("cache_packTypes") as IEnumerable<PackTypeParameterModel>;
           // if (items != null) return items;

            language.ConvertLocaleStringToServerLanguage();
          var  items = await _commonService.GetPackTypes(language);
           // _cacheService.Add("cache_packTypes", items);
            return items;
        }

        /// <summary>
        /// Save an address
        /// </summary>
        /// <param name="language"></param>
        /// <param name="model"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("savePackType/{language}")]
        public async Task<int> SavePackType(string language, [FromBody] PackTypeParameterModel model)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            language.ConvertLocaleStringToServerLanguage();

            var packTypeId = await _commonService.CreatepackType(model.Code, "", new Dictionary
            {
                EN = model.Description,
                NL = model.Description,
                FR = model.Description,
                DE = model.Description,
                RO = model.Description

            });
            return packTypeId;
        }

        /// <summary>
        /// Get facilities list
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getFacilities/{language}")]
        public async Task<IEnumerable<FacilityParameterModel>> GetFacilities(string language)
        {
            var items = _cacheService.Get("cache_facilities") as IEnumerable<FacilityParameterModel>;
            if (items != null) return items;

            language.ConvertLocaleStringToServerLanguage();
            items = await _commonService.GetFacilities(language);
            _cacheService.Add("cache_facilities", items);
            return items;
        }

        /// <summary>
        /// Get facilities list
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getRequirements/{language}")]
        public async Task<IEnumerable<RequirementParameterModel>> GetRequirements(string language)
        {
            var items = _cacheService.Get("cache_requirements") as IEnumerable<RequirementParameterModel>;
            if (items != null) return items;

            language.ConvertLocaleStringToServerLanguage();
            items = await _commonService.GetRequirements(language);
            _cacheService.Add("cache_requirements", items);
            return items;
        }

        /// <summary>
        /// Get facilities list
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getTrucks/{language}")]
        public async Task<IEnumerable<TruckParameterModel>> GetTrucks(string language)
        {
            var items = _cacheService.Get("cache_truks") as IEnumerable<TruckParameterModel>;
            if (items != null) return items;

            language.ConvertLocaleStringToServerLanguage();
            items = await _commonService.GetTrucks(language);
            _cacheService.Add("cache_truks", items);
            return items;
        }

   
    }
}