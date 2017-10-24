import { Component } from '@angular/core';

import { MessageComponent } from './messages.component';
import { NewMessageComponent } from './new-messages.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Message Board</h1>
    <new-messages></new-messages>
    <messages></messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
