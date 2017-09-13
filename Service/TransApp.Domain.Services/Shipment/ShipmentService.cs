﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.Core.Exceptions;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Addresses;
using TransApp.Domain.Shipment;
using TransApp.Framework.Filter;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Domain.Services.Shipment
{
    public class ShipmentService : IShipmentService
    {
        private readonly IUnitOfWork _unitOfWork;

        private readonly ICacheService _cacheService;

        public ShipmentService(IUnitOfWork unitOfWork, ICacheService cacheService)
        {
            _unitOfWork = unitOfWork;
            _cacheService = cacheService;
        }

        public async Task<ShipmentModel> Get(int shipmentId)
        {
            var currentShipment =
                await _unitOfWork.ShipmentRepository.GetShipmentById(shipmentId);
            if (currentShipment != null)
            {
                ShipmentModel result = new ShipmentModel
                {
                    Id = currentShipment.Shipment.Id,
                    DeliveryDate = currentShipment.Shipment.DeliveryDate,
                    CustomerId = currentShipment.Shipment.CustomerId,
                    PickUpDate = currentShipment.Shipment.PickUpDate,
                    PoNumber = currentShipment.Shipment.PoNumber,
                    StatusId = currentShipment.Shipment.StatusId,
                    TotalPrice = currentShipment.Shipment.TotalPrice,
                    TotalQuatity = currentShipment.Shipment.TotalQuatity,
                    TotalVolume = currentShipment.Shipment.TotalVolume,
                    TotalWeight = currentShipment.Shipment.TotalWeight,
                    TransporterId = currentShipment.Shipment.TransporterId,
                    SenderRemark = currentShipment.Shipment.SenderRemark,
                    ReceiverAddressId = currentShipment.Shipment.ReceiverAddressId,
                    SenderPhone = currentShipment.Shipment.SenderPhone,
                    SenderContactPerson = currentShipment.Shipment.SenderContactPerson,
                    ReceiverContactPerson = currentShipment.Shipment.ReceiverContactPerson,
                    SenderAmStop = currentShipment.Shipment.SenderAmStop,
                    Reference = currentShipment.Shipment.Reference,
                    SenderPmStart = currentShipment.Shipment.SenderPmStart,
                    SenderAmStart = currentShipment.Shipment.SenderAmStart,
                    SenderPmStop = currentShipment.Shipment.SenderPmStop,
                    ReceiverAmStart = currentShipment.Shipment.ReceiverAmStart,
                    ReceiverPmStop = currentShipment.Shipment.ReceiverPmStop,
                    ReceiverRemark = currentShipment.Shipment.ReceiverRemark,
                    ReceiverAmStop = currentShipment.Shipment.ReceiverAmStop,
                    ReceiverPhone = currentShipment.Shipment.ReceiverPhone,
                    SenderAddressId = currentShipment.Shipment.SenderAddressId,
                    ReceiverPmStart = currentShipment.Shipment.ReceiverPmStart,
                    UserIdCreated = currentShipment.Shipment.UserIdCreated,
                    DateCreated = currentShipment.Shipment.DateCreated,
                    UserIdModified = currentShipment.Shipment.UserIdModified,
                    DateModified = currentShipment.Shipment.DateModified,

                };
               
                if (currentShipment.Shipment.UserIdCreated.HasValue)
                {
                    var userCreated =
                        _unitOfWork.ApplicationUserRepository.Get(currentShipment.Shipment.UserIdCreated.Value);
                    if (userCreated != null)
                    {
                        result.UserCreated = userCreated.FirstName + ' ' + userCreated.LastName;
                    }
                }
                if (currentShipment.Shipment.UserIdModified.HasValue)
                {
                    var userModified =
                        _unitOfWork.ApplicationUserRepository.Get(currentShipment.Shipment.UserIdModified.Value);
                    if (userModified != null)
                    {
                        result.UserModified = userModified.FirstName + ' ' + userModified.LastName;
                    }
                }
                result.ShipmentDetails =
                    Mapper.Map<List<ShipmentDetail>, List<ShipmentDetailModel>>(
                        currentShipment.ShipmentDetails);
                result.ShipmentReceiverFacilities =
                    Mapper.Map<List<ShipmentReceiverFacility>, List<ShipmentReceiverFacilityModel>>(
                        currentShipment.ShipmentReceiverFacilities);
                result.ShipmentTransporters =
                    Mapper.Map<List<ShipmentTransporter>, List<ShipmentTransporterModel>>(
                        currentShipment.ShipmentTransporters);
                result.ShipmentReceiverRequirements =
                    Mapper.Map<List<ShipmentReceiverRequirement>, List<ShipmentReceiverRequirementModel>>(
                        currentShipment.ShipmentReceiverRequirements);

                result.ShipmentReceiverTrucks =
                    Mapper.Map<List<ShipmentReceiverTruck>, List<ShipmentReceiverTruckModel>>(
                        currentShipment.ShipmentReceiverTrucks);
                result.ShipmentSenderFacilities =
                    Mapper.Map<List<ShipmentSenderFacility>, List<ShipmentSenderFacilityModel>>(
                        currentShipment.ShipmentSenderFacilities);
                result.ShipmentSenderRequirements =
                    Mapper.Map<List<ShipmentSenderRequirement>, List<ShipmentSenderRequirementModel>>(
                        currentShipment.ShipmentSenderRequirements);
                result.ShipmentSenderTrucks =
                   Mapper.Map<List<ShipmentSenderTruck>, List<ShipmentSenderTruckModel>>(
                       currentShipment.ShipmentSenderTrucks);

                return result;

            }
            return new ShipmentModel();
        }

        public async Task<List<ShipmentModel>> GetAll(FilterShipment filter)
        {
            var shipments =
                await _unitOfWork.ShipmentRepository.GetShipmentFiltered(filter);
            List<ShipmentModel> result = new List<ShipmentModel>();
            if (shipments != null)
            {
                foreach (ShipmentSimpleDto currentShipment in shipments)
                {
                    if (currentShipment != null)
                    {
                        ShipmentModel shipmentModel = new ShipmentModel
                        {
                            Id = currentShipment.Id,
                            DeliveryDate = currentShipment.DeliveryDate,
                            CustomerId = currentShipment.CustomerId,
                            PickUpDate = currentShipment.PickUpDate,
                            PoNumber = currentShipment.PoNumber,
                            StatusId = currentShipment.StatusId,
                            TotalPrice = currentShipment.TotalPrice,
                            TotalQuatity = currentShipment.TotalQuatity,
                            TotalVolume = currentShipment.TotalVolume,
                            TotalWeight = currentShipment.TotalWeight,
                            TransporterId = currentShipment.TransporterId,
                            SenderRemark = currentShipment.SenderRemark,
                            ReceiverAddressId = currentShipment.ReceiverAddressId,
                            SenderPhone = currentShipment.SenderPhone,
                            SenderContactPerson = currentShipment.SenderContactPerson,
                            ReceiverContactPerson = currentShipment.ReceiverContactPerson,
                            SenderAmStop = currentShipment.SenderAmStop,
                            Reference = currentShipment.Reference,
                            SenderPmStart = currentShipment.SenderPmStart,
                            SenderAmStart = currentShipment.SenderAmStart,
                            SenderPmStop = currentShipment.SenderPmStop,
                            ReceiverAmStart = currentShipment.ReceiverAmStart,
                            ReceiverPmStop = currentShipment.ReceiverPmStop,
                            ReceiverRemark = currentShipment.ReceiverRemark,
                            ReceiverAmStop = currentShipment.ReceiverAmStop,
                            ReceiverPhone = currentShipment.ReceiverPhone,
                            SenderAddressId = currentShipment.SenderAddressId,
                            ReceiverPmStart = currentShipment.ReceiverPmStart,
                            UserIdCreated = currentShipment.UserIdCreated,
                            DateCreated = currentShipment.DateCreated,
                            UserIdModified = currentShipment.UserIdModified,
                            DateModified = currentShipment.DateModified,
                            UserCreated = currentShipment.UserCreated,
                            UserModified = currentShipment.UserModified
                        };

                        result.Add(shipmentModel);
                    }
                    return result;
                }
            }
            return new List<ShipmentModel>();
        }

        public async Task<int> SaveShipment(int userId, ShipmentModel currentShipment)
        {
            if (currentShipment == null)
            {
                throw new HttpResponseException(HttpStatusCode.InternalServerError, "Error on save, model is null");
            }

            DataModel.Dto.Shipment dest = new DataModel.Dto.Shipment
            {
                Id = currentShipment.Id,
                DeliveryDate = currentShipment.DeliveryDate,
                CustomerId = currentShipment.CustomerId,
                PickUpDate = currentShipment.PickUpDate,
                PoNumber = currentShipment.PoNumber,
                StatusId = currentShipment.StatusId,
                TotalPrice = currentShipment.TotalPrice,
                TotalQuatity = currentShipment.TotalQuatity,
                TotalVolume = currentShipment.TotalVolume,
                TotalWeight = currentShipment.TotalWeight,
                TransporterId = currentShipment.TransporterId,
                SenderRemark = currentShipment.SenderRemark,
                ReceiverAddressId = currentShipment.ReceiverAddressId,
                SenderPhone = currentShipment.SenderPhone,
                SenderContactPerson = currentShipment.SenderContactPerson,
                ReceiverContactPerson = currentShipment.ReceiverContactPerson,
                SenderAmStop = currentShipment.SenderAmStop,
                Reference = currentShipment.Reference,
                SenderPmStart = currentShipment.SenderPmStart,
                SenderAmStart = currentShipment.SenderAmStart,
                SenderPmStop = currentShipment.SenderPmStop,
                ReceiverAmStart = currentShipment.ReceiverAmStart,
                ReceiverPmStop = currentShipment.ReceiverPmStop,
                ReceiverRemark = currentShipment.ReceiverRemark,
                ReceiverAmStop = currentShipment.ReceiverAmStop,
                ReceiverPhone = currentShipment.ReceiverPhone,
                SenderAddressId = currentShipment.SenderAddressId,
                ReceiverPmStart = currentShipment.ReceiverPmStart,
                UserIdCreated = currentShipment.UserIdCreated,
                DateCreated = currentShipment.DateCreated,
                UserIdModified = currentShipment.UserIdModified,
                DateModified = currentShipment.DateModified,

            };

            var transaction = _unitOfWork.BeginTransaction();
            await _unitOfWork.ShipmentRepository.SaveShipment(userId, dest, transaction);
            currentShipment.Id = dest.Id;
            if (currentShipment.ShipmentDetails != null)
            {
                bool deleteRemainingWhenCommon = false;
                foreach (ShipmentDetailModel aShipmentDetailModel in currentShipment.ShipmentDetails)
                {
                    ShipmentDetail aShipmentDetail =
                        Mapper.Map<ShipmentDetailModel, ShipmentDetail>(aShipmentDetailModel);
                    if (aShipmentDetail != null)
                    {
                        aShipmentDetail.DateModified = DateTime.Now;
                        aShipmentDetail.UserIdModified = userId;
                        if (aShipmentDetail.Id <= 0)
                        {
                            aShipmentDetail.DateCreated = DateTime.Now;
                            aShipmentDetail.UserIdCreated = userId;
                            aShipmentDetail.ShipmentId = dest.Id;
                            aShipmentDetailModel.Id =
                                await _unitOfWork.ShipmentDetailRepository.AddAsync(aShipmentDetail, transaction);
                        }
                        else
                        {
                            await _unitOfWork.ShipmentDetailRepository.UpdateAsync(aShipmentDetail, transaction);
                        }
                    }
                }
            }
            if (currentShipment.ShipmentTransporters != null)
            {
                foreach (ShipmentTransporterModel aShipmentTransporterModel in currentShipment.ShipmentTransporters)
                {
                    ShipmentTransporter aShipmentTransporter = Mapper.Map<ShipmentTransporterModel, ShipmentTransporter>(aShipmentTransporterModel);
                    if (aShipmentTransporter != null)
                    {
                        aShipmentTransporter.DateModified = DateTime.Now;
                        aShipmentTransporter.UserIdModified = userId;
                        if (aShipmentTransporter.Id <= 0)
                        {
                            aShipmentTransporter.DateCreated = DateTime.Now;
                            aShipmentTransporter.ShipmentId = dest.Id;
                            aShipmentTransporter.UserIdCreated = userId;
                            aShipmentTransporterModel.Id =
                                await _unitOfWork.ShipmentTransporterRepository.AddAsync(aShipmentTransporter, transaction);
                        }
                        else
                        {
                            await _unitOfWork.ShipmentTransporterRepository.UpdateAsync(aShipmentTransporter, transaction);
                        }
                    }
                }
            }
            if (currentShipment.ShipmentReceiverFacilities != null)
            {
                foreach (ShipmentReceiverFacilityModel aShipmentReceiverFacilityModel in currentShipment.ShipmentReceiverFacilities)
                {
                    ShipmentReceiverFacility aShipmentReceiverFacility =
                        Mapper.Map<ShipmentReceiverFacilityModel, ShipmentReceiverFacility>(aShipmentReceiverFacilityModel);
                    if (aShipmentReceiverFacility != null)
                    {
                        aShipmentReceiverFacility.DateModified = DateTime.Now;
                        aShipmentReceiverFacility.UserIdModified = userId;
                        if (aShipmentReceiverFacility.Id <= 0)
                        {
                            aShipmentReceiverFacility.DateCreated = DateTime.Now;
                            aShipmentReceiverFacility.ShipmentId = dest.Id;
                            aShipmentReceiverFacility.UserIdCreated = userId;
                            aShipmentReceiverFacilityModel.Id =
                                await _unitOfWork.ShipmentReceiverFacilityRepository.AddAsync(aShipmentReceiverFacility, transaction);
                        }
                        else
                        {
                            await _unitOfWork.ShipmentReceiverFacilityRepository.UpdateAsync(aShipmentReceiverFacility, transaction);
                        }
                    }
                }
            }
            if (currentShipment.ShipmentReceiverRequirements != null)
            {
                foreach (ShipmentReceiverRequirementModel aShipmentReceiverRequirementModel in currentShipment.ShipmentReceiverRequirements)
                {
                    ShipmentReceiverRequirement aShipmentReceiverRequirement = Mapper.Map<ShipmentReceiverRequirementModel, ShipmentReceiverRequirement>(aShipmentReceiverRequirementModel);
                    if (aShipmentReceiverRequirement != null)
                    {
                        aShipmentReceiverRequirement.DateModified = DateTime.Now;
                        aShipmentReceiverRequirement.UserIdModified = userId;
                        if (aShipmentReceiverRequirement.Id <= 0)
                        {
                            aShipmentReceiverRequirement.DateCreated = DateTime.Now;
                            aShipmentReceiverRequirement.ShipmentId = dest.Id;
                            aShipmentReceiverRequirement.UserIdCreated = userId;
                            aShipmentReceiverRequirementModel.Id = await _unitOfWork.ShipmentReceiverRequirementRepository.AddAsync(aShipmentReceiverRequirement, transaction);
                        }
                        else
                        {
                            await _unitOfWork.ShipmentReceiverRequirementRepository.UpdateAsync(aShipmentReceiverRequirement, transaction);
                        }
                    }
                }
            }

            if (currentShipment.ShipmentReceiverTrucks != null)
            {
                foreach (ShipmentReceiverTruckModel aShipmentReceiverTruckModel in currentShipment.ShipmentReceiverTrucks)
                {
                    ShipmentReceiverTruck aShipmentReceiverTruck = Mapper.Map<ShipmentReceiverTruckModel, ShipmentReceiverTruck>(aShipmentReceiverTruckModel);
                    if (aShipmentReceiverTruck != null)
                    {
                        aShipmentReceiverTruck.DateModified = DateTime.Now;
                        aShipmentReceiverTruck.UserIdModified = userId;
                        if (aShipmentReceiverTruck.Id <= 0)
                        {
                            aShipmentReceiverTruck.DateCreated = DateTime.Now;
                            aShipmentReceiverTruck.ShipmentId = dest.Id;
                            aShipmentReceiverTruck.UserIdCreated = userId;
                            aShipmentReceiverTruckModel.Id = await _unitOfWork.ShipmentReceiverTruckRepository.AddAsync(aShipmentReceiverTruck, transaction);
                        }
                        else
                        {
                            await _unitOfWork.ShipmentReceiverTruckRepository.UpdateAsync(aShipmentReceiverTruck, transaction);
                        }
                    }
                }
            }

            if (currentShipment.ShipmentSenderFacilities != null)
            {
                foreach (ShipmentSenderFacilityModel aShipmentSenderFacilityModel in currentShipment.ShipmentSenderFacilities)
                {
                    ShipmentSenderFacility aShipmentSenderFacility = Mapper.Map<ShipmentSenderFacilityModel, ShipmentSenderFacility>(aShipmentSenderFacilityModel);
                    if (aShipmentSenderFacility != null)
                    {
                        aShipmentSenderFacility.DateModified = DateTime.Now;
                        aShipmentSenderFacility.UserIdModified = userId;
                        if (aShipmentSenderFacility.Id <= 0)
                        {
                            aShipmentSenderFacility.DateCreated = DateTime.Now;
                            aShipmentSenderFacility.ShipmentId = dest.Id;
                            aShipmentSenderFacility.UserIdCreated = userId;
                            aShipmentSenderFacilityModel.Id = await _unitOfWork.ShipmentSenderFacilityRepository.AddAsync(aShipmentSenderFacility, transaction);
                        }
                        else
                        {
                            await _unitOfWork.ShipmentSenderFacilityRepository.UpdateAsync(aShipmentSenderFacility, transaction);
                        }
                    }
                }
            }

            if (currentShipment.ShipmentSenderRequirements != null)
            {
                foreach (ShipmentSenderRequirementModel aShipmentSenderRequirementModel in currentShipment.ShipmentSenderRequirements)
                {
                    ShipmentSenderRequirement aShipmentSenderRequirement = Mapper.Map<ShipmentSenderRequirementModel, ShipmentSenderRequirement>(aShipmentSenderRequirementModel);
                    if (aShipmentSenderRequirement != null)
                    {
                        aShipmentSenderRequirement.DateModified = DateTime.Now;
                        aShipmentSenderRequirement.UserIdModified = userId;
                        if (aShipmentSenderRequirement.Id <= 0)
                        {
                            aShipmentSenderRequirement.DateCreated = DateTime.Now;
                            aShipmentSenderRequirement.ShipmentId = dest.Id;
                            aShipmentSenderRequirement.UserIdCreated = userId;
                            aShipmentSenderRequirementModel.Id = await _unitOfWork.ShipmentSenderRequirementRepository.AddAsync(aShipmentSenderRequirement, transaction);
                        }
                        else
                        {
                            await _unitOfWork.ShipmentSenderRequirementRepository.UpdateAsync(aShipmentSenderRequirement, transaction);
                        }
                    }
                }
            }

            if (currentShipment.ShipmentSenderTrucks != null)
            {
                foreach (ShipmentSenderTruckModel aShipmentSenderTruckModel in currentShipment.ShipmentSenderTrucks)
                {
                    ShipmentSenderTruck aShipmentSenderTruck = Mapper.Map<ShipmentSenderTruckModel, ShipmentSenderTruck>(aShipmentSenderTruckModel);
                    if (aShipmentSenderTruck != null)
                    {
                        aShipmentSenderTruck.DateModified = DateTime.Now;
                        aShipmentSenderTruck.UserIdModified = userId;
                        if (aShipmentSenderTruck.Id <= 0)
                        {
                            aShipmentSenderTruck.DateCreated = DateTime.Now;
                            aShipmentSenderTruck.ShipmentId = dest.Id;
                            aShipmentSenderTruck.UserIdCreated = userId;
                            aShipmentSenderTruckModel.Id = await _unitOfWork.ShipmentSenderTruckRepository.AddAsync(aShipmentSenderTruck, transaction);
                        }
                        else
                        {
                            await _unitOfWork.ShipmentSenderTruckRepository.UpdateAsync(aShipmentSenderTruck, transaction);
                        }
                    }
                }
            }

            _unitOfWork.Commit(transaction);

            return currentShipment.Id;
        }
    }
}
