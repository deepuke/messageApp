import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of messages">
            <mat-card class="card"> 
                <mat-card-title [routerLink]="['/messages', message.owner]" style="cursor:pointer;">{{message.text}} </mat-card-title>
                <mat-card-content>{{message.owner}}</mat-card-content>
            </mat-card>
        </div>
    `
})
export class MessageComponent {
    messages;
    constructor(private webService: WebService, private route: ActivatedRoute) { }

    ngOnInit() {
        var user = this.route.snapshot.params.name;
        this.webService.getMessages(user);
        this.webService.messageSubject.subscribe(messages => {
            this.messages = messages;
        })

    }

}