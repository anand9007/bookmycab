import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthSyncService } from './auth/auth-sync.service';
import { AuthInitService } from './auth/auth-init.service';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private _authInit = inject(AuthInitService);
  private _authSync = inject(AuthSyncService);
  protected title = 'BookMyCab';

  constructor() {
    this._authInit.init();
  }
}
