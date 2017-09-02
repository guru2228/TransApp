using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using TransApp.DataModel.Dto;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Application.SeedData
{
    public static class LocalizationSeedDataService
    {
        private static IUnitOfWork _unitOfWork;
        private static List<PublicTranslationResource> _applicationTranslations;
        private static List<ModuleTranslationResource> _moduleTranslations;

        /// <summary>
        /// SeedData
        /// </summary>
        /// <param name="scopeFactory"></param>
        public static void SeedDataTranslations( this IServiceScopeFactory scopeFactory)
        {
            using (var serviceScope = scopeFactory.CreateScope())
            {
                _unitOfWork = serviceScope.ServiceProvider.GetService<IUnitOfWork>();

                _applicationTranslations = _unitOfWork.PublicTranslationResourceRepository.GetAll().ToList();

                _moduleTranslations = _unitOfWork.ModuleTranslationResourceRepository.GetAll().ToList();

                AddApplicationTranslations();

                AddModuleTranslationsKeys();

            }
        }

        private static void AddApplicationTranslations()
        {
            AddApplicationTranslation("GenericErrorMessage", "An error occurred contact your administrator!");
            AddApplicationTranslation("LabelSuccessfullySaved", "Successfully saved");
            AddApplicationTranslation("LinkGoBack", "Go back");
            
            AddApplicationTranslation("ButtonCloseText", "CLOSE");

            AddApplicationTranslation("Paging.LabelCountInfo", "Showing {0} to {1} of {2} entries");
            AddApplicationTranslation("Paging.LabelPrevious", "Previous");
            AddApplicationTranslation("Paging.LabelNext", "Next");
        }

        /// <summary>
        /// AddTimelineModuleTranslationsKeys
        /// </summary>
        private static void AddModuleTranslationsKeys()
        {
            var modulePrefix = ""; //ApplicationSettings.ApplicationSettings.TimelineModuleName;
            //// timeline matrix translations
            AddModuleTranslation(modulePrefix + ".test", "test");
        }

        /// <summary>
        /// AddModuleTranslation
        /// </summary>
        /// <param name="keyString"></param>
        /// <param name="en"></param>
        /// <param name="nl"></param>
        /// <param name="fr"></param>
        /// <param name="de"></param>
        /// <param name="ro"></param>
        private static void AddModuleTranslation(string keyString, string en, string nl = null, string fr = null, string de = null, string ro = null)
        {
            var translation =_moduleTranslations.Find(
                item => item.KeyString == keyString);

            if (translation == null)
            {
                _unitOfWork.ModuleTranslationResourceRepository.Add(new ModuleTranslationResource()
                {
                    KeyString = keyString,
                    En = en,
                    Nl = nl,
                    Fr = fr,
                    De = de,
                    Ro = ro,
                    UserIdCreated = 1000,
                    DateCreated = DateTime.Now
                });
            }
            else
            {
                if (translation.En != en)
                {
                    translation.En = en;
                }

                //if (!string.IsNullOrEmpty(translation.Nl) && translation.Nl != nl)
                //{
                //    translation.Nl = nl;
                //}

                //if (!string.IsNullOrEmpty(translation.Fr) && translation.Fr != fr)
                //{
                //    translation.Fr = fr;
                //}

                //if (!string.IsNullOrEmpty(translation.De) && translation.De != de)
                //{
                //    translation.De = de;
                //}

                //if (!string.IsNullOrEmpty(translation.Ro) && translation.Ro != ro)
                //{
                //    translation.Ro = ro;
                //}

                translation.UserIdModified = 1000;
                translation.DateModified = DateTime.Now;
                _unitOfWork.ModuleTranslationResourceRepository.Update(translation);
            }
        }

        /// <summary>
        /// AddApplicationTranslation
        /// </summary>
        /// <param name="keyString"></param>
        /// <param name="en"></param>
        /// <param name="nl"></param>
        /// <param name="fr"></param>
        /// <param name="de"></param>
        /// <param name="ro"></param>
        private static void AddApplicationTranslation(string keyString, string en, string nl = null, string fr = null, string de = null, string ro = null)
        {
            var translation = _applicationTranslations.Find(
                item => item.KeyString == keyString);

            if (translation == null)
            {
                _unitOfWork.PublicTranslationResourceRepository.Add(new PublicTranslationResource()
                {
                    KeyString = keyString,
                    En = en,
                    Nl = nl,
                    Fr = fr,
                    De = de,
                    Ro = ro,
                    UserIdCreated = 1000,
                    DateCreated = DateTime.Now
                });
            }
            else
            {
                if (translation.En != en)
                {
                    translation.En = en;
                }

                //if (!string.IsNullOrEmpty(translation.Nl) && translation.Nl != nl)
                //{
                //    translation.Nl = nl;
                //}

                //if (!string.IsNullOrEmpty(translation.Fr) && translation.Fr != fr)
                //{
                //    translation.Fr = fr;
                //}

                //if (!string.IsNullOrEmpty(translation.De) && translation.De != de)
                //{
                //    translation.De = de;
                //}

                //if (!string.IsNullOrEmpty(translation.Ro) && translation.Ro != ro)
                //{
                //    translation.Ro = ro;
                //}
                translation.UserIdModified = 1000;
                translation.DateModified = DateTime.Now;
                _unitOfWork.PublicTranslationResourceRepository.Update(translation);
            }
        }
    }
}
