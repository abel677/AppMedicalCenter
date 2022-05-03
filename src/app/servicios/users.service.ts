import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlUser = "http://127.0.0.1:8000/api/user";

  constructor(private httpClient: HttpClient) { }

  getUser() {
    const header = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    return this.httpClient.get(this.urlUser, { headers: header });
  }
}
