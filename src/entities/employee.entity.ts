import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { EmployeeExpense } from './employee-expense.entity';
import { BankDetails } from './bank-details.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  referenceNumber: string;

  @Column()
  employeeId: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  salary: string;

  @Column()
  fatherName: string;

  @Column()
  motherName: string;

  @Column()
  casteCertificate: string;
  
  @Column()
position: string;

  @OneToOne(() => EmployeeExpense, { cascade: true, eager: true })
  @JoinColumn()
  expense: EmployeeExpense;

  @OneToOne(() => BankDetails, { cascade: true, eager: true })
  @JoinColumn()
  bankDetails: BankDetails;
}
