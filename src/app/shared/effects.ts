import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostService } from "./post.service";
import { CommentService } from "./comment.service";
@Injectable()
export class MainEffects {

    constructor(private commentService: CommentService,
                private postService: PostService,
                private action$: Actions) {  }

    @Effect() loadAllPosts$ = this.action$
                .ofType('LOAD_POSTS')
                .map(toPayload)
                .switchMap(payload => {
                    const posts = this.postService.getAllPosts();
                    return Observable.of({type: "POSTS_RECEIVED", payload:posts });
                })

    @Effect() loadPost$ = this.action$
                .ofType('LOAD_POST')
                .map(toPayload)
                .switchMap(payload => {
                    const post = this.postService.getPost(payload);
                    return Observable.of({type: "POST_RECEIVED", payload: post });
                })

    @Effect() addLike$ = this.action$
                .ofType('ADD_LIKE')
                .map(toPayload)
                .switchMap(payload => {
                    const post = this.postService.addLike(payload);
                    return Observable.of({type: "LIKE_ADDED", payload: post });
                })

    @Effect() loadComments$ = this.action$
                .ofType('LOAD_COMMENTS')
                .map(toPayload)
                .switchMap(payload => {
                    const comments = this.commentService.getPostComments(payload);
                    return Observable.of({type: "COMMENTS_RECEIVED", payload: comments });
                })

    @Effect() addComment$ = this.action$
                .ofType('ADD_COMMENT')
                .map(toPayload)
                .switchMap(payload => {
                    const comment = this.commentService.addComment(payload);
                    return Observable.of({type: "COMMENT_ADDED", payload: comment });
                })
}
