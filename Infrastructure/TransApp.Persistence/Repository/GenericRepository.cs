using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Dapper;
using TransApp.DataModel;

namespace TransApp.Persistence.Repository
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IDataAccessObject
    {
        protected  string TableName;
        protected  string ConnectionString;

        public GenericRepository(string tableName, string connectionString)
        {
            TableName = tableName;
            ConnectionString = connectionString;
        }

        internal virtual dynamic Mapping(TEntity item)
        {
            return item;
        }

        /// <summary>
        /// Get item by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public TEntity Get(int id)
        {
            TEntity item = default(TEntity);

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                item =
                    cn.Query<TEntity>("SELECT * FROM " + TableName + " WHERE ID=@ID", new {ID = id}).FirstOrDefault();
            }

            return item;
        }

        /// <summary>
        /// Get item by id async
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<TEntity> GetAsync(int id)
        {
            TEntity item = default(TEntity);

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                item =
                    (await cn.QueryAsync<TEntity>("SELECT * FROM " + TableName + " WHERE ID=@ID", new {ID = id}))
                        .FirstOrDefault();
            }

            return item;
        }

        /// <summary>
        /// Get item by id
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public TEntity Get(string predicate)
        {
            TEntity item = default(TEntity);

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                item =
                    cn.Query<TEntity>("SELECT * FROM " + TableName + " WHERE " + predicate).FirstOrDefault();
            }

            return item;
        }

        /// <summary>
        /// Get item by id async
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        public async Task<TEntity> GetAsync(string predicate)
        {
            TEntity item = default(TEntity);

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                item =
                    (await cn.QueryAsync<TEntity>("SELECT * FROM " + TableName + " WHERE " + predicate)).FirstOrDefault();
            }

            return item;
        }

        /// <summary>
        /// Get item by id
        /// </summary>
        /// <param name="field"></param>
        /// <param name="operation"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public TEntity Get(string field, string operation, string value)
        {
            TEntity item = default(TEntity);

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                item =
                    cn.Query<TEntity>("SELECT * FROM " + TableName + " WHERE "+ field + operation+ "@param", new { param = value }).FirstOrDefault();
            }

            return item;
        }


        /// <summary>
        /// Get item by id
        /// </summary>
        /// <param name="field"></param>
        /// <param name="operation"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public async Task<TEntity> GetAsync(string field, string operation, string value)
        {
            TEntity item = default(TEntity);

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                item =
                    (await cn.QueryAsync<TEntity>("SELECT * FROM " + TableName + " WHERE " + field + operation + "@param", new { param = value })).FirstOrDefault();
            }

            return item;
        }


        /// <summary>
        /// Get all
        /// </summary>
        /// <returns></returns>
        public IEnumerable<TEntity> GetAll(string predicate)
        {
            IEnumerable<TEntity> items = null;

            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                items = cn.Query<TEntity>("SELECT * FROM " + TableName + " WHERE " + predicate);
            }

            return items;
        }



        /// <summary>
        /// Get all async
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<TEntity>> GetAllAsync(string predicate)
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return await cn.QueryAsync<TEntity>("SELECT * FROM " + TableName + " WHERE " + predicate);
            }
        }

        /// <summary>
        /// Get all
        /// </summary>
        /// <returns></returns>
        public IEnumerable<TEntity> GetAll()
        {
            IEnumerable<TEntity> items = null;
            
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                items = cn.Query<TEntity>("SELECT * FROM " + TableName);
            }

            return items;
        }



        /// <summary>
        /// Get all async
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return await cn.QueryAsync<TEntity>("SELECT * FROM " + TableName);
            }
        }


        /// <summary>
        /// Insert entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        public int Add(TEntity entity, IDbTransaction transaction = null, bool excludeId = true)
        {
            PropertyInfo[] props = entity.GetType().GetProperties();
            string[] columns = props.Select(p => p.Name).ToArray();
            if (excludeId)
            {
                columns = columns.Where(s => s.ToUpper() != "ID").ToArray();
            }
            var sqlCommand = string.Format("INSERT INTO {0} ({1}) OUTPUT inserted.ID VALUES (@{2})",
                TableName,
                string.Join(",", columns),
                string.Join(",@", columns));

            var parameterValues = (object)Mapping(entity);
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                if (transaction == null)
                    return cn.ExecuteScalar<int>(sqlCommand, parameterValues);
                return cn.ExecuteScalar<int>(sqlCommand, parameterValues,transaction);
            }
        }

        /// <summary>
        /// Insert entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        public async Task<int> AddAsync(TEntity entity, IDbTransaction transaction = null, bool excludeId = true)
        {
            PropertyInfo[] props = entity.GetType().GetProperties();
            string[] columns = props.Select(p => p.Name).ToArray();
            if (excludeId)
            {
                columns = columns.Where(s => s.ToUpper() != "ID").ToArray();
            }
            var sqlCommand = string.Format("INSERT INTO {0} ({1}) OUTPUT inserted.ID VALUES (@{2})",
                TableName,
                string.Join(",", columns),
                string.Join(",@", columns));
            var parameterValues = (object) Mapping(entity);
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                if (transaction == null)
                    return await cn.ExecuteScalarAsync<int>(sqlCommand, parameterValues);
                return await cn.ExecuteScalarAsync<int>(sqlCommand, parameterValues, transaction);
            }
        }

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="updateColumns"></param>
        /// <param name="columnsToUpdate"></param>
        public void Update(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, List<string> columnsToUpdate = null)
        {
            PropertyInfo[] props = entity.GetType().GetProperties();
            string[] columns = props.Select(p => p.Name).ToArray();
            if (excludeId)
                columns = columns.Where(s => s.ToUpper() != "ID").ToArray();
            if (columnsToUpdate != null)
                columns = columns.Where(s => columnsToUpdate.Any(c=>c.ToUpper() == s.ToUpper())).ToArray();

            var parameters = columns.Select(name => name + "=@" + name).ToList();
            var sqlCommand = string.Format("UPDATE {0} SET {1} WHERE ID=@ID", TableName, string.Join(",", parameters));
            var parameterValues = (object)Mapping(entity);
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                if (transaction == null)
                    cn.Execute(sqlCommand, parameterValues);
                else
                    cn.Execute(sqlCommand, parameterValues, transaction);
            }
        }

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="columnsToUpdate"></param>
        public async Task UpdateAsync(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, List<string> columnsToUpdate = null)
        {
            PropertyInfo[] props = entity.GetType().GetProperties();
            string[] columns = props.Select(p => p.Name).ToArray();
            if (excludeId)
                columns = columns.Where(s => s.ToUpper() != "ID").ToArray();
            if (columnsToUpdate != null)
                columns = columns.Where(s => columnsToUpdate.Any(c => c.ToUpper() == s.ToUpper())).ToArray();

            var parameters = columns.Select(name => name + "=@" + name).ToList();

            var sqlCommand = string.Format("UPDATE {0} SET {1} WHERE ID=@ID", TableName, string.Join(",", parameters));
            var parameterValues = (object)Mapping(entity);
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                if (transaction == null)
                    await cn.ExecuteAsync(sqlCommand, parameterValues);
                else
                    await cn.ExecuteAsync(sqlCommand, parameterValues, transaction);
            }
        }

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        public void Delete(TEntity entity, IDbTransaction transaction = null)
        {
            var sqlCommand = string.Format("DELETE FROM " + TableName + " WHERE Id=@ID", new {ID = entity.Id});
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                if (transaction == null)
                    cn.Execute(sqlCommand);
                else
                    cn.Execute(sqlCommand, transaction);
            }
        }

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="entity"></param>
        public async Task DeleteAsync(TEntity entity, IDbTransaction transaction = null)
        {
            var sqlCommand = string.Format("DELETE FROM " + TableName + " WHERE Id=@ID", new {ID = entity.Id});
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                if (transaction == null)
                    await cn.ExecuteAsync(sqlCommand);
                else
                    await cn.ExecuteAsync(sqlCommand, transaction);
            }
        }
    }
}
