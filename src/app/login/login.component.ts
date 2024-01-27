import { Component } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
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
