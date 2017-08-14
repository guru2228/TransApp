using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.Core.CacheService;
using TransApp.Domain.Addresses;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Domain.Services.Addresses
{
    public class AddressesService: IAddressesService
    {
        private readonly IUnitOfWork _unitOfWork;

        private readonly ICacheService _cacheService;
        public AddressesService(IUnitOfWork unitOfWork, ICacheService cacheService)
        {
            _unitOfWork = unitOfWork;
            _cacheService = cacheService;
        }
        public async Task<Address> Get(int addressId)
        {
            var currentAdrress =
                (await _unitOfWork.AddressesRepository.GetFullAddressById(addressId));
            if (currentAdrress != null)
            {
                Address result = new Address
                {
                    Id = currentAdrress.Id,
                    Name = currentAdrress.Name,
                    Street1 = currentAdrress.Street1
                };
                if (currentAdrress.AddressAvailability != null)
                {
                    result.Availabilities = new List<AddressAvailability>();
                    foreach (DataModel.Dto.AddressAvailability addressA in currentAdrress.AddressAvailability)
                    {
                        AddressAvailability a = new AddressAvailability
                        {
                            Id = addressA.Id
                        };
                        result.Availabilities.Add(a);
                    }
                }
                return result;
            }
           return new Address();
        }
    }
}
