import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'surveyQuestion',
  timestamps: false,
  freezeTableName: true,
})
export class SurveyQuestion extends Model<SurveyQuestion> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'surveyId',
  })
  surveyId: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'questionId',
  })
  questionId: number;

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
export default () => SurveyQuestion;
