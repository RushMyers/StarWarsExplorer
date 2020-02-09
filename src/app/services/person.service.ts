import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from '../../environments/environment';
import { ApiEndpoints } from '../enumerations/apiEndpoints';
import { DTO } from '../models/Dto';
import { Person } from '../models/person';

@Injectable({
    providedIn: 'root',
})

export class PersonService {
    private apiBaseUrl: string = environment.apiBaseUrl;
    private endpoint = ApiEndpoints.people;

    constructor(
        private http: HttpClient,
    ) { }

    getPeople(): Observable<DTO<Person[]>> {
        const response = this.http.get(`${this.apiBaseUrl}/${this.endpoint}`) as Observable<DTO<Person[]>>;

        return response;
    }
}
