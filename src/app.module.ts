import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { Comment } from './entities/comment.entity';
import { TopicModule } from './topic/topic.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { HelloModule } from './hello/hello.module';
import { EmployeeModule } from './employee/employee.module';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { NewEmployeeModule } from './new-employee/new-employee.module';
import * as joi from 'joi';
import appConfig from './config/app.config';
import { BankDetails } from './entities/bank-details.entity';
import { Employee } from './entities/employee.entity';
import { EmployeeExpense } from './entities/employee-expense.entity';

@Module({
  imports: [UserModule, CommentModule,ServeStaticModule.forRoot({
    rootPath: path.join(__dirname, '..'),// Adjust the path to your folder containing index.html
  }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Invent123',
      database: 'employee_db',
      autoLoadEntities: true, // good
      entities: [User, Topic, Comment,BankDetails, Employee, EmployeeExpense],
      synchronize: true, // Only use in dev! for produvcation it false
    }),
    TopicModule,
    HelloModule,
    EmployeeModule,
    ConfigModule.forRoot({
      isGlobal : true, // makes configmodule globally available
      // validationSchema: joi.object({
      //   APP_NAME: joi.string().default('defaultApp'),
      // }),
      load: [appConfig],
    }
    ),
    PostsModule,
    NewEmployeeModule
  ],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
