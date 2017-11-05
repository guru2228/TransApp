using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransApp.Core.Exceptions;
using TransApp.Core.Helper;
using TransApp.Core.ShipmentTransporter;
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
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            var shipment = await _shipmentService.Get(id, customerId);

            return shipment;
        }

        /// <summary>
        /// Get all shipments for a customer.
        /// Retrive shipments based on page number and page size
        /// </summary>
        /// <param name=")"></param>
        /// <param name="customerId"></param>
        /// <param name="filterType"></param>
        /// <param name="inPending"></param>
        /// <param name="startItem"></param>
        /// <param name="numberOfRetrievedItems"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAll/{customerId}/{filterType}/{inPending}/{startItem}/{numberOfRetrievedItems}/{language}")]
        public async Task<IEnumerable<ShipmentModel>> GetAll(int customerId, int filterType, bool inPending, int startItem, int numberOfRetrievedItems,
            string language)
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

            var searchFilter = new FilterShipment
            {
                CustomerId = currentUser.CustomerId.Value,
                StartItem = startItem,
                Amount = numberOfRetrievedItems,
                TransporterStatus = (ShipmentTransporterStatus)filterType,
                Pending = inPending,
                Declined = !inPending
            };
            var shipments = await _shipmentService.GetAll(searchFilter);
            return shipments.OrderByDescending(item=>item.Id);
        }

        /// <summary>
        ///  Get number of shipments, used for paging
        /// </summary>
        /// <param name=")"></param>
        /// <param name="customerId"></param>
        /// <param name="filterType"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getCount/{customerId}/{filterType}/{language}")]
        public async Task<int> GetCount(int customerId, int filterType,
            string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            var searchFilter = new FilterShipment
            {
                CustomerId = currentUser.CustomerId.Value,
                StartItem = 0,
                Amount = 10000,
                TransporterStatus = (ShipmentTransporterStatus)filterType
            };
            var shipmentsCount = await _shipmentService.GetAllCount(searchFilter);
            return shipmentsCount;
        }

        /// <summary>
        /// Save an address
        /// </summary>
        /// <param name="language"></param>
        /// <param name="model"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("save/{language}")]
        public async Task<int> Save(string language, [FromBody] ShipmentModel model)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != model.CustomerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            var shipmentId = await _shipmentService.SaveShipment(currentUser.Id, model);
            return shipmentId;
        }

        /// <summary>
        /// Assign to open market
        /// </summary>
        /// <param name="shipmentId"></param>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("assignToOpenMarket/{shipmentId}/{customerId}/{language}")]
        public async Task<bool> AssignToOpenMarket(int shipmentId, int customerId, string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            return await _shipmentService.AssignToOpenMarket(currentUser.Id, shipmentId);
        }

        /// <summary>
        /// Assign shipment to transporters
        /// </summary>
        /// <param name="shipmentId"></param>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("assignToTransporters/{shipmentId}/{customerId}/{language}")]
        public async Task<bool> AssignToTransporters(int shipmentId, int customerId, string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            return await _shipmentService.AssignTransporter(currentUser.Id, shipmentId);
        }


        /// <summary>
        /// Get all assigned shipment transporters for a shipment id.
        /// </summary>
        /// <param name=")"></param>
        /// <param name="shipmentId"></param>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpGet("getAssignedTransporters/{shipmentId}/{customerId}/{language}")]
        public async Task<IEnumerable<ShipmentTransporterModel>> GetAssignedTransporters(int shipmentId, int customerId,  string language)
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

            var searchFilter = new FilterShipmentTransporter
            {
                ShipmentId = shipmentId,
                CustomerId = customerId,
            };
            var shipments = await _shipmentService.GetShipmentTransporterAll(searchFilter);
            return shipments.OrderByDescending(item => item.Id);
        }

        /// <summary>
        /// Move to unassigned
        /// </summary>
        /// <param name="shipmentId"></param>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("moveToUnassigned/{shipmentId}/{customerId}/{language}")]
        public async Task<bool> MoveToUnassigned(int shipmentId, int customerId, string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            return await _shipmentService.MoveToUnassigned(currentUser.Id, shipmentId);
        }

        /// <summary>
        /// Move to unassigned
        /// </summary>
        /// <param name="shipmentId"></param>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpPost("unassignAndMoveToOpenMarket/{shipmentId}/{customerId}/{language}")]
        public async Task<bool> UnassignAndMoveToOpenMarket(int shipmentId, int customerId, string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            return await _shipmentService.UnassignAndMoveToOpenMarket(currentUser.Id, shipmentId);
        }

        /// <summary>
        /// Delete a shipment
        /// </summary>
        /// <param name="id"></param>
        /// <param name="customerId"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        [Authorize(Policy = "TransAppUser")]
        [HttpDelete("delete/{id}/{customerId}/{language}")]
        public async Task<bool> Delete(int id, int customerId, string language)
        {
            var currentUser = await _authenticationService.GetUser(User.Identity.Name);
            if (currentUser.CustomerId != customerId)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

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
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Provided customer is not assigned to your account");
            }
            language.ConvertLocaleStringToServerLanguage();

            var filters = (await _shipmentService.GetShipmentFilter(currentUser.CustomerId.Value)).OrderBy(item=>item.StatusType);
            return filters;
        }
    }
}
