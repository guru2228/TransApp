//using System.Threading.Tasks;
//using TransApp.Domain.Services.Authentication;

//namespace TransApp.Application.CommandHandler
//{
//    public class CustomerByIdQueryHandler
//    {
//       // private readonly ITransportationRepository _transportationRepository;

//        /// <summary>
//        /// IAccountService
//        /// </summary>
//        private readonly IAuthenticationService _accountService;

//        public CustomerByIdQueryHandler(ITransportationRepository _transportationRepository,
//            IAuthenticationService accountServicee)
//        {
//            _transportationRepository = employeeRepository;
//            _accountService = accountService;
//            _encryptionService = encryptionService;
//        }

//        public async Task<Transport> Retrieve(QueryTransport query)
//        {
//            var customer = await _transportationRepository.GetTransportById(query.TransportId);
//            return Transport;
//        }
//    }
//}
