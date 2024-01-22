import { Component } from '@angular/core';
import { RequestAJAXService } from '../request-ajax.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  @Output() idEvent = new EventEmitter<string>();

  constructor(public RequestAJAX:RequestAJAXService){

  }

  ngOnInit(): void {
    this.RequestAJAX.getTrending();
  }

  followCoin(){
    
  }

  viewDetail(id:any){
    this.idEvent.emit(id);
  }
  
}
