using System.Collections.Generic;

namespace TransApp.Domain.Shipment
{
    /// <summary>
    /// ShipmentRowViewModel
    /// </summary>
    public class ShipmentDetailRowModel
    {
        /// <summary>
        /// Shipment detail row.
        /// </summary>
        public ShipmentDetailModel Master { get; set; }

        /// <summary>
        /// A shipment detail row, can contains one or more shipment extras, linked by ShipmentDetailModel.ParentId
        /// </summary>
        public IEnumerable<ShipmentDetailModel> Extras { get; set; }

    }
}
