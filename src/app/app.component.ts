import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModelsService } from './services/models.service';

import {
  trigger,
  state,group,
  style,query,
  animate,
  transition
} from '@angular/animations';
import { AuthenticationService } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('routeAnimation',[
  //     transition('1 => 2',[
  //       style({height: '!'}),
  //       query(':enter', style({
  //         transform: 'translateX(100%)',
  //       })),
  //       query(':enter, :leave', style({
  //         position: 'absolute', top: 0, left :0
  //       })),
  //       group([
  //         query(':leave', [
  //             animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
  //         ]),
  //         // and now reveal the enter
  //         query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
     
  // ]),
  //     ])
  //   ])
  // ],
})
export class AppComponent implements OnInit{
  title = 'app';

   public modalRef: BsModalRef; // {1};
  constructor(private auth:AuthenticationService,private modelService: ModelsService) {}

ngOnInit()
{
  console.log(this.auth.checkAuth());
}

getDepth(outlet)
{
  return outlet.activatedRouteData['depth'];
}

}
