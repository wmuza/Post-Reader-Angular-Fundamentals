import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable <User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
