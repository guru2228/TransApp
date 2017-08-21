using System.Data;
using TransApp.DataModel.Dto;
using TransApp.Persistence.Repository;
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.UnitOfWork
{
    public interface IUnitOfWork 
    {
        /// <summary>
        /// Begin transaction
        /// </summary>
        IDbTransaction BeginTransaction();
        /// <summary>
        /// Saves all pending changes
        /// </summary>
        /// <returns>The number of objects in an Added, Modified, or Deleted state</returns>
        void Commit(IDbTransaction transaction);

        /// <summary>
        /// PublicTranslationResource
        /// </summary>
        GenericRepository<User> ApplicationUserRepository { get; }

        #region Web repositories
        /// <summary>
        /// ModuleTranslationResource
        /// </summary>
        GenericRepository<ModuleTranslationResource> ModuleTranslationResourceRepository { get; }

        /// <summary>
        /// PublicTranslationResource
        /// </summary>
        GenericRepository<PublicTranslationResource> PublicTranslationResourceRepository { get; }

        /// <summary>
        /// Address custom 
        /// </summary>
        IAddressesRepository AddressesRepository { get; }

        /// <summary>
        /// AddressAvailabilities
        /// </summary>
        GenericRepository<AddressAvailability> AddressAvailabilitiesRepository { get; }

        /// <summary>
        ///AddressFacilityRepository 
        /// </summary>
        GenericRepository<AddressFacility> AddressFacilityRepository { get; }

        /// <summary>
        /// AddressRequirementRepository
        /// </summary>
        GenericRepository<AddressRequirement> AddressRequirementRepository { get; }

        /// <summary>
        /// AddressTruckRepository
        /// </summary>
        GenericRepository<AddressTruck> AddressTruckRepository { get; }

        /// <summary>
        /// Customer
        /// </summary>
        GenericRepository<Customer> CustomerRepository { get; }

        /// <summary>
        /// CustomerUser
        /// </summary>
        GenericRepository<CustomerUser> CustomerUserRepository { get; }

        #endregion

    }
}
