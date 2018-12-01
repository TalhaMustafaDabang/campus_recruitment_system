import { CanActivate, Router } from '@angular/router';
//  from "angularfire2/angularfire2";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthenticationGuardService implements CanActivate {
// user: Observable<firebase.User>;
constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.checkAuth().signin) {
      this.router.navigate(['/signin']);
      return false;
    }
    return true;
  }

}
