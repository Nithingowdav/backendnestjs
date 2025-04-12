import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

    findUserComments(id:string){
        return 'this is the comments of the user'
    }
}
