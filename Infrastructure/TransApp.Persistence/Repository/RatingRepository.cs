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
    public class RatingRepository : LocalizedGenericRepository<Rating>, IRatingRepository
    {
        public RatingRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public async Task<List<RatingDto>> GetRating(string language, int? transporterId =null)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                DynamicParameters d = new DynamicParameters();
                if (transporterId.HasValue)
                {
                    d.Add("@TransporterId", transporterId.Value);
                }
                cn.Open();
                return (List<RatingDto>)await cn.QueryAsync<RatingDto>(GetQuery(language,transporterId),d);
            }
        }

        private string GetQuery(string language,int? transporterId)
        {
            language = GetCorrectLanguage(language);
            var sb = new StringBuilder();
            sb.Append(@" select Rating.[Id]
      ,Rating.[UserId]
      ,Rating.[TransporterId]
      ,Rating.[Amount]
      ,Rating.[Review]
      ,Rating.[UserIdCreated]
      ,Rating.[DateCreated]
      ,Rating.[UserIdModified]
      ,Rating.[DateModified]
	  ,isnull(UserCreatedTable.FirstName,'') + ' '+isnull(UserCreatedTable.LastName,'') as UserCreated
	  ,isnull(UserModifiedTable.FirstName,'') + ' '+isnull(UserModifiedTable.LastName,'') as UserModified

from Rating
left outer join [ApplicationUser] as UserCreatedTable on UserCreatedTable.Id=Rating.UserIdCreated
left outer join [ApplicationUser] as UserModifiedTable on UserModifiedTable.Id=Rating.UserIdModified  ");
            if (transporterId.HasValue)
            {
                sb.Append("where  Rating.TransporterId=@TransporterId");
            }
            return sb.ToString();
        }
    }
}

