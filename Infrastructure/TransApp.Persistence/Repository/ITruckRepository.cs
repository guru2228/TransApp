using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.Repository
{
    public interface ITruckRepository : ILocalizedGenericRepository<Truck>
    {
        Task<List<TruckDto>> GetTrucks(string language);
    }
}
