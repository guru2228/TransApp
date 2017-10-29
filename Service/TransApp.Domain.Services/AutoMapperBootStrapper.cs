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
            CreateMap<PackTypeDto, PackTypeParameterModel>();

            CreateMap<AvailabilityEntityModel, AddressAvailability>().ForMember(dest => dest.AddressId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<AddressAvailability, AvailabilityEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.AddressId));

            CreateMap<FacilityEntityModel, AddressFacility>().ForMember(dest => dest.AddressId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<AddressFacility, FacilityEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.AddressId));

            CreateMap<RequirementEntityModel, AddressRequirement>().ForMember(dest => dest.AddressId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<AddressRequirement, RequirementEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.AddressId));

            CreateMap<TruckEntityModel, AddressTruck>().ForMember(dest => dest.AddressId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<AddressTruck, TruckEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.AddressId));

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

            CreateMap<AvailabilityEntityModel, ShipmentReceiverAvailability>().ForMember(dest => dest.ShipmentId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<ShipmentReceiverAvailability, AvailabilityEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.ShipmentId));

            CreateMap<AvailabilityEntityModel, ShipmentSenderAvailability>().ForMember(dest => dest.ShipmentId, opt => opt.MapFrom(src => src.EntityId));
            CreateMap<ShipmentSenderAvailability, AvailabilityEntityModel>().ForMember(dest => dest.EntityId, opt => opt.MapFrom(src => src.ShipmentId));
            CreateMap<ShipmentTransporter, ShipmentTransporterHistory>();
            CreateMap<ShipmentTransporterModel, ShipmentTransporterHistory>();

            CreateMap<DataModel.Dto.Shipment, ShipmentHistory>();
            CreateMap<ShipmentTransporterDto, ShipmentTransporterModel>();
        }
    }
}
