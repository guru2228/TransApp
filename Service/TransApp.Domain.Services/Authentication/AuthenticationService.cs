using TransApp.Domain.Authentication;

namespace TransApp.Domain.Services.Authentication
{
    public class AuthenticationService : IAuthenticationService
    {
        public ApplicationUser GetUser(string userName)
        {
            return new ApplicationUser {Id = 1, Name = "TestUser"};
        }
    }
}
