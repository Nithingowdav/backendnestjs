

// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Employee } from '../entities/employee.entity';
// import { EmployeeExpense } from '../entities/employee-expense.entity';
// import { BankDetails } from '../entities/bank-details.entity';
// import { NewEmployeeController } from './new-employee.controller';
// import { NewEmployeeService } from './new-employee.service';

// @Module({
//   imports: [TypeOrmModule.forFeature([Employee, EmployeeExpense, BankDetails])],
//   controllers: [NewEmployeeController],
//  providers: [NewEmployeeService]
// })
// export class NewEmployeeModule {}


// src/employee/employee.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../entities/employee.entity';
import { BankDetails } from '../entities/bank-details.entity';
import { EmployeeExpense } from '../entities/employee-expense.entity';
import { NewEmployeeService } from './new-employee.service';
import { NewEmployeeController } from './new-employee.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, BankDetails, EmployeeExpense])],
  controllers: [NewEmployeeController],
  providers: [NewEmployeeService],
})
export class NewEmployeeModule {}
