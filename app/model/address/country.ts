import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'country',
  timestamps: false,
  freezeTableName: true,
})
export class Country extends Model<Country> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    comment: 'name',
  })
  name: string;

  @Column({
    type: DataType.STRING(10),
    comment: 'code',
  })
  code: string;

  @Column({
    type: DataType.STRING(10),
    comment: 'timeZone',
  })
  timeZone: string;

  @Column({
    type: DataType.STRING(30),
    comment: 'continent',
  })
  continent: string;

  @Column({
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => Country;
