import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RequestAJAXService } from '../request-ajax.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  @Input() id:any;
  @Output() closeDetailEvent = new EventEmitter<string>();

  constructor(public RequestAJAX:RequestAJAXService, private scroll:ViewportScroller, private router:ActivatedRoute){
    this.router.params.subscribe(params => {
      const id = params['id'];
      // Puedes hacer algo con el ID aquí, como cargar los datos asociados al detalle.
   });
  }

  ngOnInit(): void {
    console.log("ID: " + this.id)
    this.RequestAJAX.getDataCoin(this.id);

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
