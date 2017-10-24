import { Component} from '@angular/core';
import { WebService } from './web.service';
@Component({
    selector: 'new-messages',
    template: `
        <mat-card class="card"> 
            <mat-card-content>
                <mat-input-container>
                    <input [(ngModel)]="message.owner" matInput placeholder="Name" />
                </mat-input-container>
                <mat-input-container>
                    <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
                </mat-input-container>
                <mat-card-actions>
                    <button (click)="post()" mat-button color="primary">POST</button>
                </mat-card-actions>
            </mat-card-content>
        </mat-card>
    `
})
export class NewMessageComponent { 

    message = {
        owner: '',
        text: ''
    }
    constructor(private webService: WebService) { }

    post() {
        this.webService.postMessage(this.message);
    }
}