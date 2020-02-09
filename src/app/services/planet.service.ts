import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { environment } from '../../environments/environment';
import { ApiEndpoints } from '../enumerations/apiEndpoints';
import { DTO } from '../models/Dto';
import { Planet } from '../models/planet';

@Injectable({
    providedIn: 'root',
})

export class PlanetService {
    private apiBaseUrl: string = environment.apiBaseUrl;
    private endpoint = ApiEndpoints.planets;

    constructor(
        private http: HttpClient,
    ) { }

    getPlanets(): Observable<DTO<Planet[]>> {
        const response = this.http.get(`${this.apiBaseUrl}/${this.endpoint}`) as Observable<DTO<Planet[]>>;

        return response;
    }
}
