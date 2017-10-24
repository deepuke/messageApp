import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';
@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
            <mat-card class="card"> 
                <mat-card-title>{{message.text}} </mat-card-title>
                <mat-card-content>{{message.author}}</mat-card-content>
            </mat-card>
        </div>
    `
})
export class MessageComponent {
    messages: any = [];

    constructor(private webService: WebService) { }

    async ngOnInit() {
        var response = await this.webService.getMessages();
        this.messages = response.json();
        //console.log(response.json());
    }
}