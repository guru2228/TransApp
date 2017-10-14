using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using TransApp.Core.ShipmentTransporter;
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

        public async Task<ShipmentDto> GetShipmentById(int id, int? customerId = null)
        {
            var lookup = new Dictionary<int, ShipmentDto>();
            var lookupShipment = new Dictionary<int, List<int>>();
            var lookupDetail = new Dictionary<int, List<int>>();
            var lookupReceiverFacility = new Dictionary<int, List<int>>();
            var lookupReceiverRequirement = new Dictionary<int, List<int>>();
            var lookuptReceiverTruck = new Dictionary<int, List<int>>();
            var lookupSenderFacility = new Dictionary<int, List<int>>();
            var lookupSenderRequirement = new Dictionary<int, List<int>>();

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                var item =
                    await
                        cn
                            .QueryAsync
                            <Shipment, ShipmentDetail, ShipmentReceiverFacility, ShipmentReceiverRequirement,
                                ShipmentReceiverTruck,
                                ShipmentSenderFacility, ShipmentSenderRequirement, ShipmentDto
                            >(GetQuery(id, customerId),
                                (shipment, shipmentDetail, shipmentReceiverFacility, shipmentReceiverRequirement,
                                        shipmentReceiverTruck,
                                        shipmentSenderFacility, shipmentSenderRequirement) =>
                                    {
                                        ShipmentDto entity;

                                        if (!lookup.TryGetValue(shipment.Id, out entity))
                                        {
                                            lookup.Add(shipment.Id, entity = new ShipmentDto());
                                            entity.Shipment = shipment;
                                        }

                                        if (!lookupShipment.ExistsList(entity.Shipment.Id, shipment.Id))
                                        {
                                            if (entity.Shipment == null)
                                                entity.Shipment = new Shipment();
                                            entity.Shipment = shipment;
                                        }

                                        if (shipmentDetail != null)
                                        {
                                            if (
                                                !lookupDetail.ExistsList(entity.Shipment.Id, shipmentDetail.Id))
                                            {
                                                if (entity.ShipmentDetails == null)
                                                    entity.ShipmentDetails = new List<ShipmentDetail>();
                                                entity.ShipmentDetails.Add(shipmentDetail);
                                            }
                                        }

                                        if (shipmentReceiverFacility != null)
                                        {
                                            if (
                                                !lookupReceiverFacility.ExistsList(entity.Shipment.Id,
                                                    shipmentReceiverFacility.Id))
                                            {
                                                if (entity.ShipmentReceiverFacilities == null)
                                                    entity.ShipmentReceiverFacilities =
                                                        new List<ShipmentReceiverFacility>();
                                                entity.ShipmentReceiverFacilities.Add(shipmentReceiverFacility);
                                            }
                                        }
                                        if (shipmentReceiverRequirement != null)
                                        {
                                            if (
                                                !lookupReceiverRequirement.ExistsList(entity.Shipment.Id,
                                                    shipmentReceiverRequirement.Id))
                                            {
                                                if (entity.ShipmentReceiverRequirements == null)
                                                    entity.ShipmentReceiverRequirements =
                                                        new List<ShipmentReceiverRequirement>();
                                                entity.ShipmentReceiverRequirements.Add(shipmentReceiverRequirement);
                                            }
                                        }
                                        if (shipmentReceiverTruck != null)
                                        {
                                            if (
                                                !lookuptReceiverTruck.ExistsList(entity.Shipment.Id,
                                                    shipmentReceiverTruck.Id))
                                            {
                                                if (entity.ShipmentReceiverTrucks == null)
                                                    entity.ShipmentReceiverTrucks = new List<ShipmentReceiverTruck>();
                                                entity.ShipmentReceiverTrucks.Add(shipmentReceiverTruck);
                                            }
                                        }
                                        if (shipmentSenderFacility != null)
                                        {
                                            if (
                                                !lookupSenderFacility.ExistsList(entity.Shipment.Id,
                                                    shipmentSenderFacility.Id))
                                            {
                                                if (entity.ShipmentSenderFacilities == null)
                                                    entity.ShipmentSenderFacilities = new List<ShipmentSenderFacility>();
                                                entity.ShipmentSenderFacilities.Add(shipmentSenderFacility);
                                            }
                                        }
                                        if (shipmentSenderRequirement != null)
                                        {
                                            if (
                                                !lookupSenderRequirement.ExistsList(entity.Shipment.Id,
                                                    shipmentSenderRequirement.Id))
                                            {
                                                if (entity.ShipmentSenderRequirements == null)
                                                    entity.ShipmentSenderRequirements =
                                                        new List<ShipmentSenderRequirement>();
                                                entity.ShipmentSenderRequirements.Add(shipmentSenderRequirement);
                                            }
                                        }
                                        return entity;
                                    },
                                "SplitDetail,SplitReceiverFacility,SplitReceiverRequirement,SplitReceiverTruck,SplitSenderFacility,SplitSenderRequirement");
            }
            ShipmentDto result = lookup.Values.FirstOrDefault();
            if (result != null)
            {
                ShipmentDto resultExtra = await GetShipmentExtraById(id, customerId);
                if (resultExtra != null)
                {
                    if (resultExtra.ShipmentSenderTrucks != null)
                        result.ShipmentSenderTrucks = resultExtra.ShipmentSenderTrucks;
                    if (resultExtra.ShipmentTransporters != null)
                        result.ShipmentTransporters = resultExtra.ShipmentTransporters;
                    if (resultExtra.ShipmentReceiverAvailability != null)
                        result.ShipmentReceiverAvailability = resultExtra.ShipmentReceiverAvailability;
                    if (resultExtra.ShipmentSenderAvailability != null)
                        result.ShipmentSenderAvailability = resultExtra.ShipmentSenderAvailability;
                }
            }
            return result;
        }

        public async Task<ShipmentDto> GetShipmentExtraById(int id, int? customerId)
        {
            var lookup = new Dictionary<int, ShipmentDto>();
            var lookupShipment = new Dictionary<int, List<int>>();
            var lookupSenderTruck = new Dictionary<int, List<int>>();
            var lookupTransporter = new Dictionary<int, List<int>>();
            var lookupReceiverAvailability = new Dictionary<int, List<int>>();
            var lookupSenderAvailability = new Dictionary<int, List<int>>();

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                var item =
                    await
                        cn
                            .QueryAsync
                            <Shipment, ShipmentSenderTruck, ShipmentTransporter, ShipmentReceiverAvailability,
                                ShipmentSenderAvailability, ShipmentDto
                            >(GetQueryExtra(id, customerId),
                                (shipment, shipmentSenderTruck, shipmentTransporter, shipmentReceiverAvailability,
                                        shipmentSenderAvailability) =>
                                    {
                                        ShipmentDto entity;

                                        if (!lookup.TryGetValue(shipment.Id, out entity))
                                        {
                                            lookup.Add(shipment.Id, entity = new ShipmentDto());
                                            entity.Shipment = shipment;
                                        }

                                        if (!lookupShipment.ExistsList(entity.Shipment.Id, shipment.Id))
                                        {
                                            if (entity.Shipment == null)
                                                entity.Shipment = new Shipment();
                                            entity.Shipment = shipment;
                                        }

                                        if (shipmentSenderTruck != null)
                                        {
                                            if (!lookupSenderTruck.ExistsList(entity.Shipment.Id, shipment.Id))
                                            {
                                                if (entity.ShipmentSenderTrucks == null)
                                                    entity.ShipmentSenderTrucks = new List<ShipmentSenderTruck>();
                                                entity.ShipmentSenderTrucks.Add(shipmentSenderTruck);
                                                ;
                                            }
                                        }

                                        if (shipmentTransporter != null)
                                        {
                                            if (
                                                !lookupTransporter.ExistsList(entity.Shipment.Id, shipmentTransporter.Id))
                                            {
                                                if (entity.ShipmentTransporters == null)
                                                    entity.ShipmentTransporters = new List<ShipmentTransporter>();
                                                entity.ShipmentTransporters.Add(shipmentTransporter);
                                            }
                                        }

                                        if (shipmentReceiverAvailability != null)
                                        {
                                            if (
                                                !lookupReceiverAvailability.ExistsList(entity.Shipment.Id,
                                                    shipmentReceiverAvailability.Id))
                                            {
                                                if (entity.ShipmentReceiverAvailability == null)
                                                    entity.ShipmentReceiverAvailability =
                                                        new List<ShipmentReceiverAvailability>();
                                                entity.ShipmentReceiverAvailability.Add(shipmentReceiverAvailability);
                                            }
                                        }

                                        if (shipmentSenderAvailability != null)
                                        {
                                            if (
                                                !lookupSenderAvailability.ExistsList(entity.Shipment.Id,
                                                    shipmentSenderAvailability.Id))
                                            {
                                                if (entity.ShipmentSenderAvailability == null)
                                                    entity.ShipmentSenderAvailability =
                                                        new List<ShipmentSenderAvailability>();
                                                entity.ShipmentSenderAvailability.Add(shipmentSenderAvailability);
                                            }
                                        }

                                        return entity;
                                    },
                                "SplitSenderTruck,SplitTransporter,SplitReceiverAvailability,SplitSenderAvailability");
            }
            return lookup.Values.FirstOrDefault();
        }


        public async Task<List<ShipmentSimpleDto>> GetShipmentFiltered(FilterShipment filter)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                DynamicParameters d = new DynamicParameters();
                {
                    if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Unassigned)
                    {
                        d.Add("@StatusCode", "UAS");
                    }
                    if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Assigned)
                    {
                        d.Add("@StatusCode", "ASS");
                    }
                    if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.OpenMarket)
                    {
                        d.Add("@StatusCode", "OPEN");
                    }
                    if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Completed)
                    {
                        d.Add("@StatusCode", "COM");
                    }
                    if (!string.IsNullOrEmpty(filter.ShipmentStatus))
                    {
                        d.Add("@ShipmentStatus", filter.ShipmentStatus);
                    }
                }
                cn.Open();
                return (await cn.QueryAsync<ShipmentSimpleDto>(GetQueryFiltered(filter), d)).ToList();
            }
        }

        public async Task SaveShipment(int currentUserId, Shipment currentShipment, IDbTransaction transaction = null)
        {
            if (currentShipment != null)
            {
                currentShipment.DateModified = DateTime.Now;
                currentShipment.UserIdModified = currentUserId;
                if (currentShipment.Id <= 0)
                {
                    try
                    {
                        currentShipment.DateCreated = DateTime.Now;
                        currentShipment.UserIdCreated = currentUserId;
                        currentShipment.Id = await AddAsync(currentShipment, transaction);
                    }
                    catch (Exception ex)
                    {

                    }
                }
                else
                {
                    await UpdateAsync(currentShipment, transaction);
                }
            }
        }

        private string GetQuery(int id, int? customerId)
        {
            var sb = new StringBuilder();
            sb.Append(@"select 
       [Shipment].[Id]
      ,[Shipment].[Reference]
      ,[Shipment].[PoNumber]
      ,[Shipment].[PickUpDate]
      ,[Shipment].[DeliveryDate]
      ,[Shipment].[CustomerId]
      ,[Shipment].[SenderAddressId]
      ,[Shipment].[SenderContactPerson]
      ,[Shipment].[SenderPhone]
      ,[Shipment].[SenderRemark]
      ,[Shipment].[ReceiverAddressId]
      ,[Shipment].[ReceiverContactPerson]
      ,[Shipment].[ReceiverPhone]
      ,[Shipment].[ReceiverRemark]
      ,[Shipment].[TotalPrice]
      ,[Shipment].[TotalVolume]
      ,[Shipment].[TotalQuatity]
      ,[Shipment].[TotalWeight]
      ,[Shipment].[ShipmentStatus]
      ,[Shipment].[TransporterId]
      ,[Shipment].[UserIdCreated]
      ,[Shipment].[DateCreated]
      ,[Shipment].[UserIdModified]
      ,[Shipment].[DateModified],
SplitDetail='',[ShipmentDetail].[Id]
      ,[ShipmentDetail].[ShipmentId]
      ,[ShipmentDetail].[Quantity]
      ,[ShipmentDetail].[PackTypeId]
      ,[ShipmentDetail].[Length]
      ,[ShipmentDetail].[Width]
      ,[ShipmentDetail].[Height]
      ,[ShipmentDetail].[Weight]
      ,[ShipmentDetail].[ParentDetailId]
      ,[ShipmentDetail].[UserIdCreated]
      ,[ShipmentDetail].[DateCreated]
      ,[ShipmentDetail].[UserIdModified]
      ,[ShipmentDetail].[DateModified],
SplitReceiverFacility='',[ShipmentReceiverFacility].[Id]
      ,[ShipmentReceiverFacility].[ShipmentId]
      ,[ShipmentReceiverFacility].[FacilityId]
      ,[ShipmentReceiverFacility].[Active]
      ,[ShipmentReceiverFacility].[UserIdCreated]
      ,[ShipmentReceiverFacility].[DateCreated]
      ,[ShipmentReceiverFacility].[UserIdModified]
      ,[ShipmentReceiverFacility].[DateModified],
SplitReceiverRequirement='',[ShipmentReceiverRequirement].[Id]
      ,[ShipmentReceiverRequirement].[ShipmentId]
      ,[ShipmentReceiverRequirement].[RequirementId]
      ,[ShipmentReceiverRequirement].[AmountInsurance]
      ,[ShipmentReceiverRequirement].[Active]
      ,[ShipmentReceiverRequirement].[UserIdCreated]
      ,[ShipmentReceiverRequirement].[DateCreated]
      ,[ShipmentReceiverRequirement].[UserIdModified]
      ,[ShipmentReceiverRequirement].[DateModified],
SplitReceiverTruck='',[ShipmentReceiverTruck].[Id]
      ,[ShipmentReceiverTruck].[ShipmentId]
      ,[ShipmentReceiverTruck].[TruckId]
      ,[ShipmentReceiverTruck].[Active]
      ,[ShipmentReceiverTruck].[UserIdCreated]
      ,[ShipmentReceiverTruck].[DateCreated]
      ,[ShipmentReceiverTruck].[UserIdModified]
      ,[ShipmentReceiverTruck].[DateModified],
SplitSenderFacility='',[ShipmentSenderFacility].[Id]
      ,[ShipmentSenderFacility].[ShipmentId]
      ,[ShipmentSenderFacility].[FacilityId]
      ,[ShipmentSenderFacility].[Active]
      ,[ShipmentSenderFacility].[UserIdCreated]
      ,[ShipmentSenderFacility].[DateCreated]
      ,[ShipmentSenderFacility].[UserIdModified]
      ,[ShipmentSenderFacility].[DateModified],
SplitSenderRequirement='',[ShipmentSenderRequirement].[Id]
      ,[ShipmentSenderRequirement].[ShipmentId]
      ,[ShipmentSenderRequirement].[RequirementId]
      ,[ShipmentSenderRequirement].[AmountInsurance]
      ,[ShipmentSenderRequirement].[Active]
      ,[ShipmentSenderRequirement].[UserIdCreated]
      ,[ShipmentSenderRequirement].[DateCreated]
      ,[ShipmentSenderRequirement].[UserIdModified]
      ,[ShipmentSenderRequirement].[DateModified]
from [Shipment] left outer
join [ShipmentDetail] on [ShipmentDetail].ShipmentId = [Shipment].Id
left outer
join [ShipmentReceiverFacility] on [ShipmentReceiverFacility].ShipmentId = [Shipment].Id
left outer
join [ShipmentReceiverRequirement] on [ShipmentReceiverRequirement].ShipmentId = [Shipment].Id
left outer
join [ShipmentReceiverTruck] on [ShipmentReceiverTruck].ShipmentId = [Shipment].Id
left outer
join [ShipmentSenderFacility] on [ShipmentSenderFacility].ShipmentId = [Shipment].Id
left outer
join [ShipmentSenderRequirement] on [ShipmentSenderRequirement].ShipmentId = [Shipment].Id

where [Shipment].Id =  " + id);
            if (customerId.HasValue)
            {
                sb.Append(" AND Shipment.CustomerId=" + customerId.Value);
            }
            return sb.ToString();
        }

        public async Task DeleteShipment(Shipment currentShipment, IDbTransaction transaction)
        {
            await DeleteAsync(currentShipment, transaction);
        }

        public async Task<dynamic> GetShipmentsUnassignedAmount(int customerId)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                DynamicParameters d = new DynamicParameters();
                d.Add("@CustomerId", customerId);
                d.Add("@Code", "UAS");
                cn.Open();
                return (await cn.QueryAsync<dynamic>(GetQueryCommon(), d)).FirstOrDefault();
            }
        }

        public async Task<dynamic> GetShipmentsCompletedAmount(int customerId)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                DynamicParameters d = new DynamicParameters();
                d.Add("@CustomerId", customerId);
                d.Add("@Code", "CON");
                cn.Open();
                return (await cn.QueryAsync<dynamic>(GetQueryCommon(), d)).FirstOrDefault();
            }
        }

        public async Task<dynamic> GetShipmentsAssignedAmount(int customerId)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                DynamicParameters d = new DynamicParameters();
                d.Add("@CustomerId", customerId);
                d.Add("@Code", "ASS");
                cn.Open();
                return (await cn.QueryAsync<dynamic>(GetQueryAssigned(), d)).FirstOrDefault();
            }
        }

        public async Task<dynamic> GetShipmentsOpenMarketAmount(int customerId)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                DynamicParameters d = new DynamicParameters();
                d.Add("@CustomerId", customerId);
                d.Add("@Code", "OPEN");
                cn.Open();
                return (await cn.QueryAsync<dynamic>(GetQueryCommon(), d)).FirstOrDefault();
            }
        }

        public async Task<bool> UpdateShipmentStatus(int userId, int shipmentId, IDbTransaction transaction = null,
            string shipmentStatus = null)
        {
            DataModel.Dto.Shipment currentShipment = new DataModel.Dto.Shipment
            {
                Id = shipmentId,
                ShipmentStatus = shipmentStatus,
                UserIdModified = userId,
                DateModified = DateTime.Now
            };
            List<string> columnsToUpdateList = new List<string>();
            columnsToUpdateList.Add("ShipmentStatus");
            columnsToUpdateList.Add("UserIdModified");
            columnsToUpdateList.Add("DateModified");
            try
            {
                await UpdateAsync(currentShipment, transaction, true, columnsToUpdateList);
            }
            catch
            {
                return false;
            }
            return true;
        }

        public async Task<bool> UpdateShipmentTransporter(int userId, int shipmentId, IDbTransaction transaction = null,
           string shipmentStatus = null, int? transporterId = null)
        {
            DataModel.Dto.Shipment currentShipment = new DataModel.Dto.Shipment
            {
                Id = shipmentId,
                ShipmentStatus = shipmentStatus,
                TransporterId = transporterId,
                UserIdModified = userId,
                DateModified = DateTime.Now
            };
            List<string> columnsToUpdateList = new List<string>();
            columnsToUpdateList.Add("ShipmentStatus");
            columnsToUpdateList.Add("TransporterId");
            columnsToUpdateList.Add("UserIdModified");
            columnsToUpdateList.Add("DateModified");
            try
            {
                await UpdateAsync(currentShipment, transaction, true, columnsToUpdateList);
            }
            catch
            {
                return false;
            }
            return true;
        }

        public async Task<int> GetAllCount(FilterShipment filter)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                DynamicParameters d = new DynamicParameters();
                {
                    if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Unassigned)
                    {
                        d.Add("@StatusCode", "UAS");
                    }
                    if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Assigned)
                    {
                        d.Add("@StatusCode", "ASS");
                    }
                    if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.OpenMarket)
                    {
                        d.Add("@StatusCode", "OPEN");
                    }
                    if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Completed)
                    {
                        d.Add("@StatusCode", "COM");
                    }
                    if (!string.IsNullOrEmpty(filter.ShipmentStatus))
                    {
                        d.Add("@ShipmentStatus", filter.ShipmentStatus);
                    }
                }
                return (await cn.QueryAsync<int>(GetShipmentQueryFilteredCount(filter), d)).Count();
            }
        }

        private string GetShipmentQueryFilteredCount(FilterShipment filter)
        {
            if (filter.StartItem < 0)
            {
                filter.StartItem = 0;
            }
            if (filter.Amount < 0)
            {
                filter.Amount = 9999;
            }
            var sb = new StringBuilder();
            sb.Append(@"SELECT  
      [Shipment].[Id]
from Shipment 
where 1=1");
            if (filter.CustomerId.HasValue)
            {
                sb.Append(" and Shipment.CustomerId=" + filter.CustomerId.Value);
            }
            if (!string.IsNullOrEmpty(filter.ShipmentStatus))
            {
                sb.Append(" and Shipment.ShipmentStatus=@ShipmentStatus");
            }
            if (filter.TransporterId.HasValue)
            {
                sb.Append(" and Shipment.TransporterId=" + filter.TransporterId.Value);
            }

            if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Assigned)
            {
                sb.Append(" and Shipment.ShipmentStatus=@StatusCode");
                if (filter.Declined)
                {
                    sb.Append(@" and exists (select ShipmentTransporter.Id from ShipmentTransporter 
                    where  Shipment.Id=ShipmentTransporter.ShipmentId and ShipmentTransporter.Declined=1)");
                }
                else if (filter.Pending)
                {
                    sb.Append(@" and exists (select ShipmentTransporter.Id from ShipmentTransporter 
                    where Shipment.Id=ShipmentTransporter.ShipmentId and ShipmentTransporter.Declined=0)");
                }
            }
            if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.OpenMarket ||
                filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Completed ||
                filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Unassigned)
            {
                sb.Append(" and Shipment.ShipmentStatus=@StatusCode");
            }

            return sb.ToString();
        }

        private string GetQueryAssigned()
        {
            var sb = new StringBuilder();
            sb.Append(@"
 select  count(distinct Shipment.Id) As Amount,
 (select max(Shipment.DateModified) from Shipment 
 where Shipment.ShipmentStatus=@Code
  and Shipment.CustomerId=@CustomerId ) as LastDateTime,
 (select count(Distinct ShipmentTransporter.Id) from ShipmentTransporter
  inner join Shipment on  Shipment.Id=ShipmentTransporter.ShipmentId and ShipmentTransporter.Declined=1
  where Shipment.ShipmentStatus=@Code
  and Shipment.CustomerId=@CustomerId 
  ) as Declined,
  (select count(Distinct ShipmentTransporter.Id) from ShipmentTransporter
   inner join Shipment on  Shipment.Id=ShipmentTransporter.ShipmentId and ShipmentTransporter.Declined=0
  where Shipment.ShipmentStatus=@Code
  and Shipment.CustomerId=@CustomerId  ) as Pending
 from Shipment 
  where Shipment.ShipmentStatus=@Code
  and Shipment.CustomerId=@CustomerId  ");
            return sb.ToString();
        }

        private string GetQueryCommon()
        {
            var sb = new StringBuilder();
            sb.Append(@"
           select  count(distinct Shipment.Id) As Amount,
 (select max(Shipment.DateModified) from Shipment 
 where Shipment.ShipmentStatus=@Code
 and Shipment.CustomerId=@CustomerId) as LastDateTime
 from Shipment 
 where Shipment.ShipmentStatus=@Code
 and Shipment.CustomerId=@CustomerId ");
            return sb.ToString();
        }

        private string GetQueryExtra(int id, int? customerId)
        {
            var sb = new StringBuilder();
            sb.Append(@"select 
       [Shipment].[Id]
      ,[Shipment].[Reference]
      ,[Shipment].[PoNumber]
      ,[Shipment].[PickUpDate]
      ,[Shipment].[DeliveryDate]
      ,[Shipment].[CustomerId]
      ,[Shipment].[SenderAddressId]
      ,[Shipment].[SenderContactPerson]
      ,[Shipment].[SenderPhone]
      ,[Shipment].[SenderRemark]
      ,[Shipment].[ReceiverAddressId]
      ,[Shipment].[ReceiverContactPerson]
      ,[Shipment].[ReceiverPhone]
      ,[Shipment].[ReceiverRemark]
      ,[Shipment].[TotalPrice]
      ,[Shipment].[TotalVolume]
      ,[Shipment].[TotalQuatity]
      ,[Shipment].[TotalWeight]
      ,[Shipment].[ShipmentStatus]
      ,[Shipment].[TransporterId]
      ,[Shipment].[UserIdCreated]
      ,[Shipment].[DateCreated]
      ,[Shipment].[UserIdModified]
      ,[Shipment].[DateModified],
SplitSenderTruck='',[ShipmentSenderTruck].[Id]
      ,[ShipmentSenderTruck].[ShipmentId]
      ,[ShipmentSenderTruck].[TruckId]
      ,[ShipmentSenderTruck].[Active]
      ,[ShipmentSenderTruck].[UserIdCreated]
      ,[ShipmentSenderTruck].[DateCreated]
      ,[ShipmentSenderTruck].[UserIdModified]
      ,[ShipmentSenderTruck].[DateModified],
SplitTransporter='',[ShipmentTransporter].[Id]
      ,[ShipmentTransporter].[ShipmentId]
      ,[ShipmentTransporter].[TransporterId]
      ,[ShipmentTransporter].[Assigned]
      ,[ShipmentTransporter].[Accepted]
      ,[ShipmentTransporter].[Declined]
      ,[ShipmentTransporter].[Selected]
      ,[ShipmentTransporter].[AssignedDate]
      ,[ShipmentTransporter].[AcceptedDate]
      ,[ShipmentTransporter].[DeclinedDate]
      ,[ShipmentTransporter].[SelectedDate]
      ,[ShipmentTransporter].[Price]
      ,[ShipmentTransporter].[LoadingOn]
      ,[ShipmentTransporter].[DeliveryOn]
      ,[ShipmentTransporter].[UserIdCreated]
      ,[ShipmentTransporter].[DateCreated]
      ,[ShipmentTransporter].[UserIdModified]
      ,[ShipmentTransporter].[DateModified],
SplitReceiverAvailability='',[ShipmentReceiverAvailability].[Id]
      ,[ShipmentReceiverAvailability].[ShipmentId]
      ,[ShipmentReceiverAvailability].[Day]
      ,[ShipmentReceiverAvailability].[AmStart]
      ,[ShipmentReceiverAvailability].[AmStop]
      ,[ShipmentReceiverAvailability].[PmStart]
      ,[ShipmentReceiverAvailability].[PmStop]
      ,[ShipmentReceiverAvailability].[IsClosed]
      ,[ShipmentReceiverAvailability].[UserIdCreated]
      ,[ShipmentReceiverAvailability].[DateCreated]
      ,[ShipmentReceiverAvailability].[UserIdModified]
      ,[ShipmentReceiverAvailability].[DateModified],
SplitSenderAvailability='',[ShipmentSenderAvailability].[Id]
      ,[ShipmentSenderAvailability].[ShipmentId]
      ,[ShipmentSenderAvailability].[Day]
      ,[ShipmentSenderAvailability].[AmStart]
      ,[ShipmentSenderAvailability].[AmStop]
      ,[ShipmentSenderAvailability].[PmStart]
      ,[ShipmentSenderAvailability].[PmStop]
      ,[ShipmentSenderAvailability].[IsClosed]
      ,[ShipmentSenderAvailability].[UserIdCreated]
      ,[ShipmentSenderAvailability].[DateCreated]
      ,[ShipmentSenderAvailability].[UserIdModified]
      ,[ShipmentSenderAvailability].[DateModified]
from [Shipment] 
left outer
join [ShipmentSenderTruck] on [ShipmentSenderTruck].ShipmentId = [Shipment].Id
left outer
join [ShipmentTransporter] on [ShipmentTransporter].ShipmentId = [Shipment].Id
left outer
join [ShipmentReceiverAvailability] on [ShipmentReceiverAvailability].ShipmentId = [Shipment].Id
left outer
join [ShipmentSenderAvailability] on [ShipmentSenderAvailability].ShipmentId = [Shipment].Id
where [Shipment].Id =  " + id);
            if (customerId.HasValue)
            {
                sb.Append(" AND Shipment.CustomerId=" + customerId.Value);
            }
            return sb.ToString();
        }

        private string GetQueryFiltered(FilterShipment filter)
        {
            if (filter.StartItem < 0)
            {
                filter.StartItem = 0;
            }
            if (filter.Amount < 0)
            {
                filter.Amount = 9999;
            }
            var sb = new StringBuilder();
            sb.Append(@"SELECT  RowConstrainedResult.* from (select  ROW_NUMBER() OVER 
( ORDER BY Shipment.Id ) AS RowNum
      ,[Shipment].[Id]
      ,[Shipment].[Reference]
      ,[Shipment].[PoNumber]
      ,[Shipment].[PickUpDate]
      ,[Shipment].[DeliveryDate]
      ,[Shipment].[CustomerId]
      ,[Shipment].[SenderAddressId]
      ,[Shipment].[SenderContactPerson]
      ,[Shipment].[SenderPhone]
      ,[Shipment].[SenderRemark]
      ,[Shipment].[ReceiverAddressId]
      ,[Shipment].[ReceiverContactPerson]
      ,[Shipment].[ReceiverPhone]
      ,[Shipment].[ReceiverRemark]
      ,[Shipment].[TotalPrice]
      ,[Shipment].[TotalVolume]
      ,[Shipment].[TotalQuatity]
      ,[Shipment].[TotalWeight]
      ,[Shipment].[ShipmentStatus]
      ,[Shipment].[TransporterId]
      ,[Shipment].[UserIdCreated]
      ,[Shipment].[DateCreated]
      ,[Shipment].[UserIdModified]
      ,[Shipment].[DateModified]
      ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
      ,Transporter.Name as TransporterName
      ,FromAddress.Name as AddressFrom
      ,ToAddress.Name as AddressTo
from Shipment 
left outer join [ApplicationUser] as UserCreatedTable on UserCreatedTable.Id=Shipment.UserIdCreated
left outer join [ApplicationUser] as UserModifiedTable on UserModifiedTable.Id=Shipment.UserIdModified
left outer join [Transporter] on Transporter.Id=Shipment.TransporterId
left outer join [Address] as FromAddress on FromAddress.Id=Shipment.SenderAddressId
left outer join [Address] as ToAddress on ToAddress.Id=Shipment.ReceiverAddressId
where 1=1");
            if (filter.CustomerId.HasValue)
            {
                sb.Append(" and Shipment.CustomerId=" + filter.CustomerId.Value);
            }
            if (!string.IsNullOrEmpty(filter.ShipmentStatus))
            {
                sb.Append(" and Shipment.ShipmentStatus=@ShipmentStatus");
            }
            if (filter.TransporterId.HasValue)
            {
                sb.Append(" and Shipment.TransporterId=" + filter.TransporterId.Value);
            }

            if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Assigned)
            {
                sb.Append(" and  Shipment.ShipmentStatus=@StatusCode");
                if (filter.Declined)
                {
                    sb.Append(@" and exists (select ShipmentTransporter.Id from ShipmentTransporter 
                    where  Shipment.Id=ShipmentTransporter.ShipmentId and ShipmentTransporter.Declined=1)");
                }
                else if (filter.Pending)
                {
                    sb.Append(@" and exists (select ShipmentTransporter.Id from ShipmentTransporter 
                    where Shipment.Id=ShipmentTransporter.ShipmentId and ShipmentTransporter.Declined=0)");
                }
            }
            if (filter.ShipmentTransporterStatus == ShipmentTransporterStatus.OpenMarket ||
                filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Completed ||
                filter.ShipmentTransporterStatus == ShipmentTransporterStatus.Unassigned)
            {
                sb.Append(" and  Shipment.ShipmentStatus=@StatusCode");
            }

            sb.Append(@" ) AS RowConstrainedResult
WHERE  RowNum between " + filter.StartItem + @" and " + (filter.StartItem + filter.Amount - 1) + @" ORDER BY RowNum ");
            return sb.ToString();
        }
    }
}
