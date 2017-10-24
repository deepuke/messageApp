import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';
@Component({
    selector: 'messages',
    template: `
        <div *ngFor="let message of webService.messages">
            <mat-card class="card"> 
                <mat-card-title>{{message.text}} </mat-card-title>
                <mat-card-content>{{message.owner}}</mat-card-content>
            </mat-card>
        </div>
    `
})
export class MessageComponent {
    constructor(private webService: WebService) { }


}