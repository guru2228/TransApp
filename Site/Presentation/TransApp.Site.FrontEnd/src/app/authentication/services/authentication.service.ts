import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions  } from '@angular/http';
import { Router, RouterModule, Routes } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { AuthenticationObserver } from "app/authentication/services/authentication.observer";
import { ApplicationUser } from "app/authentication/viewmodels/application-user";
import { Constants } from "app/common/constants";
import { HttpService } from "app/common/services/httpService";
import { TranslateService } from "app/common/services/localization/translate.service";

@Injectable()
export class AuthenticationService {

    private getTokenUrl = Constants.serverUrl + 'api/connect/token';
    token: string;

    private accountServiceUrl = '/api/Account/';
    redirectUrl: string = '';

    constructor(public http: HttpService,
        private router: Router,
        private translateService: TranslateService,
        private authenticationObserver: AuthenticationObserver) {
        // set token if saved in local storage
        // let currentUser = JSON.parse(localStorage.getItem('id_token'));
        // this.token = currentUser && currentUser.token;
    }

    /**
     * login user
     * @param user 
     * @returns {} 
   */
  
    login(user: ApplicationUser) {
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const data = this.toUrlEncodedString({ username: user.login, password: user.password });
        return this.http.post(this.getTokenUrl, data, { headers }).map(response => {
                // let token = response.json() && response.json().access_token;
                let user = response.json() && response.json().user;
                let expiresIn = response.json() && response.json().expires_in;
                let access_token = response.json() && response.json().access_token;
                if (user) {
                    // set token property
                    // this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('id_token', token);
                    localStorage.setItem('current_user', JSON.stringify(user));
                    //localStorage.setItem('expires_in', expiresIn);
                    localStorage.setItem('id_token', access_token),

                   // this.translateService.currentLanguage = user.Language.toLowerCase();
                    //this.authenticationObserver.sendAuthenticationUpdates(true);

                    this.router.navigate(['/shipment-overview']);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    /**
     * Log out
     * clear translations
     * inform other components about authentication status
     * @returns {} 
     */
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        //localStorage.removeItem('id_token');
        localStorage.removeItem('current_user');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('id_token');

        this.translateService.moduleTranslations = [];
        this.translateService.applicationTranslations = [];
        //this.translateService.anonymousTranslations = [];
        this.authenticationObserver.sendAuthenticationUpdates(false);

        this.router.navigate(['/login']);
    }

    /**The tokenNotExpired function can be used to check whether a JWT exists in local storage, and if it does, 
     * whether it has expired or not. If the token is valid, tokenNotExpired returns true, otherwise it returns false. 
    loggedIn() {
        return tokenNotExpired();
    }*/

    // get logged in user
    getCurrentUser(): ApplicationUser {
        if (localStorage.getItem('current_user')) {
            let user = new ApplicationUser();
            const userData = JSON.parse(localStorage.getItem('current_user'));
            user.id = userData.Id;
            user.login = userData.Login;
            user.firstName = userData.FirstName;
            user.name = userData.Name;
            user.customerId = userData.CustomerId;

            return user;
        }
        return null;
    }

    // get logged in user
    getTokenExpirationDate(): Date {
        if (localStorage.getItem('expires_in')) {
            let dateStr = localStorage.getItem('expires_in');
            if (!isNaN(Date.parse(dateStr))) {
                let date = new Date(dateStr);
                return date;
            }
        }
        return null;
    }

    // Converts a Json object to urlencoded format
    private toUrlEncodedString(data: any) {
        let body = "";
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (body.length) {
                    body += "&";
                }
                body += key + "=";
                body += encodeURIComponent(data[key]);
            }
        }
        return body;
    }
}