import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from '../../environments/environment';
import { ApiEndpoints } from '../enumerations/apiEndpoints';
import { DTO } from '../models/Dto';

@Injectable({
    providedIn: 'root',
})

export class MovieService {
    private apiBaseUrl: string = environment.apiBaseUrl;
    private endpoint = ApiEndpoints.movies;

    constructor(
        private http: HttpClient,
    ) { }

    getMovies(): Observable<DTO<Movie[]>> {
        const response = this.http.get(`${this.apiBaseUrl}/${this.endpoint}`) as Observable<DTO<Movie[]>>;

        return response;
    }
}
