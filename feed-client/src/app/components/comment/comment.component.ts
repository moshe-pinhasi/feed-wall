import { Component, Input } from '@angular/core';

import { GravatarComponent } from 'src/app/components';

@Component({
  selector: 'comment',
  styleUrls: ['./comment.component.scss'],
  directives: [ GravatarComponent ],
  template: `
    <div class="comment">

      <div class="comment__iconContainer">
        <gravatar [email]="comment.email"></gravatar>
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
