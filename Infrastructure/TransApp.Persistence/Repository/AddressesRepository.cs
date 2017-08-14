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

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                var item = await cn.QueryAsync<AddressDto, AddressAvailability, AddressDto>(GetQuery(id),
                    (address, addressAvailability) =>
                    {
                        AddressDto entity;
                        if (!lookup.TryGetValue(address.Id, out entity))
                        {
                            lookup.Add(address.Id, entity = address);
                        }

                        if (!lookupAvailability.ExistsList(entity.Id, addressAvailability.Id))
                        {
                            if (entity.AddressAvailability == null)
                                entity.AddressAvailability = new List<AddressAvailability>();
                            entity.AddressAvailability.Add(addressAvailability);
                        }

                        return address;
                    }, "SplitOn");
            }
            return lookup.Values.FirstOrDefault();
        }

        private string GetQuery(int id)
        {
            var sb = new StringBuilder();
            sb.Append(@"select Address.*,SplitAnswer='',AddressAvailability.*
from Address left outer
join AddressAvailability on AddressAvailability.AddressId = Address.Id
where Address.Id = " + id);

            return sb.ToString();
        }
    }
}
