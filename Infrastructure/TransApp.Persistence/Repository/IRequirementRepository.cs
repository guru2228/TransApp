﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Persistence.Repository.Generic;

namespace TransApp.Persistence.Repository
{
    public interface IRequirementRepository : ILocalizedGenericRepository<Requirement>
    {
        Task<List<RequirementDto>> GetRequirements(string language);

    }
}
