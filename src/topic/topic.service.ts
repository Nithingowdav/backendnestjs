// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Topic } from 'src/entities/topic.entity';
// import { Repository } from 'typeorm';
import { CreateTopicDto, UpdateTopicDto } from 'src/user/dto/topic.dto';

// @Injectable()
// export class TopicService {
//   constructor(
//     @InjectRepository(Topic)
//     private topicRepo: Repository<Topic>,
//   ) {}

//   create(data: CreateTopicDto) {
//     const topic = this.topicRepo.create(data);
//     return this.topicRepo.save(topic);
//   }

//   findAll() {
//     return this.topicRepo.find({ relations: ['comments'] });
//   }

//   findOne(id: number) {
//     return this.topicRepo.findOne({ where: { id }, relations: ['comments'] });
//   }

//   update(id: number, data: UpdateTopicDto) {
//     return this.topicRepo.update(id, data);
//   }

//   delete(id: number) {
//     return this.topicRepo.delete(id);
//   }
// }
import { Delete, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from 'src/entities/topic.entity';
//import { CreateTopicDto, UpdateTopicDto } from './dto/topic.dto';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicRepo: Repository<Topic>,
  ) {}

  async create(dto: CreateTopicDto) {
    const topic = this.topicRepo.create(dto);
    return this.topicRepo.save(topic);
  }

  async findAll() {
    return this.topicRepo.find();
  }

  async findOne(id: number) {
    return this.topicRepo.findOne({ where: { id } });
  }

//   async update(id: number, dto: UpdateTopicDto) {
//     await this.topicRepo.update(id, dto);
//     return this.findOne(id);
//   }

async update(id: number, updateUserDto: UpdateTopicDto){
        return await this.topicRepo.update(id, updateUserDto);

    }

  async remove(id: number) {
    const topic = await this.topicRepo.findOne({ where: { id } });
    if (!topic) {
      return { message: `Topic with ID ${id} not found.` };
    }
    await this.topicRepo.remove(topic);
    return { message: `Topic with ID ${id} deleted successfully.` };
  }
  
}

