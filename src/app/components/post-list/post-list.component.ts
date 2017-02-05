import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { POSTS } from '../../shared/mock-data';
import { PostService } from '../../shared/post.service';
import { Post } from '../../shared/post.model';
import { Store } from "@ngrx/store"

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts;

  constructor(private _store : Store<any>,
              private router: Router,
              private postService: PostService) { _store.select('posts')
                    .subscribe(posts => this.posts = posts)}

  addLike(post) {
      this._store.dispatch({type: 'ADD_LIKE', payload: post.id});
  }
  goToDetails(post){
      this.router.navigate(['/post', post.id]);
  }
  ngOnInit() {
      const posts = this.postService.getAllPosts()
      this._store.dispatch({type: 'LOAD_POSTS', payload: posts})
      this.posts = this.postService.getAllPosts()
  }

}
