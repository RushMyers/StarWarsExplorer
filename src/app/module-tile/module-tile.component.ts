import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarWarsAppModule } from '../models/starWarsAppModule';
import { StarWarsModuleNames } from '../enumerations/StarWarsModuleNames';
import { starWarsAppModules } from '../constants/starWarsAppModules';

@Component({
  selector: 'app-module-tile',
  templateUrl: './module-tile.component.html',
  styleUrls: ['./module-tile.component.css']
})
export class ModuleTileComponent implements OnInit {

  @Input()
  module: StarWarsAppModule;

  @Output()
  tileClick = new EventEmitter<StarWarsAppModule>();

  constructor() { }

  ngOnInit(): void {
  }

  public onTileClick() {
    this.tileClick.emit(this.module);
  }
}
