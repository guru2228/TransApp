using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using TransApp.Application.Query;
using TransApp.Application.QueryHandler;
using TransApp.Core.Exceptions;
using TransApp.DataModel.Dto;
using TransApp.Domain.Addresses;
using TransApp.Domain.Services.Addresses;
using TransApp.Domain.Services.Authentication;
using TransApp.Framework.Filter;

namespace TransApp.Site.ApiControllers
{

    [Route("api/[controller]")]
    public class AddressesController : Controller
    {
        /// <summary>
        /// AddressesService
        /// </summary>
        private readonly IAddressesService _addressesService;

        /// <summary>
        /// IAccountService
        /// </summary>
        private readonly IAuthenticationService _authenticationService;

        public AddressesController(IAddressesService addressesService, IAuthenticationService accountService)
        {
            _addressesService = addressesService;
            _authenticationService = accountService;
        }

        /// <summary>
        /// Get address by id
        /// </summary>
        /// <param name="addressid"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("get/{addressid}/{language}")]
        public async Task<Domain.Addresses.AddressModel> Get(int addressid, string language)
        {
            var queryHandler = new AddressByIdQueryHandler(_addressesService, _authenticationService);
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
        [HttpPost("save")]
        public async Task<int> Save([FromBody] AddressModel addressModel)
        {
            var currentUser = _authenticationService.GetUser(User.Identity.Name);
            var addressId = await _addressesService.SaveAddress(currentUser.Id, addressModel);
            return addressId;
        }

        /// <summary>
        /// Delete an address
        /// </summary>
        /// <param name="addressId"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpDelete("delete/{addressId}")]
        public async Task<bool> Delete(int addressId)
        {
            var currentUser = _authenticationService.GetUser(User.Identity.Name);
            try
            {
                var address = await this.Get(addressId, "EN");
                await _addressesService.DeleteAddress(address);
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.Forbidden, "Don't have permission to delete this addres");
            }
         
            return true;
        }

        /// <summary>
        /// Get all addresses for a customer.
        /// Retrive address based on page number and page size
        /// </summary>
        /// <param name="customerId"></param>
        /// <param name="startItem"></param>
        /// <param name="numberOfRetrievedItems"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAll/{customerId}/{startItem}/{numberOfRetrievedItems}/{language}")]
        public async Task<IEnumerable<AddressModel>> GetAll(int customerId, int startItem, int numberOfRetrievedItems,
            int language)
        {
            //TODO Bogdan implement this
            var addresses = await _addressesService.GetAll(new FilterAddress
            {
                CustomerId = customerId
            });
            return addresses;
        }

        [Authorize(Policy = "TransAppUser")]
        [HttpGet("search/{customerId}/{startItem}/{numberOfRetrievedItems}/{language}")]
        public async Task<IEnumerable<AddressModel>> Search(int customerId, int startItem, int numberOfRetrievedItems, int language, [FromQuery]string searchTerm)
        {
            //TODO Bogdan implement this

            return new List<AddressModel>();
        }
    }
}