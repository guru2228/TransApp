import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationUser } from 'app/authentication/viewmodels/application-user';
import { HelperService } from 'app/shared/common/services/helperService';
import PerfectScrollbar from 'perfect-scrollbar';
import { ROUTES } from 'app/shared/sidebar/sidebar-routes.config';

declare var $: any;
var sidebarTimer;



@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})


export class SidebarComponent implements OnInit {
  public menuItems: any[];

  currentUser: ApplicationUser;

  constructor(private authenticationService: AuthenticationService, private router: Router, private helperService: HelperService) {

  }
  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  scroll() {
    this.helperService.scrollOnTop();
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  updatePS(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
    }
  }
  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
}
