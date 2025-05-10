// import { Module } from '@nestjs/common';
// import { TopicService } from './topic.service';
// import { TopicController } from './topic.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Topic } from 'src/entities/topic.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Topic])],
//   controllers: [TopicController],
//   providers: [TopicService],
// })
// export class TopicModule {}



// topic.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from 'src/entities/topic.entity';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Topic])], // ✅ THIS IS MANDATORY
  controllers: [TopicController],
  providers: [TopicService],
  exports: [TopicService] // Optional: export if other modules need it
})
export class TopicModule {}

