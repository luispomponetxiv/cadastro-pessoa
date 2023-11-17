import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200, type: 'varchar' })
  name: string;

  @Column('int')
  age: number;

  @Column({ length: 200, type: 'varchar' })
  email: string;

  @Column({ length: 15, type: 'varchar' })
  phone: string;
}
