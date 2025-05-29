import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { PeopleDeleteComponent } from './people-delete/people-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/people-list', pathMatch: 'full' },
  { path: 'people-list', component: PeopleListComponent },
  { path: 'people-edit/:id', component: PeopleEditComponent },
  { path: 'people-delete/:id', component: PeopleDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
