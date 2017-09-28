using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Options;
using TransApp.DataModel.Dto;
using TransApp.Persistence.Repository;
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.UnitOfWork
{
    /// <summary>
    /// The Entity Framework implementation of IUnitOfWork
    /// </summary>
    public class UnitOfWork : IUnitOfWork
    {
        private IDbConnection _connection;

        /// <summary>
        /// Db context
        /// </summary>
        // private readonly HawWebDbContext _context ;
        private readonly IOptions<SiteDbContext> _dataBaseConfig;

        private GenericRepository<ApplicationUser> _applicationUserRepository;
        private GenericRepository<ModuleTranslationResource> _moduleTranslationResourceRepository;
        private GenericRepository<PublicTranslationResource> _publicTranslationResourceRepository;
        private GenericRepository<Dictionary> _dictionaryRepository;
        private IAddressesRepository _addressesRepository;
        private IShipmentRepository _shipmentRepository;
        private GenericRepository<AddressAvailability> _addressAvailabilitiesRepository;
        private GenericRepository<AddressFacility> _addressFacilityRepository;
        private GenericRepository<AddressRequirement> _addressRequirementRepository;
        private GenericRepository<AddressTruck> _addressTruckRepository;
        private GenericRepository<Customer> _customerRepository;
        private GenericRepository<CustomerUser> _customerUserRepository;
        private IFacilityRepository _facilityRepository;
        private IRequirementRepository _requirementRepository;
        private IShipmentStatusRepository _shipmentStatusRepository;
        private ITruckRepository _truckRepository;
        private IPackTypeRepository _packTypeRepository;
        private GenericRepository<ShipmentDetail> _shipmentDetailRepository;
        private GenericRepository<ShipmentReceiverFacility> _shipmentReceiverFacilityRepository;
        private GenericRepository<ShipmentReceiverRequirement> _shipmentReceiverRequirementRepository;
        private GenericRepository<ShipmentReceiverTruck> _shipmentReceiverTruckRepository;
        private GenericRepository<ShipmentSenderFacility> _shipmentSenderFacilityRepository;
        private GenericRepository<ShipmentSenderRequirement> _shipmentSenderRequirementRepository;
        private GenericRepository<ShipmentSenderTruck> _shipmentSenderTruckRepository;
        private IShipmentTransporterRepository _shipmentTransporterRepository;

        public UnitOfWork(IOptions<SiteDbContext> dataBaseConfig)
        {
            _dataBaseConfig = dataBaseConfig;
        }

        /// <summary>
        /// Begin a transaction
        /// </summary>
        public IDbTransaction BeginTransaction()
        {
            _connection = new SqlConnection(_dataBaseConfig.Value.DefaultConnectionString);
            _connection.Open();
           return _connection.BeginTransaction();
        }

        /// <summary>
        /// Commit and end a transaction
        /// </summary>
        public void Commit(IDbTransaction transaction)
        {
            try
            {
                transaction.Commit();
            }
            catch
            {
                transaction.Rollback();
                throw;
            }
            finally
            {
                if (transaction != null)
                {
                    transaction.Dispose();
                    transaction = null;
                }

               // if (_connection != null)
               // {
                  //  _connection.Dispose();
                 //   _connection = null;
              //  }
            }
        }

        protected virtual void Dispose(bool disposing)
        {
            if (_connection != null)
            {
                _connection.Dispose();
                _connection = null;
            }
        }
        public void Dispose()
        {
            //Dispose(true);
            //GC.SuppressFinalize(this);
        }

        /// <summary>
        /// ApplicationUserRepository
        /// </summary>
        public GenericRepository<ApplicationUser> ApplicationUserRepository
        {
            get
            {
                if (this._applicationUserRepository == null)
                {
                    this._applicationUserRepository = new GenericRepository<ApplicationUser>("ApplicationUser", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _applicationUserRepository;
            }
        }

        /// <summary>
        /// ModuleTranslationResourceRepository
        /// </summary>
        public GenericRepository<ModuleTranslationResource> ModuleTranslationResourceRepository
        {
            get
            {

                if (this._moduleTranslationResourceRepository == null)
                {
                    this._moduleTranslationResourceRepository =
                        new GenericRepository<ModuleTranslationResource>("ModuleTranslationResource",
                            _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _moduleTranslationResourceRepository;
            }
        }

        /// <summary>
        /// ApplicationUserRepository
        /// </summary>
        public GenericRepository<Dictionary> DictionaryRepository
        {
            get
            {
                if (this._dictionaryRepository == null)
                {
                    this._dictionaryRepository = new GenericRepository<Dictionary>("Dictionary", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _dictionaryRepository;
            }
        }

        /// <summary>
        /// PublicTranslationResourceRepository
        /// </summary>
        public GenericRepository<PublicTranslationResource> PublicTranslationResourceRepository
        {
            get
            {
                if (this._publicTranslationResourceRepository == null)
                {
                    this._publicTranslationResourceRepository = new GenericRepository<PublicTranslationResource>("PublicTranslationResource", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _publicTranslationResourceRepository;
            }
        }

        /// <summary>
        /// AddressesRepository
        /// </summary>
        public IAddressesRepository AddressesRepository
        {
            get
            {
                if (this._addressesRepository == null)
                {
                    this._addressesRepository = new AddressesRepository("Address", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _addressesRepository;
            }
        }

        /// <summary>
        /// FacilityRepository
        /// </summary>
        public IFacilityRepository FacilityRepository
        {
            get
            {
                if (this._facilityRepository == null)
                {
                    this._facilityRepository = new FacilityRepository("Facility", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _facilityRepository;
            }
        }

        /// <summary>
        /// RequirementRepository
        /// </summary>
        public IRequirementRepository RequirementRepository
        {
            get
            {
                if (this._requirementRepository == null)
                {
                    this._requirementRepository = new RequirementRepository("Requirement", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _requirementRepository;
            }
        }

        /// <summary>
        /// ShipmentStatusRepository
        /// </summary>
        public IShipmentStatusRepository ShipmentStatusRepository
        {
            get
            {
                if (this._shipmentStatusRepository == null)
                {
                    this._shipmentStatusRepository = new ShipmentStatusRepository("ShipmentStatus", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentStatusRepository;
            }
        }

        /// <summary>
        /// TruckRepository
        /// </summary>
        public ITruckRepository TruckRepository
        {
            get
            {
                if (this._truckRepository == null)
                {
                    this._truckRepository = new TruckRepository("Truck", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _truckRepository;
            }
        }

        /// <summary>
        /// PackTypeRepository
        /// </summary>
        public IPackTypeRepository PackTypeRepository
        {
            get
            {
                if (this._packTypeRepository == null)
                {
                    this._packTypeRepository = new PackTypeRepository("PackType", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _packTypeRepository;
            }
        }

        /// <summary>
        /// AddressAvailabilitiesRepository
        /// </summary>
        public GenericRepository<AddressAvailability> AddressAvailabilitiesRepository
        {
            get
            {
                if (this._addressAvailabilitiesRepository == null)
                {
                    this._addressAvailabilitiesRepository = new GenericRepository<AddressAvailability>("AddressAvailability", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _addressAvailabilitiesRepository;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public GenericRepository<AddressFacility> AddressFacilityRepository
        {
            get
            {
                if (this._addressFacilityRepository == null)
                {
                    this._addressFacilityRepository = new GenericRepository<AddressFacility>("AddressFacility", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _addressFacilityRepository;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public GenericRepository<AddressRequirement> AddressRequirementRepository
        {
            get
            {
                if (this._addressRequirementRepository == null)
                {
                    this._addressRequirementRepository = new GenericRepository<AddressRequirement>("AddressRequirement", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _addressRequirementRepository;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        public GenericRepository<AddressTruck> AddressTruckRepository
        {
            get
            {
                if (this._addressTruckRepository == null)
                {
                    this._addressTruckRepository = new GenericRepository<AddressTruck>("AddressTruck", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _addressTruckRepository;
            }
        }

        public GenericRepository<Customer> CustomerRepository
        {
            get
            {
                if (this._customerRepository == null)
                {
                    this._customerRepository = new GenericRepository<Customer>("Customer", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _customerRepository;
            }
        }
        public GenericRepository<CustomerUser> CustomerUserRepository
        {
            get
            {
                if (this._customerUserRepository == null)
                {
                    this._customerUserRepository = new GenericRepository<CustomerUser>("CustomerUser", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _customerUserRepository;
            }
        }

        /// <summary>
        /// AddressesRepository
        /// </summary>
        public IShipmentRepository ShipmentRepository
        {
            get
            {
                if (this._shipmentRepository == null)
                {
                    this._shipmentRepository = new ShipmentRepository("Shipment", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentRepository;
            }
        }

        public GenericRepository<ShipmentDetail> ShipmentDetailRepository
        {
            get
            {
                if (this._shipmentDetailRepository == null)
                {
                    this._shipmentDetailRepository =  new GenericRepository<ShipmentDetail>("ShipmentDetail", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentDetailRepository;
            }
        }
        public GenericRepository<ShipmentReceiverFacility> ShipmentReceiverFacilityRepository
        {
            get
            {
                if (this._shipmentReceiverFacilityRepository == null)
                {
                    this._shipmentReceiverFacilityRepository = new GenericRepository<ShipmentReceiverFacility>("ShipmentReceiverFacility", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentReceiverFacilityRepository;
            }
        }
        public GenericRepository<ShipmentReceiverRequirement> ShipmentReceiverRequirementRepository
        {
            get
            {
                if (this._shipmentReceiverRequirementRepository == null)
                {
                    this._shipmentReceiverRequirementRepository = new GenericRepository<ShipmentReceiverRequirement>("ShipmentReceiverRequirement", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentReceiverRequirementRepository;
            }
        }
        public GenericRepository<ShipmentReceiverTruck> ShipmentReceiverTruckRepository
        {
            get
            {
                if (this._shipmentReceiverTruckRepository == null)
                {
                    this._shipmentReceiverTruckRepository = new GenericRepository<ShipmentReceiverTruck>("ShipmentReceiverTruck", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentReceiverTruckRepository;
            }
        }
        public GenericRepository<ShipmentSenderFacility> ShipmentSenderFacilityRepository
        {
            get
            {
                if (this._shipmentSenderFacilityRepository == null)
                {
                    this._shipmentSenderFacilityRepository = new GenericRepository<ShipmentSenderFacility>("ShipmentSenderFacility", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentSenderFacilityRepository;
            }
        }
        public GenericRepository<ShipmentSenderRequirement> ShipmentSenderRequirementRepository
        {
            get
            {
                if (this._shipmentSenderRequirementRepository == null)
                {
                    this._shipmentSenderRequirementRepository = new GenericRepository<ShipmentSenderRequirement>("ShipmentSenderRequirement", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentSenderRequirementRepository;
            }
        }
        public GenericRepository<ShipmentSenderTruck> ShipmentSenderTruckRepository
        {
            get
            {
                if (this._shipmentSenderTruckRepository == null)
                {
                    this._shipmentSenderTruckRepository = new GenericRepository<ShipmentSenderTruck>("ShipmentSenderTruck", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentSenderTruckRepository;
            }
        }
        public IShipmentTransporterRepository ShipmentTransporterRepository
        {
            get
            {
                if (this._shipmentTransporterRepository == null)
                {
                    this._shipmentTransporterRepository = new ShipmentTransporterRepository("ShipmentTransporter", _dataBaseConfig.Value.DefaultConnectionString);
                }
                return _shipmentTransporterRepository;
            }
        }
    }
}
