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
    public class PackTypeRepository : LocalizedGenericRepository<PackType>, IPackTypeRepository
    {
        public PackTypeRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<List<PackTypeDto>> GetPackTypes(string language)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return (List<PackTypeDto>)await cn.QueryAsync<PackTypeDto>(GetQuery(language));
            }
        }

        private string GetQuery(string language)
        {
            if (string.IsNullOrEmpty(language))
            {
                language = "EN";
            }
            var sb = new StringBuilder();
            sb.Append(@" select PackType.Id
      ,PackType.[Code]
      ,PackType.[HasExtra]
      ,PackType.[DictionaryId]
      ,PackType.[UserIdCreated]
      ,PackType.[DateCreated]
      ,PackType.[UserIdModified]
      ,PackType.[DateModified] 
	  ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
	  ,Dictionary." + language + @" as Description

from PackType left outer join Dictionary on Dictionary.Id=PackType.DictionaryId
left outer join [ApplicationUser] as UserCreatedTable on UserCreatedTable.Id=PackType.UserIdCreated
left outer join [ApplicationUser] as UserModifiedTable on UserModifiedTable.Id=PackType.UserIdModified  ");

            return sb.ToString();
        }
    }
}
