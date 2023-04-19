import {IEntityData} from "../../src/components/Entity/Entity";
import {EntityList, IEntityTree, IEntityTreeJsonPoint} from "../../src/store/reEntities/re_entities.slice";

export interface ITreeEntities {
    id: number,
    points: ITreeEntities[],
}


export const concatenateTreeWithEntity = function (tree: ITreeEntities, entityList: IEntityData[]): IEntityTree {
    try {
        return {
            data: entityList.filter((entity) => entity.id === tree.id)[0],
            points: tree.points.map((treePoint) => concatenateTreeWithEntity(treePoint, entityList)),
        };
    }
    catch (e) {
        return {} as IEntityTree;
    }
}

// Сгенерировать entityTrees из дерева
export const getEntityTreesByTree = function (tree: IEntityTree, list: EntityList) {
    if (tree.data) {
        list[tree.data.id] = {
            data: tree.data,
            redactMode: false,
            edited: false,
            points: tree.points.map((point) => point.data && point.data.id)
        }

        tree.points.forEach((point) => {
            getEntityTreesByTree(point, list);
        })
    }

    return list;
}

export const generateNewTreeToJsonById = function (currentId: number, list: EntityList, currentPoint = {} as IEntityTreeJsonPoint) {
    currentPoint.id = currentId;
    currentPoint.points = list[currentId].points.map((point) => list[point] && generateNewTreeToJsonById(point, list)).filter((point) => !!point);

    return currentPoint;
}