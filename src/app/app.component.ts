import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, LandingComponent, SearchComponent, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
  openDetail:boolean = false;
  detailID:any;

  openDetailEvent(id:any){
    this.openDetail = true;
    this.detailID = id;
  }

  closeDetail(){
    console.log("closing");
    this.openDetail = false;
  }
}
