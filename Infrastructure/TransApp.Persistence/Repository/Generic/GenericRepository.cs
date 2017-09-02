


using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using TransApp.DataModel;
using TransApp.DataModel.Dto;

namespace TransApp.Persistence.Repository.Generic
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IDataAccessObject
    {
        protected string TableName;
        protected string ConnectionString;

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
                    cn.Query<TEntity>("SELECT * FROM " + TableName + " WHERE ID=@ID", new { ID = id }).FirstOrDefault();
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
                    (await cn.QueryAsync<TEntity>("SELECT * FROM " + TableName + " WHERE ID=@ID", new { ID = id }))
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
        /// <param name="excludeDictionaryData"></param>
        public int Add(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, bool excludeDictionaryData = true)
        {
            PropertyInfo[] props = entity.GetType().GetProperties();
            if (excludeDictionaryData)
                props = props.Where(p => p.DeclaringType != typeof(Dictionary)).ToArray();

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

            if (transaction != null)
                return transaction.Connection.ExecuteScalar<int>(sqlCommand, parameterValues, transaction);
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return cn.ExecuteScalar<int>(sqlCommand, parameterValues);
            }
        }

        /// <summary>
        /// Insert entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="excludeDictionaryData"></param>
        public async Task<int> AddAsync(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, bool excludeDictionaryData = true)
        {
            PropertyInfo[] props = entity.GetType().GetProperties();
            if (excludeDictionaryData)
                props = props.Where(p => p.DeclaringType != typeof(Dictionary)).ToArray();

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

            if (transaction != null)
                return await transaction.Connection.ExecuteScalarAsync<int>(sqlCommand, parameterValues, transaction);
            using (IDbConnection cn = new SqlConnection(ConnectionString))
            {
                cn.Open();
                return await cn.ExecuteScalarAsync<int>(sqlCommand, parameterValues);
            }
        }

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="columnsToUpdate"></param>
        /// <param name="excludeDictionaryData"></param>
        public void Update(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, List<string> columnsToUpdate = null, bool excludeDictionaryData = true)
        {
            PropertyInfo[] props = entity.GetType().GetProperties();
            if (excludeDictionaryData)
                props = props.Where(p => p.DeclaringType != typeof(Dictionary)).ToArray();
            string[] columns = props.Select(p => p.Name).ToArray();
            if (excludeId)
                columns = columns.Where(s => s.ToUpper() != "ID").ToArray();
            if (columnsToUpdate != null)
                columns = columns.Where(s => columnsToUpdate.Any(c => c.ToUpper() == s.ToUpper())).ToArray();

            var parameters = columns.Select(name => name + "=@" + name).ToList();
            var sqlCommand = string.Format("UPDATE {0} SET {1} WHERE ID=@ID", TableName, string.Join(",", parameters));
            var parameterValues = (object)Mapping(entity);

            if (transaction != null)
                transaction.Connection.Execute(sqlCommand, parameterValues, transaction);
            else
            {
                using (IDbConnection cn = new SqlConnection(ConnectionString))
                {
                    cn.Open();
                    cn.Execute(sqlCommand, parameterValues);
                }
            }
        }

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="columnsToUpdate"></param>
        /// <param name="excludeDictionaryData"></param>
        public async Task UpdateAsync(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, List<string> columnsToUpdate = null, bool excludeDictionaryData = true)
        {
            PropertyInfo[] props = entity.GetType().GetProperties();
            if (excludeDictionaryData)
                props = props.Where(p => p.DeclaringType != typeof(Dictionary)).ToArray();
            string[] columns = props.Select(p => p.Name).ToArray();
            if (excludeId)
                columns = columns.Where(s => s.ToUpper() != "ID").ToArray();
            if (columnsToUpdate != null)
                columns = columns.Where(s => columnsToUpdate.Any(c => c.ToUpper() == s.ToUpper())).ToArray();

            var parameters = columns.Select(name => name + "=@" + name).ToList();

            var sqlCommand = string.Format("UPDATE {0} SET {1} WHERE ID=@ID", TableName, string.Join(",", parameters));
            var parameterValues = (object)Mapping(entity);

            if (transaction != null)
                await transaction.Connection.ExecuteAsync(sqlCommand, parameterValues, transaction);
            else
            {
                using (IDbConnection cn = new SqlConnection(ConnectionString))
                {
                    cn.Open();
                    await cn.ExecuteAsync(sqlCommand, parameterValues);
                }
            }
        }

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        public void Delete(TEntity entity, IDbTransaction transaction = null)
        {
            var sqlCommand = string.Format("DELETE FROM " + TableName + " WHERE Id=@ID", new { ID = entity.Id });

            if (transaction != null)
                transaction.Connection.Execute(sqlCommand, transaction);
            else
            {
                using (IDbConnection cn = new SqlConnection(ConnectionString))
                {
                    cn.Open();
                    cn.Execute(sqlCommand);
                }
            }
        }

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="entity"></param>
        public async Task DeleteAsync(TEntity entity, IDbTransaction transaction = null)
        {
            var sqlCommand = string.Format("DELETE FROM " + TableName + " WHERE Id=@ID", new { ID = entity.Id });

            if (transaction != null)
                await transaction.Connection.ExecuteAsync(sqlCommand, transaction);
            else
            {
                using (IDbConnection cn = new SqlConnection(ConnectionString))
                {
                    cn.Open();
                    await cn.ExecuteAsync(sqlCommand);
                }
            }
        }
    }
}
