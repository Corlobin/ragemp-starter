import { Table, Column, Model, AllowNull, Default, DataType } from 'sequelize-typescript';

@Table({ tableName: 'vehicles' })
export default class Vehicle extends Model<Vehicle> {
  @AllowNull(false)
  @Column({ type: DataType.BIGINT })
  model!: string;

  @AllowNull(false)
  @Column
  position!: string;

  @AllowNull(false)
  @Default(0)
  @Column
  dimension!: number;

  @AllowNull(false)
  @Column
  primaryColor!: string;

  @AllowNull(false)
  @Column
  secondaryColor!: string;
}
