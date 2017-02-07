import { Injectable } from '@angular/core';
import { COMMENTS } from "./mock-data";


@Injectable()
export class CommentService {

  constructor() { }

  addComment(comment){
      COMMENTS.push(comment);
      return comment;
  }

  getPostComments(postId: number) {
      return COMMENTS.filter(c => c.post === postId);
  }
}
