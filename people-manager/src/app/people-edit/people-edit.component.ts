import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService, Person } from '../services/person.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit {

  personForm: FormGroup;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private fb: FormBuilder
  ) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.personService.getPersonById(this.id).subscribe(person => {
        this.personForm.patchValue(person);
      });
    }
  }

  onSubmit(): void {
    if (this.personForm.valid && this.id) {
      this.personService.updatePerson(this.id, this.personForm.value).subscribe(() => {
        this.router.navigate(['/people-list']);
      });
    }
  }
}
