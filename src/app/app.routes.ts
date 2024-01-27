import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'home', component: LandingComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'search', component: SearchComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signUp', component: SignUpComponent}
];
