﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.Domain.Shipment;
using TransApp.Framework.Filter;
using AddressModel = TransApp.Domain.Addresses.AddressModel;

namespace TransApp.Domain.Services.Shipment
{
    public interface IShipmentService
    {
        /// <summary>
        /// Get Shipment
        /// </summary>
        /// <param name="ShipmentId"></param>
        /// <returns></returns>
        Task<ShipmentFullModel> Get(int id);

        Task<ShipmentFullModel> GetShipmentFiltered(FilterAddress filter);
    }
}
