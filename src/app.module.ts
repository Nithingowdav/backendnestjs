import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [UserModule, CommentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Invent123',
      database: 'user',
      entities: [User, Topic, Comment],
      synchronize: true, // Only use in dev! for produvcation it false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
