import { Component, Input } from '@angular/core';

import { CommentComponent } from 'src/app/components';

import { SearchPipe } from 'src/app/pipes';

@Component({
  selector: 'feed-container',
  directives: [CommentComponent],
  pipes: [SearchPipe],
  styles: [`
    .feedContainer {
      height: inherit;
      padding: 30px;
      background-color: #ffffff;
      overflow-x: hidden;
      overflow-y: auto;
      border: 1px solid #e8e8e8;
    }

    .feedContainer__comment {
      margin: 0 0 15px 0;
    }

    .feedContainer__filter {
      width: 317px;
      margin: 0 0 15px 0;
    }
  `],
  templateUrl: `
    <div class="feedContainer">
      <div class="feedContainer__filter">
          <input
            type="text"
            [(ngModel)]="filterBy"
            name="filterBy"
            placeholder="Filter"
            class="appInput">
      </div>

      <div *ngFor="let post of posts | search:filterBy"
           class="feedContainer__comment">
           <comment [comment]="post"></comment>
      </div>
    </div>
  `
})
export class FeedContainerComponent{

  @Input('posts') posts;

  filterBy;

}
