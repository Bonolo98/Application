import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { TableComponent } from './Components/table/table.component';
import { UserComponent } from './Components/user/user.component';

const routes: Routes = [ 
  { path : "", component: LandingComponent },
  { path : "table", component: TableComponent },
  { path : "user", component: UserComponent },

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




