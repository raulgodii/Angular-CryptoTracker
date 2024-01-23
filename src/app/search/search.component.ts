import { Component } from '@angular/core';
import { RequestAJAXService } from '../request-ajax.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  constructor(public RequestAJAX:RequestAJAXService){

  }

  ngOnInit(): void {
    this.RequestAJAX.getTrending();
  }

  viewDetail(id:any){
    this.idEvent.emit(id);
  }

  searchCoin(){
    console.log(this.searchInput);

    this.RequestAJAX.searchCoin(this.searchInput);

    this.searchInput = "";
  }
  
}
