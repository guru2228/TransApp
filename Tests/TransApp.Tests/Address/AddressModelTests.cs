using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Components.DictionaryAdapter;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Dapper;
using Microsoft.Extensions.Options;
using TransApp.Application.SeedData;
using TransApp.Core.CacheService;
using TransApp.Domain.Addresses;
using TransApp.Domain.Services;
using TransApp.Domain.Services.Addresses;
using TransApp.Framework.Filter;
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
                @"Data Source=haw.trustteam.be,41433; Initial Catalog=bocotransapp; Integrated Security=false;User ID =sa;Password=abit@complicated35; MultipleActiveResultSets=True";

            IUnitOfWork unitOfWork = new UnitOfWork(dataBaseConfig);
            _addressesService = new AddressesService(unitOfWork, null);
           
        }

        [TestMethod]
        public async Task Test_SaveAddress_AddOnlyMaster_Is_Ok()
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
            currentAdrress.UserIdCreated = 100000;
            currentAdrress.UserIdModified = 999;
            currentAdrress.Location=new AddressLocationModel();
            currentAdrress.Location.Street = "Iași";
           // currentAdrress.Availabilities=new EditableList<AddressAvailabilityModel>();
           // currentAdrress.Trucks=new EditableList<AddressTruckModel>();
           // currentAdrress.Requirements=new EditableList<AddressRequirementModel>();
           // currentAdrress.Facilities=new EditableList<AddressFacilityModel>();
            await _addressesService.SaveAddress(1000,currentAdrress);
            if (currentAdrress.Id > 0 )
            {
                Assert.IsTrue(true);
            }
            else
            {
                Assert.IsTrue(false);
            }
        }

        [TestMethod]
        public async Task Test_SaveAddress_AddTotal_Is_Ok()
        {
            AddressModel currentAdrress = new AddressModel();
            currentAdrress.Id = -1;
            currentAdrress.ContactPerson = "Test Boco";
            currentAdrress.CustomerId = 1;
            currentAdrress.DateModified = DateTime.Now;
            currentAdrress.DateCreated = DateTime.Now;
            currentAdrress.Email = "b.c@test.be";
            currentAdrress.Name = "Test Address1";
            currentAdrress.Phone = "021311";
            currentAdrress.Remark = "Saved by Unit Test";
            currentAdrress.UserIdCreated = 100000;
            currentAdrress.UserIdModified = 999;
            currentAdrress.CommonAvailability = true;

            //location
            AddressLocationModel location = new AddressLocationModel();
            location.StateCode = "444";
            location.City = "Iasi";
            location.CityCode = "700553";
            location.Country = "Romania";
            location.CountryCode = "RO";
            location.Latitude = Convert.ToDecimal(1111.1111);
            location.Longitude = Convert.ToDecimal(2222.2222);
            location.State = "Moldova";
            location.Street = "Silvestru";
            location.StreetNumber = 10;
            location.ZipCode = "555";
            currentAdrress.Location = location;

            //avalability
            List<AddressAvailabilityModel> listAvailabilityModels = new EditableList<AddressAvailabilityModel>();
            AddressAvailabilityModel availability= new AddressAvailabilityModel();
           // availability.AmStart = new TimeSpan(11, 00, 00);
           // availability.AmStop = new TimeSpan(12, 00, 00);
           // availability.PmStart = new TimeSpan(15, 00, 00);
           // availability.PmStop = new TimeSpan(16, 00, 00);
            availability.Day = 1;
            availability.UserIdCreated = 100000;
            availability.UserIdModified = 999;
            listAvailabilityModels.Add(availability);
            currentAdrress.Availabilities = listAvailabilityModels;

            //trucks
            List<AddressTruckModel> listAddressTruckModel = new EditableList<AddressTruckModel>();
            AddressTruckModel truck = new AddressTruckModel();
            truck.Active = true;
            truck.TruckId = 5;
            truck.UserIdCreated = 100000;
            truck.UserIdModified = 999;
            listAddressTruckModel.Add(truck);
            currentAdrress.Trucks = listAddressTruckModel;

            //requirements
            List<AddressRequirementModel> listreRequirementModels = new EditableList<AddressRequirementModel>();
            AddressRequirementModel requirement = new AddressRequirementModel();
            requirement.Active = true;
            requirement.RequirementId = 9;
            requirement.UserIdCreated = 100000;
            requirement.UserIdModified = 999;
            listreRequirementModels.Add(requirement);
            AddressRequirementModel requirement2 = new AddressRequirementModel();
            requirement2.Active = true;
            requirement2.RequirementId = 9;
            requirement2.UserIdCreated = 100000;
            requirement2.UserIdModified = 999;
            listreRequirementModels.Add(requirement2);
            currentAdrress.Requirements = listreRequirementModels;

            //facilities
            List<AddressFacilityModel> listfaFacilityModels = new EditableList<AddressFacilityModel>();
            AddressFacilityModel facility = new AddressFacilityModel();
            facility.Active = true;
            facility.FacilityId = 1;
            facility.UserIdCreated = 100000;
            facility.UserIdModified = 999;
            listfaFacilityModels.Add(facility);
            currentAdrress.Facilities = listfaFacilityModels;

            try
            {
              await _addressesService.SaveAddress(1000,currentAdrress);
            }
            catch (Exception ex)
            {
                
            }
            if (currentAdrress.Id > 0 && listAvailabilityModels[0].Id > 0
                && listAddressTruckModel[0].Id > 0
                && listreRequirementModels[0].Id > 0
                && listfaFacilityModels[0].Id > 0)
            {
                Assert.IsTrue(true);
            }
            else
            {
                Assert.IsTrue(false);
            }
        }

        [TestMethod]
        public async Task Test_GetAddressFiltered_Is_Ok()
        {
            try
            {
                List<AddressModel> currentAddressModel =
                    await _addressesService.GetAll(new FilterAddress {CustomerId = 1,StartItem = 0,Amount = 5,CustomFilter = "stra"});
            }
            catch 
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }

        [TestMethod]
        public async Task Test_GetAddressById_Is_Ok()
        {
            try
            {
                AddressModel currentAddressModel =
                    await _addressesService.Get(22);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }

        [TestMethod]
        public async Task Test_DeleteAddress_Is_Ok()
        {
            try
            {
                AddressModel currentAddressModel =
                    await _addressesService.Get(22);

                await _addressesService.DeleteAddress(currentAddressModel);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }
    }
}
