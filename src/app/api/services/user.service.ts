import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import {
  UserAccountResponseDto,
  UserRequestDto,
  UserResponseDto
} from '../models';
import { paths, PathsUserDto } from '../config';

@Injectable({ providedIn: 'root' })
export class UserService {
  endpoint: PathsUserDto;

  constructor(private http: HttpClient) {
    this.endpoint = paths.user;
  }

  account(): Observable<UserAccountResponseDto> {
    return this.http.get<UserAccountResponseDto>(this.endpoint.account);
  }

  all(): Observable<UserResponseDto[]> {
    return this.http.get<UserResponseDto[]>(this.endpoint.all);
  }

  create(data: UserRequestDto): Observable<UserResponseDto> {
    return this.http.post<UserResponseDto>(this.endpoint.create, data);
  }

  remove(data: UserRequestDto): Observable<UserResponseDto> {
    return this.http.post<UserResponseDto>(this.endpoint.remove, data);
  }

  update(data: UserRequestDto): Observable<UserResponseDto> {
    return this.http.put<UserResponseDto>(this.endpoint.update, data);
  }
}
