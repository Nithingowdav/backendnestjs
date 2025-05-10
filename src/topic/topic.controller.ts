import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TopicService } from './topic.service';
import { CreateTopicDto, UpdateTopicDto } from 'src/user/dto/topic.dto';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  create(@Body() dto: CreateTopicDto) {
    return this.topicService.create(dto);
  }

  @Get()
  findAll() {
    return this.topicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.topicService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTopicDto) {
    return this.topicService.update(id, dto);
  }

//   @Delete(':id')
//   delete(@Param('id') id: number) {
//     return this.topicService.delete(id);
//   }
@Delete(':id')
remove(@Param('id') id: number) {
  return this.topicService.remove(id);
}
}
