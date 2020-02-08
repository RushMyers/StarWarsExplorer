import { StarWarsAppModule } from '../models/starWarsAppModule';
import { StarWarsModuleNames } from '../enumerations/StarWarsModuleNames';
import { ComponentPaths } from '../enumerations/componentPaths';

export const starWarsAppModules: StarWarsAppModule[] = [
    {
        name: StarWarsModuleNames.movies,
        url: ComponentPaths.movies,
    },
    {
        name: StarWarsModuleNames.people,
        url: ComponentPaths.people,
    },
    {
        name: StarWarsModuleNames.planets,
        url: ComponentPaths.planets,
    }
];
