import { Component } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: any;
  pass: any;
  errorMessage: any = null;  // Variable para almacenar mensajes de error


  constructor(public userService:UserControlService){

  }

  async signInUserPass() {
    try {
      // ... (verificaciones iniciales)
  
      const signInResult = await this.userService.signInUserPass(this.email, this.pass);
  
      if (signInResult.success) {
        // Éxito, el usuario ha iniciado sesión correctamente.
        this.errorMessage = null;
      } else {
        // Error durante el inicio de sesión, mostrar el mensaje de error detallado.
        this.errorMessage = signInResult.error;
      }
  
    } catch (error: any) {
      // Manejo de otros errores si es necesario
      console.error(error);
    }
  }

  signInGoogle(){
    this.userService.signInGoogle();
  }
}
