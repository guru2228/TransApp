using System;
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
        Task<AddressFullModel> Get(int addressId);

        /// <summary>
        /// filter address/by customer now
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        Task<AddressFullModel> GetAddressFiltered(FilterAddress filter);

        /// <summary>
        /// Save Full Address
        /// </summary>
        /// <param name="address"></param>
        /// <returns></returns>
        Task SaveAddress(AddressFullModel address);
    }
}
