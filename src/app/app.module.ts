import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';

import { PostService } from "./shared/post.service";
import { CommentService } from "./shared/comment.service";
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { comments } from "./shared/comments";
import { posts } from "./shared/post-collection";
import { post } from "./shared/post";
import { MainEffects } from "./shared/effects";

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent,
    PostComponent,
    CommentListComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
     {
       path: '',
       component: PostListComponent
   },
   {
       path: 'post/:id',
       component: PostDetailComponent
   }
   ]),
   StoreModule.provideStore({comments, posts, post}),
   EffectsModule.run(MainEffects)
  ],
  providers: [PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
