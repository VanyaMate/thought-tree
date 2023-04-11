import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";

export interface ITreeCreationData {
    author_id: number,
    name: string,
    description: string,
    likesAmount: number,
    showsCount: number,
    tree_json?: string
}

@Table({
    tableName: 'trees'
})
export class Tree extends Model<Tree, ITreeCreationData> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => User)
    author_id: User;

    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @Column({ type: DataType.STRING, allowNull: true, defaultValue: '' })
    description: string;

    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
    likesAmount: number;

    @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
    showsCount: number;

    @Column({ type: DataType.TEXT, allowNull: false, defaultValue: '{}' })
    tree_json: string;

    @BelongsTo(() => User)
    author: User;

}