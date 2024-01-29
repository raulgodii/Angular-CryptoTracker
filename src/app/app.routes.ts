import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { isLogGuard } from './is-log.guard';
import { noLogGuard } from './no-log.guard';

import { PruebaComponent } from './prueba/prueba.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'home', component: LandingComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'search', component: SearchComponent},
    {path: 'login', component: LoginComponent, canActivate:[noLogGuard]},
    {path: 'signUp', component: SignUpComponent, canActivate:[noLogGuard]},
    {path: 'portfolio', component: PortfolioComponent, canActivate:[isLogGuard]},
    {path: 'prueba', component: PruebaComponent},
];
