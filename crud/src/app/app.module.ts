import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToolbarModule} from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitButtonModule } from 'primeng/splitbutton';
import {RouterModule} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableComponent } from './Components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';
import { LandingComponent } from './Components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UserComponent,
    LandingComponent,
    

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



  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
