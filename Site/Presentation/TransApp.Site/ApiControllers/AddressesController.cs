﻿using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransApp.Application.Query;
using TransApp.Application.QueryHandler;
using TransApp.Core.Exceptions;
using TransApp.Core.Helper;
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
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("get/{addressid}/{customerId}/{language}")]
        public async Task<AddressModel> Get(int addressid, int customerId, string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            var queryHandler = new AddressByIdQueryHandler(_addressesService, _authenticationService);
            var result = await queryHandler.Retrieve(new QueryAddress
            {
                Id = addressid,
                CustomerId = customerId,
                Language = language
            });
            return result;
        }

        /// <summary>
        /// Get all addresses for a customer.
        /// Retrive address based on page number and page size
        /// </summary>
        /// <param name="customerId"></param>
        /// <param name="startItem"></param>
        /// <param name="numberOfRetrievedItems"></param>
        /// <param name="language"></param>
        /// <param name="searchTerm"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAll/{customerId}/{startItem}/{numberOfRetrievedItems}/{language}")]
        public async Task<IEnumerable<AddressModel>> GetAll(int customerId, int startItem, int numberOfRetrievedItems,
            string language, [FromQuery]string searchTerm)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }

            var searchFilter = new FilterAddress
            {
                CustomerId = customerId,
                StartItem = startItem,
                Amount = numberOfRetrievedItems,
            };

            if (!string.IsNullOrEmpty(searchTerm))
            {
                searchFilter.CustomFilter = searchTerm;
            }

            var addresses = await _addressesService.GetAll(searchFilter);
            return addresses;
        }

        /// <summary>
        /// Get number of addresses, used for paging
        /// </summary>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <param name="searchTerm"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getCount/{customerId}/{language}")]
        public async Task<int> GetCount(int customerId, string language, [FromQuery]string searchTerm)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }

            var searchFilter = new FilterAddress
            {
                CustomerId = customerId,
                StartItem = 0,
                Amount = 99999
            };

            if (!string.IsNullOrEmpty(searchTerm))
            {
                searchFilter.CustomFilter = searchTerm;
            }

            var count = await _addressesService.GetAllCount(searchFilter);
            return count;
        }

        /// <summary>
        /// Save an address
        /// </summary>
        /// <param name="language"></param>
        /// <param name="addressModel"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("save/{language}")]
        public async Task<int> Save(string language, [FromBody] AddressModel addressModel)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != addressModel.CustomerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            var addressId = await _addressesService.SaveAddress(currentUser.Id, addressModel);
            return addressId;
        }

        /// <summary>
        /// Delete an address
        /// </summary>
        /// <param name="addressId"></param>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpDelete("delete/{addressId}/{customerId}/{language}")]
        public async Task<bool> Delete(int addressId, int customerId, string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            try
            {
                if (currentUser.CustomerId != null)
                {
                    var address = await this.Get(addressId, currentUser.CustomerId.Value, "EN");
                    await _addressesService.DeleteAddress(address);
                }
                else
                {
                    throw new HttpResponseException(HttpStatusCode.Forbidden, "Don't have permission to delete this addres");
                }
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.Forbidden, "Don't have permission to delete this addres");
            }
         
            return true;
        }

    }
}