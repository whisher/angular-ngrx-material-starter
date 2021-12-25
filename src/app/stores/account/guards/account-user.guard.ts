// Core
import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

// Rxjs
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

// Models
import { UserAccountResponseDto } from '@api/models/user';

// Facade
import { AccountFacade } from '../store/account.facade';

@Injectable({ providedIn: 'root' })
export class AccountUserGuard implements CanLoad {
  constructor(private facade: AccountFacade) {}

  canLoad(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap((account: UserAccountResponseDto | undefined) => {
        let hasRole = false;
        if (account) {
          hasRole = this.hasRole(account.role);
        }
        return of(hasRole);
      }),
      catchError(() => {
        console.log('PIPPO');
        return of(false);
      })
    );
  }

  checkStore(): Observable<UserAccountResponseDto | undefined> {
    return this.facade.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.facade.loadWithoutRedirect();
        }
      }),
      filter((loaded: boolean) => loaded),
      switchMap(() => {
        return this.facade.data$;
      }),
      take(1)
    );
  }

  private hasRole(role: string) {
    const isUser = role === 'user';
    const isAdmin = role === 'admin';
    return isUser || isAdmin;
  }
}
