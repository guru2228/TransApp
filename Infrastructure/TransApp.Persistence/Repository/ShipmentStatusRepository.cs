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

namespace TransApp.Persistence.Repository
{
    public class ShipmentStatusRepository : LocalizedGenericRepository<ShipmentStatus>, IShipmentStatusRepository
    {
        public ShipmentStatusRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<List<ShipmentStatusDto>> GetStatuses(string language)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return (List<ShipmentStatusDto>) await cn.QueryAsync<ShipmentStatusDto>(GetQuery(language));
            }
        }

        private string GetQuery(string language)
        {
            language = GetCorrectLanguage(language);
            var sb = new StringBuilder();
            sb.Append(@" select ShipmentStatus.Id
      ,ShipmentStatus.[Code]
      ,ShipmentStatus.[DictionaryId]
      ,ShipmentStatus.[UserIdCreated]
      ,ShipmentStatus.[DateCreated]
      ,ShipmentStatus.[UserIdModified]
      ,ShipmentStatus.[DateModified] 
	  ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
	  ,Dictionary." + language + @" as Description

from ShipmentStatus left outer join Dictionary on Dictionary.Id=ShipmentStatus.DictionaryId
left outer join [ApplicationUser] as UserCreatedTable on UserCreatedTable.Id=ShipmentStatus.UserIdCreated
left outer join [ApplicationUser] as UserModifiedTable on UserModifiedTable.Id=ShipmentStatus.UserIdModified  ");

            return sb.ToString();
        }
    }
}
