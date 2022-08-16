import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { TableComponent } from './Components/table/table.component';
import { UserComponent } from './Components/user/user.component';
import 'flowbite';
import { LoginComponent } from './Components/auth/login/login.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { AddComponent } from './Components/add/add.component';
import { EditComponent } from './Components/edit/edit.component';
import { GetoneComponent } from './Components/getone/getone.component';
// import { AuthguardGuard } from './Guards/authguard.guard';


const routes: Routes = [ 
  { path : "landing", component: LandingComponent },
  { path : "login", component: LoginComponent },
  { path : "register", component: RegisterComponent },
  { path : "add", component: AddComponent,  },
  { path : "table", component: TableComponent, },
  { path : "edit/:id", component: EditComponent, },
  { path : "user", component: UserComponent, },
  { path : "getone", component: GetoneComponent, },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




