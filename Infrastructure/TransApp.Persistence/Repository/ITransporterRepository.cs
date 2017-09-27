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
    public interface ITransporterRepository
    {
        Task<TransporterDto> GetTransporterById(int id);

        Task<List<TrasporterSimpleDto>> GetAll(FilterAddress filter);

        Task<int> GetAllCount(FilterTransporter filter);

        Task SaveTransporter(int currentUserId, Transporter transporter, IDbTransaction transaction = null);

        Task DeleteTransporter(Transporter transporter, IDbTransaction transaction);
    }
}
