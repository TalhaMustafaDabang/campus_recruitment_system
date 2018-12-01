import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { auth } from '../models/auth';
import { DbService } from '../services/db.service';
import { Vacancy } from '../models/vacany';

@Component({
  selector: 'app-student-user-profile',
  templateUrl: './student-user-profile.component.html',
  styleUrls: ['./student-user-profile.component.css']
})
export class StudentUserProfileComponent implements OnInit {
 auth:auth;
 vacancies:Vacancy[]=new Array();
  constructor(private dbs: DbService,private authS: AuthenticationService) { }

  ngOnInit() {
  this.auth=this.authS.checkAuth();
  }

  editStudentProfile()
  {

  }

  appliedVacancies()
  {
    // this.dbs.g
  }

}
