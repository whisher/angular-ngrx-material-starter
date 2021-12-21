// Core
import { Type } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

// Testing
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        }
      ]
    });

    http = TestBed.inject<HttpClient>(HttpClient);
    httpMock = TestBed.inject(
      HttpTestingController as Type<HttpTestingController>
    );
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should catch error and call error handler', () => {
    // Arrange

    spyOn(ErrorInterceptor.prototype, 'errorHandler').and.callThrough();

    // Act
    http.get('/notexitsroute').subscribe({
      next: () => fail('should error'),
      error: () => {
        // Assert
        expect(ErrorInterceptor.prototype.errorHandler).toHaveBeenCalled();
      }
    });

    httpMock.expectOne({}).flush(null, {
      status: 404,
      statusText: 'error'
    });
  });
});
