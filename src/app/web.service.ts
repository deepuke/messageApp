import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
    BASE_USRL = 'http://localhost:63145/api';

    messages = []

    constructor(private http: Http, private sb: MatSnackBar) {
        this.getMessages();
    }

    async getMessages() {
        try {
            var response = await this.http.get(this.BASE_USRL + '/messages').toPromise();
            this.messages = response.json();
        } catch (error) {
            this.handleError('Unable to GET messages');
        }

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