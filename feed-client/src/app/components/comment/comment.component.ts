import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment',
  directives: [],
  styleUrls: ['./comment.component.scss'],
  template: `
    <div class="comment">

      <div class="comment__iconContainer">
        <img class="comment__icon" src="//robohash.org/{{comment.email}}?set=set2&bgset=bg2&size=40x40">
      </div>

      <div class="comment__detailsContainer">
        <div class="comment__email">{{comment.email}}</div>
        <div class="comment__message">{{comment.message}}</div>
      </div>

    </div>
  `
})
export class CommentComponent {
  @Input('comment') comment;

  constructor() {

  }

}
