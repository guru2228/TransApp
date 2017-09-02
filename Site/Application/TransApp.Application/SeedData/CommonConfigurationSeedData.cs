using System;
using System.Data;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using TransApp.DataModel.Dto;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Application.SeedData
{
    public static class CommonConfigurationSeedDataService
    {
        private static IUnitOfWork _unitOfWork;

        /// <summary>
        /// SeedData
        /// </summary>
        /// <param name="scopeFactory"></param>
        public static async void SeedDataCommonConfiguration(this IServiceScopeFactory scopeFactory)
        {
            using (var serviceScope = scopeFactory.CreateScope())
            {
                _unitOfWork = serviceScope.ServiceProvider.GetService<IUnitOfWork>();

                await CreateFacility("PLJ", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Pallet jack",
                    NL = "Pallet jack",
                    FR = "Pallet jack"
                });
                await CreateFacility("DCK", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Loading dock",
                    NL = "Loading dock",
                    FR = "Loading dock"
                });

                await CreateFacility("FKL", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Forklift",
                    NL = "Forklift",
                    FR = "Forklift"
                });

            }
        }

        /// <summary>
        /// Create facility
        /// </summary>
        /// <param name="code"></param>
        /// <param name="iconName"></param>
        /// <param name="dictionary"></param>
        /// <param name="transaction"></param>
        /// <returns></returns>
        private static async Task<int> CreateFacility(string code, string iconName, Dictionary dictionary,
            IDbTransaction transaction = null)
        {
            var item = _unitOfWork.FacilityRepository.Get("Code='" + code + "'");
            if (item == null)
            {
                var dictionaryId =
                    await _unitOfWork.DictionaryRepository.AddAsync(dictionary, transaction, true, false);
                item = new Facility
                {
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    UserIdCreated = 1000,
                    Code = code,
                    IconName = iconName,
                    DictionaryId = dictionaryId
                };
                return await _unitOfWork.FacilityRepository.AddAsync(item);
            }
            if (!item.DictionaryId.HasValue)
            {
                item.DictionaryId =
                    await _unitOfWork.DictionaryRepository.AddAsync(dictionary, transaction, true, false);
            }
            if (item.DictionaryId == null) return item.Id;
            var currentDictionary =
                await _unitOfWork.DictionaryRepository.GetAsync(item.DictionaryId.Value);
            dictionary.Id = currentDictionary.Id;
            dictionary.DateModified = DateTime.Now;
            await
                _unitOfWork.DictionaryRepository.UpdateAsync(dictionary, transaction, true, null, false);
            item.DictionaryId = dictionary.Id;
            await _unitOfWork.FacilityRepository.UpdateAsync(item, transaction);
            return item.Id;
        }
    }
}
