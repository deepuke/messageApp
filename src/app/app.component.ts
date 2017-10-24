import { Component } from '@angular/core';

import { MessageComponent } from './messages.component';
import { NewMessageComponent } from './new-messages.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  template: `
    <nav></nav>    
    <new-messages></new-messages>
    <messages></messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
