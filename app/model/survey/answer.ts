import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'answer',
  timestamps: false,
  freezeTableName: true,
})
export class Answer extends Model<Answer> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.TEXT,
    comment: 'content',
  })
  content: string;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'questionId',
  })
  questionId: number;

  @Column({
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => Answer;
