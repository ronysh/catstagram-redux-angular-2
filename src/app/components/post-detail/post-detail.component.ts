import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import "rxjs/add/operator/switchMap";

import { Post } from '../../shared/post.model';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    post: Post;
    constructor(private postService: PostService,
                private route: ActivatedRoute,
                private location: Location
            ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
                this.post = this.postService
                                .getPost(+params['id']);
            });
    }

}
