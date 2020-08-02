import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'survey',
  timestamps: false,
  freezeTableName: true,
})
export class Survey extends Model<Survey> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.STRING(30),
    comment: 'surveyName',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'description',
  })
  description: string;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'expectedCount',
  })
  expectedCount: number;

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
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => Survey;
