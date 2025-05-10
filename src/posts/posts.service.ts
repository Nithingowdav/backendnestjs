import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
    private posts : Post[] = [
        {
            id : 1,
            title : 'First',
            content : 'First Post Content',
            authorName : 'Nithin Gowda',
            createdAt : new Date(),
        },
    ];


    findAll() : Post[] {
        return this.posts;
    }

    findOne(id : number) : Post  {
        const singlePost = this.posts.find(post => post.id === id );
        if (!singlePost) {
            throw new Error(`Post with id ${id} not found`);
        }
        return singlePost;
    }

    create(createPostData : Omit<Post, 'id' | 'createdAt' >) : Post {
        const newPost : Post = {
            id : this.getNextid(),
            ...createPostData,
            createdAt : new Date(),
        };

        this.posts.push(newPost);
        return newPost;
    }

    private getNextid() : number {
        return this.posts.length > 0 ? 
        Math.max(...this.posts.map(post => post.id)) + 1 : 1
    }
}
