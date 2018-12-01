import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DbService } from '../../../../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matriculation-info',
  templateUrl: './matriculation-info.component.html',
  styleUrls: ['./matriculation-info.component.css']
})
export class MatriculationInfoComponent implements OnInit {

  constructor(private dbs:DbService,private router:Router) { }

  ngOnInit() {
  }
submit(form:NgForm)
{
  this.dbs.updateStudentMatricultionInfo(form);
  this.router.navigate(['student-intermediate-info']);
}
}
