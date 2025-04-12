import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

// user/all
//user/id

@Controller('user')
export class UserController {
    //i need to pass serices as a constructor here 
    constructor(private readonly userService:UserService, private readonly commentService: CommentService){}  
    
    @Get(':id') 
    // findAll(@Param('id')id: string) {
    
        // return {
        //     user : {
        //         id : id,
        //     }
        // }
        findOne(@Param('id') id: number){
            return this.userService.findOne(id);

        }
    
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
      //return createUserDto;
      return this.userService.create(createUserDto);
    }
    

    @Get(':id/comments')
    getUserComments(@Param("id") id:string){
        return this.commentService.findUserComments(id); //get the usercomment user/45/comments --> this is comments of the user
        
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto){
        return this.userService.update(id,updateUserDto)
    }

}
