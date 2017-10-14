using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Framework.Filter;
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.Repository
{
    public class ShipmentTransporterRepository : GenericRepository<ShipmentTransporter>, IShipmentTransporterRepository
    {
        public ShipmentTransporterRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public Task<ShipmentTransporter> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<ShipmentTransporterDto>> GetAll(FilterShipmentTransporter filter)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return (await cn.QueryAsync<ShipmentTransporterDto>(GetQuery(filter))).ToList();
            }
        }

        private string GetQuery(FilterShipmentTransporter filter)
        {
            var sb = new StringBuilder();
            sb.Append(@"SELECT ShipmentTransporter.Id
              ,ShipmentTransporter.ShipmentId
              ,ShipmentTransporter.TransporterId
              ,ShipmentTransporter.Assigned
              ,ShipmentTransporter.Accepted
              ,ShipmentTransporter.Declined
              ,ShipmentTransporter.Selected
              ,ShipmentTransporter.AssignedDate
              ,ShipmentTransporter.AcceptedDate
              ,ShipmentTransporter.DeclinedDate
              ,ShipmentTransporter.SelectedDate
              ,ShipmentTransporter.Price
              ,ShipmentTransporter.LoadingOn
              ,ShipmentTransporter.DeliveryOn
              ,ShipmentTransporter.UserIdCreated
              ,ShipmentTransporter.DateCreated
              ,ShipmentTransporter.UserIdModified
              ,ShipmentTransporter.DateModified
              ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	          ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
              FROM ShipmentTransporter
left outer join ShipmentTransporter as UserCreatedTable on UserCreatedTable.Id=Truck.UserIdCreated
left outer join ShipmentTransporter as UserModifiedTable on UserModifiedTable.Id=Truck.UserIdModified  
Where 1=1 ");
            if (filter.ShipmentId.HasValue)
            {
                sb.Append(" and ShipmentTransporter.ShipmentId=" + filter.ShipmentId.Value);
            }
            if (filter.TransporterId.HasValue)
            {
                sb.Append(" and ShipmentTransporter.TransporterId=" + filter.TransporterId.Value);
            }
            if (filter.CustomerId.HasValue)
            {
                sb.Append(" and ShipmentTransporter.CustomerId=" + filter.CustomerId.Value);
            }
            return sb.ToString();
        }

        public void DeleteShipmentTransporter(string predicate, IDbTransaction transaction)
        {
            try
            {
                CreateShipmentTransporterHistory(predicate, transaction);
                 Delete(predicate, transaction);
            }
            catch (Exception ex)
            {
                
            }
        }

        private void CreateShipmentTransporterHistory(string predicate, IDbTransaction transaction)
        {
            throw new NotImplementedException();
        }

        public async Task Save(int currentUserId, ShipmentTransporter currentShipmentTransporter, IDbTransaction transaction = null)
        {
            if (currentShipmentTransporter != null)
            {
                currentShipmentTransporter.DateModified = DateTime.Now;
                currentShipmentTransporter.UserIdModified = currentUserId;
                if (currentShipmentTransporter.Id <= 0)
                {
                    try
                    {
                        currentShipmentTransporter.DateCreated = DateTime.Now;
                        currentShipmentTransporter.UserIdCreated = currentUserId;
                        currentShipmentTransporter.Id = await AddAsync(currentShipmentTransporter, transaction);
                    }
                    catch (Exception ex)
                    {

                    }
                }
                else
                {
                    await UpdateAsync(currentShipmentTransporter, transaction);
                }
            }
        }
    }
}
