import {
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    HasOne,
    Model,
    Table
} from "sequelize-typescript";
import {User} from "../user/user.model";
import {EntityToEntity} from "./entity-to-entity.model";

export interface IEntityPointCreationData {
    author_id: number,
    parent_id: number | null,
    title: string,
    text: string
}

@Table({
    tableName: 'entityPoint'
})
export class EntityPoint extends Model<EntityPoint, IEntityPointCreationData> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    author_id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    text: string;

    @BelongsTo(() => User)
    author: User;

    @BelongsToMany(() => EntityPoint, () => EntityToEntity, 'child_id')
    parent: EntityPoint;

    @BelongsToMany(() => EntityPoint, () => EntityToEntity, 'parent_id')
    children: EntityPoint[]

}