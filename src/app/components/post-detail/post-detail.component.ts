import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/post.model';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    post: Post;
    constructor(private postService: PostService) { }

    ngOnInit() {
        this.post = this.postService.getPost(1);
    }

}
