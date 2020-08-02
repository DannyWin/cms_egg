import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'province',
  timestamps: false,
  freezeTableName: true,
})
export class Province extends Model<Province> {
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
    type: DataType.INTEGER(11),
    comment: 'countryId',
  })
  countryId: number;

  @Column({
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => Province;
