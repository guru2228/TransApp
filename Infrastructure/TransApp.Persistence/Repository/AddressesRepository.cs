using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.Repository
{
    public class AddressesRepository:GenericRepository<Address>, IAddressesRepository
    {
        public AddressesRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public void GetFullAddressById(int id)
        {
            //AddressDto item = default(AddressDto);

            //using (IDbConnection cn = new SqlConnection(ConnectionString))
            //{
            //    cn.Open();
            //    var result =
            //        cn.Query(
            //            "SELECT * FROM Adrresses Join AddressAvailabilities WHERE ID=@ID AND A LOT OF JOINS AND A LOT OF COLUMNS IN HERE TO BE ABLE TO AVOID A LOT OF QUERIES, AND TO GET EVERYTHING IN ONE QUERY",
            //            new {ID = id}).SingleOrDefault();

            //    item = new AddressDto {Address = new Address {Country = result.Country}};
            //}

            //return item;

        //// TODO - check how to map nested objects with dapper (if it makes sense if not, just use generic repository, and execute multiple queries, or create custom objects).
        }
    }
}
