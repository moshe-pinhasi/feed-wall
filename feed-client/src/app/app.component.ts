import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

//import { ConfigService, ApiService, PostsService } from './services';

import { PostsService } from 'src/app/services';

import { FeedContainerComponent, CommentCreatorComponent } from 'src/app/components';

import '../style/app.scss';
import '../style/btns.scss';
import '../style/inputs.scss';

/*
 * App Component
 * Top Level Component
 */

// encapsulation: ViewEncapsulation.None,
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  directives: [ FeedContainerComponent, CommentCreatorComponent ],
  template: `
    <div class="feed">
      <div class="feed__content">
        <comment-creator (createComment)="onNewComment($event)"></comment-creator>
        <feed-container class="feed__feedContainer" [posts]="posts"></feed-container>
      </div>
    </div>
  `
})
export class AppComponent {

  private posts = [];

  constructor(private postsService: PostsService) {
    this.postsService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  onNewComment(post) {
    this.postsService.createPost(post)
      .subscribe(res => this.posts.unshift(res));
  }
}
