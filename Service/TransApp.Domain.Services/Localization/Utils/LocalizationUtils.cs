using TransApp.DataModel.Dto;

namespace TransApp.Domain.Services.Localization.Utils
{
    public static class LocalizationUtils
    {
        /// <summary>
        /// GetLanguageVal
        /// </summary>
        /// <param name="item"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        public static string GetLanguageVal(this PublicTranslationResource item, string language)
        {
            var value = string.Empty;
            switch (language)
            {
                case "en":
                    value = item.En;
                    break;
                case "nl":
                    value = item.Nl;
                    break;
                case "de":
                    value = item.De;
                    break;
                case "fr":
                    value = item.Fr;
                    break;
                case "ro":
                    value = item.Ro;
                    break;
            }
            return string.IsNullOrEmpty(value)
                ? (language != "en" && !string.IsNullOrEmpty(item.En)
                    ? item.En
                    : string.Format("Module translation not found. Translation key: {0}", item.KeyString))
                : value;
        }

        /// <summary>
        /// GetLanguageVal
        /// </summary>
        /// <param name="item"></param>
        /// <param name="language"></param>
        /// <returns></returns>
        public static string GetLanguageVal(this ModuleTranslationResource item, string language)
        {
            var value = string.Empty;
            switch (language)
            {
                case "en":
                    value = item.En;
                    break;
                case "nl":
                    value = item.Nl;
                    break;
                case "de":
                    value = item.De;
                    break;
                case "fr":
                    value = item.Fr;
                    break;
                case "ro":
                    value = item.Ro;
                    break;
            }
            return string.IsNullOrEmpty(value)
                ? (language != "en" && !string.IsNullOrEmpty(item.En)
                    ? item.En
                    : string.Format("Module translation not found. Translation key: {0}", item.KeyString))
                : value;
        }
    }
}
