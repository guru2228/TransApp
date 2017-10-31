using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
using TransApp.Core.Exceptions;
using TransApp.Core.ShipmentTransporter;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Addresses;
using TransApp.Domain.Common.Entity;
using TransApp.Domain.Shipment;
using TransApp.Framework.Filter;
using TransApp.Persistence.UnitOfWork;
using TransApp.Core.Helper;

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

        public async Task<ShipmentModel> Get(int shipmentId, int? customerId = null)
        {
            var currentShipment =
                await _unitOfWork.ShipmentRepository.GetShipmentById(shipmentId, customerId);
            if (currentShipment != null)
            {
                ShipmentModel result = new ShipmentModel
                {
                    Id = currentShipment.Shipment.Id,
                    DeliveryDate = currentShipment.Shipment.DeliveryDate,
                    CustomerId = currentShipment.Shipment.CustomerId,
                    PickUpDate = currentShipment.Shipment.PickUpDate,
                    PoNumber = currentShipment.Shipment.PoNumber,
                    ShipmentStatus = currentShipment.Shipment.ShipmentStatus,
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
                    Reference = currentShipment.Shipment.Reference,

                    ReceiverRemark = currentShipment.Shipment.ReceiverRemark,
                    ReceiverPhone = currentShipment.Shipment.ReceiverPhone,
                    SenderAddressId = currentShipment.Shipment.SenderAddressId,
                    UserIdCreated = currentShipment.Shipment.UserIdCreated,
                    DateCreated = currentShipment.Shipment.DateCreated,
                    UserIdModified = currentShipment.Shipment.UserIdModified,
                    DateModified = currentShipment.Shipment.DateModified,
                    InvoiceAmount = currentShipment.Shipment.InvoiceAmount,
                    InvoiceComment = currentShipment.Shipment.InvoiceComment,
                    InvoiceDate = currentShipment.Shipment.InvoiceDate,
                    PickUpComment = currentShipment.Shipment.PickUpComment,
                    DeliveryComment = currentShipment.Shipment.DeliveryComment,
                    DeliveryPod = currentShipment.Shipment.DeliveryPod,

                };
                if (currentShipment.ShipmentReceiverAvailability != null)
                    result.ReceiverAvailabilities =
                        currentShipment.ShipmentReceiverAvailability.Select(availability => new AvailabilityEntityModel
                        {
                            Id = availability.Id,
                            EntityId = availability.ShipmentId,
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

                if (currentShipment.ShipmentSenderAvailability != null)
                    result.SenderAvailabilities =
                        currentShipment.ShipmentSenderAvailability.Select(availability => new AvailabilityEntityModel
                        {
                            Id = availability.Id,
                            EntityId = availability.ShipmentId,
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
                result.ReceiverFacilities =
                    Mapper.Map<List<ShipmentReceiverFacility>, List<FacilityEntityModel>>(
                        currentShipment.ShipmentReceiverFacilities);
                result.Transporters =
                    Mapper.Map<List<ShipmentTransporter>, List<ShipmentTransporterModel>>(
                        currentShipment.ShipmentTransporters);
                result.ReceiverRequirements =
                    Mapper.Map<List<ShipmentReceiverRequirement>, List<RequirementEntityModel>>(
                        currentShipment.ShipmentReceiverRequirements);

                result.ReceiverTrucks =
                    Mapper.Map<List<ShipmentReceiverTruck>, List<TruckEntityModel>>(
                        currentShipment.ShipmentReceiverTrucks);
                result.SenderFacilities =
                    Mapper.Map<List<ShipmentSenderFacility>, List<FacilityEntityModel>>(
                        currentShipment.ShipmentSenderFacilities);
                result.SenderRequirements =
                    Mapper.Map<List<ShipmentSenderRequirement>, List<RequirementEntityModel>>(
                        currentShipment.ShipmentSenderRequirements);
                result.SenderTrucks =
                    Mapper.Map<List<ShipmentSenderTruck>, List<TruckEntityModel>>(
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
                            ShipmentStatus = currentShipment.ShipmentStatus,
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
                            Reference = currentShipment.Reference,
                            ReceiverRemark = currentShipment.ReceiverRemark,
                            ReceiverPhone = currentShipment.ReceiverPhone,
                            SenderAddressId = currentShipment.SenderAddressId,
                            UserIdCreated = currentShipment.UserIdCreated,
                            DateCreated = currentShipment.DateCreated,
                            UserIdModified = currentShipment.UserIdModified,
                            DateModified = currentShipment.DateModified,
                            UserCreated = currentShipment.UserCreated,
                            UserModified = currentShipment.UserModified,
                            TransporterName = currentShipment.TransporterName,
                            AddressFrom = currentShipment.AddressFrom,
                            AddressTo = currentShipment.AddressTo,
                            OfferCount = currentShipment.OfferCount,
                            InvoiceAmount = currentShipment.InvoiceAmount,
                            InvoiceComment = currentShipment.InvoiceComment,
                            InvoiceDate = currentShipment.InvoiceDate,
                            PickUpComment = currentShipment.PickUpComment,
                            DeliveryComment = currentShipment.DeliveryComment,
                            DeliveryPod = currentShipment.DeliveryPod,
                        };

                        result.Add(shipmentModel);
                    }
                }
                return result;
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
                DeliveryDate = currentShipment.DeliveryDate.Value.Date,
                CustomerId = currentShipment.CustomerId,
                PickUpDate = currentShipment.PickUpDate.Value.Date,
                PoNumber = currentShipment.PoNumber,
                ShipmentStatus =
                    !string.IsNullOrEmpty(currentShipment.ShipmentStatus) ? currentShipment.ShipmentStatus : "UAS",
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

                Reference = currentShipment.Reference,
                ReceiverRemark = currentShipment.ReceiverRemark,
                ReceiverPhone = currentShipment.ReceiverPhone,
                SenderAddressId = currentShipment.SenderAddressId,
                UserIdCreated = currentShipment.UserIdCreated,
                DateCreated = currentShipment.DateCreated,
                UserIdModified = currentShipment.UserIdModified,
                DateModified = currentShipment.DateModified,
                InvoiceAmount = currentShipment.InvoiceAmount,
                InvoiceComment = currentShipment.InvoiceComment,
                InvoiceDate = currentShipment.InvoiceDate,
                PickUpComment = currentShipment.PickUpComment,
                DeliveryComment = currentShipment.DeliveryComment,
                DeliveryPod = currentShipment.DeliveryPod,
            };

            var transaction = _unitOfWork.BeginTransaction();
            await _unitOfWork.ShipmentRepository.SaveShipment(userId, dest, transaction);
            currentShipment.Id = dest.Id;
            dest.Reference = dest.Id.ToString();
            await _unitOfWork.ShipmentRepository.SaveShipment(userId, dest, transaction);
            if (currentShipment.ShipmentDetails != null)
            {
                foreach (ShipmentDetailModel aShipmentDetailModel in currentShipment.ShipmentDetails)
                {
                    aShipmentDetailModel.ShipmentId = currentShipment.Id;
                    await SaveShipmentDetails(aShipmentDetailModel, userId, transaction);
                }
            }

            if (currentShipment.ReceiverAvailabilities != null)
            {
                //// if all passed model has no id set, then clean existing availabilities
                if (currentShipment.ReceiverAvailabilities.All(item => item.Id == -1))
                {
                    _unitOfWork.ShipmentReceiverAvailabilityRepository.Delete("ShipmentId=" + currentShipment.Id,
                        transaction);
                }

                foreach (var aAvailabilityModel in currentShipment.ReceiverAvailabilities)
                {
                    var aAvailability = new ShipmentReceiverAvailability()
                    {
                        Id = aAvailabilityModel.Id,
                        ShipmentId = aAvailabilityModel.EntityId,
                        Day = aAvailabilityModel.Day,
                        IsClosed = aAvailabilityModel.IsClosed,
                    };
                    if (!string.IsNullOrEmpty(aAvailabilityModel.AmStart))
                        aAvailability.AmStart =
                            TimeSpan.Parse(aAvailabilityModel.AmStart.Length == 2
                                ? aAvailabilityModel.AmStart + ":00"
                                : aAvailabilityModel.AmStart);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.AmStop))
                        aAvailability.AmStop =
                            TimeSpan.Parse(aAvailabilityModel.AmStop.Length == 2
                                ? aAvailabilityModel.AmStop + ":00"
                                : aAvailabilityModel.AmStop);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.PmStart))
                        aAvailability.PmStart =
                            TimeSpan.Parse(aAvailabilityModel.PmStart.Length == 2
                                ? aAvailabilityModel.PmStart + ":00"
                                : aAvailabilityModel.PmStart);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.PmStop))
                        aAvailability.PmStop =
                            TimeSpan.Parse(aAvailabilityModel.PmStop.Length == 2
                                ? aAvailabilityModel.PmStop + ":00"
                                : aAvailabilityModel.PmStop);
                    aAvailability.DateModified = DateTime.Now;
                    aAvailability.UserIdModified = userId;
                    if (aAvailability.Id <= 0)
                    {
                        aAvailability.DateCreated = DateTime.Now;
                        aAvailability.UserIdCreated = userId;
                        aAvailability.ShipmentId = dest.Id;
                        aAvailabilityModel.Id =
                            await
                                _unitOfWork.ShipmentReceiverAvailabilityRepository.AddAsync(aAvailability, transaction);
                    }
                    else
                    {
                        await _unitOfWork.ShipmentReceiverAvailabilityRepository.UpdateAsync(aAvailability, transaction);
                    }
                }
            }

            if (currentShipment.SenderAvailabilities != null)
            {
                //// if all passed model has no id set, then clean existing availabilities
                if (currentShipment.SenderAvailabilities.All(item => item.Id == -1))
                {
                    _unitOfWork.ShipmentSenderAvailabilityRepository.Delete("ShipmentId=" + currentShipment.Id,
                        transaction);
                }

                foreach (var aAvailabilityModel in currentShipment.SenderAvailabilities)
                {
                    var aAvailability = new ShipmentSenderAvailability()
                    {
                        Id = aAvailabilityModel.Id,
                        ShipmentId = aAvailabilityModel.EntityId,
                        Day = aAvailabilityModel.Day,
                        IsClosed = aAvailabilityModel.IsClosed,
                    };
                    if (!string.IsNullOrEmpty(aAvailabilityModel.AmStart))
                        aAvailability.AmStart =
                            TimeSpan.Parse(aAvailabilityModel.AmStart.Length == 2
                                ? aAvailabilityModel.AmStart + ":00"
                                : aAvailabilityModel.AmStart);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.AmStop))
                        aAvailability.AmStop =
                            TimeSpan.Parse(aAvailabilityModel.AmStop.Length == 2
                                ? aAvailabilityModel.AmStop + ":00"
                                : aAvailabilityModel.AmStop);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.PmStart))
                        aAvailability.PmStart =
                            TimeSpan.Parse(aAvailabilityModel.PmStart.Length == 2
                                ? aAvailabilityModel.PmStart + ":00"
                                : aAvailabilityModel.PmStart);
                    if (!string.IsNullOrEmpty(aAvailabilityModel.PmStop))
                        aAvailability.PmStop =
                            TimeSpan.Parse(aAvailabilityModel.PmStop.Length == 2
                                ? aAvailabilityModel.PmStop + ":00"
                                : aAvailabilityModel.PmStop);
                    aAvailability.DateModified = DateTime.Now;
                    aAvailability.UserIdModified = userId;
                    if (aAvailability.Id <= 0)
                    {
                        aAvailability.DateCreated = DateTime.Now;
                        aAvailability.UserIdCreated = userId;
                        aAvailability.ShipmentId = dest.Id;
                        aAvailabilityModel.Id =
                            await _unitOfWork.ShipmentSenderAvailabilityRepository.AddAsync(aAvailability, transaction);
                    }
                    else
                    {
                        await _unitOfWork.ShipmentSenderAvailabilityRepository.UpdateAsync(aAvailability, transaction);
                    }
                }
            }

            if (currentShipment.Transporters != null)
            {
                foreach (ShipmentTransporterModel aShipmentTransporterModel in currentShipment.Transporters)
                {
                    ShipmentTransporter aShipmentTransporter =
                        Mapper.Map<ShipmentTransporterModel, ShipmentTransporter>(aShipmentTransporterModel);
                    aShipmentTransporter.ShipmentId = currentShipment.Id;
                    await _unitOfWork.ShipmentTransporterRepository.Save(userId, aShipmentTransporter, transaction);
                }
            }
            if (currentShipment.ReceiverFacilities != null)
            {
                foreach (FacilityEntityModel aShipmentReceiverFacilityModel in currentShipment.ReceiverFacilities)
                {
                    ShipmentReceiverFacility aShipmentReceiverFacility =
                        Mapper.Map<FacilityEntityModel, ShipmentReceiverFacility>(aShipmentReceiverFacilityModel);
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
                                await
                                    _unitOfWork.ShipmentReceiverFacilityRepository.AddAsync(aShipmentReceiverFacility,
                                        transaction);
                        }
                        else
                        {
                            await
                                _unitOfWork.ShipmentReceiverFacilityRepository.UpdateAsync(aShipmentReceiverFacility,
                                    transaction);
                        }
                    }
                }
            }
            if (currentShipment.ReceiverRequirements != null)
            {
                foreach (
                    RequirementEntityModel aShipmentReceiverRequirementModel in currentShipment.ReceiverRequirements)
                {
                    ShipmentReceiverRequirement aShipmentReceiverRequirement =
                        Mapper.Map<RequirementEntityModel, ShipmentReceiverRequirement>(
                            aShipmentReceiverRequirementModel);
                    if (aShipmentReceiverRequirement != null)
                    {
                        aShipmentReceiverRequirement.DateModified = DateTime.Now;
                        aShipmentReceiverRequirement.UserIdModified = userId;
                        if (aShipmentReceiverRequirement.Id <= 0)
                        {
                            aShipmentReceiverRequirement.DateCreated = DateTime.Now;
                            aShipmentReceiverRequirement.ShipmentId = dest.Id;
                            aShipmentReceiverRequirement.UserIdCreated = userId;
                            aShipmentReceiverRequirementModel.Id =
                                await
                                    _unitOfWork.ShipmentReceiverRequirementRepository.AddAsync(
                                        aShipmentReceiverRequirement, transaction);
                        }
                        else
                        {
                            await
                                _unitOfWork.ShipmentReceiverRequirementRepository.UpdateAsync(
                                    aShipmentReceiverRequirement, transaction);
                        }
                    }
                }
            }

            if (currentShipment.ReceiverTrucks != null)
            {
                foreach (TruckEntityModel aShipmentReceiverTruckModel in currentShipment.ReceiverTrucks)
                {
                    ShipmentReceiverTruck aShipmentReceiverTruck =
                        Mapper.Map<TruckEntityModel, ShipmentReceiverTruck>(aShipmentReceiverTruckModel);
                    if (aShipmentReceiverTruck != null)
                    {
                        aShipmentReceiverTruck.DateModified = DateTime.Now;
                        aShipmentReceiverTruck.UserIdModified = userId;
                        if (aShipmentReceiverTruck.Id <= 0)
                        {
                            aShipmentReceiverTruck.DateCreated = DateTime.Now;
                            aShipmentReceiverTruck.ShipmentId = dest.Id;
                            aShipmentReceiverTruck.UserIdCreated = userId;
                            aShipmentReceiverTruckModel.Id =
                                await
                                    _unitOfWork.ShipmentReceiverTruckRepository.AddAsync(aShipmentReceiverTruck,
                                        transaction);
                        }
                        else
                        {
                            await
                                _unitOfWork.ShipmentReceiverTruckRepository.UpdateAsync(aShipmentReceiverTruck,
                                    transaction);
                        }
                    }
                }
            }

            if (currentShipment.SenderFacilities != null)
            {
                foreach (FacilityEntityModel aShipmentSenderFacilityModel in currentShipment.SenderFacilities)
                {
                    ShipmentSenderFacility aShipmentSenderFacility =
                        Mapper.Map<FacilityEntityModel, ShipmentSenderFacility>(aShipmentSenderFacilityModel);
                    if (aShipmentSenderFacility != null)
                    {
                        aShipmentSenderFacility.DateModified = DateTime.Now;
                        aShipmentSenderFacility.UserIdModified = userId;
                        if (aShipmentSenderFacility.Id <= 0)
                        {
                            aShipmentSenderFacility.DateCreated = DateTime.Now;
                            aShipmentSenderFacility.ShipmentId = dest.Id;
                            aShipmentSenderFacility.UserIdCreated = userId;
                            aShipmentSenderFacilityModel.Id =
                                await
                                    _unitOfWork.ShipmentSenderFacilityRepository.AddAsync(aShipmentSenderFacility,
                                        transaction);
                        }
                        else
                        {
                            await
                                _unitOfWork.ShipmentSenderFacilityRepository.UpdateAsync(aShipmentSenderFacility,
                                    transaction);
                        }
                    }
                }
            }

            if (currentShipment.SenderRequirements != null)
            {
                foreach (RequirementEntityModel aShipmentSenderRequirementModel in currentShipment.SenderRequirements)
                {
                    ShipmentSenderRequirement aShipmentSenderRequirement =
                        Mapper.Map<RequirementEntityModel, ShipmentSenderRequirement>(aShipmentSenderRequirementModel);
                    if (aShipmentSenderRequirement != null)
                    {
                        aShipmentSenderRequirement.DateModified = DateTime.Now;
                        aShipmentSenderRequirement.UserIdModified = userId;
                        if (aShipmentSenderRequirement.Id <= 0)
                        {
                            aShipmentSenderRequirement.DateCreated = DateTime.Now;
                            aShipmentSenderRequirement.ShipmentId = dest.Id;
                            aShipmentSenderRequirement.UserIdCreated = userId;
                            aShipmentSenderRequirementModel.Id =
                                await
                                    _unitOfWork.ShipmentSenderRequirementRepository.AddAsync(
                                        aShipmentSenderRequirement, transaction);
                        }
                        else
                        {
                            await
                                _unitOfWork.ShipmentSenderRequirementRepository.UpdateAsync(aShipmentSenderRequirement,
                                    transaction);
                        }
                    }
                }
            }

            if (currentShipment.SenderTrucks != null)
            {
                foreach (TruckEntityModel aShipmentSenderTruckModel in currentShipment.SenderTrucks)
                {
                    ShipmentSenderTruck aShipmentSenderTruck =
                        Mapper.Map<TruckEntityModel, ShipmentSenderTruck>(aShipmentSenderTruckModel);
                    if (aShipmentSenderTruck != null)
                    {
                        aShipmentSenderTruck.DateModified = DateTime.Now;
                        aShipmentSenderTruck.UserIdModified = userId;
                        if (aShipmentSenderTruck.Id <= 0)
                        {
                            aShipmentSenderTruck.DateCreated = DateTime.Now;
                            aShipmentSenderTruck.ShipmentId = dest.Id;
                            aShipmentSenderTruck.UserIdCreated = userId;
                            aShipmentSenderTruckModel.Id =
                                await
                                    _unitOfWork.ShipmentSenderTruckRepository.AddAsync(aShipmentSenderTruck, transaction);
                        }
                        else
                        {
                            await
                                _unitOfWork.ShipmentSenderTruckRepository.UpdateAsync(aShipmentSenderTruck, transaction);
                        }
                    }
                }
            }

            _unitOfWork.Commit(transaction);

            return currentShipment.Id;
        }

        public async Task DeleteShipment(ShipmentModel currentShipment)
        {
            if (currentShipment != null)
            {
                DataModel.Dto.Shipment dest = new DataModel.Dto.Shipment
                {
                    Id = currentShipment.Id,
                    DeliveryDate = currentShipment.DeliveryDate,
                    CustomerId = currentShipment.CustomerId,
                    PickUpDate = currentShipment.PickUpDate,
                    PoNumber = currentShipment.PoNumber,
                    ShipmentStatus =currentShipment.ShipmentStatus,
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
                    Reference = currentShipment.Reference,
                    ReceiverRemark = currentShipment.ReceiverRemark,
                    ReceiverPhone = currentShipment.ReceiverPhone,
                    SenderAddressId = currentShipment.SenderAddressId,
                    UserIdCreated = currentShipment.UserIdCreated,
                    DateCreated = currentShipment.DateCreated,
                    UserIdModified = currentShipment.UserIdModified,
                    DateModified = currentShipment.DateModified,
                    InvoiceAmount = currentShipment.InvoiceAmount,
                    InvoiceComment = currentShipment.InvoiceComment,
                    InvoiceDate = currentShipment.InvoiceDate,
                    PickUpComment = currentShipment.PickUpComment,
                    DeliveryComment = currentShipment.DeliveryComment,
                    DeliveryPod = currentShipment.DeliveryPod,
                };

                var transaction = _unitOfWork.BeginTransaction();

                if (currentShipment.ShipmentDetails != null)
                {
                    _unitOfWork.ShipmentDetailRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                if (currentShipment.ReceiverFacilities != null)
                {
                    _unitOfWork.ShipmentReceiverFacilityRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                if (currentShipment.ReceiverRequirements != null)
                {
                    _unitOfWork.ShipmentReceiverRequirementRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                if (currentShipment.ReceiverTrucks != null)
                {
                    _unitOfWork.ShipmentReceiverTruckRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                ///
                if (currentShipment.SenderFacilities != null)
                {
                    _unitOfWork.ShipmentSenderFacilityRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                if (currentShipment.SenderRequirements != null)
                {
                    _unitOfWork.ShipmentSenderRequirementRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                if (currentShipment.SenderTrucks != null)
                {
                    _unitOfWork.ShipmentSenderTruckRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                if (currentShipment.Transporters != null)
                {
                    List<ShipmentTransporterHistory> result =
                        Mapper.Map<List<ShipmentTransporterModel>, List<ShipmentTransporterHistory>>(
                            currentShipment.Transporters);
                    foreach (ShipmentTransporterHistory shipmentTransporterHistory in result)
                        await
                            _unitOfWork.ShipmentTransporterHistoryRepository.AddAsync(shipmentTransporterHistory,
                                transaction);
                    await _unitOfWork.ShipmentTransporterRepository
                        .DeleteShipmentTransporter("ShipmentId=" + currentShipment.Id, transaction);
                }
                if (currentShipment.ReceiverAvailabilities != null)
                {
                    _unitOfWork.ShipmentReceiverAvailabilityRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                if (currentShipment.SenderAvailabilities != null)
                {
                    _unitOfWork.ShipmentSenderAvailabilityRepository
                        .Delete("ShipmentId=" + currentShipment.Id, transaction);
                }
                await CreateShipmentHistory(dest, transaction);
                await _unitOfWork.ShipmentRepository.DeleteShipment(dest, transaction);
                
                _unitOfWork.Commit(transaction);
            }
        }

        public async Task<List<ShipmentTransporterFilterModel>> GetShipmentFilter(int customerId)
        {
            var shipmentsUnassigned =
                await _unitOfWork.ShipmentRepository.GetShipmentsUnassignedAmount(customerId);
            var shipmentsCompleted =
                await _unitOfWork.ShipmentRepository.GetShipmentsCompletedAmount(customerId);
            var shipmentsAssigned =
                await _unitOfWork.ShipmentRepository.GetShipmentsAssignedAmount(customerId);
            var shipmentsOpenMarket =
                await _unitOfWork.ShipmentRepository.GetShipmentsOpenMarketAmount(customerId);
            List<ShipmentTransporterFilterModel> result = new List<ShipmentTransporterFilterModel>();

            ShipmentTransporterFilterModel unassigned = new ShipmentTransporterFilterModel
            {
                StatusType = ShipmentTransporterStatus.Unassigned
            };
            if (shipmentsUnassigned != null)
            {
                var fields = shipmentsUnassigned as IDictionary<string, object>;
                if (fields != null) unassigned.Amount = Convert.ToInt32(fields["Amount"]);
                if (fields?["LastDateTime"] != null && fields["LastDateTime"] != DBNull.Value)
                {
                    unassigned.LastDateTime = (DateTime) fields["LastDateTime"];
                }
            }
            result.Add(unassigned);

            ShipmentTransporterFilterModel completed = new ShipmentTransporterFilterModel
            {
                StatusType = ShipmentTransporterStatus.Completed
            };
            if (shipmentsCompleted != null)
            {
                var fields = shipmentsCompleted as IDictionary<string, object>;
                if (fields != null) completed.Amount = Convert.ToInt32(fields["Amount"]);
                if (fields?["LastDateTime"] != null && fields["LastDateTime"] != DBNull.Value)
                {
                    completed.LastDateTime = (DateTime) fields["LastDateTime"];
                }

            }
            result.Add(completed);

            ShipmentTransporterFilterModel assigned = new ShipmentTransporterFilterModel
            {
                StatusType = ShipmentTransporterStatus.Assigned,
                InPending = true
            };
            if (shipmentsAssigned != null)
            {
                var fields = shipmentsAssigned as IDictionary<string, object>;
                if (fields != null) assigned.Amount = Convert.ToInt32(fields["Amount"]);
                if (fields?["LastDateTime"] != null && fields["LastDateTime"] != DBNull.Value)
                {
                    assigned.LastDateTime = (DateTime) fields["LastDateTime"];
                }

                if (fields != null)
                {
                    assigned.Declined = Convert.ToInt32(fields["Declined"]);
                    assigned.Pending = Convert.ToInt32(fields["Pending"]);
                }
            }
            result.Add(assigned);

            ShipmentTransporterFilterModel openMarket = new ShipmentTransporterFilterModel
            {
                StatusType = ShipmentTransporterStatus.OpenMarket
            };
            if (shipmentsOpenMarket != null)
            {
                var fields = shipmentsOpenMarket as IDictionary<string, object>;
                if (fields != null) openMarket.Amount = Convert.ToInt32(fields["Amount"]);
                if (fields?["LastDateTime"] != null && fields["LastDateTime"] != DBNull.Value)
                {
                    openMarket.LastDateTime = (DateTime) fields["LastDateTime"];
                }
            }
            result.Add(openMarket);
            return result;

        }

        public async Task SaveShipmentDetails(ShipmentDetailModel shipmentDetailModel, int userId,
            IDbTransaction transaction)
        {
            ShipmentDetail aShipmentDetailChild =
                Mapper.Map<ShipmentDetailModel, ShipmentDetail>(shipmentDetailModel);
            if (aShipmentDetailChild != null)
            {
                if (shipmentDetailModel.ToRemove)
                {
                    await _unitOfWork.ShipmentDetailRepository.DeleteAsync(aShipmentDetailChild, transaction);
                }
                else
                {
                    aShipmentDetailChild.DateModified = DateTime.Now;
                    aShipmentDetailChild.UserIdModified = userId;
                    if (aShipmentDetailChild.Id <= 0)
                    {
                        aShipmentDetailChild.DateCreated = DateTime.Now;
                        aShipmentDetailChild.UserIdCreated = userId;
                        aShipmentDetailChild.ShipmentId = shipmentDetailModel.ShipmentId;
                        shipmentDetailModel.Id =
                            await _unitOfWork.ShipmentDetailRepository.AddAsync(aShipmentDetailChild, transaction);
                    }
                    else
                    {
                        await _unitOfWork.ShipmentDetailRepository.UpdateAsync(aShipmentDetailChild, transaction);
                    }
                }
            }
        }

        public async Task DeleteShipmentById(int shipmentId)
        {
            ShipmentModel currentShipmentModel = await Get(shipmentId);
            await DeleteShipment(currentShipmentModel);
        }

        public async Task<bool> AssignToOpenMarket(int userId, int shipmentId, IDbTransaction transaction = null)
        {
            try
            {
                if (transaction == null)
                    transaction = _unitOfWork.BeginTransaction();
                await
                    _unitOfWork.ShipmentRepository.UpdateShipmentStatus(userId, shipmentId, transaction,
                        shipmentStatus: "OPEN");
                _unitOfWork.Commit(transaction);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> MoveToUnassigned(int userId, int shipmentId, IDbTransaction transaction = null)
        {
            try
            {
                if (transaction == null)
                    transaction = _unitOfWork.BeginTransaction();
                await _unitOfWork.ShipmentRepository.UpdateShipmentStatus(userId, shipmentId, transaction, "UAS");
                await CreateShipmentTransporterHistory("ShipmentId=" + shipmentId, transaction);
                _unitOfWork.Commit(transaction);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> ConfirmTransporter(int userId, int shipmentId, int transpoterId)
        {
            try
            {
                var transaction = _unitOfWork.BeginTransaction();
                await
                    _unitOfWork.ShipmentRepository.UpdateShipmentTransporter(userId, shipmentId, transaction,
                        "CON", transpoterId);
                await CreateShipmentTransporterHistory("ShipmentId=" + shipmentId, transaction);
                _unitOfWork.Commit(transaction);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<int> GetAllCount(FilterShipment filter)
        {
            return
                await _unitOfWork.ShipmentRepository.GetAllCount(filter);
        }

        public async Task CreateShipmentTransporterHistory(string predicate, IDbTransaction transaction = null)
        {
            List<ShipmentTransporter> shipmentTransporters =
                _unitOfWork.ShipmentTransporterRepository.GetAllBasic(predicate).ToList();
            List<ShipmentTransporterHistory> result =
                Mapper.Map<List<ShipmentTransporter>, List<ShipmentTransporterHistory>>(shipmentTransporters);
            foreach (ShipmentTransporterHistory shipmentTransporterHistory in result)
                await _unitOfWork.ShipmentTransporterHistoryRepository.AddAsync(shipmentTransporterHistory, transaction);
            await _unitOfWork.ShipmentTransporterRepository
                    .DeleteShipmentTransporter(predicate, transaction);
        }

        public async Task<bool> UnassignAndMoveToOpenMarket(int userId, int shipmentId, IDbTransaction transaction = null)
        {
            try
            {
                if (transaction == null)
                    transaction = _unitOfWork.BeginTransaction();
                await CreateShipmentTransporterHistory("ShipmentId=" + shipmentId, transaction);
                await
                   _unitOfWork.ShipmentRepository.UpdateShipmentStatus(userId, shipmentId, transaction,
                       shipmentStatus: "OPEN");
                _unitOfWork.Commit(transaction);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<List<ShipmentTransporterModel>> GetShipmentTransporterAll(FilterShipmentTransporter filter)
        {
            var shipmentTransporters =
                await _unitOfWork.ShipmentTransporterRepository.GetAll(filter);
            return Mapper.Map<List<ShipmentTransporterDto>, List<ShipmentTransporterModel>>(shipmentTransporters);
        }

        public async Task<List<ShipmentTransporterModel>> AssignTransporter(int userId, int shipmentId,
            int amoutFlexibility = 0)
        {
            await CreateShipmentTransporterHistory("ShipmentId=" + shipmentId, null);
            await _unitOfWork.ShipmentTransporterRepository.AssignTransporter(userId, shipmentId, amoutFlexibility);
            var result = await GetShipmentTransporterAll(new FilterShipmentTransporter {ShipmentId = shipmentId});
            if (amoutFlexibility == 0 && !result.Any())
            {
                return await AssignTransporter(userId, shipmentId, 2);
            }
            return result;
        }

        public async Task CreateShipmentHistory(DataModel.Dto.Shipment shipment, IDbTransaction transaction = null)
        {
            ShipmentHistory result =
                Mapper.Map<DataModel.Dto.Shipment, ShipmentHistory>(shipment);
            result.ShipmentId = shipment.Id;
                await _unitOfWork.ShipmentHistoryRepository.AddAsync(result, transaction);
        }

        public async Task<bool> CancelShipment(int userId, int shipmentId, IDbTransaction transaction = null)
        {
            try
            {
                await _unitOfWork.ShipmentRepository.UpdateShipmentStatus(userId, shipmentId, null, "CANCEL");
                await DeleteShipmentById(shipmentId);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> MoveToHistory(int userId, int shipmentId,int transporterId,int amountRating,string review, IDbTransaction transaction = null)
        {
            try
            {
                Rating rating = new Rating
                {
                    TransporterId = transporterId,
                    UserId = userId,
                    UserIdModified = userId,
                    UserIdCreated = userId,
                    DateModified = DateTime.Now,
                    DateCreated = DateTime.Now,
                    Amount = amountRating,
                    Review = review
                };
                await _unitOfWork.RatingRepository.AddAsync(rating);
                await _unitOfWork.ShipmentRepository.UpdateShipmentStatus(userId, shipmentId, null, "DELIVER");//??
                await DeleteShipmentById(shipmentId);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
