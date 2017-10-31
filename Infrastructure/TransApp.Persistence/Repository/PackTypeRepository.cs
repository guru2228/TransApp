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

        public async Task<List<PackTypeDto>> GetPackTypes(string language,int? customerId = null)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                DynamicParameters d = new DynamicParameters();
                if (customerId.HasValue)
                {
                    d.Add("@CustomerId", customerId.Value);
                }
                cn.Open();
                return (List<PackTypeDto>) await cn.QueryAsync<PackTypeDto>(GetQuery(language, customerId), d);
            }
        }

        private string GetQuery(string language,int? customerId)
        {
            language = GetCorrectLanguage(language);
            var sb = new StringBuilder();
            sb.Append(@" select PackType.Id
      ,PackType.[Code]
      ,PackType.[HasExtra]
      ,PackType.[DictionaryId]
      ,PackType.[UserIdCreated]
      ,PackType.[DateCreated]
      ,PackType.[UserIdModified]
      ,PackType.[DateModified] 
      ,PackType.[CustomerId]
      ,PackType.[PackLength]
      ,PackType.[PackHeight]
      ,PackType.[PackWidth] 
	  ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified
	  ,Dictionary." + language + @" as Description

from PackType left outer join Dictionary on Dictionary.Id=PackType.DictionaryId
left outer join [ApplicationUser] as UserCreatedTable on UserCreatedTable.Id=PackType.UserIdCreated
left outer join [ApplicationUser] as UserModifiedTable on UserModifiedTable.Id=PackType.UserIdModified  ");
            if (customerId.HasValue)
            {
                sb.Append("where (PackType.CustomerId is null or PackType.CustomerId=@CustomerId)");
            }

            return sb.ToString();
        }
    }
}
