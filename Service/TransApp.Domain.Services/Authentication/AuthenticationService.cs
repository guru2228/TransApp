using System.Linq;
using System.Threading.Tasks;
using TransApp.Core.CacheService;
using TransApp.Core.Helper;
using TransApp.Domain.Authentication;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Domain.Services.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {

        private readonly IUnitOfWork _unitOfWork;

        private readonly ICacheService _cacheService;

        public AuthenticationService(IUnitOfWork unitOfWork, ICacheService cacheService)
        {
            _unitOfWork = unitOfWork;
            _cacheService = cacheService;
        }

        public async Task<ApplicationUser> GetUser(string login)
        {
            var user =
                (await _unitOfWork.ApplicationUserRepository.GetAllAsync()).FirstOrDefault(item => item.Login == login);
            if (user != null)
            {
                var customerUser =
                    (await _unitOfWork.CustomerUserRepository.GetAsync("UserId=" + user.Id));
                return new ApplicationUser
                {
                    Id = user.Id,
                    Login = user.Login,
                    FirstName = user.FirstName,
                    Name = user.LastName,
                    Password = user.Password,
                    CustomerId = customerUser?.CustomerId
                };
            }
            return null;
        }

        public async Task<bool> IsUserValid(string login, string password)
        {
            var user =
                (await _unitOfWork.ApplicationUserRepository.GetAllAsync()).FirstOrDefault(item => item.Login == login);
            return string.Equals(PasswordHashingService.HashSha2String(password), user.Password);
        }
    }
}
