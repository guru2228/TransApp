import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TableData } from "app/shared/md/md-table/md-table.component";
import { AddressRowViewModel } from "app/address/models/address-row-viewmodel";
import { AddressModel } from "app/address/models/address-model";
import { AddressService } from "app/address/services/address.service";
import { ApplicationUser } from "app/authentication/viewmodels/application-user";
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { TranslateService } from "app/shared/common/services/localization/translate.service";
import { Subscription } from 'rxjs';

var moment = require('moment/moment');

declare var $: any;
declare var swal: any;

@Component({
    selector: 'address-overview',
    templateUrl: './address-overview.component.html'
})
export class AddressOverviewComponent implements OnInit, OnDestroy, AfterViewInit {
    ngOnDestroy(): void {
        if (this.subscriptionReceiveUpdatedAddress) {
            this.subscriptionReceiveUpdatedAddress.unsubscribe();
        }
    }
    // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
    componentModel: AddressRowViewModel[] = [];
    headerRow: string[];
    currentUser: ApplicationUser;
    currentAddressId = -1;

    private subscriptionReceiveUpdatedAddress: Subscription;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private addressService: AddressService,
        private authenticationService: AuthenticationService,
        private translateService: TranslateService) {

    }

    public ngOnInit() {
        this.currentUser = this.authenticationService.getCurrentUser();
        if (this.currentUser && this.currentUser.customerId) {
            this.headerRow = ['Name', 'Created by', 'Phone', 'Zipcode'];

            this.addressService.getAll(this.currentUser.customerId, 0, 1000, this.translateService.currentLanguage).subscribe(result => {
                if (result && result.length > 0) {

                    if (this.route.firstChild) {
                        this.currentAddressId = +this.route.firstChild.snapshot.params['id']
                    }

                    for (let i = 0; i < result.length; i++) {
                        let addressRow = new AddressRowViewModel();
                        addressRow.address = result[i];
                        // if url contains edit then open it by default
                        //addressRow.viewActions = result[i].id == this.currentAddressId;
                        addressRow.viewEdit = result[i].id == this.currentAddressId;
                        this.componentModel.push(addressRow);
                    }
                }
            });;
        }

        this.register_updateSavedModel_handler();

    }
    ngAfterViewInit() {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
    }

    private register_updateSavedModel_handler() {
        this.subscriptionReceiveUpdatedAddress = this.addressService.addressModelReceivedHandler$.subscribe(address => {
            if (address != null) {
                debugger;
                let modelToUpdate = this.componentModel.filter(item => item.address.id == address.id)[0];
                if (modelToUpdate) {
                    modelToUpdate.address = address;
                    var $main_panel = $('.main-panel');
                    $main_panel.scrollTop(100).perfectScrollbar('update');
                   // $('body').scrollTop(100).perfectScrollbar('update');
                }
                this.addressService.resetSendAddressModelHandler();
            }
        });
    }
    /** Show row available actions on click */
    onClickShowActions(addressRow: AddressRowViewModel, index: number) {
        for (let i = 0; i < this.componentModel.length; i++) {
            if (i != index)
                this.componentModel[i].viewActions = false;
                this.componentModel[i].viewEdit = false;
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
        addressRow.viewActions = false;
     
        this.router.navigate(['./address-edit/' + addressRow.address.id], { relativeTo: this.route });

        addressRow.viewEdit = !addressRow.viewEdit;
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
                self.addressService.delete(addressId).subscribe(result => {
                    if (result) {
                        swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );

                        // update model
                        self.componentModel = self.componentModel.filter(item => item.address.id != addressId);
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
