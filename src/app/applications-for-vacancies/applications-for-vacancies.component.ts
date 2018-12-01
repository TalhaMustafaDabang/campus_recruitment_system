import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { Vacancy } from '../models/vacany';
import { Observable } from '../../../node_modules/rxjs';
import { element } from '../../../node_modules/protractor';
import * as firebase from 'firebase';
import { AppliedVacancies } from '../models/appliedVacancies';
import { studentUser } from '../models/studentUser';

@Component({
  selector: 'app-applications-for-vacancies',
  templateUrl: './applications-for-vacancies.component.html',
  styleUrls: ['./applications-for-vacancies.component.css']
})
export class ApplicationsForVacanciesComponent implements OnInit {
vL: Vacancy[]= new Array();
vA:AppliedVacancies[]= new Array();
showStudents:boolean=false;
sL: studentUser[]= new Array();
SAL: studentUser[]=new Array();
  constructor(private dbs: DbService) { }

  ngOnInit() {
    this.dbs.getVacanciesList().on("value",elemen=>{elemen.forEach(element => {
console.log(element.key.slice(0,element.key.indexOf("date")));
if(element.key.slice(0,element.key.indexOf("date"))==firebase.auth().currentUser.uid)
{
  this.vL.push(element.val());
}

   });});
      
   this.showStudents=false;
  }

  showApplications(id:string)
  {
    this.dbs.getStudentsList().on("value",element=>{element.forEach(element=>{this.sL.push(element.val())})});
    console.log("in sdkj");
    this.dbs.getApplicationsForVacancies(id).on("value",element=>{element.forEach(element => 
      {
        console.log(element.val());
        this.dbs.getStudentById(element.val().studentId).on("value",element=>{this.SAL.push(element.val())});
      
      })});
  
      for(let j=0;j<this.SAL.length;j++)
      {
        console.log(this.SAL[j]);
      }
      this.showStudents=true;
  }

}
