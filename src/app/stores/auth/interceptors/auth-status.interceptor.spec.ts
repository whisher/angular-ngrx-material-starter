// Core
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Testing
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

// Ngrx
import { StoreModule, Store, combineReducers } from '@ngrx/store';

// Store
import { routerReducers } from '../../router/router.reducer';
import { authReducer } from '../store/auth.reducer';
import { AuthFacade } from '../store/auth.facade';

// Interceptor
import { AuthStatusInterceptor } from './auth-status.interceptor';

// Mocks
interface Data {
  name: string;
}
const testUrl = '/data';

describe('AuthStatusInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let facadeSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...routerReducers,
          auth: combineReducers(authReducer)
        })
      ],
      providers: [
        Store,
        AuthFacade,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthStatusInterceptor,
          multi: true
        }
      ]
    });
    const facade = TestBed.inject(AuthFacade);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    facadeSpy = spyOn(facade, 'logout');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should not call logout without 200 status', () => {
    const testData: Data = { name: 'Test Data' };
    httpClient.get<Data>(testUrl).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const httpRequest = httpTestingController.expectOne(testUrl);
    httpRequest.flush(testData);
    expect(facadeSpy).not.toHaveBeenCalled();
  });

  it('should call logout with 401 status', () => {
    const error = new HttpErrorResponse({
      status: 401,
      statusText: 'Unauthorized'
    });
    httpClient.get<Data[]>(testUrl).subscribe({
      error: (error: HttpErrorResponse) => {
        expect(error.status).toEqual(401);
      }
    });

    const req = httpTestingController.expectOne(testUrl);
    req.flush(null, error);
    expect(facadeSpy).toHaveBeenCalled();
  });

  it('should call logout with 403 status', () => {
    const error = new HttpErrorResponse({
      status: 403,
      statusText: 'Forbidden'
    });
    httpClient.get<Data[]>(testUrl).subscribe({
      error: (error: HttpErrorResponse) => {
        expect(error.status).toEqual(403);
      }
    });

    const req = httpTestingController.expectOne(testUrl);
    req.flush(null, error);
    expect(facadeSpy).toHaveBeenCalled();
  });

  it('should call logout with 404 status', () => {
    const error = new HttpErrorResponse({
      status: 404,
      statusText: 'Not Found'
    });
    httpClient.get<Data[]>(testUrl).subscribe({
      error: (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
      }
    });

    const req = httpTestingController.expectOne(testUrl);
    req.flush(null, error);
    expect(facadeSpy).toHaveBeenCalled();
  });
});
