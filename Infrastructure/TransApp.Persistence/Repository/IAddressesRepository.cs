using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Framework.Filter;

namespace TransApp.Persistence.Repository
{
    public interface IAddressesRepository
    {
        /// <summary>
        /// Get address by id
        /// </summary>
        /// <param name="id"></param>
        Task<AddressDto> GetFullAddressById(int id);

        Task<List<AddressDto>> GetFullAddressFiltered(FilterAddress filter);

        Task SaveAddress(Address address, IDbTransaction transaction = null);

        Task DeleteAddress(Address address, IDbTransaction transaction);
    }
}
