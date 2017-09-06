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
using TransApp.Domain.Addresses;
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
        /// Get address by id
        /// </summary>
        /// <param name="addressid"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("get/{addressid}")]
        public async Task<Domain.Addresses.AddressModel> Get(int addressid)
        {
            var queryHandler = new AddressByIdQueryHandler(_addressesService, _accountService);
            var result = await queryHandler.Retrieve(new QueryAddress
            {
               Id = addressid
            });
            return result;
        }


        /// <summary>
        /// Save an address
        /// </summary>
        /// <param name="addressModel"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("save/")]
        public async Task<int> Save([FromBody]AddressModel addressModel)
        {
            //// get customer from user
            /// save address based on customer
            //// return address id
            return 1;
        }


        /// <summary>
        /// Get address
        /// </summary>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAddressFiltered/{CustomerId}")]
        public async Task<Domain.Addresses.AddressModel> GetAddressFiltered(int customerId)
        {
            //d
            var queryHandler = new AddressByIdQueryHandler(_addressesService, _accountService);
            var result = await queryHandler.Retrieve(new QueryAddress
            {
                CustomerId = customerId
            });
            return result;
        }
    }
}