import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
    BASE_USRL = 'http://localhost:63145/api';
    constructor(private http: Http) { }

    getMessages() {
        return this.http.get(this.BASE_USRL + '/messages').toPromise();
    }

    postMessage(message) {
        return this.http.post(this.BASE_USRL + '/messages', message).toPromise();
    }
}