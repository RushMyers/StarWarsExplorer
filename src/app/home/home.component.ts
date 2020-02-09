import { Component, OnInit } from '@angular/core';
import { StarWarsAppScenes } from '../constants/StarWarsAppScenes';
import { StarWarsAppScene } from '../models/StarWarsAppScene';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public StarWarsAppScenes: StarWarsAppScene[];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.StarWarsAppScenes = StarWarsAppScenes;
  }

  public navigateToAppModule = (appModule: StarWarsAppScene): void => {
    this.router.navigate([appModule.url]);
  }
}
