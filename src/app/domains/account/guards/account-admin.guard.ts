// Core
import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

// Rxjs
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

// Models
import { UserAccountResponseDto } from '@api/models';

// Facade
import { AccountFacade } from '../store/account.facade';

@Injectable({ providedIn: 'root' })
export class AccountAdminGuard implements CanLoad {
  constructor(private facade: AccountFacade) {}

  canLoad(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap((account: UserAccountResponseDto | undefined) => {
        let hasRole = false;
        if (account) {
          hasRole = this.isAdmin(account.role);
        }
        return of(hasRole);
      }),
      catchError(() => of(false))
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

  private isAdmin(role: string) {
    return role === 'admin';
  }
}
