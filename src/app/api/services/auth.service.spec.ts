// Core
import { HttpErrorResponse } from '@angular/common/http';

// Testing
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import {
  LoginRequestDto,
  LoginResponseDto,
  SignInRequestDto,
  SignInResponseDto
} from '../models';

import { AuthService } from './auth.service';

const loginRequestData: LoginRequestDto = {
  email: 'test@test.test',
  password: 'abcd'
};

const loginResponseData: LoginResponseDto = {
  expirationEpochSeconds: Date.now(),
  token: 'abcd'
};

const signInRequestData: SignInRequestDto = {
  email: 'test@test.test',
  password: 'abcd',
  passwordConfirm: 'abcd',
  acceptPrivacyPolicy: true
};

const signInResponseData: SignInResponseDto = {
  email: 'test@test.test'
};

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('login should be return error with message', () => {
    const error = new HttpErrorResponse({
      status: 401,
      statusText: 'Unauthorized'
    });

    authService.login(loginRequestData).subscribe({
      error: (err) => {
        expect(err.status).toEqual(401);
      }
    });

    const req = httpTestingController.expectOne(authService.endpoint.login);
    expect(req.request.method).toBe('POST');
    req.flush(null, error);
  });

  it('login should be return loginResponseData', () => {
    authService.login(loginRequestData).subscribe((data) => {
      expect(data).toEqual(loginResponseData);
    });
    const req = httpTestingController.expectOne(authService.endpoint.login);
    req.flush(loginResponseData);
  });

  it('signIn should POST signInRequestData and return signInResponseData', () => {
    authService.signIn(signInRequestData).subscribe((data) => {
      expect(data).toEqual(signInResponseData);
    });
    const req = httpTestingController.expectOne(authService.endpoint.signIn);
    expect(req.request.method).toBe('POST');
    req.flush(signInResponseData);
  });
});
