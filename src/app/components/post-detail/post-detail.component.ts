import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import "rxjs/add/operator/switchMap";

import { Post } from '../../shared/post.model';
import { Comment } from '../../shared/comment.model';
import { PostService } from '../../shared/post.service';
import { CommentService } from '../../shared/comment.service';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
    post;
    public comments;
    private commentId = 5;
    constructor(private postService: PostService,
                private commentService: CommentService,
                private _store : Store<any>,
                private route: ActivatedRoute,
                private location: Location
            ) { _store.select('post')
                  .subscribe(p => this.post = p)
                _store.select('comments')
                  .subscribe(comments => this.comments = comments) }

    onSubmited(){
        // this.getComments();
    }

    addComment(comment) {
        this._store.dispatch({type: "ADD_COMMENT", payload: {
            id: ++this.commentId,
            post: this.post.id,
            user: comment.user,
            text: comment.text
        }});
    }

    addLike(post) {
        this._store.dispatch({type: 'ADD_LIKE', payload: this.post});
    }

    loadComments(){
        const comments = this.commentService
                            .getPostComments(this.post.id);
        this._store.dispatch({type: 'LOAD_COMMENTS', payload: comments});

    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
                const postId = +params['id'];
                const post = this.postService.getPost(postId)
                this._store.dispatch({type: 'LOAD_POST', payload: post});
                this.loadComments();
            });
    }

}
