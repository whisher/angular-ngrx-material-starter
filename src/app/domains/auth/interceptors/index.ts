import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthStatusInterceptor } from './auth-status.interceptor';
import { AuthTokenInterceptor } from './auth-token.interceptor';

export const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthStatusInterceptor,
    multi: true
  }
];
