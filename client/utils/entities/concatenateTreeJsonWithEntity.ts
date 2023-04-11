import {IEntityData} from "../../src/components/Entity/Entity";

export interface ITreeEntities {
    id: number,
    points: ITreeEntities[],
}


export const concatenateTreeWithEntity = function (tree: ITreeEntities, entityList: IEntityData[]) {
    try {
        return {
            data: entityList.filter((entity) => entity.id === tree.id)[0],
            points: tree.points.map((treePoint) => concatenateTreeWithEntity(treePoint, entityList)),
        };
    }
    catch (e) {
        return {};
    }
}