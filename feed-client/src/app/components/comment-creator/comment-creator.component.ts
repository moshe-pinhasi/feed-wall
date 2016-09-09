import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comment-creator',
  directives: [],
  styleUrls: ['./comment-creator.component.scss'],
  template: `
    <div class="commentCreator">
      <form class="row" (submit)="onCreateComment()">

        <div class="commentCreator__field">
          <input
            type="text"
            [(ngModel)]="newComment.email"
            name="newEmail"
            placeholder="Email"
            class="">
        </div>

        <div class="commentCreator__field">
          <textarea rows="4" cols="50"
            [(ngModel)]="newComment.message"
            name="newMessage"
            placeholder="Message"
            class="">
          </textarea>
        </div>

        <div class="commentCreator__field">
          <button type="submit"
                  class="btn btn--blue btn--radius--small commentCreator__submitBtn">
            Submit
          </button>
        </div>

      </form>
    </div>
  `
})
export class CommentCreatorComponent {

  @Output() createComment = new EventEmitter();
  newComment = {
    email: '',
    message: ''
  };

  onCreateComment() {
    const {email, message} = this.newComment;
    if (email && message) {
      this.createComment.next({email, message});
      this.reset();
    }
  }

  reset() {
    this.newComment = {
      email: '',
      message: ''
    };
  }
}
