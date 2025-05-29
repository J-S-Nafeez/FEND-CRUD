import { Component, OnInit } from '@angular/core';
import { PersonService, Person } from '../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [];

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.personService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  editPerson(id: string): void {
    this.router.navigate(['/people-edit', id]);
  }

  deletePerson(id: string): void {
    this.router.navigate(['/people-delete', id]);
  }
}
