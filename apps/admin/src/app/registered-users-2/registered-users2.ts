
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService} from '@taxi-workspace/auth';
@Component({
  selector: 'app-registered-users2',
  imports: [RouterOutlet],
  templateUrl: './registered-users2.html',
  styleUrl: './registered-users2.scss',
 host: { 'data-host-id': 'registered-users-v2-parent' }
})
export class RegisteredUsers2  {
  // private auth = inject(AuthService);
  // ngOnInit() {
  //   const a = 'test';
  // }
}
