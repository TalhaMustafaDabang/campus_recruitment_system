import { Component, OnInit, Output } from '@angular/core';
import { studentUser } from '../models/studentUser';
import { DbService } from '../services/db.service';
import * as firebase from 'firebase';
import 'rxjs/add/operator/map';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModelsService } from '../services/models.service';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { FirebaseListObservable } from '../../../node_modules/angularfire2/database-deprecated';
import { ArrayType } from '../../../node_modules/@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs/observable';
import { element } from '../../../node_modules/protractor';
import { userM } from '../models/user';
import { auth } from '../models/auth';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-student-list-displayer',
  templateUrl: './student-list-displayer.component.html',
  styleUrls: ['./student-list-displayer.component.css']
})
export class StudentListDisplayerComponent implements OnInit {
  sL:studentUser[];
  oldModal:BsModalRef;
  i=0;
  auth: auth;
 tempStudentForModal: studentUser;
  constructor(private authS: AuthenticationService,private ms:ModelsService,private dbs: DbService) { }

  ngOnInit() {
    this.sL=null;
    this.sL=new Array();
 this.dbs.getStudentsList().on("value",(element)=>{element.forEach(ele=>{this.sL.push(ele.val()),console.log(ele.val()),console.log(this.sL[this.i++])})});
this.auth=this.authS.checkAuth();
  }

  openModal(template: HTMLInputElement,userItem:userM)
  {
    this.tempStudentForModal=new studentUser();
    this.tempStudentForModal=userItem;
    this.ms.openModal(template);
  }

  delete(s:studentUser)
  {
    this.sL=null;
    this.sL=new Array();
    this.dbs.delete(s.uid,"students");
    this.dbs.getStudentsList().on("value",(element)=>{element.forEach(ele=>{this.sL.push(ele.val()),console.log(ele.val()),console.log(this.sL[this.i++])})});
    
  }




}
