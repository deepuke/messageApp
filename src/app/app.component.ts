import { Component, ViewChild } from '@angular/core';

import { MessageComponent } from './messages.component';
import { NewMessageComponent } from './new-messages.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Message Board</h1>
    <new-messages (onPosted)="onPosted($event)"></new-messages>
    <messages></messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(MessageComponent) messages: MessageComponent;

  onPosted(message) {
    this.messages.messages.push(message);
  }
}
