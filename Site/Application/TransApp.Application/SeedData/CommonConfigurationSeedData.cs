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

                //Create Truck Seed
                await CreateTruck("VAN", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Van (<8m)",
                    NL = "Van (<8m)",
                    FR = "Van (<8m)"
                });
                await CreateTruck("DIS", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Distri (8m)",
                    NL = "Distri (8m)",
                    FR = "Distri (8m)"
                });

                await CreateTruck("TAU", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Tautliner (13,6m)",
                    NL = "Tautliner (13,6m)",
                    FR = "Tautliner (13,6m)"
                });

                await CreateTruck("BOX", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Boxtrailer (13,6m)",
                    NL = "Boxtrailer (13,6m)",
                    FR = "Boxtrailer (13,6m)"
                });

                //Create Requirements
                await CreateRequirement("FRI", "local_shipping", 10, new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Frigo",
                    NL = "Frigo",
                    FR = "Frigo"
                });
                await CreateRequirement("HYD", "local_shipping", 100, new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Hydraulic lift",
                    NL = "Hydraulic lift",
                    FR = "Hydraulic lift"
                });

                await CreateRequirement("ALL", "local_shipping", 500, new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "All risk insurance",
                    NL = "All risk insurance",
                    FR = "All risk insurance"
                });

                await CreateRequirement("ADR", "local_shipping", 200, new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "ADR",
                    NL = "ADR",
                    FR = "ADR"
                });

                //Create Shipment Status
                await CreateShipmentStatus("UAS", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Unassigned",
                    NL = "Unassigned",
                    FR = "Unassigned"
                });
                await CreateShipmentStatus("ASS", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Assigned",
                    NL = "Assigned",
                    FR = "Assigned"
                });

                await CreateShipmentStatus("CON", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Confirmed",
                    NL = "Confirmed",
                    FR = "Confirmed"
                });

                await CreateShipmentStatus("OPEN", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Open Market",
                    NL = "Open Market",
                    FR = "Open Market"
                });

                //Create Shipment Status
                await CreatepackType("Box", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Box",
                    NL = "Box",
                    FR = "Box",

                }, false);
                await CreatepackType("PAL", "local_shipping", new Dictionary
                {
                    DateCreated = DateTime.Now,
                    UserIdCreated = 1,
                    EN = "Pallet",
                    NL = "Pallet",
                    FR = "Pallet"
                }, true);
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

        /// <summary>
        /// CreateTruck
        /// </summary>
        /// <param name="code"></param>
        /// <param name="iconName"></param>
        /// <param name="dictionary"></param>
        /// <param name="transaction"></param>
        /// <returns></returns>
        private static async Task<int> CreateTruck(string code, string iconName, Dictionary dictionary,
          IDbTransaction transaction = null)
        {
            var item = _unitOfWork.TruckRepository.Get("Code='" + code + "'");
            if (item == null)
            {
                var dictionaryId =
                    await _unitOfWork.DictionaryRepository.AddAsync(dictionary, transaction, true, false);
                item = new Truck
                {
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    UserIdCreated = 1000,
                    Code = code,
                    IconName = iconName,
                    DictionaryId = dictionaryId
                };
                return await _unitOfWork.TruckRepository.AddAsync(item);
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
            await _unitOfWork.TruckRepository.UpdateAsync(item, transaction);
            return item.Id;
        }


        /// <summary>
        /// CreateShipmentStatus
        /// </summary>
        /// <param name="code"></param>
        /// <param name="iconName"></param>
        /// <param name="dictionary"></param>
        /// <param name="transaction"></param>
        /// <returns></returns>
        private static async Task<int> CreateShipmentStatus(string code, string iconName, Dictionary dictionary,
         IDbTransaction transaction = null)
        {
            var item = _unitOfWork.ShipmentStatusRepository.Get("Code='" + code + "'");
            if (item == null)
            {
                var dictionaryId =
                    await _unitOfWork.DictionaryRepository.AddAsync(dictionary, transaction, true, false);
                item = new ShipmentStatus
                {
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    UserIdCreated = 1000,
                    Code = code,
                    DictionaryId = dictionaryId
                };
                return await _unitOfWork.ShipmentStatusRepository.AddAsync(item);
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
            await _unitOfWork.ShipmentStatusRepository.UpdateAsync(item, transaction);
            return item.Id;
        }

        /// <summary>
        /// CreateRequirement
        /// </summary>
        /// <param name="code"></param>
        /// <param name="iconName"></param>
        /// <param name="dictionary"></param>
        /// <param name="insurance"></param>
        /// <param name="transaction"></param>
        /// <returns></returns>
        private static async Task<int> CreateRequirement(string code, string iconName,decimal insurance, Dictionary dictionary,
        IDbTransaction transaction = null)
        {
            var item = _unitOfWork.RequirementRepository.Get("Code='" + code + "'");
            if (item == null)
            {
                var dictionaryId =
                    await _unitOfWork.DictionaryRepository.AddAsync(dictionary, transaction, true, false);
                item = new Requirement
                {
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    UserIdCreated = 1000,
                    IconName = iconName,
                    Insurance = insurance,
                    Code = code,
                    DictionaryId = dictionaryId
                };
                return await _unitOfWork.RequirementRepository.AddAsync(item);
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
            await _unitOfWork.RequirementRepository.UpdateAsync(item, transaction);
            return item.Id;
        }

        /// <summary>
        /// CreatepackType
        /// </summary>
        /// <param name="code"></param>
        /// <param name="iconName"></param>
        /// <param name="dictionary"></param>
        /// <param name="transaction"></param>
        /// <returns></returns>
        private static async Task<int> CreatepackType(string code, string iconName, Dictionary dictionary,bool hasExtra,
       IDbTransaction transaction = null)
        {
            var item = _unitOfWork.PackTypeRepository.Get("Code='" + code + "'");
            if (item == null)
            {
                var dictionaryId =
                    await _unitOfWork.DictionaryRepository.AddAsync(dictionary, transaction, true, false);
                item = new PackType
                {
                    DateCreated = DateTime.Now,
                    DateModified = DateTime.Now,
                    UserIdCreated = 1000,
                    Code = code,
                    HasExtra = hasExtra,
                    DictionaryId = dictionaryId
                };
                return await _unitOfWork.PackTypeRepository.AddAsync(item);
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
            await _unitOfWork.PackTypeRepository.UpdateAsync(item, transaction);
            return item.Id;
        }
    }
}
