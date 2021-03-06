﻿using Dapper;
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
        public ShipmentTransporterRepository(string tableName, string connectionString)
            : base(tableName, connectionString)
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
              ,TransporterRating.Rating
              ,TransporterRating.AmountReview
              ,[Address].ContactPerson
              ,[Address].Phone
              ,Transporter.Name as TransporterName
              ,Transporter.IconName
              ,Shipment.PickUpDate
              ,Shipment.DeliveryDate
              ,[Address].Name as AddressName
              FROM ShipmentTransporter
left outer join ApplicationUser as UserCreatedTable on UserCreatedTable.Id=ShipmentTransporter.UserIdCreated
left outer join ApplicationUser as UserModifiedTable on UserModifiedTable.Id=ShipmentTransporter.UserIdModified  
inner join Transporter on Transporter.Id = ShipmentTransporter.TransporterId
inner join Shipment on Shipment.Id = ShipmentTransporter.ShipmentId
left outer join [Address] on [Address].id=Transporter.AddressId
outer apply (select  Round(sum(Rating.Amount)/count(Rating.Id),2) as Rating,count(Rating.Id) as AmountReview from Rating where Rating.TransporterId =Transporter.Id)
as TransporterRating
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
                sb.Append(" and Shipment.CustomerId=" + filter.CustomerId.Value);
            }
            if (!string.IsNullOrEmpty(filter.Predicate))
            {
                sb.Append(" and " + filter.Predicate);
            }
            return sb.ToString();
        }

        public async Task DeleteShipmentTransporter(string predicate, IDbTransaction transaction)
        {
            try
            {
                Delete(predicate, transaction);
            }
            catch (Exception ex)
            {

            }
        }

        public async Task Save(int currentUserId, ShipmentTransporter currentShipmentTransporter,
            IDbTransaction transaction = null)
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

        public List<ShipmentTransporter>  GetAllBasic(string predicate)
        {
            return base.GetAll(predicate).ToList();
        }

        public async Task AssignTransporter(int userId,int shipmentId, int amountOfDaysFlexibility)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                DynamicParameters d = new DynamicParameters();
                d.Add("@ShipmentId", shipmentId);
                d.Add("@OrderDate", DateTime.Now);
                d.Add("@AmountOfDaysFlexibility", amountOfDaysFlexibility);
                cn.Open();
                var result = (await cn.QueryAsync<ShipmentTransporter>(GetQueryAssignTransporter(), d)).ToList();
                if (result.Any())
                {
                    foreach (var item in result)
                    {
                        Save(userId, item);
                    }
                }
               
            }
        }

        private string GetQueryAssignTransporter()
        {
            var sb = new StringBuilder();
            sb.Append(@"
-- wat met tijd te laat --> laten interpreteren als morgen

declare @RequestedPickupDate datetime2
declare @Weight int
declare @PickupCountry varchar(20)
declare @DeliveryCountry varchar(20)
declare @PickupZipcode int
declare @DeliveryZipcode int
declare @OrderTime time

select @RequestedPickupDate =Shipment.PickUpDate,@Weight=Shipment.TotalWeight,
@PickupCountry=AddressFrom.CountryCode,@PickupZipcode=AddressFrom.ZipCodeNumeric,
@DeliveryCountry=AddressTo.CountryCode,@DeliveryZipcode=AddressTo.ZipCodeNumeric
from Shipment 
inner join [Address] as AddressFrom on AddressFrom.Id=Shipment.SenderAddressId
inner join [Address] as AddressTo on AddressTo.Id=Shipment.ReceiverAddressId
where Shipment.Id=@ShipmentId

set @AmountOfDaysFlexibility = 2 --- we not have this? where should be stored/managed
if (cast(@RequestedPickupDate as date)>cast(@Orderdate as date))
begin
    set @OrderTime=null
end
else
begin
set @OrderTime = (select cast(@Orderdate as time))
end


select -1 as Id,
Transporter.Id as TransporterId,
@ShipmentId as ShipmentId,
cast(0 as bit) as Assigned,
cast(0 as bit) as Accepted,
cast(0 as bit) as Declined,
cast(0 as bit) as Selected,
Tariff + PickupDelay.SurtaxFixed + DeliveryDelay.SurtaxFixed as Price,
PickupDelay.[Delay] as LoadingOn,
(PickupDelay.[Delay] + DeliveryDelay.[Delay]) as DeliveryOn

from Tariff
inner join Region as PickupRegion on PickupRegion.Id = Tariff.PickupRegionId
inner join Region as DeliveryRegion on DeliveryRegion.Id = Tariff.DeliveryRegionId
inner join Transporter on Transporter.Id = PickupRegion.TransporterId
inner join PickupDelay on PickupDelay.RegionId = PickupRegion.Id
			and (@OrderTime is null or PickupDelay.DelayMaxHour >= @OrderTime)
inner join DeliveryDelay on DeliveryDelay.DeliveryRegionId = DeliveryRegion.Id
			and DeliveryDelay.PickupRegionId = PickupRegion.Id

where Tariff.WeightFrom <= @Weight
and Tariff.WeightTill >= @Weight
and PickupRegion.CountryCode = @PickupCountry
and DeliveryRegion.CountryCode = @DeliveryCountry
and PickupRegion.ZipCodeFrom <= @PickupZipcode
and PickupRegion.ZipCodeTill >= @PickupZipcode
and DeliveryRegion.ZipCodeFrom <= @DeliveryZipcode
and DeliveryRegion.ZipCodeTill >= @DeliveryZipcode
and PickupRegion.TransporterId = DeliveryRegion.TransporterId
and DATEADD(DAY, @AmountOfDaysFlexibility ,@RequestedPickupDate) >= DATEADD(DAY, PickupDelay.[Delay], cast(@Orderdate as date))
order by Tariff + PickupDelay.SurtaxFixed + DeliveryDelay.SurtaxFixed
 ");
          
            return sb.ToString();
        }

        public async Task<bool> UpdateTransporterAssigned(int userId,bool assigned, int shipmentTransporterId, IDbTransaction transaction = null)
        {
            DataModel.Dto.ShipmentTransporter currentShipmentTransporter = new DataModel.Dto.ShipmentTransporter
            {
                Id = shipmentTransporterId,
                Assigned = assigned,
                UserIdModified = userId,
                DateModified = DateTime.Now,
                AssignedDate = DateTime.Now
            };
            if (!assigned)
            {
                currentShipmentTransporter.AssignedDate = null;
            }
            List<string> columnsToUpdateList = new List<string>();
            columnsToUpdateList.Add("Assigned");
            columnsToUpdateList.Add("UserIdModified");
            columnsToUpdateList.Add("DateModified");
            columnsToUpdateList.Add("AssignedDate");
            try
            {
                await UpdateAsync(currentShipmentTransporter, transaction, true, columnsToUpdateList);
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}
