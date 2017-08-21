using System.Threading.Tasks;
using TransApp.Application.Query;
using TransApp.Core.Cqrs;
using TransApp.DataModel.Dto;
using TransApp.Domain.Services.Addresses;
using TransApp.Domain.Services.Authentication;
using TransApp.Framework.Filter;

namespace TransApp.Application.QueryHandler
{
    public class AddressByFilterQueryHandler : IQueryHandler<QueryAddress, Domain.Addresses.AddressFullModel>
    {
        /// <summary>
        /// AddressesService
        /// </summary>
        private readonly IAddressesService _addressesService;

        /// <summary>
        /// IAccountService
        /// </summary>
        private readonly IAuthenticationService _accountService;

        public AddressByFilterQueryHandler(IAddressesService addressesService, IAuthenticationService accountService)
        {
            _addressesService = addressesService;
            _accountService = accountService;
        }

        public async Task<Domain.Addresses.AddressFullModel> Retrieve(QueryAddress query)
        {
            FilterAddress filter = new FilterAddress();
            filter.CustomerId = query.CustomerId;
            var currentAddress = await _addressesService.GetAddressFiltered(filter);
            return currentAddress;
        }
    }
}
