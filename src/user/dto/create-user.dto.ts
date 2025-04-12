import { IsEmail, IsNumberString, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types"; // ✅ Import PartialType
export class CreateUserDto {


    @IsString()
    name: string;
    @IsEmail()
    email: string;

    @IsString()
    password: string;
    
  }

  // export class UpdateUserDto{
  //   @IsString()
  //   name: string;
  //   @IsEmail()
  //   email: string;

  //   @IsString()
  //   password: string;

  // }

  export class UpdateUserDto extends PartialType(CreateUserDto) {}