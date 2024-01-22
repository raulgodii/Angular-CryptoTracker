import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() id:any;
  @Output() closeDetailEvent = new EventEmitter<string>();

  closeDetail(){
    this.closeDetailEvent.emit();
  }
}
