import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {EntityPoint} from "./entity-point.model";

export interface IEntityToEntityData {
    parent_id: number,
    child_id: number,
}

@Table({
    tableName: 'entity_to_entity',
    createdAt: false,
    updatedAt: false,
})
export class EntityToEntity extends Model<EntityToEntity, IEntityToEntityData> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => EntityPoint)
    @Column({ type: DataType.INTEGER, allowNull: false, unique: false })
    parent_id: number;

    @ForeignKey(() => EntityPoint)
    @Column({ type: DataType.INTEGER, allowNull: false, unique: false })
    child_id: number;

}