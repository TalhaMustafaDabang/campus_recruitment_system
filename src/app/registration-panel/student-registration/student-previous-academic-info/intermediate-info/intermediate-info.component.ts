import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../../../node_modules/@angular/forms';
import { DbService } from '../../../../services/db.service';
import { Router } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-intermediate-info',
  templateUrl: './intermediate-info.component.html',
  styleUrls: ['./intermediate-info.component.css']
})
export class IntermediateInfoComponent implements OnInit {

  constructor(private dbs: DbService,private router: Router) { }

  ngOnInit() {
  }

  submit(form:NgForm)
  {
    this.dbs.updateStudentIntermediateInfo(form);
    this.router.navigate(['student-university-info']);
  }

}
