import { Component, OnInit,Output } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { userM } from '../models/user';
import { DbService } from '../services/db.service';
import { studentUser } from '../models/studentUser';
import * as firebase from 'firebase';
import { admin } from '../models/admin';
@Component({
  selector: 'app-registration-panel',
  templateUrl: './registration-panel.component.html',
  styleUrls: ['./registration-panel.component.css']
})
export class RegistrationPanelComponent implements OnInit {
userModel:studentUser=new studentUser();
  constructor(private authService: AuthenticationService,private router: Router,private db: DbService) { }

  ngOnInit() {
  }
// admin: admin= new admin();

  submit(form:NgForm)
  {
    this.userModel.email=form.value.email;
    this.userModel.password=form.value.password;
    // this.admin.email=form.value.email;
    // this.admin.type="admin";
    this.authService.emailSignUp(form)
    .then((user)=>{ 
     
       switch(form.value.type)
       {
         case 'student':
         {
           this.router.navigate(['student-basic-profile-editor']);
           this.userModel.uid=firebase.auth().currentUser.uid;
           this.db.addStudent(form);
           
            break;
         }
         case 'company':
         {
           this.router.navigate(['company-profile-editor']);
           this.db.addCompanyInfo(form);
           break;
         }
        //  case '':
        //  {
        //    this.db.addAdmin(this.admin);
        //  }
         default:
         {
           this.router.navigate(['home']);
         }
   
    }})
    .catch(error => console.log(error.message));
  }



}
