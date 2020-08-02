import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'message',
  timestamps: false,
  freezeTableName: true,
})
export class Message extends Model<Message> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    comment: 'title',
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    comment: 'content',
  })
  content: string;

  @Column({
    type: DataType.DATE,
    comment: 'addDate',
  })
  addDate: Date;

  @Column({
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => Message;
