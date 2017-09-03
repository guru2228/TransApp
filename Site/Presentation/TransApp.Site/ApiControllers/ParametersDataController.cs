using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransApp.Domain.Common;
using TransApp.Domain.Services.Authentication;
using TransApp.Domain.Services.Common;
using TransApp.Domain.Shipment;

namespace TransApp.Site.ApiControllers
{

    [Route("api/[controller]")]
    public class ParametersDataController
    {
        /// <summary>
        /// AddressesService
        /// </summary>
        private readonly ICommonService _commonService;

        /// <summary>
        /// IAccountService
        /// </summary>
        private readonly IAuthenticationService _accountService;

        public ParametersDataController( IAuthenticationService accountService, ICommonService commonService)
        {
            _accountService = accountService;
            _commonService = commonService;
        }

        /// <summary>
        /// Get facilities list
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getFacilities/{language}")]
        public Task<List<FacilityModel>> GetFacilities(string language)
        {
            var facilities = _commonService.GetFacilities(language);
            return facilities;
        }
    }
}