// Core
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

// Rxjs
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

// Store
import { AccountFacade } from '@stores/account';
import { AuthFacade } from '@stores/auth';

// Models
import { LoginRequestDto } from '@api/models';
import { FormStatusDto } from '@shared/services/form-status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-auth-login',
  templateUrl: './login.component.html'
})
export class PublicAuthLoginComponent implements OnDestroy, OnInit {
  private subscription = new Subscription();
  status$: Observable<FormStatusDto> = combineLatest([
    this.authFacade.error$,
    this.authFacade.loading$
  ]).pipe(
    map(([error, loading]) => {
      return { error, loading };
    })
  );
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
