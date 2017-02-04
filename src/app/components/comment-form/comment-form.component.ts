import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  commentForm: FormGroup;
  authorControl;
  commentControl;
  constructor(private fb: FormBuilder) {
      this.createForm();
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
