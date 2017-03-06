import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import FormModule package for 2-way data binding for form inputs
import { FormsModule } from '@angular/forms';
// import components 
import { AppComponent }  from './app.component';
import { PetsDetailComponent } from './pets-detail.component';

// NgModule decorator's imports array contains the list of external modules used by the application
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PetsDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
