import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';

// import { Router } from '@angular/router';

@Injectable()
export class ErrorService implements ErrorHandler {
  // constructor(private router: Router) {}
  handleError(error: Error | HttpErrorResponse) {
    if (!environment.production) {
      if (error instanceof HttpErrorResponse) {
        console.error('Server Error', error);
      } else {
        console.error('Client Error', error);
      }
    }
  }
}
