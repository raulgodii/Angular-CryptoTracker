import { Component } from '@angular/core';
import { FirestoreControlService } from '../firestore-control.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  constructor(public firestoreService:FirestoreControlService){

  }
}
