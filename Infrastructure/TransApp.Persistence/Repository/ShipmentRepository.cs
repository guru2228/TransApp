using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Framework.Filter;
using TransApp.Persistence.Repository.Generic;
using static Dapper.SqlMapper;

namespace TransApp.Persistence.Repository
{
    public class ShipmentRepository : LocalizedGenericRepository<Shipment>, IShipmentRepository
    {
        public ShipmentRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<ShipmentDto> GetShipmentById(int id)
        {
           return new ShipmentDto();
        }


        public async Task<ShipmentDto> GetShipmentFiltered(FilterShipment filter)
        {
           return new ShipmentDto();
        }

        public async Task SaveShipment(Shipment currentAddress, IDbTransaction transaction = null)
        {
           
        }

        private string GetQuery(int id)
        {
            var sb = new StringBuilder();

            return sb.ToString();
        }

        private string GetQueryFiltered(FilterAddress filter)
        {
            var sb = new StringBuilder();
           
            return sb.ToString();
        }
    }
}
