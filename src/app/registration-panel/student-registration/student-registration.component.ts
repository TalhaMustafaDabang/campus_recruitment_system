import { Component, OnInit, Input } from '@angular/core';
import { studentUser } from '../../models/studentUser';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
@Input() stduentUser:studentUser;
  constructor() { }

  ngOnInit() {
  }

}
