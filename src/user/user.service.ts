import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,){}
    // findOne(id:string) {
    //     return ({
    //         id:id, //goto postman user fet user/45 anf output id 45
    //     })
    //}

    async findOne(id: number){
        return await this.userRepo.findOne({where: {id:id}})
    }
    // create(createUserDto: CreateUserDto){
    //     return 'the user is created';  //post user user will creatd come 
    async create(createUserDto: CreateUserDto){
        const user = await this.userRepo.create(createUserDto);
        return await this.userRepo.save(user);
    }

    async update(id: number, updateUserDto: UpdateUserDto){
        return await this.userRepo.update(id, updateUserDto);

    }
}
