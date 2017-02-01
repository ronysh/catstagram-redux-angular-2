import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/post.model';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    post: Post;
    constructor() { }

    ngOnInit() {
        // implement postService.getPost(id) id from router
    }

}
