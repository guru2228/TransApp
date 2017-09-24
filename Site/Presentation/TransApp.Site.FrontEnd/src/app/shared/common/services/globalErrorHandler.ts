import { Injectable }    from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationObserver } from "app/authentication/services/authentication.observer";
import { AuthenticationService } from "app/authentication/services/authentication.service";
import { NotificationService } from 'app/shared/common/services/notification.service';


@Injectable()
export class GlobalErrorHandler {
    // constructor
    constructor(private router: Router,
        private authenticationObserver: AuthenticationObserver,
        private authenticationService: AuthenticationService,
    private notificationService:NotificationService) {
    }

    /**
     * Handle error
     * @param error 
     * @returns {} 
     */
    throwError(error: any): Observable<any> {
        return Observable.throw(error);
    }

    /**
     * Handle error
     * @param error 
     * @returns {} 
     */
    handleError(error: any) {
        if (error.status === 401) {
            this.redirectToLogin();
        } else {
            if (error._body && error._body.trim() != '') {
                let errorObject = JSON.parse(error._body);
                if (errorObject.errorType === 1) {
                    this.redirectToLogin();
                } else if (errorObject.errorType === 2) {
                    alert(errorObject.message);
                } else {
                    this.router.navigate(["/error"]);
                }
            }
        }
    }

    private redirectToLogin(){
        localStorage.removeItem('current_user');
        console.log("Your session has expired. please login again");
        //this.authenticationObserver.sendAuthenticationUpdates(false);
        this.authenticationService.logout();
        this.notificationService.show('Session expired. You have to login again.','danger','center','top');
       let self=this;
        setTimeout(function() {
            self.router.navigate(["/login"]); 
        }, 1500);
      
    }
}