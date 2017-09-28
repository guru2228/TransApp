using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Framework.Filter;

namespace TransApp.Persistence.Repository
{
    public interface IShipmentTransporterRepository
    {
        Task<ShipmentTransporter> GetById(int id);

        Task<List<ShipmentTransporterDto>> GetAll(FilterShipmentTransporter filter);

        Task Delete(string predicate, IDbTransaction transaction = null);

        Task Save(int currentUserId, ShipmentTransporter currentShipmentTransporter, IDbTransaction transaction = null);

        //Task SaveTransporter(int currentUserId, Transporter transporter, IDbTransaction transaction = null);

        //Task DeleteTransporter(Transporter transporter, IDbTransaction transaction);
    }
}
