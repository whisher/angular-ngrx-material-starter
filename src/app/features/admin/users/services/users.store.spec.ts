// Testing
import { TestBed } from '@angular/core/testing';

// rxjs
import { Observable, of } from 'rxjs';

// Models
import { UserRequestDto, UserResponseDto, UserRoleDto } from '@api/models';

// Services
import { UserService } from '@api/services/user.service';

// Stores
import { UsersStore } from './users.store';

// Fixtures
const usersResponseData: UserResponseDto[] = [
  {
    id: '1',
    email: 'test1@test.test',
    role: UserRoleDto.user,
    username: 'test'
  }
];

const userRequestCreateData: UserRequestDto = {
  email: 'test2@test.test',
  password: 'abcd',
  passwordConfirm: 'abcd',
  username: 'test2'
};
const userResponseCreateData: UserResponseDto = {
  id: '2',
  email: 'test2@test.test',
  role: UserRoleDto.user,
  username: 'test2'
};
/*
const userRequestUpdateData: UserRequestDto = {
  email: 'test2@test.test',
  username: 'test3'
};*/
const userResponseUpdateData: UserResponseDto = {
  id: '2',
  email: 'test2@test.test',
  role: UserRoleDto.user,
  username: 'test3'
};
// Mocks
export class MockUserService {
  users = usersResponseData;
  all(): Observable<UserResponseDto[]> {
    return of(this.users);
  }

  create(data: UserRequestDto): Observable<UserResponseDto> {
    this.users = [...this.users, userResponseCreateData];
    return of(userResponseCreateData);
  }

  remove(data: { id: string }): Observable<UserResponseDto> {
    this.users = this.users.filter((user) => user.id !== data.id);
    return of(userResponseCreateData);
  }

  update(data: UserRequestDto): Observable<UserResponseDto> {
    const index = this.users.findIndex((user) => user.id === data.id); //finding index of the item
    const newArray = [...this.users];
    newArray[index].username = data.username;
    this.users = newArray;
    return of(userResponseUpdateData);
  }
}

describe('UsersStore', () => {
  let store: UsersStore;
  let userService: UserService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useClass: MockUserService },
        UsersStore
      ]
    })
  );
  beforeEach(() => {
    store = TestBed.inject(UsersStore);
    userService = TestBed.inject(UserService);
    console.log(userService);
  });
  it('should be created', () => {
    const stepConfirmService = TestBed.inject(UsersStore);
    expect(stepConfirmService).toBeTruthy();
  });
  describe('all', () => {
    it('should state users equal to usersResponseData', () => {
      store.vm$.subscribe((state) => {
        expect(state.users).toEqual(usersResponseData);
      });
    });
    it('should state loaded equal to true', () => {
      store.vm$.subscribe((state) => {
        expect(state.loaded).toEqual(true);
      });
    });
  });
  describe('create', () => {
    it('should state users length equal to 2', () => {
      store.create(userRequestCreateData);
      store.vm$.subscribe((state) => {
        expect(state.users.length).toBe(2);
        expect(state.loaded).toEqual(true);
      });
    });
  });

  describe('remove', () => {
    it('should state users length equal to 1', () => {
      store.remove({ id: '1' });
      store.vm$.subscribe((state) => {
        expect(state.users.length).toBe(1);
        expect(state.loaded).toEqual(true);
      });
    });
  });
});
