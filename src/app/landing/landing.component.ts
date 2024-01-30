import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RequestAJAXService } from '../request-ajax.service';
import { FirestoreControlService } from '../firestore-control.service';
import { UserControlService } from '../user-control.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  
  constructor(private scroll:ViewportScroller, private router:ActivatedRoute, public requestAjax: RequestAJAXService, public firestoreService:FirestoreControlService, public userService: UserControlService){

  }

  ngOnInit(): void {
      if(this.router.snapshot.fragment){
        this.scroll.scrollToAnchor(this.router.snapshot.fragment);
      } else {
        this.scroll.scrollToPosition([0, 0]);
      }
  }


}

