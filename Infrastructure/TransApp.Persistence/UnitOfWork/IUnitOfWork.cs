﻿using System.Data;
using TransApp.DataModel.Dto;
using TransApp.Persistence.Repository;

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

        #endregion

    }
}
