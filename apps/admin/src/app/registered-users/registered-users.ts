import { Component, inject, OnInit } from '@angular/core';
import { AuthService, User } from '@taxi-workspace/auth';
@Component({
  selector: 'app-registered-users',
  imports: [],
  templateUrl: './registered-users.html',
  styleUrl: './registered-users.scss',
})
export class RegisteredUsers implements OnInit {
  private auth = inject(AuthService);
  users:User[] = [];
  ngOnInit() {
    this.users = this.auth.getUsers();
  }
}
