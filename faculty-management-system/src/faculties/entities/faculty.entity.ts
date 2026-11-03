import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('faculties')
export class Faculty {
  @PrimaryColumn({ type: 'varchar' })
  Id!: string;

  @Column({ type: 'varchar' })
  Name!: string;

  @Column({ type: 'varchar' })
  expertise!: string;

  @Column({ type: 'int' })
  noOfPublication!: number;
}