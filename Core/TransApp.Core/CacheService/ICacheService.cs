namespace TransApp.Core.CacheService
{
    public interface ICacheService
    {
        /// <summary>
        /// Add object to cache
        /// </summary>
        /// <param name="key"></param>
        /// <param name="cacheObject"></param>
        /// <param name="expirationMinutes"></param>
        void Add(string key, object cacheObject, int? expirationMinutes = null);

        /// <summary>
        /// Get object from cache
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        object Get(string key);

        /// <summary>
        /// Remove object from cache
        /// </summary>
        /// <param name="key"></param>
        void Remove(string key);
    }
}