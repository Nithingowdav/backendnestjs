import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BankDetails {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountNumber: string;

  @Column()
  ifscCode: string;

  @Column()
  bankName: string;
}
