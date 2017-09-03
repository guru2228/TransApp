import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from "app/authentication/viewmodels/application-user";
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { Router } from "@angular/router";

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
    pageDate : Date = new Date();
    applicationUser = new ApplicationUser();
    errorMessage = '';

    constructor(private router: Router, private authenticationService: AuthenticationService){}

    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit(){
        this.checkFullPageBackgroundImage();

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

    }
        /**
     * On login click
     * @returns {} 
     */
    onLoginClick(): void {
        this.errorMessage = '';
        this.authenticationService.login(this.applicationUser)
            .subscribe(isLoggedIn => {
                    if (isLoggedIn) {
                        //this.authenticationObserver.sendAuthenticationUpdates(true);
                      
                    } else {
                        this.errorMessage = '';
                    }
                },
                error => {
                    this.errorMessage = 'Invalid user or password';
                });
    }
}
