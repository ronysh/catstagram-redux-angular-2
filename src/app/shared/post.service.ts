import { Injectable } from '@angular/core';
import { POSTS } from "./mock-data";

@Injectable()
export class PostService {

  constructor() { }

  getAllPosts() {
      return POSTS;
  }

  getPost(id) {
      return POSTS.find(p => p.id === id);
  }
}
