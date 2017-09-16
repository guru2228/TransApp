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
                            >(GetQuery(id),
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
            ShipmentDto resultExtra = await GetShipmentExtraById(id);
            if (resultExtra.ShipmentSenderTrucks != null)
                result.ShipmentSenderTrucks = resultExtra.ShipmentSenderTrucks;
            if (resultExtra.ShipmentTransporters != null)
                result.ShipmentTransporters = resultExtra.ShipmentTransporters;
            return result;
        }

        public async Task<ShipmentDto> GetShipmentExtraById(int id)
        {
            var lookup = new Dictionary<int, ShipmentDto>();
            var lookupShipment = new Dictionary<int, List<int>>();
            var lookupSenderTruck = new Dictionary<int, List<int>>();
            var lookupTransporter = new Dictionary<int, List<int>>();

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                var item =
                    await
                        cn
                            .QueryAsync
                            <Shipment, ShipmentSenderTruck, ShipmentTransporter, ShipmentDto
                            >(GetQueryExtra(id),
                                (shipment, shipmentSenderTruck, shipmentTransporter) =>
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

                                    return entity;
                                }, "SplitSenderTruck,SplitTransporter");
            }
            return lookup.Values.FirstOrDefault();
        }


        public async Task<List<ShipmentSimpleDto>> GetShipmentFiltered(FilterShipment filter)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return (await cn.QueryAsync<ShipmentSimpleDto>(GetQueryFiltered(filter))).ToList();
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

        private string GetQuery(int id)
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
      ,[Shipment].[SenderAmStart]
      ,[Shipment].[SenderAmStop]
      ,[Shipment].[SenderPmStart]
      ,[Shipment].[SenderPmStop]
      ,[Shipment].[ReceiverAddressId]
      ,[Shipment].[ReceiverContactPerson]
      ,[Shipment].[ReceiverPhone]
      ,[Shipment].[ReceiverRemark]
      ,[Shipment].[ReceiverAmStart]
      ,[Shipment].[ReceiverAmStop]
      ,[Shipment].[ReceiverPmStart]
      ,[Shipment].[ReceiverPmStop]
      ,[Shipment].[TotalPrice]
      ,[Shipment].[TotalVolume]
      ,[Shipment].[TotalQuatity]
      ,[Shipment].[TotalWeight]
      ,[Shipment].[ShipmentStatusId]
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
            return sb.ToString();
        }

        private string GetQueryExtra(int id)
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
      ,[Shipment].[SenderAmStart]
      ,[Shipment].[SenderAmStop]
      ,[Shipment].[SenderPmStart]
      ,[Shipment].[SenderPmStop]
      ,[Shipment].[ReceiverAddressId]
      ,[Shipment].[ReceiverContactPerson]
      ,[Shipment].[ReceiverPhone]
      ,[Shipment].[ReceiverRemark]
      ,[Shipment].[ReceiverAmStart]
      ,[Shipment].[ReceiverAmStop]
      ,[Shipment].[ReceiverPmStart]
      ,[Shipment].[ReceiverPmStop]
      ,[Shipment].[TotalPrice]
      ,[Shipment].[TotalVolume]
      ,[Shipment].[TotalQuatity]
      ,[Shipment].[TotalWeight]
      ,[Shipment].[ShipmentStatusId]
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
      ,[ShipmentTransporter].[DateModified]
from [Shipment] 
left outer
join [ShipmentSenderTruck] on [ShipmentSenderTruck].ShipmentId = [Shipment].Id
left outer
join [ShipmentTransporter] on [ShipmentTransporter].ShipmentId = [Shipment].Id
where [Shipment].Id =  " + id);
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
      ,[Shipment].[SenderAmStart]
      ,[Shipment].[SenderAmStop]
      ,[Shipment].[SenderPmStart]
      ,[Shipment].[SenderPmStop]
      ,[Shipment].[ReceiverAddressId]
      ,[Shipment].[ReceiverContactPerson]
      ,[Shipment].[ReceiverPhone]
      ,[Shipment].[ReceiverRemark]
      ,[Shipment].[ReceiverAmStart]
      ,[Shipment].[ReceiverAmStop]
      ,[Shipment].[ReceiverPmStart]
      ,[Shipment].[ReceiverPmStop]
      ,[Shipment].[TotalPrice]
      ,[Shipment].[TotalVolume]
      ,[Shipment].[TotalQuatity]
      ,[Shipment].[TotalWeight]
      ,[Shipment].[ShipmentStatusId]
      ,[Shipment].[TransporterId]
      ,[Shipment].[UserIdCreated]
      ,[Shipment].[DateCreated]
      ,[Shipment].[UserIdModified]
      ,[Shipment].[DateModified]
      ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
from Shipment 
left outer join [ApplicationUser] as UserCreatedTable on UserCreatedTable.Id=Shipment.UserIdCreated
left outer join [ApplicationUser] as UserModifiedTable on UserModifiedTable.Id=Shipment.UserIdModified
where 1=1");
            if (filter.CustomerId.HasValue)
            {
                sb.Append(" and Shipment.CustomerId=" + filter.CustomerId.Value);
            }

            sb.Append(@" ) AS RowConstrainedResult
WHERE  RowNum between " + filter.StartItem + @" and " + filter.StartItem + filter.Amount + @" ORDER BY RowNum ");
            return sb.ToString();
        }
    }
}
