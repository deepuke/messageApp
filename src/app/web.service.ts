import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class WebService {
    BASE_USRL = 'http://localhost:63145/api';

    private messages = []

    messageSubject = new Subject();

    constructor(private http: Http, private sb: MatSnackBar) {
        this.getMessages('');
    }

    getMessages(user) {
        user = user ? '/' + user : '';

        var response = this.http.get(this.BASE_USRL + '/messages' + user).subscribe(response => {
            this.messages = response.json();
            this.messageSubject.next(this.messages);
        }, error => {
            this.handleError('Unable to GET messages');
        });

    }

    async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_USRL + '/messages', message).toPromise();
            this.messages.push(response.json());
        } catch (error) {
            this.handleError('Unable to POST messages');
        }
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', { duration: 3000 });
    }
}