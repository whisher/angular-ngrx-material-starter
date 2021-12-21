// Core
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Facades
import { AuthFacade } from '@stores/auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-auth-logout',
  template: `
    <div
      class="min-vh-100 d-flex align-items-center justify-content-center bg-white"
    >
      LOGOUT
    </div>
  `
})
export class LogoutPageComponent implements OnInit {
  constructor(private authFacade: AuthFacade) {}
  ngOnInit() {
    this.authFacade.logout();
  }
}
