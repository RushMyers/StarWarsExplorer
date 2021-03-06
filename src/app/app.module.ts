import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ModuleTileComponent } from './module-tile/module-tile.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { PersonTileComponent } from './person-tile/person-tile.component';
import { PlanetTileComponent } from './planet-tile/planet-tile.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModuleTileComponent,
    MoviesComponent,
    PeopleComponent,
    PlanetsComponent,
    HeaderComponent,
    PersonTileComponent,
    PlanetTileComponent,
    MovieTileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
