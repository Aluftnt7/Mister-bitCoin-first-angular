import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { LoginComponent } from '../pages/login/login.component';
import { ContactEditComponent } from './../pages/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './../pages/contact-details/contact-details.component';
import { ChartComponent } from '../components/chart/chart.component';
import { HomePageComponent } from './../pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  ContactPageComponent } from '../pages/contact-page/contact-page.component';


const routes: Routes = [
  {path: '', component:  LoginComponent},
  {path: 'Home', component:  HomePageComponent, canActivate: [IsLoggedInGuard]},
  {path: 'Contact/Edit/:_id', component:  ContactEditComponent,canActivate: [IsLoggedInGuard]},
  {path: 'Contact/Edit', component:  ContactEditComponent,canActivate: [IsLoggedInGuard]},
  {path: 'Contact/:_id', component:  ContactDetailsComponent,canActivate: [IsLoggedInGuard]},
  {path: 'Contact', component:  ContactPageComponent,canActivate: [IsLoggedInGuard]},
  {path: 'Statistics', component:  ChartComponent,canActivate: [IsLoggedInGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
