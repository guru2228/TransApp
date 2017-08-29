import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TableData } from "app/shared/md/md-table/md-table.component";
import { Shipment } from "app/shipment/models/shipment";
import { ShipmentRow } from "app/shipment/models/shipment-row";
var moment = require('moment/moment');

declare var $: any;

@Component({
    selector: 'shipment-overview',
    templateUrl: './shipment-overview.component.html'
})
export class ShipmentOverviewComponent implements OnInit, AfterViewInit {
    // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
    shipmentModel: ShipmentRow[] = [];
    headerRow: string[];

    constructor(private router: Router,
        private route: ActivatedRoute) {

    }
    // constructor(private navbarTitleService: NavbarTitleService) { }
    public ngOnInit() {
        debugger;
        this.headerRow = ['Pickup data', 'Delivery date', 'From', 'Destination', 'Quantity', 'Transport company', 'Price'];

        let shipment = new Shipment();
        shipment.deliverydate = new Date();
        shipment.pickupdate = new Date();
        shipment.from = 'Joske, Belgium, Brakel';
        shipment.destionation = 'Polleke, France, Quimper';
        shipment.quantity = 100;
        shipment.transporter = 'DHL';
        shipment.price = 100;

        for (let i = 0; i < 10; i++) {
            shipment.id = i;
            shipment.deliverydate = moment(shipment.deliverydate).format('YYYY-MM-DD');
            shipment.pickupdate = moment(shipment.pickupdate).format('YYYY-MM-DD');

            let shipmentRow = new ShipmentRow();
            shipmentRow.shipment = shipment;
            shipmentRow.viewActions = i == 2 ? true : false;
            this.shipmentModel.push(shipmentRow);
        }
    }
    ngAfterViewInit() {
        var breakCards = true;
        if (breakCards == true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                var $fix_button = $(this);
                var $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    console.log(this);
                    var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');

                    $card.attr('data-count', 0);

                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });

                $card.mouseenter(function () {
                    var $this = $(this);
                    var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr("data-count", hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }

    /** Show row available actions on click */
    onClickShowActions(shipmentRow: ShipmentRow, index: number) {
        for (let i = 0; i < this.shipmentModel.length; i++) {
            if (i != index)
                this.shipmentModel[i].viewActions = false;
        }
debugger;
shipmentRow.viewActions = !shipmentRow.viewActions;
        debugger;
        if(shipmentRow.viewActions){
            shipmentRow.viewEdit = false;
            this.router.navigate(['/shipment-overview']);
        }
            setTimeout(function() {
               // $('#actionsRowContent').slideToggle('slow');
                
            }, 500);
    }


    /** Show edit shipment */
    onClickEditShipment(shipmentRow: ShipmentRow) {
        shipmentRow.viewEdit = !shipmentRow.viewEdit;
        debugger;
            this.router.navigate(['./shipment-edit/1'], { relativeTo: this.route });
    }


}
