using System.Threading.Tasks;
using TransApp.Application.Query;
using TransApp.Core.Cqrs;
using TransApp.DataModel.Dto;
using TransApp.Domain.Services.Addresses;
using TransApp.Domain.Services.Authentication;

namespace TransApp.Application.QueryHandler
{
    public class AddressByIdQueryHandler : IQueryHandler<QueryAddress, Address>
    {
        /// <summary>
        /// AddressesService
        /// </summary>
        private readonly IAddressesService _addressesService;

        /// <summary>
        /// IAccountService
        /// </summary>
        private readonly IAuthenticationService _accountService;

        public AddressByIdQueryHandler(IAddressesService addressesService, IAuthenticationService accountService)
        {
            _addressesService = addressesService;
            _accountService = accountService;
        }

        public async Task<Address> Retrieve(QueryAddress query)
        {
            return  new Address();
        }
    }
}
