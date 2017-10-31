using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.Domain.Shipment;
using TransApp.Framework.Filter;
using AddressModel = TransApp.Domain.Addresses.AddressLocationModel;

namespace TransApp.Domain.Services.Shipment
{
    public interface IShipmentService
    {
        /// <summary>
        /// Get Shipment
        /// </summary>
        /// <param name="ShipmentId"></param>
        /// <returns></returns>
        Task<ShipmentModel> Get(int id, int? customerId = null);

        /// <summary>
        /// Get all shipments based on filter - only from main object
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        Task<List<ShipmentModel>> GetAll(FilterShipment filter);

        /// <summary>
        /// Save currentShipment
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="currentShipment"></param>
        /// <returns></returns>
        Task<int> SaveShipment(int userId, ShipmentModel currentShipment);

        Task DeleteShipment(ShipmentModel currentShipment);

        Task<List<ShipmentTransporterFilterModel>> GetShipmentFilter(int customerId);

        Task SaveShipmentDetails(ShipmentDetailModel shipmentDetailModel, int userId, IDbTransaction transaction = null);

        Task DeleteShipmentById(int shipmentId);

        Task<bool> AssignToOpenMarket(int userId, int shipmentId, IDbTransaction transaction = null);

        Task<bool> MoveToUnassigned(int userId, int shipmentId, IDbTransaction transaction = null);

        Task<bool> ConfirmTransporter(int userId, int shipmentId, int transpoterId);

        Task<int> GetAllCount(FilterShipment filter);

        Task CreateShipmentTransporterHistory(string predicate, IDbTransaction transaction = null);

        Task<bool> UnassignAndMoveToOpenMarket(int userId, int shipmentId, IDbTransaction transaction = null);

        Task<List<ShipmentTransporterModel>> GetShipmentTransporterAll(FilterShipmentTransporter filter);

        Task<List<ShipmentTransporterModel>> AssignTransporter(int userId, int shipmentId, int amountFlexibility = 0);

        Task<bool> CancelShipment(int userId, int shipmentId, IDbTransaction transaction = null);

        Task<bool> MoveToHistory(int userId, int shipmentId, int transporterId, int amountRating, string review,
            IDbTransaction transaction = null);

        
    }
}
