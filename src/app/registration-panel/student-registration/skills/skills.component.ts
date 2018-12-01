import { Component, OnInit } from '@angular/core';
import { DbService } from '../../../services/db.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Route, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private dbs: DbService,private router: Router) { }

  ngOnInit() {
  }

  submit(form:NgForm)
  {
    this.dbs.updateSkill(form);
    this.router.navigate(['signin']);
  }

}
