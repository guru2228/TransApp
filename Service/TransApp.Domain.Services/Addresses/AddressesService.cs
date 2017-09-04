using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Addresses;
using TransApp.Framework.Filter;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Domain.Services.Addresses
{
    public class AddressesService : IAddressesService
    {
        private readonly IUnitOfWork _unitOfWork;

        private readonly ICacheService _cacheService;

        public AddressesService(IUnitOfWork unitOfWork, ICacheService cacheService)
        {
            _unitOfWork = unitOfWork;
            _cacheService = cacheService;
        }

        public async Task<AddressModel> Get(int addressId)
        {
            var currentAdrress =
                await _unitOfWork.AddressesRepository.GetFullAddressById(addressId);
            if (currentAdrress != null)
            {
                AddressModel result = new AddressModel
                {
                    Id = currentAdrress.Address.Id,
                    Name = currentAdrress.Address.Name,
                    CustomerId = currentAdrress.Address.CustomerId,
                    ContactPerson = currentAdrress.Address.ContactPerson,
                    Email = currentAdrress.Address.Email,
                    Phone = currentAdrress.Address.Phone,
                    Remark = currentAdrress.Address.Remark,
                    UserIdCreated = currentAdrress.Address.UserIdCreated,
                    DateCreated = currentAdrress.Address.DateCreated,
                    UserIdModified = currentAdrress.Address.UserIdModified,
                    DateModified = currentAdrress.Address.DateModified,

                };
                result.Location = new AddressLocationModel
                {
                    City = currentAdrress.Address.City,
                    CityCode = currentAdrress.Address.CityCode,
                    Country = currentAdrress.Address.Country,
                    CountryCode = currentAdrress.Address.CountryCode,
                    Latitude = currentAdrress.Address.Latitude ?? 0,
                    Longitude = currentAdrress.Address.Longitude ?? 0,
                    Street = currentAdrress.Address.Street1,
                    StreetNumber = currentAdrress.Address.StreetNumber,
                    StateCode = currentAdrress.Address.StateCode,
                };
                if (currentAdrress.Address.UserIdCreated.HasValue)
                {
                    var userCreated =
                        _unitOfWork.ApplicationUserRepository.Get(currentAdrress.Address.UserIdCreated.Value);
                    result.UserCreated = userCreated.FirstName + ' ' + userCreated.LastName;
                }
                if (currentAdrress.Address.UserIdModified.HasValue)
                {
                    var userModified =
                        _unitOfWork.ApplicationUserRepository.Get(currentAdrress.Address.UserIdModified.Value);
                    result.UserModified = userModified.FirstName + ' ' + userModified.LastName;
                }
                result.Availabilities =
                    Mapper.Map<List<AddressAvailability>, List<AddressAvailabilityModel>>(
                        currentAdrress.AddressAvailabilities);
                result.Facilities =
                    Mapper.Map<List<AddressFacility>, List<AddressFacilityModel>>(
                        currentAdrress.AddressFacilities);
                result.Requirements =
                    Mapper.Map<List<AddressRequirement>, List<AddressRequirementModel>>(
                        currentAdrress.AddressRequirements);
                result.Trucks =
                    Mapper.Map<List<AddressTruck>, List<AddressTruckModel>>(
                        currentAdrress.AddressTrucks);

                return result;

            }
            return new AddressModel();
        }

        public async Task<AddressModel> GetAddressFiltered(FilterAddress filter)
        {
            var currentAdrress =
                await _unitOfWork.AddressesRepository.GetFullAddressFiltered(filter);
            if (currentAdrress != null)
            {
                AddressModel result = new AddressModel
                {
                    Id = currentAdrress.Address.Id,
                    Name = currentAdrress.Address.Name,
                    CustomerId = currentAdrress.Address.CustomerId,
                    ContactPerson = currentAdrress.Address.ContactPerson,
                    Email = currentAdrress.Address.Email,
                    Phone = currentAdrress.Address.Phone,
                    Remark = currentAdrress.Address.Remark,
                    UserIdCreated = currentAdrress.Address.UserIdCreated,
                    DateCreated = currentAdrress.Address.DateCreated,
                    UserIdModified = currentAdrress.Address.UserIdModified,
                    DateModified = currentAdrress.Address.DateModified,

                };
                result.Location = new AddressLocationModel
                {
                    City = currentAdrress.Address.City,
                    CityCode = currentAdrress.Address.CityCode,
                    Country = currentAdrress.Address.Country,
                    CountryCode = currentAdrress.Address.CountryCode,
                    Latitude = currentAdrress.Address.Latitude ?? 0,
                    Longitude = currentAdrress.Address.Longitude ?? 0,
                    Street = currentAdrress.Address.Street1,
                    StreetNumber = currentAdrress.Address.StreetNumber,
                    StateCode= currentAdrress.Address.StateCode,
                };
                if (currentAdrress.Address.UserIdCreated.HasValue)
                {
                    var userCreated =
                        _unitOfWork.ApplicationUserRepository.Get(currentAdrress.Address.UserIdCreated.Value);
                    result.UserCreated = userCreated.FirstName + ' ' + userCreated.LastName;
                }
                if (currentAdrress.Address.UserIdModified.HasValue)
                {
                    var userModified =
                        _unitOfWork.ApplicationUserRepository.Get(currentAdrress.Address.UserIdModified.Value);
                    result.UserModified = userModified.FirstName + ' ' + userModified.LastName;
                }
                result.Availabilities =
                    Mapper.Map<List<AddressAvailability>, List<AddressAvailabilityModel>>(
                        currentAdrress.AddressAvailabilities);
                result.Facilities =
                    Mapper.Map<List<AddressFacility>, List<AddressFacilityModel>>(
                        currentAdrress.AddressFacilities);
                result.Requirements =
                    Mapper.Map<List<AddressRequirement>, List<AddressRequirementModel>>(
                        currentAdrress.AddressRequirements);
                result.Trucks =
                    Mapper.Map<List<AddressTruck>, List<AddressTruckModel>>(
                        currentAdrress.AddressTrucks);

                return result;

            }
            return new AddressModel();
        }

        public async Task SaveAddress(AddressModel currentAdrress)
        {
            if (currentAdrress == null)
            {
                return;
            }
            Address dest = new Address
            {
                Id = currentAdrress.Id,
                Name = currentAdrress.Name,
                CustomerId = currentAdrress.CustomerId,
                ContactPerson = currentAdrress.ContactPerson,
                Email = currentAdrress.Email,
                Phone = currentAdrress.Phone,
                Remark = currentAdrress.Remark,
                UserIdCreated = currentAdrress.UserIdCreated,
                DateCreated = currentAdrress.DateCreated,
                UserIdModified = currentAdrress.UserIdModified,
                DateModified = currentAdrress.DateModified,
                City = currentAdrress.Location.City,
                Country = currentAdrress.Location.Country,
                Latitude = currentAdrress.Location.Latitude,
                Longitude = currentAdrress.Location.Longitude,
                CityCode = currentAdrress.Location.CityCode,
                CountryCode = currentAdrress.Location.CountryCode,
                StateCode = currentAdrress.Location.StateCode,
                StreetNumber = currentAdrress.Location.StreetNumber
            };


            var availabilities =
                Mapper.Map<List<AddressAvailabilityModel>, List<AddressAvailability>>(
                    currentAdrress.Availabilities);
            var facilities =
                Mapper.Map<List<AddressFacilityModel>, List<AddressFacility>>(
                    currentAdrress.Facilities);
            var requirements =
                Mapper.Map<List<AddressRequirementModel>, List<AddressRequirement>>(
                    currentAdrress.Requirements);
            var trucks =
                Mapper.Map<List<AddressTruckModel>, List<AddressTruck>>(
                    currentAdrress.Trucks);

            var transaction = _unitOfWork.BeginTransaction();
            await _unitOfWork.AddressesRepository.SaveAddress(dest, transaction);
            if (availabilities != null)
            {
                List<AddressAvailability> currentAddressAvailabilities = availabilities;
                foreach (AddressAvailability aAvailability in currentAddressAvailabilities)
                {
                    if (aAvailability.Id <= 0)
                    {
                        aAvailability.AddressId = dest.Id;
                        await _unitOfWork.AddressAvailabilitiesRepository.AddAsync(aAvailability, transaction);
                    }
                    else
                    {
                        await _unitOfWork.AddressAvailabilitiesRepository.UpdateAsync(aAvailability, transaction);
                    }
                }
            }
            if (facilities != null)
            {
                List<AddressFacility> currentAddressFacilities = facilities;
                foreach (AddressFacility aFacility in currentAddressFacilities)
                {
                    if (aFacility.Id <= 0)
                    {
                        aFacility.AddressId = dest.Id;
                        await _unitOfWork.AddressFacilityRepository.AddAsync(aFacility, transaction);
                    }
                    else
                    {
                        await _unitOfWork.AddressFacilityRepository.UpdateAsync(aFacility, transaction);
                    }
                }
            }
            if (requirements != null)
            {
                List<AddressRequirement> currentAddressRequirements = requirements;
                foreach (AddressRequirement aRequirement in currentAddressRequirements)
                {
                    if (aRequirement.Id <= 0)
                    {
                        aRequirement.AddressId = dest.Id;
                        await _unitOfWork.AddressRequirementRepository.AddAsync(aRequirement, transaction);
                    }
                    else
                    {
                        await _unitOfWork.AddressRequirementRepository.UpdateAsync(aRequirement, transaction);
                    }
                }
            }
            if (trucks != null)
            {
                List<AddressTruck> currentAddressTrucks = trucks;
                foreach (AddressTruck aTruck in currentAddressTrucks)
                {
                    if (aTruck.Id <= 0)
                    {
                        aTruck.AddressId = dest.Id;
                        await _unitOfWork.AddressTruckRepository.AddAsync(aTruck, transaction);
                    }
                    else
                    {
                        await _unitOfWork.AddressTruckRepository.UpdateAsync(aTruck, transaction);
                    }
                }
            }

            _unitOfWork.Commit(transaction);
        }
    }
}
