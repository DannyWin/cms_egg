import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'messageRole',
  timestamps: false,
  freezeTableName: true,
})
export class MessageRole extends Model<MessageRole> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'messageId',
  })
  messageId: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'roleId',
  })
  roleId: number;

  @Column({
    type: DataType.DATE,
    comment: 'startDate',
  })
  startDate: Date;

  @Column({
    type: DataType.DATE,
    comment: 'endDate',
  })
  endDate: Date;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'order',
  })
  order: number;

  @Column({
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => MessageRole;
