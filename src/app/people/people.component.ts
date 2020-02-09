import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public people: Person[] | null = null;
  public errorRetrievingPeople: HttpErrorResponse | null = null;

  constructor(
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.personService.getPeople()
      .subscribe(
        (data) => {
          return this.people = data.results;
        },
        (error) => this.errorRetrievingPeople = error,
      );
  }
}
