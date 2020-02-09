import { StarWarsSceneNames } from '../enumerations/StarWarsSceneNames';
import { Routes } from '@angular/router';
import { ComponentPaths } from '../enumerations/componentPaths';

export interface StarWarsAppScene {
    name: StarWarsSceneNames;
    url: ComponentPaths;
}
