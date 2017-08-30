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
                return Mapper.Map<AddressDto, AddressModel>(currentAdrress);
                //AddressModel result = new AddressModel
                //{
                //    Id = currentAdrress.Id,
                //    Name = currentAdrress.Name,
                //    Street1 = currentAdrress.Street1
                //};
                //if (currentAdrress.AddressAvailabilities != null)
                //{
                //    result.Availabilities = new List<AddressAvailabilityModel>();
                //    foreach (DataModel.Dto.AddressAvailabilities addressA in currentAdrress.AddressAvailabilities)
                //    {
                //        AddressAvailabilityModel a = new AddressAvailabilityModel
                //        {
                //            Id = addressA.Id
                //        };
                //        result.Availabilities.Add(a);
                //    }
                //}
                //return result;
            }
            return new AddressModel();
        }

        public async Task<AddressModel> GetAddressFiltered(FilterAddress filter)
        {
            var currentAdrress =
                await _unitOfWork.AddressesRepository.GetFullAddressFiltered(filter);
            if (currentAdrress != null)
            {
                return Mapper.Map<AddressDto, AddressModel>(currentAdrress);
            }
            return new AddressModel();
        }

        public async Task SaveAddress(AddressModel address)
        {
            var dest = Mapper.Map<AddressModel, AddressDto>(address);
            var transaction = _unitOfWork.BeginTransaction();
            await _unitOfWork.AddressesRepository.SaveAddress(dest.Address, transaction);
            if (dest.AddressAvailabilities != null)
            {
                List<AddressAvailability> currentAddressAvailabilities = dest.AddressAvailabilities;
                foreach (AddressAvailability aAvailability in currentAddressAvailabilities)
                {
                    if (aAvailability.Id <= 0)
                    {
                        aAvailability.AddressId = dest.Address.Id;
                        await _unitOfWork.AddressAvailabilitiesRepository.AddAsync(aAvailability, transaction);
                    }
                    else
                    {
                        await _unitOfWork.AddressAvailabilitiesRepository.UpdateAsync(aAvailability, transaction);
                    }
                }
            }
            if (dest.AddressFacilities != null)
            {
                List<AddressFacility> currentAddressFacilities = dest.AddressFacilities;
                foreach (AddressFacility aFacility in currentAddressFacilities)
                {
                    if (aFacility.Id <= 0)
                    {
                        aFacility.AddressId = dest.Address.Id;
                        await _unitOfWork.AddressFacilityRepository.AddAsync(aFacility, transaction);
                    }
                    else
                    {
                        await _unitOfWork.AddressFacilityRepository.UpdateAsync(aFacility, transaction);
                    }
                }
            }
            if (dest.AddressRequirements != null)
            {
                List<AddressRequirement> currentAddressRequirements = dest.AddressRequirements;
                foreach (AddressRequirement aRequirement in currentAddressRequirements)
                {
                    if (aRequirement.Id <= 0)
                    {
                        aRequirement.AddressId = dest.Address.Id;
                        await _unitOfWork.AddressRequirementRepository.AddAsync(aRequirement, transaction);
                    }
                    else
                    {
                        await _unitOfWork.AddressRequirementRepository.UpdateAsync(aRequirement, transaction);
                    }
                }
            }
            if (dest.AddressTrucks != null)
            {
                List<AddressTruck> currentAddressTrucks = dest.AddressTrucks;
                foreach (AddressTruck aTruck in currentAddressTrucks)
                {
                    if (aTruck.Id <= 0)
                    {
                        aTruck.AddressId = dest.Address.Id;
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
