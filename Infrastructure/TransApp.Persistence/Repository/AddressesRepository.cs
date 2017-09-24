using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
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
    public class AddressesRepository : GenericRepository<Address>, IAddressesRepository
    {
        public AddressesRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<AddressDto> GetFullAddressById(int id)
        {
            var lookup = new Dictionary<int, AddressDto>();
            var lookupAddress = new Dictionary<int, List<int>>();
            var lookupAvailability = new Dictionary<int, List<int>>();
            var lookupFacility = new Dictionary<int, List<int>>();
            var lookupRequirement = new Dictionary<int, List<int>>();
            var lookupTruck = new Dictionary<int, List<int>>();

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                var item =
                    await
                        cn
                            .QueryAsync
                            <Address, AddressAvailability, AddressFacility, AddressRequirement, AddressTruck, AddressDto
                            >(GetQuery(id),
                                (address, addressAvailability, addressFacility, addressRequirement, addressTruck) =>
                                {
                                    AddressDto entity;

                                    if (!lookup.TryGetValue(address.Id, out entity))
                                    {
                                        lookup.Add(address.Id, entity = new AddressDto());
                                        entity.Address = address;
                                    }

                                    if (!lookupAddress.ExistsList(entity.Address.Id, address.Id))
                                    {
                                        if (entity.Address == null)
                                            entity.Address = new Address();
                                        entity.Address = address;
                                    }

                                    if (addressAvailability != null)
                                    {
                                        if (
                                            !lookupAvailability.ExistsList(entity.Address.Id, addressAvailability.Id))
                                        {
                                            if (entity.AddressAvailabilities == null)
                                                entity.AddressAvailabilities = new List<AddressAvailability>();
                                            entity.AddressAvailabilities.Add(addressAvailability);
                                        }
                                    }
                                    if (addressFacility != null)
                                    {
                                        if (!lookupFacility.ExistsList(entity.Address.Id, addressFacility.Id))
                                        {
                                            if (entity.AddressFacilities == null)
                                                entity.AddressFacilities = new List<AddressFacility>();
                                            entity.AddressFacilities.Add(addressFacility);
                                        }
                                    }
                                    if (addressRequirement != null)
                                    {
                                        if (!lookupRequirement.ExistsList(entity.Address.Id, addressRequirement.Id))
                                        {
                                            if (entity.AddressRequirements == null)
                                                entity.AddressRequirements = new List<AddressRequirement>();
                                            entity.AddressRequirements.Add(addressRequirement);
                                        }
                                    }
                                    if (addressTruck != null)
                                    {
                                        if (!lookupTruck.ExistsList(entity.Address.Id, addressTruck.Id))
                                        {
                                            if (entity.AddressTrucks == null)
                                                entity.AddressTrucks = new List<AddressTruck>();
                                            entity.AddressTrucks.Add(addressTruck);
                                        }
                                    }
                                    return entity;
                                }, "SplitAvailability,SplitFacility,SplitRequirement,SplitTruck");
            }
            return lookup.Values.FirstOrDefault();
        }


        /// <summary>
        /// Data from Address table filtered
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public async Task<List<AddressSigleDto>> GetAll(FilterAddress filter)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return (await cn.QueryAsync<AddressSigleDto>(GetAddressQueryFiltered(filter))).ToList();
            }
        }

        /// <summary>
        /// Save
        /// </summary>
        /// <param name="currentUserId"></param>
        /// <param name="currentAddress"></param>
        /// <param name="transaction"></param>
        /// <returns></returns>
        public async Task SaveAddress(int currentUserId, Address currentAddress, IDbTransaction transaction = null)
        {
            if (currentAddress != null)
            {
                currentAddress.DateModified = DateTime.Now;
                currentAddress.UserIdModified = currentUserId;
                if (currentAddress.Id <= 0)
                {
                    try
                    {
                        currentAddress.DateCreated = DateTime.Now;
                        currentAddress.UserIdCreated = currentUserId;
                        currentAddress.Id = await AddAsync(currentAddress, transaction);
                    }
                    catch (Exception ex)
                    {

                    }
                }
                else
                {
                    await UpdateAsync(currentAddress, transaction);
                }
            }
        }

        public async Task DeleteAddress(Address address, IDbTransaction transaction)
        {
            await DeleteAsync(address, transaction);
        }

        private string GetQuery(int id)
        {
            var sb = new StringBuilder();
            sb.Append(@"select 
[Address].[Id]
      ,[Address].[CustomerId]
      ,[Address].[Name]
      ,[Address].[Street1]
      ,[Address].[Street2]
      ,[Address].[ZipCode]
      ,[Address].[City]
      ,[Address].[Country]
      ,[Address].[ContactPerson]
      ,[Address].[Email]
      ,[Address].[Phone]
      ,[Address].[Remark]
      ,[Address].[UserIdCreated]
      ,[Address].[DateCreated]
      ,[Address].[UserIdModified]
      ,[Address].[DateModified]
      ,[Address].[Latitude]
      ,[Address].[Longitude]
      ,[Address].[CountryCode]
      ,[Address].[CityCode]
      ,[Address].[StateCode]
      ,[Address].[StreetNumber]
      ,[Address].[CommonAvailability]
      ,[Address].[StateInfo]
      ,[Address].[OpeningHours],
SplitAvailability='',[AddressAvailability].[Id]
      ,[AddressAvailability].[AddressId]
      ,[AddressAvailability].[Day]
      ,[AddressAvailability].[AmStart]
      ,[AddressAvailability].[AmStop]
      ,[AddressAvailability].[PmStart]
      ,[AddressAvailability].[PmStop]
      ,[AddressAvailability].[IsClosed]
      ,[AddressAvailability].[UserIdCreated]
      ,[AddressAvailability].[DateCreated]
      ,[AddressAvailability].[UserIdModified]
      ,[AddressAvailability].[DateModified],
SplitFacility='',[AddressFacility].[Id]
      ,[AddressFacility].[AddressId]
      ,[AddressFacility].[FacilityId]
      ,[AddressFacility].[Active]
      ,[AddressFacility].[UserIdCreated]
      ,[AddressFacility].[DateCreated]
      ,[AddressFacility].[UserIdModified]
      ,[AddressFacility].[DateModified],
SplitRequirement='',[AddressRequirement].[Id]
      ,[AddressRequirement].[AddressId]
      ,[AddressRequirement].[RequirementId]
      ,[AddressRequirement].[Active]
      ,[AddressRequirement].[UserIdCreated]
      ,[AddressRequirement].[DateCreated]
      ,[AddressRequirement].[UserIdModified]
      ,[AddressRequirement].[DateModified]
      ,[AddressRequirement].[AmountInsurance],
SplitTruck='',[AddressTruck].[Id]
      ,[AddressTruck].[AddressId]
      ,[AddressTruck].[TruckId]
      ,[AddressTruck].[Active]
      ,[AddressTruck].[UserIdCreated]
      ,[AddressTruck].[DateCreated]
      ,[AddressTruck].[UserIdModified]
      ,[AddressTruck].[DateModified]
from Address left outer
join AddressAvailability on AddressAvailability.AddressId = Address.Id
left outer
join AddressFacility on AddressFacility.AddressId = Address.Id
left outer
join AddressRequirement on AddressRequirement.AddressId = Address.Id
left outer
join AddressTruck on AddressTruck.AddressId = Address.Id
where Address.Id = " + id);

            return sb.ToString();
        }

        private string GetAddressQueryFiltered(FilterAddress filter)
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
( ORDER BY Address.Id DESC ) AS RowNum
      ,[Address].[Id]
      ,[Address].[CustomerId]
      ,[Address].[Name]
      ,[Address].[Street1]
      ,[Address].[Street2]
      ,[Address].[ZipCode]
      ,[Address].[City]
      ,[Address].[Country]
      ,[Address].[ContactPerson]
      ,[Address].[Email]
      ,[Address].[Phone]
      ,[Address].[Remark]
      ,[Address].[UserIdCreated]
      ,[Address].[DateCreated]
      ,[Address].[UserIdModified]
      ,[Address].[DateModified]
      ,[Address].[Latitude]
      ,[Address].[Longitude]
      ,[Address].[CountryCode]
      ,[Address].[CityCode]
      ,[Address].[StateCode]
      ,[Address].[StreetNumber] 
      ,[Address].[CommonAvailability]
      ,[Address].[StateInfo]
      ,[Address].[OpeningHours]
      ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
from Address 
left outer join [ApplicationUser] as UserCreatedTable on UserCreatedTable.Id=Address.UserIdCreated
left outer join [ApplicationUser] as UserModifiedTable on UserModifiedTable.Id=Address.UserIdModified
where 1=1");
            if (filter.CustomerId.HasValue)
            {
                sb.Append(" and Address.CustomerId=" + filter.CustomerId.Value);
            }
            if (!string.IsNullOrEmpty(filter.CustomFilter))
            {
                var partialFilter = filter.CustomFilter;
                //  var splitFilter = GetSplitFilter(filter.CustomFilter);
                //sb.Append(" AND (Address.Name is null or Address.Name IN (" + splitFilter + @") )");
                //sb.Append(" AND (Address.Street1 is null or Address.Street1 IN (" + splitFilter + @") )");
                //sb.Append(" AND (Address.ZipCode is null Address.ZipCode IN (" + splitFilter + @") )");
                //sb.Append(" AND (Address.City is null Address.City  IN (" + splitFilter + @") )");
                //sb.Append(" AND (Address.Country is null Address.Country  IN (" + splitFilter + @") )");
                //sb.Append(" AND (Address.Phone is null Address.Phone  IN (" + splitFilter + @") )");

                sb.Append(" AND (Address.Name like '%" + partialFilter + "%'");
                sb.Append(" OR Address.Street1 like '%" + partialFilter + "%'");
                sb.Append(" OR Address.StreetNumber like '%" + partialFilter + "%'");
                sb.Append(" OR Address.ZipCode like '%" + partialFilter + "%'");
                sb.Append(" OR Address.City like '%" + partialFilter + "%'");
                sb.Append(" OR Address.Country like '%" + partialFilter + "%'");
                sb.Append(" OR Address.Phone like '%" + partialFilter + "%'");
                sb.Append(" OR Address.ContactPerson like '%" + partialFilter + "%'");
                sb.Append(" OR Address.Email like '%" + partialFilter + "%'");
                sb.Append(@" OR (isnull(Address.Street1,'') + ' '+isnull(Address.[StreetNumber],'') + ', '+isnull(Address.[City],'') + ', '+
                                 isnull(Address.StateInfo,'') + ', '+isnull(Address.Country,'')  like '%" +
                          partialFilter + "%'))");
            }

            if (!string.IsNullOrEmpty(filter.Name))
            {
                sb.Append(" and Address.Name like '%" + filter.Name + "%'");
            }
            sb.Append(@" ) AS RowConstrainedResult
WHERE  RowNum between " + filter.StartItem + @" and " + (filter.StartItem + filter.Amount - 1)  + @" ORDER BY Id Desc");
            return sb.ToString();
        }

        private string GetSplitFilter(string filterCustomFilter)
        {
            string[] listFilters = filterCustomFilter.Split(' ');
            List<string> result = new List<string>();
            for (int i = 0; i < listFilters.Length; i++)
            {
                if (!result.Contains(listFilters[i]))
                {
                    result.Add(listFilters[i]);
                }
                if (i > 0)
                {
                    string local = string.Empty;
                    for (int j = 0; j <= i; j++)
                    {
                        local += " " + listFilters[j];
                        local = local.Trim();
                        if (!result.Contains(local))
                        {
                            result.Add(local);
                        }
                    }
                }
            }
            var stringResult = string.Empty;
            foreach (string s in result)
            {
                stringResult += "'" + s + "'" + ",";
            }
            if (stringResult.EndsWith(","))
            {
                stringResult = stringResult.Remove(stringResult.Length - 1, 1);
            }
            return stringResult;
        }
    }
}
