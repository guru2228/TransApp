import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TableData } from "app/shared/md/md-table/md-table.component";
import { AddressRowViewModel } from "app/address/models/address-row-viewmodel";
import { AddressModel } from "app/address/models/address-model";
import { AddressService } from "app/address/services/address.service";
import { ApplicationUser } from "app/authentication/viewmodels/application-user";
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { TranslateService } from "app/common/services/localization/translate.service";

var moment = require('moment/moment');

declare var $: any;
declare var swal: any;

@Component({
    selector: 'address-overview',
    templateUrl: './address-overview.component.html'
})
export class AddressOverviewComponent implements OnInit, AfterViewInit {
    // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
    componentModel: AddressRowViewModel[] = [];
    headerRow: string[];
    currentUser: ApplicationUser;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private addressService: AddressService,
        private authenticationService: AuthenticationService,
        private translateService: TranslateService) {

    }

    public ngOnInit() {
        this.currentUser = this.authenticationService.getCurrentUser();
        if (this.currentUser && this.currentUser.customerId) {
            this.headerRow = ['Name', 'Created by', 'Phone'];

            this.addressService.getAll(this.currentUser.customerId, 0, 1000, this.translateService.currentLanguage).subscribe(result => {
                if (result && result.length > 0) {
                    let addressId = -1;
                    if(this.route.firstChild)
                        {
                            addressId =  +this.route.firstChild.snapshot.params['id']
                        }
                   
debugger;
                    for (let i = 0; i < result.length; i++) {
                        let addressRow = new AddressRowViewModel();
                        addressRow.address = result[i];
                        // if url contains edit then open it by default
                        addressRow.viewActions = result[i].id == addressId;
                        addressRow.viewEdit = result[i].id == addressId;
                        this.componentModel.push(addressRow);
                    }
                }
            });;
        }
    }
    ngAfterViewInit() {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }

    /** Show row available actions on click */
    onClickShowActions(addressRow: AddressRowViewModel, index: number) {
        for (let i = 0; i < this.componentModel.length; i++) {
            if (i != index)
                this.componentModel[i].viewActions = false;
        }
        addressRow.viewActions = !addressRow.viewActions;
        if (addressRow.viewActions) {
            addressRow.viewEdit = false;
            this.router.navigate(['/address-overview']);
        }

        setTimeout(function () {
            // $('#actionsRowContent').slideToggle('slow');
        }, 500);
    }


    /** Show edit address */
    onClickEditAddress(addressRow: AddressRowViewModel) {
        addressRow.viewEdit = !addressRow.viewEdit;
        this.router.navigate(['./address-edit/' + addressRow.address.id], { relativeTo: this.route });
    }

    /** Show edit address */
    onClickDeleteAddress(addressId: number) {
        let self = this;
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            // delete confirmed
            .then(function () {
                debugger;
                self.addressService.delete(addressId).subscribe(result => {
                    if (result) {
                        swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );

                        // update model
                        self.componentModel = self.componentModel.filter(item=>item.address.id != addressId);
                    }
                    else {
                        swal(
                            'Not Deleted!',
                            'An error occured. Your file has not been deleted.  Please contact an administrator.',
                            'error'
                        );
                    }
                }, error => {
                    swal(
                        'Not Deleted!',
                        'An error occured. Your file has not been deleted.  Please contact an administrator.',
                        'error'
                    );
                });

            },
            // delete canceled
            function (dismiss) {
                // dismiss can be 'cancel', 'overlay',
                // 'close', and 'timer'
                if (dismiss === 'cancel') {
                    swal(
                        'Cancelled',
                        'Your address is safe :)',
                        'error'
                    )
                }
            });
    }

}
