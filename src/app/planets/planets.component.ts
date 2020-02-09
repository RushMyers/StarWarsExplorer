import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet';
import { PlanetService } from '../services/planet.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  public planets: Planet[] | null = null;
  public errorRetreivingPlanets: HttpErrorResponse | null = null;

  constructor(
    private planetService: PlanetService,
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  private getPlanets(): void {
    this.planetService.getPlanets()
      .subscribe(
        (data) => {
          return this.planets = data.results;
        },
        (error: HttpErrorResponse) => {
          return this.errorRetreivingPlanets = error;
        }
      );
  }
}
