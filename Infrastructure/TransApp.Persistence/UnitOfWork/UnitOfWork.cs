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

        private GenericRepository<User> _applicationUserRepository;
        private GenericRepository<ModuleTranslationResource> _moduleTranslationResourceRepository;
        private GenericRepository<PublicTranslationResource> _publicTranslationResourceRepository;
        private IAddressesRepository _addressesRepository;
        private GenericRepository<AddressAvailability> _addressAvailabilitiesRepository;
        private GenericRepository<AddressFacility> _addressFacilityRepository;
        private GenericRepository<AddressRequirement> _addressRequirementRepository;
        private GenericRepository<AddressTruck> _addressTruckRepository;
        private GenericRepository<Customer> _customerRepository;
        private GenericRepository<CustomerUser> _customerUserRepository;

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

                if (_connection != null)
                {
                    _connection.Dispose();
                    _connection = null;
                }
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
        public GenericRepository<User> ApplicationUserRepository
        {
            get
            {
                if (this._applicationUserRepository == null)
                {
                    this._applicationUserRepository = new GenericRepository<User>("User", _dataBaseConfig.Value.DefaultConnectionString);
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
        /// AddressAvailabilitiesRepository
        /// </summary>
        public GenericRepository<AddressAvailability> AddressAvailabilitiesRepository
        {
            get
            {
                if (this._addressAvailabilitiesRepository == null)
                {
                    this._addressAvailabilitiesRepository = new GenericRepository<AddressAvailability>("AddressAvailabilities", _dataBaseConfig.Value.DefaultConnectionString);
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
    }
}
