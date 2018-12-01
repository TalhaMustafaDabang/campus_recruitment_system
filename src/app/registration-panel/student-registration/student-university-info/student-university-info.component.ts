import { Component, OnInit } from '@angular/core';
import { DbService } from '../../../services/db.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-student-university-info',
  templateUrl: './student-university-info.component.html',
  styleUrls: ['./student-university-info.component.css']
})
export class StudentUniversityInfoComponent implements OnInit {

  constructor(private dbs: DbService,private router: Router) { }

  ngOnInit() {
  }
  submit(form:NgForm)
  {
    this.dbs.updateStudentUniversityInfo(form);
    this.router.navigate(['student-skills']);
  }

}
