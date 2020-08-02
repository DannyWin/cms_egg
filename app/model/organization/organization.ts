import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'organization',
  timestamps: false,
  freezeTableName: true,
})
export class Organization extends Model<Organization> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'pid',
  })
  pid: number;

  @Column({
    type: DataType.STRING(100),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'description',
  })
  description: string;

  @Column({
    type: DataType.STRING(20),
    comment: 'phone',
  })
  phone: string;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'employeeCount',
  })
  employeeCount: number;

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
export default () => Organization;
