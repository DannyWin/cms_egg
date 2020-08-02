import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'roleModule',
  timestamps: false,
  freezeTableName: true,
})
export class RoleModule extends Model<RoleModule> {
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
    comment: 'moduleId',
  })
  moduleId: number;

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
export default () => RoleModule;
