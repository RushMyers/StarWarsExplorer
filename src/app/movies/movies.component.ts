import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies: Movie[] | null = null;
  public errorRetrievingMovies: HttpErrorResponse | null = null;

  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.movieService.getMovies()
      .subscribe(
        (data) => {
          return this.movies = data.results;
        },
        (error: HttpErrorResponse) => this.errorRetrievingMovies = error,
      );
  }

  public ngOnDestroy() {
  }
}
