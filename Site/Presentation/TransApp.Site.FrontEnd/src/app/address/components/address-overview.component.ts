import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TableData } from "app/shared/md/md-table/md-table.component";
import { AddressRowViewModel } from "app/address/models/address-row-viewmodel";

var moment = require('moment/moment');

declare var $:any;

@Component({
  selector: 'address-overview',
  templateUrl: './address-overview.component.html'
})
export class AddressOverviewComponent implements OnInit, AfterViewInit{
     // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
     addressModel: AddressRowViewModel[] = [];
     headerRow: string[];
 
     constructor(private router: Router,
         private route: ActivatedRoute) {
 
     }
     // constructor(private navbarTitleService: NavbarTitleService) { }
     public ngOnInit() {
         debugger;
         this.headerRow = ['Name', 'Created by', 'Phone'];
 
         let address = new Address();
         address.name = 'Transaap BVBA, Stationstraat 3, Gent';
         address.createdBy = 'Joske Bermeulen';
         address.phone = '+44 5464 45665 45';
  
 
         for (let i = 0; i < 10; i++) {
            address.id = i;
            address.name = address.name + ' ' + address.id ;
             let addressRow = new AddressRow();
             addressRow.address = address;
             addressRow.viewActions = i == 2 ? true : false;
             this.addressModel.push(addressRow);
         }
     }
     ngAfterViewInit() {
         //  Activate the tooltips
         $('[rel="tooltip"]').tooltip();
     }
 
     /** Show row available actions on click */
     onClickShowActions(addressRow: AddressRow, index: number) {
         for (let i = 0; i < this.addressModel.length; i++) {
             if (i != index)
                 this.addressModel[i].viewActions = false;
         }
 debugger;
 addressRow.viewActions = !addressRow.viewActions;
         debugger;
         if(addressRow.viewActions){
            addressRow.viewEdit = false;
             this.router.navigate(['/address-overview']);
         }
             setTimeout(function() {
                // $('#actionsRowContent').slideToggle('slow');
                 
             }, 500);
     }
 
 
     /** Show edit address */
     onClickEditAddress(addressRow: AddressRow) {
        addressRow.viewEdit = !addressRow.viewEdit;
         debugger;
             this.router.navigate(['./address-edit/1'], { relativeTo: this.route });
     }
}
