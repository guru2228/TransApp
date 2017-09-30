using System.Collections.Generic;
using AutoMapper;
using TransApp.DataModel.Dto;
using TransApp.DataModel.Dto.Custom;
using TransApp.Domain.Addresses;
using TransApp.Domain.Common;
using TransApp.Domain.Common.Entity;
using TransApp.Domain.Common.Parameter;
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
            CreateMap<FacilityDto, FacilityParameterModel>();
            CreateMap<TruckDto, TruckParameterModel>();
            CreateMap<RequirementDto, RequirementParameterModel>();
            CreateMap<AvailabilityEntityModel, AddressAvailability>();
            CreateMap<FacilityEntityModel, AddressFacility>();
            CreateMap<RequirementEntityModel, AddressRequirement>();
            CreateMap<TruckEntityModel, AddressTruck>();
            CreateMap<AddressAvailability, AvailabilityEntityModel>();
            CreateMap<AddressFacility, FacilityEntityModel>();
            CreateMap<AddressRequirement, RequirementEntityModel>();
            CreateMap<AddressTruck, TruckEntityModel>();

            CreateMap<ShipmentDetailModel, ShipmentDetail>();
            CreateMap<ShipmentDetail, ShipmentDetailModel>();
            CreateMap<ShipmentTransporterModel, ShipmentTransporter>();
            CreateMap<ShipmentTransporter, ShipmentTransporterModel>();

            CreateMap<FacilityEntityModel, ShipmentReceiverFacility>().ForMember(dest => dest.ShipmentId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<ShipmentReceiverFacility, FacilityEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.ShipmentId));

            CreateMap<RequirementEntityModel, ShipmentReceiverRequirement>().ForMember(dest => dest.ShipmentId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<ShipmentReceiverRequirement, RequirementEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.ShipmentId));

            CreateMap<TruckEntityModel, ShipmentReceiverTruck>().ForMember(dest => dest.ShipmentId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<ShipmentReceiverTruck, TruckEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.ShipmentId));

            CreateMap<FacilityEntityModel, ShipmentSenderFacility>().ForMember(dest => dest.ShipmentId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<ShipmentSenderFacility, FacilityEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.ShipmentId));

            CreateMap<RequirementEntityModel, ShipmentSenderRequirement>().ForMember(dest => dest.ShipmentId, opt => opt.MapFrom(src => src.EntityId)); 
            CreateMap<ShipmentSenderRequirement, RequirementEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.ShipmentId));

            CreateMap<TruckEntityModel, ShipmentSenderTruck>().ForMember(dest => dest.ShipmentId, opt => opt.MapFrom(src => src.EntityId)); 
            CreateMap<ShipmentSenderTruck, TruckEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.ShipmentId));
        }
    }
}
