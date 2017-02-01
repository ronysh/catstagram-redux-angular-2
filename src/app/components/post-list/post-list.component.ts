import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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

  constructor(private router: Router,
              private postService: PostService) { }

  goToDetails(post){
      this.router.navigate(['/post', post.id]);
  }
  ngOnInit() {
      this.posts = this.postService.getAllPosts()
  }

}
