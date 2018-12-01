import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { Vacancy } from '../models/vacany';
import { element } from '../../../node_modules/protractor';
import { AppliedVacancies } from '../models/appliedVacancies';
import * as firebase from 'firebase';
import { ModelsService } from '../services/models.service';
import { auth } from '../models/auth';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-vacancy-displayer',
  templateUrl: './vacancy-displayer.component.html',
  styleUrls: ['./vacancy-displayer.component.css']
})
export class VacancyDisplayerComponent implements OnInit {
vL:Vacancy[]=Array();
vancancyProposal: AppliedVacancies;
tempVacancyForModal: Vacancy;
auth: auth;
  constructor(private authS: AuthenticationService,private dbs: DbService, private ms: ModelsService) 
  { }

  ngOnInit() 
  {
    this.auth=this.authS.checkAuth();
    this.dbs.getVacanciesList().on("value",element=>{element.forEach(ele=>{this.vL.push(ele.val())})});
  }

  applyForVacancy(v:Vacancy)
  {
    var date= new Date();
    this.vancancyProposal=new AppliedVacancies();
    this.vancancyProposal.jobTitle=v.jobTitle;
    this.vancancyProposal.comopanyId=v.companyId;
    this.vancancyProposal.studentId=firebase.auth().currentUser.uid;
    this.vancancyProposal.jobKey=v.vacancyId;
    // this.vancancyProposal.jobKey=v.companyId.concat(v.jobTitle).concat(date.toDateString()).concat(this.vancancyProposal.studentId);
    this.dbs.submitVacancyProposal(this.vancancyProposal);
  }

  openModal(template: HTMLInputElement,vacancy: Vacancy)
  {
    this.tempVacancyForModal=vacancy;
    this.ms.openModal(template);
  }

  closeModal()
  {
    this.ms.closeModal();
  }

}
