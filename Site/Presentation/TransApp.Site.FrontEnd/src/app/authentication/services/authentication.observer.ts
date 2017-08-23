import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationObserver {
    // Observable flag source
    private authenticationNotifier = new BehaviorSubject<boolean>(false);
    // Observable flag stream
    authenticationUpdatesEmitter$ = this.authenticationNotifier.asObservable();

    // service command
    sendAuthenticationUpdates(value) {
        this.authenticationNotifier.next(value);
    }
}