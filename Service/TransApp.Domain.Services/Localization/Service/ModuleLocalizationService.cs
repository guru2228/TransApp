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
    public class ModuleLocalizationService : IModuleLocalizationService
    {
        private readonly IUnitOfWork _unitOfWork;

        private readonly ICacheService _cacheService;

        public ModuleLocalizationService(IUnitOfWork unitOfWork, ICacheService cacheService)
        {
            _unitOfWork = unitOfWork;
            _cacheService = cacheService;
        }

        /// <summary>
        /// Get translations
        /// </summary>
        /// <param name="modulePrefix"></param>
        /// <param name="keyString"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        public async Task<TranslationResource> GetModuleTranslationByKeyString(string modulePrefix, string keyString,
            string language)
        {
            var translations = _cacheService.Get("moduleTranslations_" + modulePrefix + "_" + language.ToLower()) as IEnumerable<TranslationResource>;
            ModuleTranslationResource translation;
            if (translations == null)
            {
                translation =
                  (await  _unitOfWork.ModuleTranslationResourceRepository.GetAllAsync()).FirstOrDefault(item => item.KeyString == modulePrefix + "." + keyString);
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
        /// Get translations by prefix
        /// </summary>
        /// <param name="modulePrefix"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        public async Task<IEnumerable<TranslationResource>> GetTranslationsForModule(string modulePrefix, string language)
        {
            var translations = _cacheService.Get("moduleTranslations_" + modulePrefix + "_" + language.ToLower());
            if (translations != null) return (IEnumerable<TranslationResource>)translations;
            var result = (await _unitOfWork.ModuleTranslationResourceRepository.GetAllAsync()).Where(item => item.KeyString.StartsWith(modulePrefix));

            var resourcesList = new List<TranslationResource>();
            foreach (var dtoItem in result)
            {
                var resourceString = new TranslationResource
                {
                    KeyString = dtoItem.KeyString.Replace(modulePrefix + ".", string.Empty),
                    Value = dtoItem.GetLanguageVal(language.ToLower())
                };
                _cacheService.Add("moduleTranslations_" + modulePrefix + "_" + language.ToLower(), resourcesList);
                resourcesList.Add(resourceString);
            }

            return resourcesList;
        }
    }
}
