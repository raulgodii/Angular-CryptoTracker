import { Component, OnInit } from '@angular/core';
import { FirestoreControlService } from '../firestore-control.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  constructor(public firestoreService:FirestoreControlService, private scroll:ViewportScroller, private router:ActivatedRoute){

  }

  ngOnInit(): void {

    if(this.router.snapshot.fragment){
      this.scroll.scrollToAnchor(this.router.snapshot.fragment);
    } else {
      this.scroll.scrollToPosition([0, 0]);
    }
  }
}
