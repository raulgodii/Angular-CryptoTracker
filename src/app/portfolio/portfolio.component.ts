import { Component } from '@angular/core';
import { FirestoreControlService } from '../firestore-control.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  constructor(public firestoreService:FirestoreControlService){

  }
}
