import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'city',
  timestamps: false,
  freezeTableName: true,
})
export class City extends Model<City> {
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
    comment: 'provinceId',
  })
  provinceId: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'countryId',
  })
  countryId: number;

  @Column({
    type: DataType.DECIMAL(8, 5),
    comment: 'longitude',
  })
  longitude: number;

  @Column({
    type: DataType.DECIMAL(8, 5),
    comment: 'latitude',
  })
  latitude: number;

  @Column({
    comment: 'enabled/disabled',
  })
  enabled: boolean;

  @Column({
    comment: 'deleted',
  })
  deleted: boolean;
}
export default () => City;
