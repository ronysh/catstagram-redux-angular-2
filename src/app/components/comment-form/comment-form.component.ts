import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommentService } from '../../shared/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  commentForm: FormGroup;
  authorControl;
  commentControl;
  constructor(private commentService: CommentService,
              private fb: FormBuilder) {
      this.createForm();
  }

  onSubmit(comment) {
      console.log(comment);
  }

  createForm(){
      this.commentForm = this.fb.group({
          author: ['', Validators.required],
          comment: ['', [Validators.required, Validators.minLength(2)]],
      });
      this.authorControl = this.commentForm.get('author');
      this.commentControl = this.commentForm.get('comment');
  }
  ngOnInit() {
  }

}
