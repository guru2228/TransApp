﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Framework.Filter;

namespace TransApp.Persistence.Repository
{
    public interface IShipmentRepository
    {
        /// <summary>
        /// Get address by id
        /// </summary>
        /// <param name="id"></param>
        Task<ShipmentDto> GetShipmentById(int id);

        Task<ShipmentDto> GetShipmentFiltered(FilterShipment filter);

        Task SaveShipment(Shipment address, IDbTransaction transaction = null);

    }
}