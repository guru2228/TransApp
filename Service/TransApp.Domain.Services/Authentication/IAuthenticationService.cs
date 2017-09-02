using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.Domain.Authentication;

namespace TransApp.Domain.Services.Authentication
{
 public   interface IAuthenticationService
 {
     Task<Domain.Authentication.ApplicationUser> GetUser(string login);
     Task<bool> IsUserValid(string login, string password);
 }
}
