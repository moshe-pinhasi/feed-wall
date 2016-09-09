import { Component, Input, OnInit } from '@angular/core';

const md5 = require('md5');

@Component({
  selector: 'comment',
  styleUrls: ['./comment.component.scss'],
  template: `
    <div class="comment">

      <div class="comment__iconContainer">
        <img class="comment__icon" src="https://www.gravatar.com/avatar/{{gravatarHash}}?s=40">
      </div>

      <div class="comment__detailsContainer">
        <div class="comment__email">{{comment.email}}</div>
        <div class="comment__message">{{comment.message}}</div>
      </div>

    </div>
  `
})
export class CommentComponent implements OnInit {
  @Input('comment') comment;

  private gravatarHash;

  constructor() {

  }

  ngOnInit() {

    if (!this.comment) {
      return;
    }

    this.gravatarHash = md5(this.comment.email.trim().toLowerCase());

  }
}
