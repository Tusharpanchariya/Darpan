import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Contact extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  email!: string;

  @Column({ type: DataType.STRING })
  subject!: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  message!: string;
}
