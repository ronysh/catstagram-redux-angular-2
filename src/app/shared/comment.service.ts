import { Injectable } from '@angular/core';
import { COMMENTS } from "./mock-data";


@Injectable()
export class CommentService {

  constructor() { }


  getPostComments(postId: number) {
      return COMMENTS.filter(c => c.post === postId);
  }
}
