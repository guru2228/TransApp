using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransApp.Application.Query;
using TransApp.Application.QueryHandler;
using TransApp.DataModel.Dto;
using TransApp.Domain.Services.Addresses;
using TransApp.Domain.Services.Authentication;

namespace TransApp.Site.ApiControllers
{

    [Route("api/[controller]")]
    public class AddressesController
    {
        /// <summary>
        /// AddressesService
        /// </summary>
        private readonly IAddressesService _addressesService;

        /// <summary>
        /// IAccountService
        /// </summary>
        private readonly IAuthenticationService _accountService;

        public AddressesController(IAddressesService addressesService, IAuthenticationService accountService)
        {
            _addressesService = addressesService;
            _accountService = accountService;
        }

        /// <summary>
        /// Get address
        /// </summary>
        /// <param name="adressId"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAddress/{adressId}")]
        public async Task<Domain.Addresses.AddressModel> GetAddress(int adressId)
        {
            var queryHandler = new AddressByIdQueryHandler(_addressesService, _accountService);
            var result = await queryHandler.Retrieve(new QueryAddress
            {
               Id = adressId
            });
            return result;
        }
    }
}