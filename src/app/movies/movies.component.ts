import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] | null = null;
  private errorRetrievingMovies: any = null;

  constructor(
    private moviesService: MovieService,
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.moviesService.getMovies()
      .subscribe(
        (data) => {
          return this.movies = data.results;
        },
        (error) => this.errorRetrievingMovies = error,
      );
  }
}
