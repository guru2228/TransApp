using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Framework.Filter;

namespace TransApp.Persistence.Repository
{
    public interface IShipmentRepository
    {
        /// <summary>
        /// Get address by id
        /// </summary>
        /// <param name="id"></param>
        Task<ShipmentDto> GetShipmentById(int id, int? customerId = null);

        Task<List<ShipmentSimpleDto>> GetShipmentFiltered(FilterShipment filter);

        Task SaveShipment(int userId, Shipment currentShipment, IDbTransaction transaction = null);

        Task DeleteShipment(Shipment currentShipment, IDbTransaction transaction = null);

        Task<dynamic> GetShipmentsUnassignedAmount(int customerId);
        Task<dynamic> GetShipmentsCompletedAmount(int customerId);
        Task<dynamic> GetShipmentsAssignedAmount(int customerId);
        Task<dynamic> GetShipmentsOpenMarketAmount(int customerId);

        Task<bool> UpdateShipmentStatus(int userId, int shipmentId, IDbTransaction transaction = null,
            string shipmentStatus = null);
        Task<bool> UpdateShipmentTransporter(int userId, int shipmentId, IDbTransaction transaction = null,
           string shipmentStatus = null, int? transporterId = null);

        Task<int> GetAllCount(FilterShipment filter);
    }
}
