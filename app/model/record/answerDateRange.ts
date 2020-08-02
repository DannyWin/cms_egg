import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'answerDateRange',
  timestamps: false,
  freezeTableName: true,
})
export class AnswerDateRange extends Model<AnswerDateRange> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'answerRecordId',
  })
  answerRecordId: number;

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
export default () => AnswerDateRange;
