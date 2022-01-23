// Core
import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';

// Rxjs
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

// Facade
import { AuthFacade } from '../store/auth.facade';

@Injectable({ providedIn: 'root' })
export class AuthLoggedGuard implements CanLoad {
  constructor(private router: Router, private facade: AuthFacade) {}

  canLoad(): Observable<boolean | UrlTree> {
    return this.checkStore();
  }

  private checkStore(): Observable<boolean | UrlTree> {
    return this.facade.isAuthenticated$.pipe(
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return this.router.parseUrl('/');
        }
        return true;
      }),
      take(1)
    );
  }
}
