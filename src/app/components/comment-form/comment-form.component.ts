import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommentService } from '../../shared/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() post;
  @Output() onSubmited = new EventEmitter<any>();
  commentForm: FormGroup;
  userControl;
  textControl;
  constructor(private commentService: CommentService,
              private fb: FormBuilder) {
      this.createForm();
  }

  onSubmit(comment) {
      comment.post = this.post.id;
      comment.id = 10;
      this.commentService.addComment(comment)
      this.onSubmited.emit();
      this.commentForm.reset();
  }

  createForm(){
      this.commentForm = this.fb.group({
          user: ['', Validators.required],
          text: ['', [Validators.required, Validators.minLength(2)]],
      });
      this.userControl = this.commentForm.get('user');
      this.textControl = this.commentForm.get('text');
  }
  ngOnInit() {
  }

}
