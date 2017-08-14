using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto.Custom;

namespace TransApp.Persistence.Repository
{
    public interface IAddressesRepository
    {
        /// <summary>
        /// Get address by id
        /// </summary>
        /// <param name="id"></param>
        Task<AddressDto> GetFullAddressById(int id);

    }
}
