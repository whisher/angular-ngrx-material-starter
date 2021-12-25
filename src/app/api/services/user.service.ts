import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UserAccountResponseDto } from '../models';
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
}
