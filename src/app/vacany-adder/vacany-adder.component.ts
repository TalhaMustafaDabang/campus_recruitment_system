import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { DbService } from '../services/db.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import * as firebase from 'firebase';
import { Vacancy } from '../models/vacany';
import { element } from '../../../node_modules/protractor';
import { CompanyUser } from '../models/companyUser';
@Component({
  selector: 'app-vacany-adder',
  templateUrl: './vacany-adder.component.html',
  styleUrls: ['./vacany-adder.component.css']
})
export class VacanyAdderComponent implements OnInit {
cL:CompanyUser[]=Array();
companyName:string="";
constructor(private router: Router,private dbs:DbService) { }

  ngOnInit()
  {
    this.dbs.getCompaniesList().on("value",(element)=>{element.forEach(element => { this.cL.push(element.val())});});
    
  }

  submit(form: NgForm)
  {
    for(let i=0;i<this.cL.length;i++)
    {
      if(this.cL[i].uid===firebase.auth().currentUser.uid)
      {
        this.companyName=this.cL[i].companyName;
      }
    }
    this.dbs.addVacancy(form,this.companyName);
    
  }
}
