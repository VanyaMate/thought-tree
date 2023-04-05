import {BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";

export interface IEntityPointCreationData {
    authorId: number,
    parentId: number | null,
    title: string,
    text: string,
    pointsIds: number[]
}

@Table({
    tableName: 'entityPoint'
})
export class EntityPoint extends Model<EntityPoint, IEntityPointCreationData> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false })
    authorId: number;

    @ForeignKey(() => EntityPoint)
    @Column({ type: DataType.NUMBER, allowNull: false })
    parentId: number;

    @ForeignKey(() => EntityPoint)
    @Column({ type: DataType.ARRAY(DataType.INTEGER) })
    pointsIds: number[]

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    text: string;

    @BelongsTo(() => User)
    author: User;

    @BelongsTo(() => EntityPoint)
    parent: EntityPoint;

}