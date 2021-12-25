// Core
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Rxjs
import { take, switchMap } from 'rxjs/operators';

import { AuthFacade } from '../store/auth.facade';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private facade: AuthFacade) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.facade.token$.pipe(
      take(1),
      switchMap((token: string | null) => {
        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
        }
        return next.handle(request);
      })
    );
  }
}
