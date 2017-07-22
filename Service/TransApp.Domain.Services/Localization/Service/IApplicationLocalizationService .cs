using System.Collections.Generic;
using System.Threading.Tasks;
using Trustteam.Application.Core.Localization.Model;

namespace TransApp.Domain.Services.Localization.Service
{
    /// <summary>
    /// ILocalizationService
    /// </summary>
    public interface IApplicationLocalizationService
    {
        /// <summary>
        /// GetApplicationTranslationByKeyString
        /// </summary>
        /// <param name="keyString"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        Task<TranslationResource> GetApplicationTranslationByKeyString(string keyString,
            string language);

        /// <summary>
        /// GetApplicationTranslations
        /// </summary>
        /// <param name="language"></param>
        /// <returns></returns>
        Task<IEnumerable<TranslationResource>> GetApplicationTranslations(string language);
    }
}
