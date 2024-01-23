import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'home', component: LandingComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'search', component: SearchComponent}
];
