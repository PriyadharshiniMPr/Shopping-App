import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from 'src/app/models/user';

import { Role } from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'shopping-app';

  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        console.log("ll",this.authenticationService);
        this.router.navigate(['/login']);
    }
}
