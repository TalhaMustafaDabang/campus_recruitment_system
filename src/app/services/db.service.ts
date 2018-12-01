import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
// import { studentUser } from '../models/user';
import { studentUser } from '../models/studentUser';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { NgForm } from '@angular/forms';
import { FirebaseListObservable } from '../../../node_modules/angularfire2/database-deprecated';
import { Key } from '../../../node_modules/protractor';
import { CompanyUser } from '../models/companyUser';
import { Vacancy } from '../models/vacany';
import { AppliedVacancies } from '../models/appliedVacancies';
import { admin } from '../models/admin';
import { error } from 'util';
import { Router } from '../../../node_modules/@angular/router';


// import { FirebaseDatabase } from 'angularfire2';
@Injectable()
export class DbService {

// usersCollection: AngularFirestoreCollection<studentUser>;
users: FirebaseListObservable<studentUser[]>; 
// usersDoc:AngularFirestoreDocument<studentUser>; 
constructor(private router: Router) { 
  // this.users=this.asf.collection('users').valueChanges();

}
companyUser: CompanyUser= new CompanyUser();
studentUser:studentUser=new studentUser();
vacancy:Vacancy= new Vacancy();
db=firebase.database()

imageUrlAdder(url:any)
{
  this.studentUser.imageUrl=url;
 
}

addStudent(form:NgForm)
{
 this.studentUser.email=form.value.email;
this.studentUser.uid=firebase.auth().currentUser.uid;
this.studentUser.password=form.value.password;


}

updateSkill(form:NgForm)
{
  
  this.studentUser.skills=form.value.skills;
  this.db.ref('students/'+firebase.auth().currentUser.uid).set(this.studentUser).then((res)=>{alert("You Are Sucessfully Registered As A Student, Please Signin Next."+res)}).catch(err=>{alert(err)});
  
}

delete(uid: string, type: string)
{
  firebase.database().ref(type+"/"+uid).remove().then(result=>{
    alert(result);
  })
  .catch(err=>{alert(err)});
}

deleteVacancy(vacancy: Vacancy)
{
  firebase.database().ref("/vacancies/"+vacancy.vacancyId).remove();
}

// verifyStudent(student:studentUser)
// {
//   student.verified=true;
//   firebase.database().ref("students/"+student.uid).update(student).then(result=>{alert(result)}).catch(err=>alert(err));
// }

// verifyCompany(company:CompanyUser)
// {
//   company.verified=true;
//   firebase.database().ref("companies/"+company.uid).update(company).then(result=>{alert(result)}).catch(err=>{console.log(err)});
// }

// verifyVacancy(vancancy:Vacancy)
// {
// vancancy.verified=true;
// firebase.database().ref(this.vacancy.companyId+"/"+vancancy.vacancyId).update(vancancy).then(result=>{alert(result)}).catch(err=>{console.log(err)});
// }

updateStudentBasicInfo(form:NgForm)
{
  this.studentUser.type="students";
 this.studentUser.name=form.value.name;
 this.studentUser.gender=form.value.gender;
 this.studentUser.fname=form.value.fName;
}

updateStudentMatricultionInfo(form:NgForm)
{
  this.studentUser.matriculationBoard=form.value.matriculationBoard;
  this.studentUser.matriculationPassingYear=form.value.matriculationPassingYear;
  this.studentUser.matriculationSubject=form.value.matriculationSubject;
  this.studentUser.schoolName=form.value.schoolName;

}

updateStudentIntermediateInfo(form: NgForm)
{
  this.studentUser.collegeName=form.value.collegeName;
  this.studentUser.IntermediateSubject=form.value.IntermediateSubject;
  this.studentUser.IntermediateBoard=form.value.IntermediateBoard;
  this.studentUser.IntermediatePassingYear=form.value.IntermediatePassingYear;
  this.studentUser.IntermediatePercentage=form.value.IntermediatePercentage;

}

updateStudentUniversityInfo(form: NgForm)
{
 this.studentUser.universityName=form.value.universityName;
 this.studentUser.universityPassingOutYear=form.value.universityPassingOutYear;
 this.studentUser.gpa=form.value.gpa;
 this.studentUser.dept=form.value.dept;
 this.studentUser.degree=form.value.degree;
 console.log(this.studentUser);
}



getVacanciesList()
{
  return firebase.database().ref("vacancies/").orderByKey();
}

getCompaniesList()
{
  return firebase.database().ref('companies/').orderByKey();
}

getStudentsList()
{

 return firebase.database().ref('students/').orderByKey();
}

addCompanyInfo(form: NgForm)
{
    this.companyUser.companyEmail=form.value.email;
    this.companyUser.uid=firebase.auth().currentUser.uid;
  
}

updateCompanyInfo(form: NgForm)
{
  this.companyUser.type="companies";
  this.companyUser.companyNumber=form.value.companyNumber;
  this.companyUser.companyName=form.value.companyName;
  this.companyUser.companyAddress=form.value.companyAddress;
  this.companyUser.companyCity=form.value.companyCity;
  this.companyUser.companyCountry=form.value.companyCity;
  this.db.ref("companies/"+firebase.auth().currentUser.uid).set(this.companyUser).then((res)=>{alert("You Are Sucessfully Registered As A Student, Please Signin Next."+res)}).catch(err=>{alert(err)});
}


getStudentById(id:string)
{
 return this.db.ref("students/"+id).orderByValue();
}

submitVacancyProposal(aV:AppliedVacancies)
{
  let er:Error;
  firebase.database().ref("appliedVacancies/"+aV.comopanyId+"/"+aV.jobKey).push(aV,(err)=>{er=err}).then(
    ()=>{if(er==null){alert("Sucessfully Applied For Vacancy!")} else{alert(er)}}
  );
  console.log("pussing at=> appliedVacancies/"+aV.comopanyId+"/"+aV.jobKey);
}
getApplicationsForVacancies(selectedVacancy: string)
{
  // console.log("getting from=> appliedVacancies/"+firebase.auth().currentUser.uid+"/"+selectedVacancy);
  return firebase.database().ref("appliedVacancies/"+firebase.auth().currentUser.uid+"/"+selectedVacancy).orderByValue();
}
// addAdmin(admin:admin)
// {
//   firebase.database().ref(""+firebase.auth().currentUser.uid).set(admin);
// }
addVacancy(form: NgForm,companyName:string)
{
 var date = new Date();
 var dateString = date.toTimeString();
 console.log(dateString);
  this.vacancy.companyName=companyName;
  this.vacancy.jobTitle=form.value.jobTitle;
  this.vacancy.experience=form.value.experience;
  this.vacancy.skillsRequired=form.value.skillsRequired;
  this.vacancy.salary=form.value.salary;
  this.vacancy.requiredDegree=form.value.requiredDegree;
  this.vacancy.requiredGpa=form.value.requiredGpa;
  this.vacancy.universityPassingoutYearRequired=form.value.universityPassingoutYearRequired;
  this.vacancy.genderDiscrimination=form.value.genderDiscrimination;
  this.vacancy.workingLocation=form.value.workingLocation;
  this.vacancy.extraDetails=form.value.extraDetails;
  this.vacancy.companyId=firebase.auth().currentUser.uid;
  this.vacancy.vacancyId=firebase.auth().currentUser.uid.concat(dateString);
  // return this.db.ref(firebase.auth().currentUser.uid+"/vacancies/"+dateString).set(this.vacancy);
  let er:Error;
   this.db.ref("vacancies/"+firebase.auth().currentUser.uid+"date"+dateString).set(this.vacancy,(err)=>{er=err}).then(()=>{if(er==null){alert("Vancancy Sucessfully Added!"),this.router.navigate(['vacancy-apps'])}}).catch((err)=>{alert(err)});

}



}