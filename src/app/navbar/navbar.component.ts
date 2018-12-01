import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthenticationService } from '../services/authentication.service';
import { auth } from '../models/auth';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth:auth;
  constructor(private router: Router,private authS: AuthenticationService) { }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  ngOnInit() {
    this.auth=this.authS.checkAuth();
  }

  logout()
  {
    this.authS.signOut();
    this.auth=this.authS.checkAuth();
  }

  gotoMyProfile()
  {
    if(this.auth.type.student)
    {
      this.router.navigate(['student-user-profile']);
    }
    else if(this.auth.type.company)
    {
      this.router.navigate(['company-user-profile']);
    }
    else if(this.auth.type.admin)
    {
      this.router.navigate(['admin-panel']);
    }
    else if(this.auth.type.anonymous)
    {
      this.router.navigate(['home']);
    }
  }

}
