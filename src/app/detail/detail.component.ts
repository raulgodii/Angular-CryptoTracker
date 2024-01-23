import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule],
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
