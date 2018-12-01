import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../../services/file-upload.service';
import { file } from '../../../models/file';
import { NgForm } from '@angular/forms';
import { RegistrationPanelComponent } from '../../registration-panel.component';
import { studentUser } from '../../../models/studentUser';
import { userM } from '../../../models/user';
import { DbService } from '../../../services/db.service';
import { Router } from '@angular/router';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import * as firebase from 'firebase';
@Component({
  selector: 'app-student-basic-info',
  templateUrl: './student-basic-info.component.html',
  styleUrls: ['./student-basic-info.component.css'],
  
})
export class StudentBasicInfoComponent implements OnInit {
// upload: file;
selectedFile:file=null;
filseList:FileList;
file:FileList;
user:studentUser=new studentUser();
  constructor(private http: HttpClient,private db:DbService,private router:Router,private uploadService: FileUploadService) { }

  ngOnInit() {
  }
  // uploadFiles(){
   
  //   }
    handleFiles(event)
{
  this.file= event.target.files;
}

upload:file;


url=firebase.storage().ref('uploads/');

imageUploader()
{



  const fileToUpload=this.file;
  this.upload= new file(fileToUpload[0]);
  this.uploadService.upload(this.upload);

  console.log("in uploader");
//  this.uploadService.upload(this.selectedFile);
  
  
}
submit(form:NgForm)
{
  
  this.db.updateStudentBasicInfo(form);
  this.router.navigate(['student-matriculation-info']);
}


}
