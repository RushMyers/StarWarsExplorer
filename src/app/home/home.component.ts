import { Component, OnInit } from '@angular/core';
import { starWarsAppModules } from '../constants/starWarsAppModules';
import { StarWarsAppModule } from '../models/starWarsAppModule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public starWarsAppModules: StarWarsAppModule[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.starWarsAppModules = starWarsAppModules;
  }

  public navigateToAppModule = (appModule: StarWarsAppModule): void => {
    this.router.navigate([appModule.url]);
  }
}
