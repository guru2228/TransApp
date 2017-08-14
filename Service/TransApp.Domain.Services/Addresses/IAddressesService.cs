using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using Address = TransApp.Domain.Addresses.Address;

namespace TransApp.Domain.Services.Addresses
{
    public interface IAddressesService
    {
        /// <summary>
        /// Get Address
        /// </summary>
        /// <param name="addressId"></param>
        /// <returns></returns>
        Task<Address> Get(int addressId);
    }
}
