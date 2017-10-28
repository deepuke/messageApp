import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  BASE_USRL = 'http://localhost:63145/auth';

  constructor(private http: Http) { }

  register(user) {
    this.http.post(this.BASE_USRL + '/register', user).subscribe()
  }
  
}
