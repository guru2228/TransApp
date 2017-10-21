using System;
using Microsoft.Extensions.Caching.Memory;

namespace TransApp.Core.CacheService
{
    public class CacheService : ICacheService
    {
        private readonly IMemoryCache _cacheService;

        public CacheService(IMemoryCache cacheService)
        {
            _cacheService = cacheService;
        }


        /// <summary>
        /// Add object to cache
        /// </summary>
        /// <param name="key"></param>
        /// <param name="cacheObject"></param>
        /// <param name="expirationMinutes"></param>
        public void Add(string key, object cacheObject, int? expirationMinutes = null)
        {
            if (_cacheService != null)
            {
                if (expirationMinutes.HasValue)
                {
                    _cacheService.Set(key, cacheObject,
                        new MemoryCacheEntryOptions().SetAbsoluteExpiration(TimeSpan.FromMinutes(expirationMinutes.Value)));
                }
                else
                {
                    _cacheService.Set(key, cacheObject, DateTimeOffset.MaxValue);
                }
            }
        }

        /// <summary>
        /// Get object from cache
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public object Get(string key)
        {
            object returnedCache = null;

            _cacheService.TryGetValue(key, out returnedCache);
            return returnedCache;
        }

        /// <summary>
        /// Remove object from cache
        /// </summary>
        /// <param name="key"></param>
        public void Remove(string key)
        {
            _cacheService?.Remove(key);
        }


    }
}
