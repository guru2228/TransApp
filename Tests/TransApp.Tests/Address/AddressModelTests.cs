using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Components.DictionaryAdapter;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Dapper;
using Microsoft.Extensions.Options;
using TransApp.Core.CacheService;
using TransApp.Domain.Addresses;
using TransApp.Domain.Services;
using TransApp.Domain.Services.Addresses;
using TransApp.Persistence;
using TransApp.Persistence.Repository;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Tests.Address
{
    [TestClass]
    public class AddressModelTests
    {
        private readonly IAddressesService _addressesService;
        
        public AddressModelTests()
        {
            AutoMapperBootStrapper.CreateMapperConfiguration();
            IOptions<SiteDbContext> dataBaseConfig =
                new OptionsManager<SiteDbContext>(new IConfigureOptions<SiteDbContext>[0]);
            dataBaseConfig.Value.DefaultConnectionString =
                @"Data Source = testserver; Initial Catalog = bocotransapp; Integrated Security = false; User ID = sa; Password = abit@complicated35; MultipleActiveResultSets = True";

            IUnitOfWork unitOfWork = new UnitOfWork(dataBaseConfig);
            _addressesService = new AddressesService(unitOfWork, null);
           
        }

        [TestMethod]
        public void Test_SaveAddress_Add_Is_Ok()
        {
            AddressModel currentAdrress = new AddressModel();
            currentAdrress.Id = -1;
            currentAdrress.ContactPerson = "Test Boco";
            currentAdrress.CustomerId = 1;
            currentAdrress.DateModified = DateTime.Now;
            currentAdrress.DateCreated=DateTime.Now;
            currentAdrress.Email = "b.c@test.be";
            currentAdrress.Name = "Test Address1";
            currentAdrress.Phone = "021311";
            currentAdrress.Remark = "Saved by Unit Test";
            currentAdrress.UserIdCreated = 1;
            currentAdrress.UserIdModified = 1;
            currentAdrress.Location=new AddressLocationModel();
            currentAdrress.Availabilities=new EditableList<AddressAvailabilityModel>();
            currentAdrress.Trucks=new EditableList<AddressTruckModel>();
            currentAdrress.Requirements=new EditableList<AddressRequirementModel>();
            currentAdrress.Facilities=new EditableList<AddressFacilityModel>();
            _addressesService.SaveAddress(currentAdrress);
        }
    }
}
