import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []

  constructor(private http: UserService) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe(res => {
      this.users = res
    })
  }

}
