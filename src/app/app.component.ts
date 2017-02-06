import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { PostService } from './shared/post.service';
import { Post } from './shared/post.model';
import { Store } from "@ngrx/store"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'coolstagram';

  posts;

  constructor(private _store : Store<any>,
              private router: Router,
              private postService: PostService) { _store.select('posts')
                    .subscribe(posts => this.posts = posts)}


  ngOnInit() {
      const posts = this.postService.getAllPosts()
      this._store.dispatch({type: 'LOAD_POSTS', payload: posts})
      this.posts = this.postService.getAllPosts()
  }
}
