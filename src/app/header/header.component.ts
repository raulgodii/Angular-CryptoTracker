import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestAJAXService } from '../request-ajax.service';
import { FirestoreControlService } from '../firestore-control.service';
import { UserControlService } from '../user-control.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public requestAjax: RequestAJAXService, public firestoreService:FirestoreControlService, public userService: UserControlService) {

  }

  obtenerDatos() {
    this.firestoreService.obtenerDatosFirestore();
  }

  signOut(){
    this.userService.signOut();
  }
}
