import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.css']
})
export class PeopleDeleteComponent implements OnInit {

  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  confirmDelete(): void {
    if (this.id) {
      this.personService.deletePerson(this.id).subscribe(() => {
        this.router.navigate(['/people-list']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/people-list']);
  }
}
