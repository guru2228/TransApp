using System.Collections.Generic;
using AutoMapper;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Addresses;
using TransApp.Domain.Common;
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
            CreateMap<TruckDto, TruckModel>();
            CreateMap<RequirementDto, RequirementModel>();
            CreateMap<AddressAvailabilityModel, AddressAvailability>();
            CreateMap<AddressFacilityModel, AddressFacility>();
            CreateMap<AddressRequirementModel, AddressRequirement>();
            CreateMap<AddressTruckModel, AddressTruck>();
            CreateMap<AddressAvailability, AddressAvailabilityModel>();
            CreateMap<AddressFacility, AddressFacilityModel>();
            CreateMap<AddressRequirement, AddressRequirementModel>();
            CreateMap<AddressTruck, AddressTruckModel>();
        }
    }
}
