import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarWarsAppScene } from '../models/StarWarsAppScene';
import { StarWarsSceneNames } from '../enumerations/StarWarsSceneNames';
import { StarWarsAppScenes } from '../constants/StarWarsAppScenes';

@Component({
  selector: 'app-module-tile',
  templateUrl: './module-tile.component.html',
  styleUrls: ['./module-tile.component.css']
})
export class ModuleTileComponent implements OnInit {

  @Input()
  module: StarWarsAppScene;

  @Output()
  tileClick = new EventEmitter<StarWarsAppScene>();

  constructor() { }

  ngOnInit(): void {
  }

  public onTileClick() {
    this.tileClick.emit(this.module);
  }
}
