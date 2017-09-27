using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Framework.Filter;
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.Repository
{
    public class TransporterRepository : GenericRepository<Transporter>, ITransporterRepository
    {
        public TransporterRepository(string tableName, string connectionString) : base(tableName, connectionString)
        {
        }

        public Task<TransporterDto> GetTransporterById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<TrasporterSimpleDto>> GetAll(FilterAddress filter)
        {
            throw new NotImplementedException();
        }

        public Task<int> GetAllCount(FilterTransporter filter)
        {
            throw new NotImplementedException();
        }

        public Task SaveTransporter(int currentUserId, Transporter transporter, IDbTransaction transaction = null)
        {
            throw new NotImplementedException();
        }

        public Task DeleteTransporter(Transporter transporter, IDbTransaction transaction)
        {
            throw new NotImplementedException();
        }
    }
}
