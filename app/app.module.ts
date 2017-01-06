import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routableComponents } from './app.routes';

import { AppComponent }   from './app.component';

@NgModule ({
  // used to import Angular 2 Modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
   ],
  // used to import my components
  declarations: [
    AppComponent,
    routableComponents
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
