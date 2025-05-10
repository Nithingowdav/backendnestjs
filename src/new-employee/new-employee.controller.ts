// import { Controller } from '@nestjs/common';

// @Controller('new-employee')
// export class NewEmployeeController {}


import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { NewEmployeeService } from './new-employee.service';
import { CreateEmployeeDto } from '../Dto/create-employee.dto';

@Controller('employees')
export class NewEmployeeController {
  constructor(private readonly newEmployeeService: NewEmployeeService) {}

  @Post()
  create(@Body() dto: CreateEmployeeDto) {
    return this.newEmployeeService.create(dto);
  }

  @Get()
  findAll() {
    return this.newEmployeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newEmployeeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateEmployeeDto) {
    return this.newEmployeeService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newEmployeeService.remove(+id);
  }
}
