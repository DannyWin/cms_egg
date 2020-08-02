import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  modelName: 'organizationAddress',
  timestamps: false,
  freezeTableName: true,
})
export class OrganizationAddress extends Model<OrganizationAddress> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER(11),
    comment: 'id',
  })
  id: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'organizationId',
  })
  organizationId: number;

  @Column({
    type: DataType.INTEGER(11),
    comment: 'roleId',
  })
  addressId: number;

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
export default () => OrganizationAddress;
