import {FindOptions} from "sequelize";
import {Tree} from "./tree.model";

export const MINIMAL_TREE_DATA: (limit?: number) => FindOptions<Tree> = (limit: number = 10) => ({
    attributes: [
        'id',
        'title',
        'description',
        'likesAmount',
        'showsCount',
    ],
    limit
});
export const EXTENDED_TREE_DATA: (limit?: number) => FindOptions<Tree> = (limit: number = 10) => ({
    attributes: [
        'id',
        'title',
        'description',
        'tree_json',
        'likesAmount',
        'showsCount',
        'createdAt',
        'updatedAt'
    ],
    limit
});