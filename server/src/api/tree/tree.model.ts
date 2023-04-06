import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../user/user.model";

export interface ITreeCreationData {
    author_id: number,
    name: string,
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
    name: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: '{}' })
    tree_json: string;

    @BelongsTo(() => User)
    author: User;

}