import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'roleSurvey',
  timestamps: false,
  freezeTableName: true,
})
export class RoleSurvey extends Model<RoleSurvey> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'roleId',
  })
  roleId: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'surveyId',
  })
  surveyId: number;

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
export default () => RoleSurvey;
