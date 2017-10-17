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
    public class TruckRepository: LocalizedGenericRepository<Truck>, ITruckRepository
    {
        public TruckRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<List<TruckDto>> GetTrucks(string language)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return (List<TruckDto>)await cn.QueryAsync<TruckDto>(GetQuery(language));
            }
        }

        private string GetQuery(string language)
        {
            language = GetCorrectLanguage(language);
            var sb = new StringBuilder();
            sb.Append(@" select Truck.Id
      ,Truck.[Code]
      ,Truck.[DictionaryId]
      ,Truck.[UserIdCreated]
      ,Truck.[Image]
      ,Truck.[IconName]
      ,Truck.[DateCreated]
      ,Truck.[UserIdModified]
      ,Truck.[DateModified] 
	  ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
	  ,Dictionary." + language + @" as Description

from Truck left outer join Dictionary on Dictionary.Id=Truck.DictionaryId
left outer join [ApplicationUser] as UserCreatedTable on UserCreatedTable.Id=Truck.UserIdCreated
left outer join [ApplicationUser] as UserModifiedTable on UserModifiedTable.Id=Truck.UserIdModified  ");

            return sb.ToString();
        }
    }
}

