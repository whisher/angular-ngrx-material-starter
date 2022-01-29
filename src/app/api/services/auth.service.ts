// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Models
import {
  LoginRequestDto,
  LoginResponseDto,
  SignInRequestDto,
  SignInResponseDto
} from '../models';
import { paths, PathsAuthDto } from '../config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  endpoint: PathsAuthDto;

  constructor(private http: HttpClient) {
    this.endpoint = paths.auth;
  }

  login(data: LoginRequestDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(this.endpoint.login, data);
  }

  signIn(data: SignInRequestDto): Observable<SignInResponseDto> {
    return this.http.post<SignInResponseDto>(this.endpoint.signIn, data);
  }
}
