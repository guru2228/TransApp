﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.Domain.Addresses;
using TransApp.Framework.Filter;

namespace TransApp.Domain.Services.Addresses
{
    public interface IAddressesService
    {
        /// <summary>
        /// Get Address
        /// </summary>
        /// <param name="addressId"></param>
        /// <returns></returns>
        Task<AddressModel> Get(int addressId, int? customerId = null);

        /// <summary>
        /// filter currentAddress/by customer now
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        Task<List<AddressModel>> GetAll(FilterAddress filter);

        /// <summary>
        /// GetAllCount
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        Task<int> GetAllCount(FilterAddress filter);

        /// <summary>
        /// Save Full Address
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="address"></param>
        /// <returns></returns>
        Task<int> SaveAddress(int userId, AddressModel address);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="currentAddress"></param>
        /// <returns></returns>
        Task DeleteAddress(AddressModel currentAddress);
    }
}
