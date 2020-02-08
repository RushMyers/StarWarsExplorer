import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComponentPaths } from './enumerations/componentPaths';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';

export const appRoutes: Routes = [
    { path: ComponentPaths.home, component: HomeComponent, },
    { path: ComponentPaths.movies, component: MoviesComponent },
    { path: ComponentPaths.people, component: PeopleComponent },
    { path: ComponentPaths.planets, component: PlanetsComponent },
];
