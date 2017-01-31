import { Component } from '@angular/core';
import { POSTS } from './shared/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coolstagram';
  posts = POSTS;
}
