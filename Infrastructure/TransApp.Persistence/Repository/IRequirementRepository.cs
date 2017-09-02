using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto.Custom;

namespace TransApp.Persistence.Repository
{
    public interface IRequirementRepository
    {
        Task<List<RequirementDto>> GetRequirements(string language);
    }
}
