// Testing
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserAccountResponseDto, UserRoleDto } from '../models';

import { UserService } from './user.service';

const usersAccountResponseData: UserAccountResponseDto = {
  id: 'abcde',
  email: 'test@test.test',
  role: UserRoleDto.user
};

describe('UserService', () => {
  let httpTestingController: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    userService = TestBed.inject(UserService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('account should be return usersAccountResponseData', () => {
    userService.account().subscribe((data) => {
      expect(data).toEqual(usersAccountResponseData);
    });
    const req = httpTestingController.expectOne(userService.endpoint.account);
    req.flush(usersAccountResponseData);
  });
});