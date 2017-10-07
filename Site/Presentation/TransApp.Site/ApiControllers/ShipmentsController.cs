using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransApp.Application.Query;
using TransApp.Application.QueryHandler;
using TransApp.Core.Exceptions;
using TransApp.Domain.Addresses;
using TransApp.Domain.Services.Addresses;
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
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("get/{id}/{language}")]
        public async Task<ShipmentModel> Get(int id, string language)
        {
          return await _shipmentService.Get(id);
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
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpDelete("delete/{id}")]
        public async Task<bool> Delete(int id)
        {
            try
            {
                var shipment = await this.Get(id, "EN");
                await _shipmentService.DeleteShipment(shipment);
            }
            catch (Exception)
            {
                throw new HttpResponseException(HttpStatusCode.Forbidden, "Don't have permission to delete this addres");
            }

            return true;
        }

        /// <summary>
        /// Get all shipments for a customer.
        /// Retrive shipments based on page number and page size
        /// </summary>
        /// <param name="customerId"></param>
        /// <param name="startItem"></param>
        /// <param name="numberOfRetrievedItems"></param>
        /// <param name="language"></param>
        /// <param name="searchTerm"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAll/{customerId}/{startItem}/{numberOfRetrievedItems}/{language}")]
        public async Task<IEnumerable<ShipmentModel>> GetAll(int customerId, int startItem, int numberOfRetrievedItems,
            int language, [FromQuery]string searchTerm)
        {
            var searchFilter = new FilterShipment
            {
                CustomerId = customerId,
                StartItem = startItem,
                Amount = numberOfRetrievedItems
            };

            var shipments = await _shipmentService.GetAll(searchFilter);
            return shipments;
        }
    }
}
