import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService : PostsService){}


    @Get()
    findAll(@Query('search') search? : string) : PostInterface[] {
        const extractAllPosts = this.postService.findAll();

        if(search) {
            return extractAllPosts.filter((singlePost) => 
            singlePost.title.toLocaleLowerCase().includes(search.toLowerCase()),
        );
        }

        return extractAllPosts;
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe)id : number) : PostInterface {
        return this.postService.findOne(id)
    } 

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body() createPostData : Omit<PostInterface, 'id' | 'createdAt' >, ) :
    PostInterface {
        return this.postService.create(createPostData);  }
  
}
