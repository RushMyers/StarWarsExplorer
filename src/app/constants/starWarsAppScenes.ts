import { StarWarsAppScene } from '../models/StarWarsAppScene';
import { StarWarsSceneNames } from '../enumerations/StarWarsSceneNames';
import { ComponentPaths } from '../enumerations/componentPaths';

export const StarWarsAppScenes: StarWarsAppScene[] = [
    {
        name: StarWarsSceneNames.movies,
        url: ComponentPaths.movies,
    },
    {
        name: StarWarsSceneNames.people,
        url: ComponentPaths.people,
    },
    {
        name: StarWarsSceneNames.planets,
        url: ComponentPaths.planets,
    }
];
