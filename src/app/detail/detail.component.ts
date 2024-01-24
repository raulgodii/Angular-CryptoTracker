import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RequestAJAXService } from '../request-ajax.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  @Input() id:any;
  @Output() closeDetailEvent = new EventEmitter<string>();

  constructor(public RequestAJAX:RequestAJAXService, private scroll:ViewportScroller, private router:ActivatedRoute){

  }

  ngOnInit(): void {
    if(this.router.snapshot.fragment){
      this.scroll.scrollToAnchor(this.router.snapshot.fragment);
    } else {
      this.scroll.scrollToPosition([0, 0]);
    }
  }

  closeDetail(){
    this.closeDetailEvent.emit();
  }
}
