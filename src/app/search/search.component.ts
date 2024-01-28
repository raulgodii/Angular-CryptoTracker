import { Component } from '@angular/core';
import { RequestAJAXService } from '../request-ajax.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FirestoreControlService } from '../firestore-control.service';
import { UserControlService } from '../user-control.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  @Output() idEvent = new EventEmitter<string>();
  searchInput:any;
  firstSearch:boolean = false;

  constructor(public RequestAJAX:RequestAJAXService, private scroll:ViewportScroller, private router:ActivatedRoute, public firestoreService:FirestoreControlService, public userService: UserControlService){

  }


  ngOnInit(): void {
    this.RequestAJAX.getTrending();

    if(this.router.snapshot.fragment){
      this.scroll.scrollToAnchor(this.router.snapshot.fragment);
    } else {
      this.scroll.scrollToPosition([0, 0]);
    }
  }

  viewDetail(id:any){
    this.idEvent.emit(id);
  }

  searchCoin(){
    console.log(this.searchInput);
    this.firstSearch = true;

    this.RequestAJAX.searchCoin(this.searchInput);

    this.searchInput = "";
  }

  
  followCrypto(id:any){
    this.firestoreService.followCrypto(id, this.userService.user.uid);
  }
  
}
