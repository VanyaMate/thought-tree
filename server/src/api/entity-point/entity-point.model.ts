import {Column, DataType, ForeignKey, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";

export interface IEntityPointCreationData {
    author: User,
    parent: EntityPoint | null,
    title: string,
    text: string,
    points: EntityPoint[]
}

@Table({
    tableName: 'entityPoint'
})
export class EntityPoint extends Model<EntityPoint, IEntityPointCreationData> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    author: User;

    @ForeignKey(() => EntityPoint)
    parent: EntityPoint | null;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: false })
    text: string;

    @HasMany(() => EntityPoint)
    points: EntityPoint[]

}