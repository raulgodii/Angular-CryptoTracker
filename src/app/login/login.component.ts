import { Component } from '@angular/core';
import { UserControlService } from '../user-control.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public userService:UserControlService){

  }

  signInGoogle(){
    this.userService.signInGoogle();
  }
}
