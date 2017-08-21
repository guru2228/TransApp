using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using TransApp.Core.CacheService;
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

        public async Task<ShipmentFullModel> Get(int addressId)
        {
            //var currentShipment =
            //    await _unitOfWork.AddressesRepository.GetFullAddressById(addressId);
            //if (currentShipment != null)
            //{
            //    return Mapper.Map<ShipmentDto, ShipmentFullModel>(currentShipment);
            //}
            return new ShipmentFullModel();
        }

        public async Task<ShipmentFullModel> GetShipmentFiltered(FilterAddress filter)
        {
            //var currentAdrress =
            //    await _unitOfWork.AddressesRepository.GetFullAddressFiltered(filter);
            //if (currentAdrress != null)
            //{
            //    return Mapper.Map<ShipmentDto, ShipmentFullModel>(currentAdrress);
            //}
            return new ShipmentFullModel();
        }

        public async Task SaveShipment(AddressModel address)
        {
           
        }
    }
}
