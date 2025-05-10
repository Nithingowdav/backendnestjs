import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';


//incoming request and returning response 
//get post put delete etc 

//local host 3000/hello
@Controller('hello')
export class HelloController {

    //dependency injection
    constructor(private readonly helloService : HelloService){}

    @Get()
    getHello():string{
        return this.helloService.getHello();

    }
 // to pass dynamic value
    @Get('user/:name')
    getHelloWithName(@Param('name') name: string): string{
        return this.helloService.getHelloWithName(name);
    }

    // /hello/query?name=john

    @Get('query')
    getHelloWithQuery(@Query('name') name: string): string {
        return this.getHelloWithName(name || 'world');
    }


}
