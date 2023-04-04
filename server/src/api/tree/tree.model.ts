import {Column, DataType, ForeignKey, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";
import {EntityPoint} from "../entity-point/entity-point.model";

export interface ITreeCreationData {
    authorId: number,
    name: string,
}

@Table({
    tableName: 'trees'
})
export class Tree extends Model<Tree, ITreeCreationData> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    author: User;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ForeignKey(() => EntityPoint)
    rootEntity: EntityPoint;

}