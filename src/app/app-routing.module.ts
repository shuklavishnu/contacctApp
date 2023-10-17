import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Auth/Gaurds/auth.guard';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';

const routes: Routes = [
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'dashboard',loadChildren:()=>import('./Dashboard/dashboard/dashboard.module').then(m =>m.DashboardModule),canActivate:[authGuard]},
  {path:'contact',loadChildren:()=>import('./Contacts/contact/contact.module').then(m =>m.ContactModule),canActivate:[authGuard]},
  {path:'', redirectTo:'contact',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
