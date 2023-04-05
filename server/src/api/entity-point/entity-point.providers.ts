import {EntityPoint} from "./entity-point.model";
import {EntityToEntity} from "./entity-to-entity.model";

export const entityProviders = [
    {
        provide: "ENTITY_POINT_REPOSITORY",
        useValue: EntityPoint
    },
    {
        provide: "ENTITY_TO_ENTITY_REPOSITORY",
        useValue: EntityToEntity
    }
]