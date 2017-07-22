import { Component, OnInit } from '@angular/core';

import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ROUTES } from "app/shared/sidebar/sidebar-routes.config";

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    constructor(location:Location) {
        this.location = location;
    }
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
    }
    getTitle(){

        return 'Dashboard';
    }
}
