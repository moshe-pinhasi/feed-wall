import { Component, Input } from '@angular/core';

import { CommentComponent } from 'src/app/components';

import { SearchPipe, SortPipe } from 'src/app/pipes';

@Component({
  selector: 'feed-container',
  directives: [CommentComponent],
  pipes: [SearchPipe, SortPipe],
  styleUrls: ['./feed-container.component.scss'],
  templateUrl: `
    <div class="feedContainer">

      <div class="feedContainer__filter">
          <span  class="feedContainer__placeHolder" *ngIf="!filterBy">
            <span class="glyphicon glyphicon-search feedContainer__filterIcon" aria-hidden="true"></span>
            <span class="feedContainer__filterTitle">Filter</span>
          </span>

          <input
            type="text"
            [(ngModel)]="filterBy"
            name="filterBy"
            placeholder=""
            class="appInput">
      </div>

      <div *ngFor="let post of posts | search:filterBy | sort"
           class="feedContainer__comment">
           <comment [comment]="post"></comment>
      </div>
    </div>
  `
})
export class FeedContainerComponent {

  @Input('posts') posts;

  filterBy;

}
