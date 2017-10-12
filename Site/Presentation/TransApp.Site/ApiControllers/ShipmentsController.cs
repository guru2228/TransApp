using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransApp.Core.Exceptions;
using TransApp.Domain.Services.Authentication;
using TransApp.Domain.Services.Shipment;
using TransApp.Domain.Shipment;
using TransApp.Framework.Filter;

namespace TransApp.Site.ApiControllers
{
    [Route("api/[controller]")]
    public class ShipmentsController : Controller
    {        
        /// <summary>
             /// AddressesService
             /// </summary>
        private readonly IShipmentService _shipmentService;

        /// <summary>
        /// IAccountService
        /// </summary>
        private readonly IAuthenticationService _authenticationService;

        public ShipmentsController(IShipmentService shipmentService, IAuthenticationService authenticationService)
        {
            _shipmentService = shipmentService;
            _authenticationService = authenticationService;
        }

        /// <summary>
        /// Get shipment by id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("get/{id}/{customerId}/{language}")]
        public async Task<ShipmentModel> Get(int id, int customerId, string language)
        {
          return await _shipmentService.Get(id, customerId);
        }


        /// <summary>
        /// Save an address
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("save")]
        public async Task<int> Save([FromBody] ShipmentModel model)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            var shipmentId = await _shipmentService.SaveShipment(currentUser.Id, model);
            return shipmentId;
        }

        /// <summary>
        /// Delete a shipment
        /// </summary>
        /// <param name="id"></param>
        /// <param name="customerId"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpDelete("delete/{id}/{customerId}")]
        public async Task<bool> Delete(int id, int customerId)
        {
            try
            {
                var shipment = await this.Get(id, customerId, "EN");
                await _shipmentService.DeleteShipment(shipment);
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.Forbidden, "Don't have permission to delete this addres");
            }

            return true;
        }

        /// <summary>
        /// Get shipment filters
        /// </summary>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getShipmentFilters/{customerId}/{language}")]
        public async Task<IEnumerable<ShipmentTransporterFilterModel>> GetShipmentFilters(int customerId, string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError,
                    "Provided customer is not assigned to your account");
            }

            var filters = await _shipmentService.GetShipmentFilter(currentUser.CustomerId.Value);
            return filters;
        }


        /// <summary>
        /// Get all shipments for a customer.
        /// Retrive shipments based on page number and page size
        /// </summary>
        /// <param name=")"></param>
        /// <param name="customerId"></param>
        /// <param name="shipmentStatus"></param>
        /// <param name="startItem"></param>
        /// <param name="numberOfRetrievedItems"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAll/{customerId}/{shipmentStatus}/{startItem}/{numberOfRetrievedItems}/{language}")]
        public async Task<IEnumerable<ShipmentModel>> GetAll(int customerId, int shipmentStatus, int startItem, int numberOfRetrievedItems,
            int language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }

            var searchFilter = new FilterShipment
            {
                CustomerId = currentUser.CustomerId.Value,
                StartItem = startItem,
                Amount = numberOfRetrievedItems
            };
            if (shipmentStatus > 0)
                searchFilter.ShipmentStatusId = shipmentStatus;

            var shipments = await _shipmentService.GetAll(searchFilter);
            return shipments;
        }

        /// <summary>
        ///  Get number of shipments, used for paging
        /// </summary>
        /// <param name=")"></param>
        /// <param name="customerId"></param>
        /// <param name="shipmentStatus"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getCount/{customerId}/{shipmentStatus}/{language}")]
        public async Task<int> GetCount(int customerId, int shipmentStatus, 
            int language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }

            var searchFilter = new FilterShipment
            {
                CustomerId = currentUser.CustomerId.Value,
                StartItem = 0,
                Amount = 10000
            };
            if (shipmentStatus > 0)
                searchFilter.ShipmentStatusId = shipmentStatus;

            var shipmentsCount = await _shipmentService.GetAllCount(searchFilter);
            return shipmentsCount;
        }
    }
}
