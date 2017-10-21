using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Components.DictionaryAdapter;
using Microsoft.Extensions.Options;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TransApp.Core.ShipmentTransporter;
using TransApp.Domain.Addresses;
using TransApp.Domain.Common.Entity;
using TransApp.Domain.Services;
using TransApp.Domain.Services.Addresses;
using TransApp.Domain.Services.Common;
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
        private readonly ICommonService _commonService;

        public ShipmentModelTests()
        {
            AutoMapperBootStrapper.CreateMapperConfiguration();
            IOptions<SiteDbContext> dataBaseConfig =
                new OptionsManager<SiteDbContext>(new IConfigureOptions<SiteDbContext>[0]);
            dataBaseConfig.Value.DefaultConnectionString =
                @"Data Source=haw.trustteam.be,41433; Initial Catalog=bocotransapp; Integrated Security=false;User ID =sa;Password=abit@complicated35; MultipleActiveResultSets=True";

            IUnitOfWork unitOfWork = new UnitOfWork(dataBaseConfig);
            _shipmentService = new ShipmentService(unitOfWork, null);
            _commonService = new CommonService(unitOfWork, null);
        }

        [TestMethod]
        public async Task Test_SaveShipment_AddOnlyMaster_Is_Ok()
        {
            ShipmentModel currentShipment = new ShipmentModel();
            
            currentShipment.Id = -1;
            currentShipment.CustomerId = 1;
            currentShipment.DeliveryDate = DateTime.Now;
            currentShipment.DateModified = DateTime.Now;
            currentShipment.DateCreated = DateTime.Now;
            currentShipment.PickUpDate = DateTime.Now;
            currentShipment.PoNumber = "12345678";
            currentShipment.ReceiverAddressId = 70;
            currentShipment.ReceiverContactPerson = "dan MIhai";
            currentShipment.ReceiverPhone = "4443333";
            currentShipment.ReceiverRemark = "Iași Buc";
            currentShipment.Reference = "aaaa";
            currentShipment.SenderAddressId = 70;
            currentShipment.SenderContactPerson = "gicu turcu";
            currentShipment.SenderPhone = "434343434";
            currentShipment.SenderRemark = "Iași to see availability";
            currentShipment.ShipmentStatus = "UAS";
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
            currentShipment.ReceiverAvailabilities = new EditableList<AvailabilityEntityModel>();
            currentShipment.SenderAvailabilities = new EditableList<AvailabilityEntityModel>();
            AvailabilityEntityModel receiver = new AvailabilityEntityModel();
            receiver.AmStop = "11:30";
            receiver.AmStart = "08:00";
            receiver.PmStart = "15:00";
            receiver.PmStop = "18:00";
            AvailabilityEntityModel sender = new AvailabilityEntityModel();
            sender.AmStart = "07:00";
            sender.AmStop = "11:34";
            sender.PmStart = "18:00";
            sender.PmStop = "20:00";
            currentShipment.ReceiverAvailabilities.Add(receiver);
            currentShipment.SenderAvailabilities.Add(sender);

            currentShipment.Id = -1;
            currentShipment.CustomerId = 1;
            currentShipment.DeliveryDate = DateTime.Now;
            currentShipment.DateModified = DateTime.Now;
            currentShipment.DateCreated = DateTime.Now;
            currentShipment.PickUpDate = DateTime.Now;
            currentShipment.PoNumber = "12345678";
            currentShipment.ReceiverAddressId = 70;
            currentShipment.ReceiverContactPerson = "dan MIhai";
            currentShipment.ReceiverPhone = "4443333";
            currentShipment.ReceiverRemark = "Iași Buc";
            currentShipment.Reference = "aaaa";
            currentShipment.SenderAddressId = 70;
            currentShipment.SenderContactPerson = "gicu turcu";
            currentShipment.SenderPhone = "434343434";
            currentShipment.SenderRemark = "Iași to see availability";
            currentShipment.ShipmentStatus = "UAS";
            currentShipment.TotalPrice = 5554;
            currentShipment.TotalQuatity = 6666;
            currentShipment.TotalVolume = 333;
            currentShipment.TotalWeight = 5454;
            currentShipment.TransporterId = 1;
            currentShipment.UserIdCreated = 100000;
            currentShipment.UserIdModified = 999;

            //we must see with parentdetailid
            List<ShipmentDetailRowModel> shipmentDetail = new List<ShipmentDetailRowModel>();
            ShipmentDetailModel aShipmentDetailModel = new ShipmentDetailModel
            {
                Height = 1,
                Length = 10,
                Quantity = 111,
                PackTypeId = 1,
                Weight = 11,
                Width = 232
            };
            ShipmentDetailModel aShipmentDetailModel2 = new ShipmentDetailModel
            {
                Height = 1,
                Length = 10,
                Quantity = 111,
                PackTypeId = 1,
                Weight = 11,
                Width = 232
            };
            ShipmentDetailRowModel detail = new ShipmentDetailRowModel();
            detail.Master = aShipmentDetailModel;
            List<ShipmentDetailModel> extras = new EditableList<ShipmentDetailModel>();
            extras.Add(aShipmentDetailModel2);
            detail.Extras = extras;
            shipmentDetail.Add(detail);
            currentShipment.ShipmentDetails = shipmentDetail;

            List<FacilityEntityModel> shipmentReceiverFacilities =
                new EditableList<FacilityEntityModel>();
            FacilityEntityModel aShipmentReceiverFacilityModel = new FacilityEntityModel
            {
                Active = true,
                FacilityId = 1
            };
            shipmentReceiverFacilities.Add(aShipmentReceiverFacilityModel);
            currentShipment.ReceiverFacilities = shipmentReceiverFacilities;

            List<RequirementEntityModel> shipmentReceiverRequirements =
                new EditableList<RequirementEntityModel>();
            RequirementEntityModel aShipmentReceiverRequirementModel = new RequirementEntityModel
            {
                Active = true,
                AmountInsurance = 11,
                RequirementId = 11
            };
            shipmentReceiverRequirements.Add(aShipmentReceiverRequirementModel);
            currentShipment.ReceiverRequirements = shipmentReceiverRequirements;

            List<TruckEntityModel> shipmentReceiverTrucks = new EditableList<TruckEntityModel>();
            TruckEntityModel aShipmentReceiverTruckModel = new TruckEntityModel
            {
                Active = true,
                TruckId = 5
            };
            shipmentReceiverTrucks.Add(aShipmentReceiverTruckModel);
            currentShipment.ReceiverTrucks = shipmentReceiverTrucks;

            List<FacilityEntityModel> shipmentSenderFacilities = new EditableList<FacilityEntityModel>();
            FacilityEntityModel aShipmentSenderFacilityModel = new FacilityEntityModel
            {
                Active = true,
                FacilityId = 1
            };
            shipmentSenderFacilities.Add(aShipmentSenderFacilityModel);
            currentShipment.SenderFacilities = shipmentSenderFacilities;

            List<RequirementEntityModel> shipmentSenderRequirements =
                new EditableList<RequirementEntityModel>();
            RequirementEntityModel aShipmentSenderRequirementModel = new RequirementEntityModel
            {
                Active = true,
                AmountInsurance = 999,
                RequirementId = 11
            };
            shipmentSenderRequirements.Add(aShipmentSenderRequirementModel);
            currentShipment.SenderRequirements = shipmentSenderRequirements;

            List<TruckEntityModel> shipmentSenderTrucks = new EditableList<TruckEntityModel>();
            TruckEntityModel aShipmentSenderTruckModel = new TruckEntityModel
            {
                Active = true,
                TruckId = 6
            };
            shipmentSenderTrucks.Add(aShipmentSenderTruckModel);
            currentShipment.SenderTrucks = shipmentSenderTrucks;

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
                TransporterId = 1,
                ExpiredDate = DateTime.Now
            };
            shipmentTransporters.Add(aShipmentTransporterModel);
            currentShipment.Transporters = shipmentTransporters;
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
                    await _shipmentService.Get(35,1);
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
                    await _shipmentService.GetAll(new FilterShipment {CustomerId = 1, StartItem = 0, Amount = 50});
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }

        [TestMethod]
        public async Task Test_GetShipmentByStatuses_Is_Ok()
        {
            try
            {
                FilterShipment f = new FilterShipment {CustomerId = 1, StartItem = 0,
                    Amount = 5,
                    TransporterStatus = ShipmentTransporterStatus.Unassigned
                };
                List<ShipmentModel> model =
                    await _shipmentService.GetAll(f);

                f.TransporterStatus = ShipmentTransporterStatus.Completed;
                model =
                   await _shipmentService.GetAll(f);

                f.TransporterStatus = ShipmentTransporterStatus.OpenMarket;
                model =
                   await _shipmentService.GetAll(f);

                f.TransporterStatus = ShipmentTransporterStatus.Unassigned;
                model =
                   await _shipmentService.GetAll(f);

                f.TransporterStatus= ShipmentTransporterStatus.Assigned;
                model =
                   await _shipmentService.GetAll(f);
                f.Declined=true;
                model =
                   await _shipmentService.GetAll(f);

                f.Declined = false;
                f.Pending = true;
                model =
                   await _shipmentService.GetAll(f);
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }

        [TestMethod]
        public async Task Test_GetShipmentGroups()
        {
            try
            {
                List<ShipmentTransporterFilterModel> result = await _shipmentService.GetShipmentFilter(1);
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
                    await _shipmentService.Get(39);

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
                    await _shipmentService.Get(44);

                foreach (var av in currentShipmentModel.ShipmentDetails)
                {
                    av.Master.Length = 54545555;
                    if (av.Extras.Any())
                    {
                        foreach (var extra in av.Extras)
                        {
                            extra.ToRemove = true;
                        }
                    }
                }
                foreach (var av in currentShipmentModel.ReceiverFacilities)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ReceiverRequirements)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ReceiverTrucks)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.SenderFacilities)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.SenderRequirements)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.ReceiverTrucks)
                {
                    av.Active = false;
                }
                foreach (var av in currentShipmentModel.Transporters)
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


        [TestMethod]
        public async Task Test_AssignToOpenMarket_Is_Ok()
        {
            if (await _shipmentService.AssignToOpenMarket(1000, 44))
            {
                Assert.IsTrue(true);
                return;
            }
            Assert.IsFalse(true);
        }

        [TestMethod]
        public async Task Test_MoveToUnassigned_Is_Ok()
        {
            if (await _shipmentService.MoveToUnassigned(1000, 40))
            {
                Assert.IsTrue(true);
                return;
            }
            Assert.IsFalse(true);
        }

        [TestMethod]
        public async Task Test_ConfirmTransporter_Is_Ok()
        {
            if (await _shipmentService.ConfirmTransporter(1000, 24,1))
            {
                Assert.IsTrue(true);
                return;
            }
            Assert.IsFalse(true);
        }

        [TestMethod]
        public async Task Test_ShipmentGetAllCount_Is_Ok()
        {
            try
            {
                var amount =
                   await _shipmentService.GetAllCount(new FilterShipment()
                   {
                       CustomerId = 1,
                       StartItem = 0,
                       Amount = 15,
                   });
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
            Assert.IsTrue(true);
        }

        [TestMethod]
        public async Task Test_UnassignAndOpenMarket_Is_Ok()
        {
            if (await _shipmentService.UnassignAndMoveToOpenMarket(1000, 42))
            {
                Assert.IsTrue(true);
                return;
            }
            Assert.IsFalse(true);
        }

        [TestMethod]
        public async Task Test_GetParameters_Is_Ok()
        {
            try
            {
                var a = await _commonService.GetFacilities("XX");
                {
                    Assert.IsTrue(true);
                    return;
                }
            }catch { Assert.IsFalse(true);}
        }

        [TestMethod]
        public async Task Test_GetShipmentTransporters_Is_Ok()
        {
            try
            {
                var a =
                    await _shipmentService.GetShipmentTransporterAll(new FilterShipmentTransporter {ShipmentId = 45});
                ;
                {
                    Assert.IsTrue(true);
                    return;
                }
            }
            catch (Exception ex)
            {
                Assert.IsFalse(true);
            }
        }
    }
}
