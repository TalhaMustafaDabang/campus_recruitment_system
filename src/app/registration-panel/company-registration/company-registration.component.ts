import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { DbService } from '../../services/db.service';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

  constructor(private router: Router, private dbs: DbService) { }

  ngOnInit() {
  }

  submit(form: NgForm)
  {
    this.dbs.updateCompanyInfo(form);
    this.router.navigate(['signin']);
  }


}
