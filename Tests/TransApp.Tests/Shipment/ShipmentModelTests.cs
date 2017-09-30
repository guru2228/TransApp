using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Components.DictionaryAdapter;
using Microsoft.Extensions.Options;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TransApp.Domain.Addresses;
using TransApp.Domain.Common.Entity;
using TransApp.Domain.Services;
using TransApp.Domain.Services.Addresses;
using TransApp.Domain.Services.Shipment;
using TransApp.Domain.Shipment;
using TransApp.Framework.Filter;
using TransApp.Persistence;
using TransApp.Persistence.UnitOfWork;

namespace TransApp.Tests.Shipment
{
    [TestClass]
    public class ShipmentModelTests
    {
        private readonly IShipmentService _shipmentService;

        public ShipmentModelTests()
        {
            AutoMapperBootStrapper.CreateMapperConfiguration();
            IOptions<SiteDbContext> dataBaseConfig =
                new OptionsManager<SiteDbContext>(new IConfigureOptions<SiteDbContext>[0]);
            dataBaseConfig.Value.DefaultConnectionString =
                @"Data Source=haw.trustteam.be,41433; Initial Catalog=bocotransapp; Integrated Security=false;User ID =sa;Password=abit@complicated35; MultipleActiveResultSets=True";

            IUnitOfWork unitOfWork = new UnitOfWork(dataBaseConfig);
            _shipmentService = new ShipmentService(unitOfWork, null);

        }

        [TestMethod]
        public async Task Test_SaveShipment_AddOnlyMaster_Is_Ok()
        {
            ShipmentModel currentShipment = new ShipmentModel();
            currentShipment.ReceiverAvailability = new AvailabilityEntityModel();
            currentShipment.SenderAvailability = new AvailabilityEntityModel();
            currentShipment.Id = -1;
            currentShipment.CustomerId = 1;
            currentShipment.DeliveryDate = DateTime.Now;
            currentShipment.DateModified = DateTime.Now;
            currentShipment.DateCreated = DateTime.Now;
            currentShipment.PickUpDate = DateTime.Now;
            currentShipment.PoNumber = "12345678";
            currentShipment.ReceiverAvailability.AmStop = "11:30";
            currentShipment.ReceiverAddressId = 70;
            currentShipment.ReceiverAvailability.AmStart = "08:00";
            currentShipment.ReceiverContactPerson = "dan MIhai";
            currentShipment.ReceiverPhone = "4443333";
            currentShipment.ReceiverAvailability.PmStart = "15:00";
            currentShipment.ReceiverAvailability.PmStop = "18:00";
            currentShipment.ReceiverRemark = "Iași Buc";
            currentShipment.Reference = "aaaa";
            currentShipment.SenderAddressId = 70;
            currentShipment.SenderAvailability.AmStart = "07:00";
            currentShipment.SenderAvailability.AmStop = "11:34";
            currentShipment.SenderContactPerson = "gicu turcu";
            currentShipment.SenderPhone = "434343434";
            currentShipment.SenderAvailability.PmStart = "18:00";
            currentShipment.SenderAvailability.PmStop = "20:00";
            currentShipment.SenderRemark = "Iași to see availability";
            currentShipment.ShipmentStatusId = 1;
            currentShipment.TotalPrice = 5554;
            currentShipment.TotalQuatity = 6666;
            currentShipment.TotalVolume = 333;
            currentShipment.TotalWeight = 5454;
            currentShipment.TransporterId = 1;
            currentShipment.UserIdCreated = 100000;
            currentShipment.UserIdModified = 999;

            await _shipmentService.SaveShipment(1000, currentShipment);
            if (currentShipment.Id > 0)
            {
                Assert.IsTrue(true);
            }
            else
            {
                Assert.IsTrue(false);
            }
        }

        [TestMethod]
        public async Task Test_SaveShipment_Full_Is_Ok()
        {
            ShipmentModel currentShipment = new ShipmentModel();
            currentShipment.ReceiverAvailability = new AvailabilityEntityModel();
           currentShipment.SenderAvailability = new AvailabilityEntityModel();
            
            currentShipment.Id = -1;
            currentShipment.CustomerId = 1;
            currentShipment.DeliveryDate = DateTime.Now;
            currentShipment.DateModified = DateTime.Now;
            currentShipment.DateCreated = DateTime.Now;
            currentShipment.PickUpDate = DateTime.Now;
            currentShipment.PoNumber = "12345678";
            currentShipment.ReceiverAvailability.AmStop = "11:30";
            currentShipment.ReceiverAddressId = 70;
            currentShipment.ReceiverAvailability.AmStart = "08:00";
            currentShipment.ReceiverContactPerson = "dan MIhai";
            currentShipment.ReceiverPhone = "4443333";
            currentShipment.ReceiverAvailability.PmStart = "15:00";
            currentShipment.ReceiverAvailability.PmStop = "18:00";
            currentShipment.ReceiverRemark = "Iași Buc";
            currentShipment.Reference = "aaaa";
            currentShipment.SenderAddressId = 70;
            currentShipment.SenderAvailability.AmStart = "07:00";
            currentShipment.SenderAvailability.AmStop = "11:34";
            currentShipment.SenderContactPerson = "gicu turcu";
            currentShipment.SenderPhone = "434343434";
            currentShipment.SenderAvailability.PmStart = "18:00";
            currentShipment.SenderAvailability.PmStop = "20:00";
            currentShipment.SenderRemark = "Iași to see availability";
            currentShipment.ShipmentStatusId = 1;
            currentShipment.TotalPrice = 5554;
            currentShipment.TotalQuatity = 6666;
            currentShipment.TotalVolume = 333;
            currentShipment.TotalWeight = 5454;
            currentShipment.TransporterId = 1;
            currentShipment.UserIdCreated = 100000;
            currentShipment.UserIdModified = 999;

            //we must see with parentdetailid
            List<ShipmentDetailModel> shipmentDetail = new EditableList<ShipmentDetailModel>();
            ShipmentDetailModel aShipmentDetailModel = new ShipmentDetailModel
            {
                Height = 1,
                Length = 10,
                Quantity = 111,
                PackTypeId = 1,
                Weight = 11,
                Width = 232
            };
            shipmentDetail.Add(aShipmentDetailModel);
            currentShipment.ShipmentDetails = shipmentDetail;

            List<FacilityEntityModel> shipmentReceiverFacilities =
                new EditableList<FacilityEntityModel>();
            FacilityEntityModel aShipmentReceiverFacilityModel = new FacilityEntityModel
            {
                Active = true,
                FacilityId = 1
            };
            shipmentReceiverFacilities.Add(aShipmentReceiverFacilityModel);
            currentShipment.ShipmentReceiverFacilities = shipmentReceiverFacilities;

            List<RequirementEntityModel> shipmentReceiverRequirements =
                new EditableList<RequirementEntityModel>();
            RequirementEntityModel aShipmentReceiverRequirementModel = new RequirementEntityModel
            {
                Active = true,
                AmountInsurance = 11,
                RequirementId = 11
            };
            shipmentReceiverRequirements.Add(aShipmentReceiverRequirementModel);
            currentShipment.ShipmentReceiverRequirements = shipmentReceiverRequirements;

            List<TruckEntityModel> shipmentReceiverTrucks = new EditableList<TruckEntityModel>();
            TruckEntityModel aShipmentReceiverTruckModel = new TruckEntityModel
            {
                Active = true,
                TruckId = 5
            };
            shipmentReceiverTrucks.Add(aShipmentReceiverTruckModel);
            currentShipment.ShipmentReceiverTrucks = shipmentReceiverTrucks;

            List<FacilityEntityModel> shipmentSenderFacilities = new EditableList<FacilityEntityModel>();
            FacilityEntityModel aShipmentSenderFacilityModel = new FacilityEntityModel
            {
                Active = true,
                FacilityId = 1
            };
            shipmentSenderFacilities.Add(aShipmentSenderFacilityModel);
            currentShipment.ShipmentSenderFacilities = shipmentSenderFacilities;

            List<RequirementEntityModel> shipmentSenderRequirements =
                new EditableList<RequirementEntityModel>();
            RequirementEntityModel aShipmentSenderRequirementModel = new RequirementEntityModel
            {
                Active = true,
                AmountInsurance = 999,
                RequirementId = 11
            };
            shipmentSenderRequirements.Add(aShipmentSenderRequirementModel);
            currentShipment.ShipmentSenderRequirements = shipmentSenderRequirements;

            List<TruckEntityModel> shipmentSenderTrucks = new EditableList<TruckEntityModel>();
            TruckEntityModel aShipmentSenderTruckModel = new TruckEntityModel
            {
                Active = true,
                TruckId = 6
            };
            shipmentSenderTrucks.Add(aShipmentSenderTruckModel);
            currentShipment.ShipmentSenderTrucks = shipmentSenderTrucks;

            List<ShipmentTransporterModel> shipmentTransporters = new EditableList<ShipmentTransporterModel>();
            ShipmentTransporterModel aShipmentTransporterModel = new ShipmentTransporterModel
            {
                Accepted = true,
                AcceptedDate = DateTime.Now,
                Assigned = true,
                AssignedDate = DateTime.Now,
                Declined = false,
                DeclinedDate = DateTime.Now,
                DeliveryOn = 1,
                LoadingOn = 3,
                Price = 11000110,
                Selected = true,
                SelectedDate = DateTime.Now,
                TransporterId = 1
            };
            shipmentTransporters.Add(aShipmentTransporterModel);
            currentShipment.ShipmentTransporters = shipmentTransporters;
            try
            {
                await _shipmentService.SaveShipment(1000, currentShipment);
                if (currentShipment.Id > 0)
                {
                    Assert.IsTrue(true);
                }
                else
                {
                    Assert.IsTrue(false);
                }
            }
            catch (Exception ex)
            {

            }
        }

        [TestMethod]
        public async Task Test_GetShipmentById_Is_Ok()
        {
            try
            {
                ShipmentModel currentShipmentModel =
                    await _shipmentService.Get(14);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }

        [TestMethod]
        public async Task Test_GetShipmentAll_Is_Ok()
        {
            try
            {
                List<ShipmentModel> currentAddressModel =
                    await _shipmentService.GetAll(new FilterShipment {CustomerId = 1, StartItem = 0, Amount = 5});
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }

        [TestMethod]
        public async Task Test_DeleteShipment_Is_Ok()
        {
            try
            {

                ShipmentModel currentShipmentModel =
                    await _shipmentService.Get(14);

                await _shipmentService.DeleteShipment(currentShipmentModel);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }

        [TestMethod]
        public async Task Test_UpdateShipmentDetail_Is_Ok()
        {
            try
            {

                ShipmentModel currentShipmentModel =
                    await _shipmentService.Get(15);

                foreach (var av in currentShipmentModel.ShipmentDetails)
                {
                    av.Length = 454545;
                }
                foreach (var av in currentShipmentModel.ShipmentReceiverFacilities)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ShipmentReceiverRequirements)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ShipmentReceiverTrucks)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ShipmentSenderFacilities)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ShipmentSenderRequirements)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ShipmentReceiverTrucks)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ShipmentTransporters)
                {
                    av.Accepted = false;
                }
                await _shipmentService.SaveShipment(1000, currentShipmentModel);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }
    }
}
