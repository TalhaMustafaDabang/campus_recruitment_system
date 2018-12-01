import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { studentUser } from '../../models/studentUser';
import { StudentListDisplayerComponent } from '../student-list-displayer.component'
import { ModelsService } from '../../services/models.service';
import { auth } from '../../models/auth';
import { AuthenticationService } from '../../services/authentication.service';



@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
@Input() tempStudentForModal:studentUser;

  constructor(private modalService: ModelsService) { }

  ngOnInit() {
    console.log("in child"+this.tempStudentForModal)
   
  }

  closeModal()
  {
    this.modalService.closeModal();
  }

}
