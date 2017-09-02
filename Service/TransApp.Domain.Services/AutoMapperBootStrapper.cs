using AutoMapper;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Shipment;
using Profile = AutoMapper.Profile;

namespace TransApp.Domain.Services
{
    /// <summary>
    /// Bootstrap mapper
    /// </summary>
    public static class AutoMapperBootStrapper
    {
        public static void CreateMapperConfiguration()
        {
            Mapper.Initialize(cfg => {
                cfg.AddProfile<AutoMapperRegistry>();
            });
        }
    }

    public class AutoMapperRegistry : Profile
    {
        /// <summary>
        /// Declare mapping in here
        /// </summary>
        public AutoMapperRegistry()
        {
            CreateMap<FacilityDto, FacilityModel>();
        }
    }
}
