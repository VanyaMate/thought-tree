import {FindOptions} from "sequelize";
import {EntityPoint} from "./entity-point.model";

export const MINIMAL_ENTITY_DATA: (limit?: number) => FindOptions<EntityPoint> = (limit: number = 10) => ({ attributes: ['id', 'title', 'text', 'likesAmount', 'showsCount'], limit });
export const EXTENDED_ENTITY_DATA: (limit?: number) => FindOptions<EntityPoint> = (limit: number = 10) => ({ attributes: ['id', 'title', 'text', 'likesAmount', 'showsCount', 'createdAt', 'updatedAt'], limit });