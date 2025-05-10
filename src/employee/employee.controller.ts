import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
     constructor(private readonly employeeService : EmployeeService){}

     @Get()
     getAllUsers(){
        return this.employeeService.getAllUsers();
     }

     @Get(':id')
     getUserById(@Param('id', ParseIntPipe) id : number ){
        return this.employeeService.getUserbyId(id);

     }
// hello nithin hello john etc
     @Get(':id/welcome')
     getWelcomeMessage(@Param('id', ParseIntPipe) id : number){
        return this.employeeService.getWelcomeMessage(id);
     }
    

}
