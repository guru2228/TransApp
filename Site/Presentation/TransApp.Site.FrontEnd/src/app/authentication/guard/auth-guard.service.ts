import { Injectable }       from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { TranslateService } from "app/common/services/localization/translate.service";


/**
 * Guard service, used to check, for each route if user is authenticated.
*/
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthenticationService,
        private router: Router,
        public translateService: TranslateService) {
    }

    /**
     * Check if user has permission over a route
     * @param route 
     * @param state 
     * @returns {} 
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        debugger;
        let url: string = state.url;
        let hasAccess = this.isLoginValid(url);

        if (hasAccess) {
            this.loadApplicationTranslations();
        }
        return hasAccess;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    /**
     * Check if user is authenticated
     * @param url 
     * @returns {} 
     */
    isLoginValid(url: string): boolean {
        //// get logged in user
        let user = this.authService.getCurrentUser();
        //// get authentication date
        let expirationDate = this.authService.getTokenExpirationDate();
        if (user != null && (expirationDate == null || expirationDate.getTime() >= new Date().getTime())) {
            //// load application translations
           // this.translateService.currentLanguage = user.language.toLowerCase();
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.authService.logout();
        return false;
    }

    /**
     * Load application translations
     * @returns {} 
     */
    loadApplicationTranslations(): void {
        try {
            if (
                !this.translateService
                    .applicationTranslations ||
                    this.translateService.applicationTranslations.length <= 0) {
                //// set user language
                let currentUser = this.authService.getCurrentUser();
                //// get translation resources for this module, translations, can be re-used in all other submodules.
          /*      this.translateService.getApplicationTranslations(currentUser.language)
                    .subscribe(
                        translations => {
                            this.translateService.applicationTranslations = translations;
                        },
                        () => {});*/
            }
        } catch (err) {
            console.log("Application translations not loaded");
        }
    }
}