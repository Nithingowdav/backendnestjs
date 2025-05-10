import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EmployeeExpense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expenseType: string;

  @Column()
  amount: string;
}
