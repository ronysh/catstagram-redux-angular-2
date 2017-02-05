import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Output() addLike = new EventEmitter<any>();
  @Output() goToDetails = new EventEmitter<any>();
  @Input()
  post: Post;

  constructor() { }

  ngOnInit() {
  }

}
