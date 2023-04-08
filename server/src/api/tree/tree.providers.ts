import {Tree} from "./tree.model";

export const treeProviders = [
    {
        provide: 'TREE_REPOSITORY',
        useValue: Tree
    }
]