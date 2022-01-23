// Core
import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

// Rxjs
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

// Facade
import { AuthFacade } from '../store/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad {
  constructor(private facade: AuthFacade) {}

  canLoad(): Observable<boolean> {
    return this.checkStore();
  }

  private checkStore(): Observable<boolean> {
    return this.facade.isAuthenticated$.pipe(
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          this.facade.logout();
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
