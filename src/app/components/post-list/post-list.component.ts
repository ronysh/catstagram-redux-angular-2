import { Component, OnInit } from '@angular/core';
import { POSTS } from '../../shared/mock-data';
import { PostService } from '../../shared/post.service';
import { Post } from '../../shared/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  goToDetails(post){
      console.log(post.id);
  }
  ngOnInit() {
      this.posts = this.postService.getAllPosts()
  }

}
