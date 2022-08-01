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


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,

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
   HttpClientModule


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
