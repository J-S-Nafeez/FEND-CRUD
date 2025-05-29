import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { PeopleDeleteComponent } from './people-delete/people-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleEditComponent,
    PeopleDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
