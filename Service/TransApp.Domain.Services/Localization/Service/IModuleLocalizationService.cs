using System.Collections.Generic;
using System.Threading.Tasks;
using Trustteam.Application.Core.Localization.Model;

namespace TransApp.Domain.Services.Localization.Service
{
    /// <summary>
    /// ILocalizationService
    /// </summary>
    public interface IModuleLocalizationService
    {
        /// <summary>
        /// Get translations
        /// </summary>
        /// <param name="modulePrefix"></param>
        /// <param name="keyString"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        Task<TranslationResource> GetModuleTranslationByKeyString(string modulePrefix, string keyString,
            string language);

        /// <summary>
        /// Get translations by prefix
        /// </summary>
        /// <param name="modulePrefix"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        Task<IEnumerable<TranslationResource>> GetTranslationsForModule(string modulePrefix, string language);
    }
}
