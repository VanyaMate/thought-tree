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

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    likesAmount: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
    showsCount: number;

    @BelongsTo(() => User)
    author: User;

}