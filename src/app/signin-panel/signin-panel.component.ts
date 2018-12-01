import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signin-panel',
  templateUrl: './signin-panel.component.html',
  styleUrls: ['./signin-panel.component.css']
})
export class SigninPanelComponent implements OnInit {

  email: string;
  password: string;
  msg: string;
    constructor( private router: Router,private authService: AuthenticationService ) { }
  
    ngOnInit() {
    // this.router.isActive("company-user-profile",)
    }
  

    submit(form:NgForm)
    {
      this.authService.emailLogin(form.value.email,form.value.password,form.value.type)
      .then(()=>{ console.log(this.authService.checkAuth())+"In signin"})
      .catch(error => this.msg = error.message);
    }
}
