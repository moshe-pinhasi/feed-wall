import { Component, Input } from '@angular/core';

import { CommentComponent } from 'src/app/components';

@Component({
  selector: 'feed-container',
  directives: [CommentComponent],
  styles: [`
    .feedContainer {
      height: inherit;
      padding: 15px;
      background-color: #ffffff;
      overflow-x: hidden;
      overflow-y: auto;
      border: 1px solid #e8e8e8;
    }

    .feedContainer__comment {
      margin: 0 0 15px 0;
    }
  `],
  templateUrl: `
    <div class="feedContainer">
      <div *ngFor="let post of posts"
           class="feedContainer__comment">
           <comment [comment]="post"></comment>
      </div>
    </div>
  `
})
export class FeedContainerComponent{

  @Input('posts') posts;

}
