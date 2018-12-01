import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { auth } from '../models/auth';
import { Observable } from '../../../node_modules/rxjs';
import { CompanyUser } from '../models/companyUser';
import { studentUser } from '../models/studentUser';
import { userM } from '../models/user';
import { element } from '../../../node_modules/protractor';


@Injectable()
export class AuthenticationService {
public user:Observable<firebase.User>;
 auth:auth=new auth();
//  students:studentUser=new studentUser();
//  companies:CompanyUser=new CompanyUser();
// userDetails:{"name":string,"email":string,"uid":string}={"name":"","email":"","uid":""};
userDetails:userM=new userM();

  authState: any = null;
  signupType:any="";
  constructor(private afAuth: AngularFireAuth,  private router:Router) {

this.user=afAuth.authState;
            // this.afAuth.authState.subscribe((auth) => {
            //   this.authState = auth
            // });


           
            

          }

          companies:CompanyUser=new CompanyUser();
          students:studentUser=new studentUser();
// EMAIL SIGNUP
emailSignUp(form:NgForm) {
  
  return this.afAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then((user) => {
      
      
        this.authState = user;
      this.signupType=form.value.type;
      
      
    })
    .catch(error => console.log(error));
}


isAuthenticated():boolean
{
  return this.authState;
}

// EMAIL LOGIN
emailLogin(email:string, password:string,type:string) {

  if(type=="companies"||type=="students"){
    type=type.concat("/");
  }
  else
  {
    type=type;
  }
  let found:boolean=false;
  return this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email, password)
    .then((user) => {
    
      // firebase.database().ref(type+"/").orderByValue().on("value",element=>{element.forEach(element => {
      //   // console.log(element.key);
      //   // if(element.key==firebase.auth().currentUser.uid){found=true;}
      // });})

// if(found==false)
//       {
//         alert("Sorry No Id Found!")
//         user.user.delete();
//       }
      // else{

        console.log("in");
      this.auth.signin=true;
     
      // firebase.database().ref(type).orderByChild("uid").equalTo(firebase.auth().currentUser.uid).on("value",snap=>{console.log(snap)});
      firebase.database().ref(type+firebase.auth().currentUser.uid).on("value",(u)=>{
      if(u.val().uid==firebase.auth().currentUser.uid&&u.val().type=="companies")
      {
        this.auth.type.company=true;
        this.auth.type.anonymous=false;
        this.auth.companyData=u.val();
        this.router.navigate(['company-user-profile']);
      }
      else
      if(u.val().uid==firebase.auth().currentUser.uid&&u.val().type=="students")
      {
        this.auth.type.student=true;
        this.auth.type.anonymous=false;
        this.auth.studentData=u.val();
        this.router.navigate(['student-user-profile']);
      }
      else
      if(u.val().type=="admin")
      {
        this.auth.type.admin=true;
        this.auth.type.anonymous=false;
        this.router.navigate(['/admin-panel']);
        
      }

      });

    // }//else end
     
    })
    .catch(error => alert(error.message));
}
resetAuth()
{
  this.auth.signin=false;
  this.auth.type.anonymous=true;
  this.auth.type.admin=false;
  this.auth.type.company=false;
  this.auth.type.student=false;
}
checkAuth():auth
{
  return this.auth;
}


  //// Sign Out ////
  signOut(): void {
    this.resetAuth();
    this.afAuth.auth.signOut();
    this.router.navigate(['/'])
  }






}