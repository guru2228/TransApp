using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using AddressModel = TransApp.Domain.Addresses.AddressModel;

namespace TransApp.Domain.Services.Addresses
{
    public interface IAddressesService
    {
        /// <summary>
        /// Get Address
        /// </summary>
        /// <param name="addressId"></param>
        /// <returns></returns>
        Task<AddressModel> Get(int addressId);
    }
}
