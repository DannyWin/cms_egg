import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'answerRecord',
  timestamps: false,
  freezeTableName: true,
})
export class AnswerRecord extends Model<AnswerRecord> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'userId',
  })
  userId: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'questionId',
  })
  questionId: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'answerId',
  })
  answerId: number;

  @Column({
    type: DataType.TEXT,
    comment: 'content',
  })
  content: string;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'answerDateRangeId',
  })
  answerDateRangeId: number;

  @Column({
    type: DataType.DATE,
    comment: 'answerDate',
  })
  answerDate: Date;

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
export default () => AnswerRecord;
