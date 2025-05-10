// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class NewEmployeeService {}


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDto } from '../Dto/create-employee.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NewEmployeeService {
  constructor(
    @InjectRepository(Employee) private readonly employeeRepo: Repository<Employee>
  ) {}

  async create(createDto: CreateEmployeeDto) {
    const employee = this.employeeRepo.create({
      ...createDto,
      referenceNumber: 'REF-' + uuidv4().slice(0, 8),
    });
    return await this.employeeRepo.save(employee);
  }

  findAll() {
    return this.employeeRepo.find();
  }

  findOne(id: number) {
    return this.employeeRepo.findOne({ where: { id } });
  }

  async update(id: number, updateDto: CreateEmployeeDto) {
    await this.employeeRepo.update(id, updateDto);
    return this.employeeRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.employeeRepo.delete(id);
    return { message: 'Deleted' };
  }
}
