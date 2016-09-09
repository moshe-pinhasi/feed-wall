import { Component, Input, OnInit } from '@angular/core';

const md5 = require('md5');

@Component({
  selector: 'gravatar',
  styles: [`
    .gravatar {
      border-radius: 4px;
    }
  `],
  template: `
    <img class="gravatar" src="https://www.gravatar.com/avatar/{{gravatarHash}}?s=40">
  `
})
export class GravatarComponent implements OnInit {
  @Input('email') email;

  private gravatarHash;

  constructor() {

  }

  ngOnInit() {
    if (!this.email) {
      return;
    }

    this.gravatarHash = md5(this.email.trim().toLowerCase());
  }
}
