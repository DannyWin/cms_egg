import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'role',
  timestamps: false,
  freezeTableName: true,
})
export class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.STRING(30),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    comment: 'description',
  })
  description: string;

  @Column({
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => Role;
