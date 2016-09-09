import { Component } from '@angular/core';

import { PostsService } from 'src/app/services';

import { FeedContainerComponent, CommentCreatorComponent } from 'src/app/components';

@Component({
  selector: 'my-home',

  directives: [ FeedContainerComponent, CommentCreatorComponent ],
  styles: [`
    .feed {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .feed__content {
      width: 400px;
    }

    .feed__feedContainer {
      height: 300px;
    }
  `],
  template: `
    <div class="feed">
      <div class="feed__content">
        <comment-creator (createComment)="onNewComment($event)"></comment-creator>
        <feed-container class="feed__feedContainer" [posts]="posts"></feed-container>
      </div>
    </div>
  `
})
export class HomeComponent {

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
