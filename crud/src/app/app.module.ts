import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarModule} from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitButtonModule } from 'primeng/splitbutton';
import {Router, RouterModule} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from './Components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';
import { LandingComponent } from './Components/landing/landing.component';
import { AuthComponent } from './Components/auth/auth.component';
import { RegisterComponent } from './Components/auth/register/register.component';
import { LoginComponent } from './Components/auth/login/login.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddComponent } from './Components/add/add.component';
import { EditComponent } from './Components/edit/edit.component';
import { GetoneComponent } from './Components/getone/getone.component';                  //api




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserComponent,
    LandingComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    AddComponent,
    EditComponent,
    GetoneComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    ButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    SplitButtonModule,
    ToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,





  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
