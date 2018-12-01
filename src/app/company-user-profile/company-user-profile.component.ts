import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { auth } from '../models/auth';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-company-user-profile',
  templateUrl: './company-user-profile.component.html',
  styleUrls: ['./company-user-profile.component.css']
})
export class CompanyUserProfileComponent implements OnInit {
auth: auth;
  constructor(private route: Router, private authS: AuthenticationService) { }

  ngOnInit() {
    this.auth=this.authS.checkAuth();
  }

  showAppsForVacancies()
  {
    this.route.navigate(['vacancy-apps']);
  }
}
