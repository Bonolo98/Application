import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { TableComponent } from './Components/table/table.component';
import { UserComponent } from './Components/user/user.component';
import 'flowbite';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { AddComponent } from './Components/add/add.component';

const routes: Routes = [ 
  { path : "landing", component: LandingComponent },
  { path : "login", component: LoginComponent },
  { path : "register", component: RegisterComponent },
  { path : "add", component: AddComponent },
  { path : "table", component: TableComponent },
  { path : "user", component: UserComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




