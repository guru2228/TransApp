using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using TransApp.DataModel;

namespace TransApp.Persistence.Repository.Generic
{
    public class LocalizedGenericRepository<TEntity> :GenericRepository<TEntity>, ILocalizedGenericRepository<TEntity> where TEntity : class, IDataAccessObject
    {
        public LocalizedGenericRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public TEntity GetLocalized(int id)
        {
            TEntity item = default(TEntity);

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                item =
                    cn.Query<TEntity>("SELECT * FROM " + TableName + "  LEFT OUTER JOIN FRWDictionary ON DictionaryId = FRWDictionary.ID WHERE ID=@ID", new { ID = id }).FirstOrDefault();
            }

            return item;
        }

        public async Task<TEntity> GetAsyncLocalized(int id)
        {
            TEntity item = default(TEntity);

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                item =
                    (await cn.QueryAsync<TEntity>("SELECT * FROM " + TableName + "  LEFT OUTER JOIN FRWDictionary ON DictionaryId = FRWDictionary.ID WHERE ID=@ID", new { ID = id }))
                        .FirstOrDefault();
            }

            return item;
        }

        public string GetCorrectLanguage(string language)
        {
            if (string.IsNullOrEmpty(language))
            {
                return "EN";
            }
            language = language.ToUpper();
            if (language != "EN" && language != "NL" && language != "FR" && language != "RO" && language != "DE")
            {
                return "EN";
            }
            return language;
        }



        public IEnumerable<TEntity> GetAllLocalized()
        {
            IEnumerable<TEntity> items = null;

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                items = cn.Query<TEntity>("SELECT * FROM " + TableName + "  LEFT OUTER JOIN FRWDictionary ON DictionaryId = FRWDictionary.ID");
            }

            return items;
        }

        public async Task<IEnumerable<TEntity>> GetAllAsyncLocalized()
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return await cn.QueryAsync<TEntity>("SELECT * FROM " + TableName + "  LEFT OUTER JOIN FRWDictionary ON DictionaryId = FRWDictionary.ID");
            }
        }
    }
}
