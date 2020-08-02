import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'module',
  timestamps: false,
  freezeTableName: true,
})
export class Module extends Model<Module> {
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
    type: DataType.TEXT,
    comment: 'url',
  })
  url: string;

  @Column({
    type: DataType.TEXT,
    comment: 'api',
  })
  api: string;

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
export default () => Module;
