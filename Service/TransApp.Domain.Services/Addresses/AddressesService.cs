﻿using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.Core.Exceptions;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Addresses;
using TransApp.Domain.Common.Entity;
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

        public async Task<AddressModel> Get(int addressId, int? customerId =null)
        {
            var currentAdrress =
                await _unitOfWork.AddressesRepository.GetFullAddressById(addressId, customerId);
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
                    CommonAvailability = currentAdrress.Address.CommonAvailability,
                    State = currentAdrress.Address.StateInfo,
                    OpeningHours = currentAdrress.Address.OpeningHours
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
                    ZipCode = currentAdrress.Address.ZipCode
                };
                if (currentAdrress.Address.UserIdCreated.HasValue)
                {
                    var userCreated =
                        _unitOfWork.ApplicationUserRepository.Get(currentAdrress.Address.UserIdCreated.Value);
                    if (userCreated != null)
                    {
                        result.UserCreated = userCreated.FirstName + ' ' + userCreated.LastName;
                    }
                }
                if (currentAdrress.Address.UserIdModified.HasValue)
                {
                    var userModified =
                        _unitOfWork.ApplicationUserRepository.Get(currentAdrress.Address.UserIdModified.Value);
                    if (userModified != null)
                    {
                        result.UserModified = userModified.FirstName + ' ' + userModified.LastName;
                    }
                }
                if (currentAdrress.AddressAvailabilities != null)
                    result.Availabilities =
                        currentAdrress.AddressAvailabilities.Select(availability => new AvailabilityEntityModel
                        {
                            Id = availability.Id,
                            EntityId = availability.AddressId,
                            IsClosed = availability.IsClosed,
                            AmStart =
                                availability.AmStart.HasValue
                                    ? new DateTime(availability.AmStart.Value.Ticks).ToString("HH:mm")
                                    : string.Empty,
                            AmStop =
                                availability.AmStop.HasValue
                                    ? new DateTime(availability.AmStop.Value.Ticks).ToString("HH:mm")
                                    : string.Empty,
                            PmStart =
                                availability.PmStart.HasValue
                                    ? new DateTime(availability.PmStart.Value.Ticks).ToString("HH:mm")
                                    : string.Empty,
                            PmStop =
                                availability.PmStop.HasValue
                                    ? new DateTime(availability.PmStop.Value.Ticks).ToString("HH:mm")
                                    : string.Empty,
                            Day = availability.Day,
                            DateCreated = availability.DateCreated,
                            DateModified = availability.DateModified,
                            UserIdCreated = availability.UserIdCreated,
                            UserIdModified = availability.UserIdModified
                        }).ToList();

                result.Facilities =
                    Mapper.Map<List<AddressFacility>, List<FacilityEntityModel>>(
                        currentAdrress.AddressFacilities);
                result.Requirements =
                    Mapper.Map<List<AddressRequirement>, List<RequirementEntityModel>>(
                        currentAdrress.AddressRequirements);
                result.Trucks =
                    Mapper.Map<List<AddressTruck>, List<TruckEntityModel>>(
                        currentAdrress.AddressTrucks);

                return result;

            }
            return new AddressModel();
        }

        public async Task<List<AddressModel>> GetAll(FilterAddress filter)
        {
            var addresses =
                await _unitOfWork.AddressesRepository.GetAll(filter);
            List<AddressModel> result = new List<AddressModel>();
            if (addresses != null)
            {
                foreach (AddressSimpleDto currentAdrress in addresses)
                {
                    AddressModel address = new AddressModel
                    {
                        Id = currentAdrress.Id,
                        Name = currentAdrress.Name,
                        CustomerId = currentAdrress.CustomerId,
                        ContactPerson = currentAdrress.ContactPerson,
                        Email = currentAdrress.Email,
                        Phone = currentAdrress.Phone,
                        Remark = currentAdrress.Remark,
                        Location = new AddressLocationModel
                        {
                            City = currentAdrress.City,
                            CityCode = currentAdrress.CityCode,
                            Country = currentAdrress.Country,
                            CountryCode = currentAdrress.CountryCode,
                            Latitude = currentAdrress.Latitude ?? 0,
                            Longitude = currentAdrress.Longitude ?? 0,
                            Street = currentAdrress.Street1,
                            StreetNumber = currentAdrress.StreetNumber,
                            StateCode = currentAdrress.StateCode,
                            ZipCode = currentAdrress.ZipCode
                        },

                        UserIdCreated = currentAdrress.UserIdCreated,
                        DateCreated = currentAdrress.DateCreated,
                        UserIdModified = currentAdrress.UserIdModified,
                        DateModified = currentAdrress.DateModified,
                        UserCreated = currentAdrress.UserCreated,
                        UserModified = currentAdrress.UserModified,
                        CommonAvailability = currentAdrress.CommonAvailability,
                        State = currentAdrress.StateInfo,
                        OpeningHours = currentAdrress.OpeningHours
                    };
                    result.Add(address);
                }
                return result;
            }
            return new List<AddressModel>();
        }

        public async Task<int> GetAllCount(FilterAddress filter)
        {
            return
                await _unitOfWork.AddressesRepository.GetAllCount(filter);
        }

        public async Task<int> SaveAddress(int userId, AddressModel currentAdrress)
        {
            if (currentAdrress == null)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Error on save, model is null");
            }

            var dest = new Address
            {
                Id = currentAdrress.Id,
                Name = currentAdrress.Name,
                CustomerId = currentAdrress.CustomerId,
                ContactPerson = currentAdrress.ContactPerson,
                Email = currentAdrress.Email,
                Phone = currentAdrress.Phone,
                Remark = currentAdrress.Remark,
                UserIdCreated = userId,
                DateCreated = currentAdrress.DateCreated,
                UserIdModified = currentAdrress.UserIdModified,
                DateModified = currentAdrress.DateModified,
                CommonAvailability = currentAdrress.CommonAvailability,
                City = currentAdrress.Location.City,
                Country = currentAdrress.Location.Country,
                Latitude = currentAdrress.Location.Latitude,
                Longitude = currentAdrress.Location.Longitude,
                CityCode = currentAdrress.Location.CityCode,
                CountryCode = currentAdrress.Location.CountryCode,
                StateCode = currentAdrress.Location.StateCode,
                StreetNumber = currentAdrress.Location.StreetNumber,
                ZipCode = currentAdrress.Location.ZipCode,
                Street1 = currentAdrress.Location.Street,
                Street2 = currentAdrress.Location.Street,
                StateInfo = currentAdrress.State,
                OpeningHours = currentAdrress.OpeningHours,
                ZipCodeNumeric = GetNumericZipCode(currentAdrress.Location.ZipCode)
            };

            var transaction = _unitOfWork.BeginTransaction();
            await _unitOfWork.AddressesRepository.SaveAddress(userId, dest, transaction);
            currentAdrress.Id = dest.Id;
            if (currentAdrress.Availabilities != null)
            {
                //// if all passed model has no id set, then clean existing availabilities
                if (currentAdrress.Availabilities.All(item => item.Id == -1))
                {
                    _unitOfWork.AddressAvailabilitiesRepository.Delete("AddressId=" + currentAdrress.Id, transaction);
                }

                foreach (var aAvailabilityModel in currentAdrress.Availabilities)
                {
                    var aAvailability = new AddressAvailability
                    {
                        Id = aAvailabilityModel.Id,
                        AddressId = aAvailabilityModel.EntityId,
                        Day = aAvailabilityModel.Day,
                        IsClosed = aAvailabilityModel.IsClosed,
                    };
                    if (!string.IsNullOrEmpty(aAvailabilityModel.AmStart))
                        aAvailability.AmStart = TimeSpan.Parse(aAvailabilityModel.AmStart.Length == 2 ? aAvailabilityModel.AmStart + ":00" : aAvailabilityModel.AmStart);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.AmStop))
                        aAvailability.AmStop = TimeSpan.Parse(aAvailabilityModel.AmStop.Length == 2 ? aAvailabilityModel.AmStop + ":00" : aAvailabilityModel.AmStop);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.PmStart))
                        aAvailability.PmStart = TimeSpan.Parse(aAvailabilityModel.PmStart.Length == 2 ? aAvailabilityModel.PmStart + ":00" : aAvailabilityModel.PmStart);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.PmStop))
                        aAvailability.PmStop = TimeSpan.Parse(aAvailabilityModel.PmStop.Length == 2 ? aAvailabilityModel.PmStop + ":00" : aAvailabilityModel.PmStop);
                    aAvailability.DateModified = DateTime.Now;
                    aAvailability.UserIdModified = userId;
                    if (aAvailability.Id <= 0)
                    {
                        if (currentAdrress.CommonAvailability)
                        {
                            aAvailability.Day = 0;
                        }
                        aAvailability.DateCreated = DateTime.Now;
                        aAvailability.UserIdCreated = userId;
                        aAvailability.AddressId = dest.Id;
                        aAvailabilityModel.Id =
                            await _unitOfWork.AddressAvailabilitiesRepository.AddAsync(aAvailability, transaction);
                    }
                    else
                    {
                        await _unitOfWork.AddressAvailabilitiesRepository.UpdateAsync(aAvailability, transaction);
                    }
                }
            }

            if (currentAdrress.Facilities != null)
            {
                foreach (FacilityEntityModel aFacilityModel in currentAdrress.Facilities)
                {
                    AddressFacility aFacility = Mapper.Map<FacilityEntityModel, AddressFacility>(aFacilityModel);
                    if (aFacility != null)
                    {
                        aFacility.DateModified = DateTime.Now;
                        aFacility.UserIdModified = userId;
                        if (aFacility.Id <= 0)
                        {
                            aFacility.DateCreated = DateTime.Now;
                            aFacility.AddressId = dest.Id;
                            aFacility.UserIdCreated = userId;
                            aFacilityModel.Id =
                                await _unitOfWork.AddressFacilityRepository.AddAsync(aFacility, transaction);
                        }
                        else
                        {
                            await _unitOfWork.AddressFacilityRepository.UpdateAsync(aFacility, transaction);
                        }
                    }
                }
            }
            if (currentAdrress.Requirements != null)
            {
                foreach (RequirementEntityModel aRequirementModel in currentAdrress.Requirements)
                {
                    AddressRequirement aRequirement =
                        Mapper.Map<RequirementEntityModel, AddressRequirement>(aRequirementModel);
                    if (aRequirement != null)
                    {
                        aRequirement.DateModified = DateTime.Now;
                        aRequirement.UserIdModified = userId;
                        if (aRequirement.Id <= 0)
                        {
                            aRequirement.DateCreated = DateTime.Now;
                            aRequirement.AddressId = dest.Id;
                            aRequirement.UserIdCreated = userId;
                            aRequirementModel.Id =
                                await _unitOfWork.AddressRequirementRepository.AddAsync(aRequirement, transaction);
                        }
                        else
                        {
                            await _unitOfWork.AddressRequirementRepository.UpdateAsync(aRequirement, transaction);
                        }
                    }
                }
            }
            if (currentAdrress.Trucks != null)
            {
                foreach (TruckEntityModel aTruckModel in currentAdrress.Trucks)
                {
                    AddressTruck aTruck = Mapper.Map<TruckEntityModel, AddressTruck>(aTruckModel);
                    if (aTruck != null)
                    {
                        aTruck.DateModified = DateTime.Now;
                        aTruck.UserIdModified = userId;
                        if (aTruck.Id <= 0)
                        {
                            aTruck.DateCreated = DateTime.Now;
                            aTruck.AddressId = dest.Id;
                            aTruck.UserIdCreated = userId;
                            aTruckModel.Id = await _unitOfWork.AddressTruckRepository.AddAsync(aTruck, transaction);
                        }
                        else
                        {
                            await _unitOfWork.AddressTruckRepository.UpdateAsync(aTruck, transaction);
                        }
                    }
                }
            }

            _unitOfWork.Commit(transaction);

            return currentAdrress.Id;
        }

        private int? GetNumericZipCode(string locationZipCode)
        {
            string result= new string(locationZipCode.Where(c => Char.IsDigit(c)).ToArray());
            return Convert.ToInt32(result);
        }

        public async Task DeleteAddress(AddressModel currentAdrress)
        {
            if (currentAdrress != null)
            {

                Address dest = new Address
                {
                    Id = currentAdrress.Id
                };

                DbTransaction transaction = null;//_unitOfWork.BeginTransaction();
                if (currentAdrress.Availabilities != null)
                {
                    foreach (AvailabilityEntityModel aAvailabilityModel in currentAdrress.Availabilities)
                    {
                        AddressAvailability aAvailability =
                            Mapper.Map<AvailabilityEntityModel, AddressAvailability>(aAvailabilityModel);
                        if (aAvailability != null)
                        {
                            await _unitOfWork.AddressAvailabilitiesRepository.DeleteAsync(aAvailability, transaction);
                        }
                    }
                }
                if (currentAdrress.Facilities != null)
                {
                    foreach (FacilityEntityModel aFacilityModel in currentAdrress.Facilities)
                    {
                        AddressFacility aFacility = Mapper.Map<FacilityEntityModel, AddressFacility>(aFacilityModel);
                        if (aFacility != null)
                        {
                            await _unitOfWork.AddressFacilityRepository.DeleteAsync(aFacility, transaction);
                        }
                    }
                }
                if (currentAdrress.Requirements != null)
                {
                    foreach (RequirementEntityModel aRequirementModel in currentAdrress.Requirements)
                    {
                        AddressRequirement aRequirement =
                            Mapper.Map<RequirementEntityModel, AddressRequirement>(aRequirementModel);
                        if (aRequirement != null)
                        {
                            await _unitOfWork.AddressRequirementRepository.DeleteAsync(aRequirement, transaction);
                        }
                    }
                }
                if (currentAdrress.Trucks != null)
                {
                    foreach (TruckEntityModel aTruckModel in currentAdrress.Trucks)
                    {
                        AddressTruck aTruck = Mapper.Map<TruckEntityModel, AddressTruck>(aTruckModel);
                        if (aTruck != null)
                        {
                            await _unitOfWork.AddressTruckRepository.DeleteAsync(aTruck, transaction);
                        }
                    }
                }
                await _unitOfWork.AddressesRepository.DeleteAddress(dest, transaction);
              //  _unitOfWork.Commit(transaction);
            }
        }
    }
}



