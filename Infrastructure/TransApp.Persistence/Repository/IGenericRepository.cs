using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace TransApp.Persistence.Repository
{
    public interface IGenericRepository<TEntity> where TEntity : class
    {
        /// <summary>
        /// Get item by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        TEntity Get(int id);

        /// <summary>
        /// Get item by id async
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<TEntity> GetAsync(int id);

        /// <summary>
        /// Get item by id
        /// </summary>
        /// <param name="field"></param>
        /// <param name="operation"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        TEntity Get(string field, string operation, string value);

        /// <summary>
        /// Get item by id
        /// </summary>
        /// <param name="field"></param>
        /// <param name="operation"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        Task<TEntity> GetAsync(string field, string operation, string value);

        /// <summary>
        /// Get all
        /// </summary>
        /// <returns></returns>
        IEnumerable<TEntity> GetAll();

        /// <summary>
        /// Get all async
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<TEntity>> GetAllAsync();

        /// <summary>
        /// Get all
        /// </summary>
        /// <returns></returns>
        IEnumerable<TEntity> GetAll(string predicate);

        /// <summary>
        /// Get all async
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<TEntity>> GetAllAsync(string predicate);

        /// <summary>
        /// Insert entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        int Add(TEntity entity, IDbTransaction transaction = null, bool excludeId = true);

        /// <summary>
        /// Insert entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        Task<int> AddAsync(TEntity entity, IDbTransaction transaction = null, bool excludeId = true);

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="columnsToUpdate"></param>
        void Update(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, List<string> columnsToUpdate = null);

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="columnsToUpdate"></param>
        Task UpdateAsync(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, List<string> columnsToUpdate = null);

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        void Delete(TEntity entity, IDbTransaction transaction = null);

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        Task DeleteAsync(TEntity entity, IDbTransaction transaction = null);
    }
}
