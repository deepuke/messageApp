import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebService {
    BASE_USRL = 'http://localhost:63145/api';
    
    messages = []

    constructor(private http: Http) { 
        this.getMessages();
    }

    async getMessages() {
        var response = await this.http.get(this.BASE_USRL + '/messages').toPromise();
        this.messages  = response.json();
    }

    async postMessage(message) {
        var response =  await this.http.post(this.BASE_USRL + '/messages', message).toPromise();
        this.messages.push(response.json());
    }
}