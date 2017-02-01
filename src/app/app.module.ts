import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';

import { PostService } from "./shared/post.service";

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
   ])
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
