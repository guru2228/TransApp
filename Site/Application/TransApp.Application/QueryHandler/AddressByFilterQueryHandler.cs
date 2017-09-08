using System.Collections.Generic;
using System.Threading.Tasks;
using TransApp.Application.Query;
using TransApp.Core.Cqrs;
using TransApp.DataModel.Dto;
using TransApp.Domain.Addresses;
using TransApp.Domain.Services.Addresses;
using TransApp.Domain.Services.Authentication;
using TransApp.Framework.Filter;

namespace TransApp.Application.QueryHandler
{
    public class AddressByFilterQueryHandler : IQueryHandlerList<QueryAddress, Domain.Addresses.AddressModel>
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

        public async Task<List<AddressModel>> RetrieveList(QueryAddress query)
        {
            FilterAddress filter = new FilterAddress();
            filter.CustomerId = query.CustomerId;
            var currentAddress = await _addressesService.GetAll(filter);
            return currentAddress;
        }
    }
}
