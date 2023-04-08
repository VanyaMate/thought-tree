import {EntityPoint} from "./entity-point.model";

export const entityProviders = [
    {
        provide: "ENTITY_POINT_REPOSITORY",
        useValue: EntityPoint
    }
]