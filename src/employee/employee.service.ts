import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class EmployeeService {
    //injecting services from other module
    //hello module must export helloService
    //employee module must import the hellomodule

    constructor(private readonly helloService: HelloService){}


    getAllUsers(){
        return [
            {
                id : 1, 
                name: 'Nithin',
            },
            {
                id : 2,
                name : 'John',
            },
            {
                id : 3,
                name: 'Gowda',
            }
        ]

    }

    getUserbyId(id: number){
        const employee = this.getAllUsers().find(employee => employee.id === id);
        return employee;
    }

    getWelcomeMessage(userId: number){
        const employee = this.getUserbyId(userId)

        if(!employee){
            return 'Employee not found'
        }

        return this.helloService.getHelloWithName(employee.name);
    }


}
