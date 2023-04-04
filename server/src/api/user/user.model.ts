import {Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {Tree} from "../tree/tree.model";
import {EntityPoint} from "../entity-point/entity-point.model";

export interface IUserCreationData {
    login: string,
    password: string,
}

@Table({
    tableName: 'users'
})
export class User extends Model<User, IUserCreationData> {

    @ForeignKey(() => EntityPoint)
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    login: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @HasMany(() => Tree)
    trees: Tree[]

    @HasMany(() => EntityPoint)
    entities: EntityPoint[]

}