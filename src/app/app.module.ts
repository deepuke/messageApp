import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './messages.component';
import { NewMessageComponent } from './new-messages.component';
import { WebService } from './web.service';

import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


var routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'messages',
  component: MessageComponent
}, {
  path: 'messages/:name',
  component: MessageComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
