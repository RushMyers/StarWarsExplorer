import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../models/planet';

@Component({
  selector: 'app-planet-tile',
  templateUrl: './planet-tile.component.html',
  styleUrls: ['./planet-tile.component.css']
})
export class PlanetTileComponent implements OnInit {

  @Input()
  planet: Planet;

  constructor() { }

  ngOnInit(): void {
  }
}
