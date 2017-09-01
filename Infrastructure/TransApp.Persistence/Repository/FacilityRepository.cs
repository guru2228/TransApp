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
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.Repository
{
    public class FacilityRepository : GenericRepository<Facility>, IFacilityRepository
    {
        public FacilityRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<List<FacilityDto>> GetFacilities(string language)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return (List<FacilityDto>) await cn.QueryAsync<FacilityDto>(GetQuery(language));
            }
        }

        private string GetQuery(string language)
        {
            if (string.IsNullOrEmpty(language))
            {
                language = "EN";
            }
            var sb = new StringBuilder();
            sb.Append(@" select Facility.Id
      ,Facility.[Code]
      ,Facility.[DictionaryId]
      ,Facility.[Image]
      ,Facility.[IconName]
      ,Facility.[UserIdCreated]
      ,Facility.[DateCreated]
      ,Facility.[UserIdModified]
      ,Facility.[DateModified] 
	  ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
	  ,Dictionary." + language + @" as Description

from Facility left outer join Dictionary on Dictionary.Id=Facility.DictionaryId
left outer join [User] as UserCreatedTable on UserCreatedTable.Id=Facility.UserIdCreated
left outer join [User] as UserModifiedTable on UserModifiedTable.Id=Facility.UserIdModified ");

            return sb.ToString();
        }
    }
}
