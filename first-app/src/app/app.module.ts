import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponentComponent } from './grid-component/grid-component.component';
// FORM
import { FormsModule } from '@angular/forms';
// (ngSwitch, ngIf, ngFor, ...)
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // aggiunto per i form 
    FormsModule,
    // (ngSwitch, ngIf, ngFor, ...)
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
