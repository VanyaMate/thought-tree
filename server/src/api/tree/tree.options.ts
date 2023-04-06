import {FindOptions} from "sequelize";
import {Tree} from "./tree.model";

export const MINIMAL_TREE_DATA: (limit?: number) => FindOptions<Tree> = (limit: number = 10) => ({ attributes: ['id', 'title', 'tree_json'], limit });
export const EXTENDED_TREE_DATA: (limit?: number) => FindOptions<Tree> = (limit: number = 10) => ({ attributes: ['id', 'title', 'tree_json', 'createdAt', 'updatedAt'], limit });