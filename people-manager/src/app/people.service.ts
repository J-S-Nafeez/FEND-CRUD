import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  id?: string; // or _id if MongoDB
  name: string;
  age: number;
  gender: string;
  mobile: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseUrl = 'http://localhost:3000/person'; // replace with actual API URL

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  updatePerson(id: string, person: Person): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, person);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
