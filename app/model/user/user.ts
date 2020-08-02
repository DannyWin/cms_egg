import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'user',
  timestamps: false,
  freezeTableName: true,
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.STRING(30),
    comment: 'uid',
  })
  uid: string;

  @Column({
    type: DataType.STRING(30),
    comment: 'password',
  })
  pwd: string;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'organizationId',
  })
  organizationId: number;

  @Column({
    type: DataType.STRING(30),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.INTEGER(3),
    comment: 'age',
  })
  age: number;

  @Column({
    type: DataType.DATE,
    comment: 'regDate',
  })
  regDate: Date;

  @Column({
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => User;
