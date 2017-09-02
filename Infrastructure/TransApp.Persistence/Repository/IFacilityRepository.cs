using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.Repository
{
    public interface IFacilityRepository : ILocalizedGenericRepository<Facility>
    {
        Task<List<FacilityDto>> GetFacilities(string language);
    }
}
