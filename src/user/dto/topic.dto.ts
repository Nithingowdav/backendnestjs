// export class CreateTopicDto {
//     title: string;
//     description: string;
//   }
  
//   export class UpdateTopicDto {
//     title?: string;
//     description?: string;
//   }
  

import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTopicDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

export class UpdateTopicDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

