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
    public class RequirementRepository: GenericRepository<Requirement>, IRequirementRepository
    {
        public RequirementRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<List<RequirementDto>> GetRequirements(string language)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return (List<RequirementDto>)await cn.QueryAsync<RequirementDto>(GetQuery(language));
            }
        }

        private string GetQuery(string language)
        {
            if (string.IsNullOrEmpty(language))
            {
                language = "EN";
            }
            var sb = new StringBuilder();
            sb.Append(@" select Requirement.Id
      ,Requirement.[Code]
      ,Requirement.[DictionaryId]
      ,Requirement.[Image]
      ,Requirement.[IconName]
      ,Requirement.[UserIdCreated]
      ,Requirement.[DateCreated]
      ,Requirement.[UserIdModified]
      ,Requirement.[DateModified] 
	  ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
	  ,Dictionary." + language + @" as Description

from Requirement left outer join Dictionary on Dictionary.Id=Requirement.DictionaryId
left outer join ApplicationUser as UserCreatedTable on UserCreatedTable.Id=Requirement.UserIdCreated
left outer join ApplicationUser as UserModifiedTable on UserModifiedTable.Id=Requirement.UserIdModified ");

            return sb.ToString();
        }
    }
}
