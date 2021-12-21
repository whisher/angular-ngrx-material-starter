// Core
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

// Rxjs
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  errorHandler(error: HttpErrorResponse): Observable<never> {
    let message: string = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      message = error.error.message;
    } else {
      // server-side error
      message = error.error?.message
        ? error.error.message
        : 'Something went wrong, please try later';
    }

    return throwError(() => {
      return {
        message
      };
    });
  }
}
