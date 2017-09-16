using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace TransApp.Persistence.Repository.Generic
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
        /// Get item by id
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        TEntity Get(string predicate);

        /// <summary>
        /// Get item by id async
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<TEntity> GetAsync(int id);


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
        /// <param name="excludeDictionaryData"></param>
        int Add(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, bool excludeDictionaryData = true);

        /// <summary>
        /// Insert entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="excludeDictionaryData"></param>
        Task<int> AddAsync(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, bool excludeDictionaryData = true);

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="columnsToUpdate"></param>
        /// <param name="excludeDictionaryData"></param>
        void Update(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, List<string> columnsToUpdate = null, bool excludeDictionaryData = true);

        /// <summary>
        /// Update entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        /// <param name="excludeId"></param>
        /// <param name="columnsToUpdate"></param>
        /// <param name="excludeDictionaryData"></param>
        Task UpdateAsync(TEntity entity, IDbTransaction transaction = null, bool excludeId = true, List<string> columnsToUpdate = null, bool excludeDictionaryData = true);

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        void Delete(TEntity entity, IDbTransaction transaction = null);

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="predicate"></param>
        /// <param name="transaction"></param>
        void Delete(string predicate, IDbTransaction transaction = null);

        /// <summary> 
        /// Delete entity
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="transaction"></param>
        Task DeleteAsync(TEntity entity, IDbTransaction transaction = null);
    }
}
