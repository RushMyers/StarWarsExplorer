import { StarWarsModuleNames } from '../enumerations/StarWarsModuleNames';
import { Routes } from '@angular/router';
import { ComponentPaths } from '../enumerations/componentPaths';

export interface StarWarsAppModule {
    name: StarWarsModuleNames;
    url: ComponentPaths;
}
