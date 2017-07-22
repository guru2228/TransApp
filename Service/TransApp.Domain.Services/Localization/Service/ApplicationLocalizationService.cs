using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.Core.CacheService;
using TransApp.DataModel.Dto;
using TransApp.Domain.Services.Localization.Utils;
using TransApp.Persistence.UnitOfWork;
using Trustteam.Application.Core.Localization.Model;

namespace TransApp.Domain.Services.Localization.Service
{
    /// <summary>
    /// ILocalizationService
    /// </summary>
    public class ApplicationLocalizationService : IApplicationLocalizationService
    {
        private readonly IUnitOfWork _unitOfWork;

        private readonly ICacheService _cacheService;

        public ApplicationLocalizationService(IUnitOfWork unitOfWork, ICacheService cacheService)
        {
            _unitOfWork = unitOfWork;
            _cacheService = cacheService;
        }

        /// <summary>
        /// Get translations
        /// </summary>
        /// <param name="keyString"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        public async Task<TranslationResource> GetApplicationTranslationByKeyString(string keyString,
            string language)
        {
            var translations = _cacheService.Get("applicationTranslations_"+ language) as IEnumerable<TranslationResource>;
            PublicTranslationResource translation = null;
            if (translations == null)
            {
                translation =
                    (await _unitOfWork.PublicTranslationResourceRepository.GetAllAsync()).FirstOrDefault(item => item.KeyString == keyString);
            }
            else
            {
                //var translations = _memoryCache.get
                return translations.FirstOrDefault(item => item.KeyString == keyString);
            }

            return new TranslationResource
            {
                KeyString = translation.KeyString,
                Value = translation.GetLanguageVal(language)
            };
        }

        /// <summary>
        /// Get translations
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        public async Task<IEnumerable<TranslationResource>> GetApplicationTranslations(string language)
        {
            var translations = _cacheService.Get("applicationTranslations_" + language) ;
            if (translations == null)
            {
                var dbresult = await _unitOfWork.PublicTranslationResourceRepository.GetAllAsync();

                var result = dbresult.Select(dtoItem => new TranslationResource
                {
                    KeyString = dtoItem.KeyString,
                    Value = dtoItem.GetLanguageVal(language)
                }).ToList();

                _cacheService.Add("applicationTranslations_" + language, result);

                return result;
            }
            return (IEnumerable<TranslationResource>)translations;
        }
    }
}
