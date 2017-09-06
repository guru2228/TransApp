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
    public class AddressesRepository:GenericRepository<Address>, IAddressesRepository
    {
        public AddressesRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<AddressDto> GetFullAddressById(int id)
        {
            var lookup = new Dictionary<int, AddressDto>();
            var lookupAvailability = new Dictionary<int, List<int>>();
            var lookupFacility = new Dictionary<int, List<int>>();
            var lookupRequirement = new Dictionary<int, List<int>>();
            var lookupTruck = new Dictionary<int, List<int>>();

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                var item =
                    await cn.QueryAsync<AddressDto, AddressAvailability, AddressFacility, AddressRequirement, AddressTruck, AddressDto >(GetQuery(id),
                        (address, addressAvailability, addressFacility, addressRequirement, addressTruck) =>
                        {
                            AddressDto entity;
                            if (!lookup.TryGetValue(address.Address.Id, out entity))
                            {
                                lookup.Add(address.Address.Id, entity = address);
                            }

                            if (!lookupAvailability.ExistsList(entity.Address.Id, addressAvailability.Id))
                            {
                                if (entity.AddressAvailabilities == null)
                                    entity.AddressAvailabilities = new List<AddressAvailability>();
                                entity.AddressAvailabilities.Add(addressAvailability);
                            }

                            if (!lookupRequirement.ExistsList(entity.Address.Id, addressFacility.Id))
                            {
                                if (entity.AddressFacilities == null)
                                    entity.AddressFacilities = new List<AddressFacility>();
                                entity.AddressFacilities.Add(addressFacility);
                            }

                            if (!lookupFacility.ExistsList(entity.Address.Id, addressRequirement.Id))
                            {
                                if (entity.AddressRequirements == null)
                                    entity.AddressRequirements = new List<AddressRequirement>();
                                entity.AddressRequirements.Add(addressRequirement);
                            }

                            if (!lookupTruck.ExistsList(entity.Address.Id, addressTruck.Id))
                            {
                                if (entity.AddressTrucks == null)
                                    entity.AddressTrucks = new List<AddressTruck>();
                                entity.AddressTrucks.Add(addressTruck);
                            }

                            return address;
                        }, "SplitOn");
            }
            return lookup.Values.FirstOrDefault();
        }


        public async Task<AddressDto> GetFullAddressFiltered(FilterAddress filter)
        {
            var lookup = new Dictionary<int, AddressDto>();
            var lookupAvailability = new Dictionary<int, List<int>>();
            var lookupFacility = new Dictionary<int, List<int>>();
            var lookupRequirement = new Dictionary<int, List<int>>();
            var lookupTruck = new Dictionary<int, List<int>>();

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                var item =
                    await cn.QueryAsync<AddressDto, AddressAvailability, AddressFacility, AddressRequirement, AddressTruck, AddressDto>(GetQueryFiltered(filter),
                        (address, addressAvailability, addressFacility, addressRequirement, addressTruck) =>
                        {
                            AddressDto entity;
                            if (!lookup.TryGetValue(address.Address.Id, out entity))
                            {
                                lookup.Add(address.Address.Id, entity = address);
                            }

                            if (!lookupAvailability.ExistsList(entity.Address.Id, addressAvailability.Id))
                            {
                                if (entity.AddressAvailabilities == null)
                                    entity.AddressAvailabilities = new List<AddressAvailability>();
                                entity.AddressAvailabilities.Add(addressAvailability);
                            }

                            if (!lookupRequirement.ExistsList(entity.Address.Id, addressFacility.Id))
                            {
                                if (entity.AddressFacilities == null)
                                    entity.AddressFacilities = new List<AddressFacility>();
                                entity.AddressFacilities.Add(addressFacility);
                            }

                            if (!lookupFacility.ExistsList(entity.Address.Id, addressRequirement.Id))
                            {
                                if (entity.AddressRequirements == null)
                                    entity.AddressRequirements = new List<AddressRequirement>();
                                entity.AddressRequirements.Add(addressRequirement);
                            }

                            if (!lookupTruck.ExistsList(entity.Address.Id, addressTruck.Id))
                            {
                                if (entity.AddressTrucks == null)
                                    entity.AddressTrucks = new List<AddressTruck>();
                                entity.AddressTrucks.Add(addressTruck);
                            }

                            return address;
                        }, "SplitOn");
            }
            return lookup.Values.FirstOrDefault();
        }

        public async Task SaveAddress(Address currentAddress, IDbTransaction transaction = null)
        {
            if (currentAddress != null)
            {
                if (currentAddress.Id <= 0)
                {
                    try
                    {
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

        private string GetQuery(int id)
        {
            var sb = new StringBuilder();
            sb.Append(@"select Address.*,SplitOn='',AddressAvailabilities.*,SplitOn='',AddressFacility.*,
SplitOn='',AddressRequirement.*,SplitOn='',AddressTruck.*
from Address left outer
join AddressAvailabilities on AddressAvailabilities.AddressId = Address.Id
left outer
join AddressFacility on AddressFacility.AddressId = Address.Id
left outer
join AddressRequirement on AddressRequirement.AddressId = Address.Id
left outer
join AddressTruck on AddressTruck.AddressId = Address.Id
where Address.Id = " + id);

            return sb.ToString();
        }

        private string GetQueryFiltered(FilterAddress filter)
        {
            var sb = new StringBuilder();
            sb.Append(@"select Address.*,SplitOn='',AddressAvailabilities.*,SplitOn='',AddressFacility.*,
SplitOn='',AddressRequirement.*,SplitOn='',AddressTruck.*
from Address left outer
join AddressAvailabilities on AddressAvailabilities.AddressId = Address.Id
left outer
join AddressFacility on AddressFacility.AddressId = Address.Id
left outer
join AddressRequirement on AddressRequirement.AddressId = Address.Id
left outer
join AddressTruck on AddressTruck.AddressId = Address.Id
where 1=1");
            if (filter.CustomerId.HasValue)
            {
                sb.Append(" and Address.CustomerId=" + filter.CustomerId.Value);
            }

            return sb.ToString();
        }
    }
}
