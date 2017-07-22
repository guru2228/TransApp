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
     ApplicationUser GetUser(string userName);
 }
}
