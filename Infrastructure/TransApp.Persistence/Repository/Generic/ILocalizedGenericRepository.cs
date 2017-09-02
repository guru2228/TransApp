using System.Collections.Generic;
using System.Threading.Tasks;

namespace TransApp.Persistence.Repository.Generic
{
   public interface ILocalizedGenericRepository<TEntity>: IGenericRepository<TEntity> where TEntity : class
    {
        /// <summary>
        /// Get item by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        TEntity GetLocalized(int id);

        /// <summary>
        /// Get item by id async
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<TEntity> GetAsyncLocalized(int id);

        /// <summary>
        /// Get all
        /// </summary>
        /// <returns></returns>
        IEnumerable<TEntity> GetAllLocalized();

        /// <summary>
        /// Get all async
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<TEntity>> GetAllAsyncLocalized();
    }
}
