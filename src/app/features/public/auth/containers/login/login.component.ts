// Core
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

// Rxjs
import { Observable, Subscription } from 'rxjs';

// Store
import { AccountFacade } from '@stores/account';
import { AuthFacade, AuthStatus } from '@stores/auth';

// Models
import { LoginRequestDto } from '@api/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-auth-login',
  templateUrl: './login.component.html'
})
export class PublicAuthLoginComponent implements OnDestroy, OnInit {
  private subscription = new Subscription();
  status$: Observable<AuthStatus> = this.authFacade.status$;
  constructor(
    private accountFacade: AccountFacade,
    private authFacade: AuthFacade
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.authFacade.OnLoginSuccess().subscribe(() => {
        this.accountFacade.load();
      })
    );
  }

  onSubmit(credentials: LoginRequestDto) {
    this.authFacade.login(credentials);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
