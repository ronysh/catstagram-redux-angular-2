import { Component, OnInit } from '@angular/core';
import { POSTS } from '../../shared/mock-data';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

}
