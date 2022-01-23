// Core
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

// Rxjs
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Stores
import { AuthFacade } from '../store/auth.facade';

@Injectable()
export class AuthStatusInterceptor implements HttpInterceptor {
  status = [401, 403, 404];
  constructor(private facade: AuthFacade) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (this.status.includes(error.status)) {
          this.facade.logout();
        }
        return throwError(() => error);
      })
    );
  }
}
