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

const userRequestUpdateData: UserRequestDto = {
  id: '1',
  email: 'test1@test.test',
  username: 'test1'
};
const userResponseUpdateData: UserResponseDto = {
  id: '1',
  email: 'test1@test.test',
  role: UserRoleDto.user,
  username: 'test1'
};

// Mocks
export class MockUserService {
  users = usersResponseData;
  getAll(): Observable<UserResponseDto[]> {
    return of(this.users);
  }

  add(data: UserRequestDto): Observable<UserResponseDto> {
    this.users = [...this.users, userResponseCreateData];
    return of(userResponseCreateData);
  }

  remove(data: { id: string }): Observable<UserResponseDto> {
    this.users = this.users.filter((user) => user.id !== data.id);
    return of(userResponseCreateData);
  }

  update(data: UserRequestDto): Observable<UserResponseDto> {
    const index = this.users.findIndex((user) => user.id === data.id); //finding index of the item
    const users = [...this.users];
    users[index].username = data.username;
    this.users = users;
    return of(userResponseUpdateData);
  }
}

describe('UsersStore', () => {
  let store: UsersStore;
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
  });
  it('should be created', () => {
    expect(store).toBeTruthy();
  });
  describe('getAll', () => {
    it('should users state equal to usersResponseData', () => {
      store.vm$.subscribe((state) => {
        expect(state.error).toEqual(null);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        expect(state.users).toEqual(usersResponseData);
      });
    });
  });
  describe('add', () => {
    it('should users state length equal to 2', () => {
      store.add(userRequestCreateData);
      store.vm$.subscribe((state) => {
        expect(state.error).toEqual(null);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        expect(state.users.length).toBe(2);
      });
    });
  });

  describe('remove', () => {
    it('should users state length equal to 0', () => {
      store.remove({ id: '1' });
      store.vm$.subscribe((state) => {
        expect(state.error).toEqual(null);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        expect(state.users.length).toBe(0);
      });
    });
  });

  describe('update', () => {
    it('should users state username update', () => {
      store.update(userRequestUpdateData);
      store.vm$.subscribe((state) => {
        expect(state.error).toEqual(null);
        expect(state.loaded).toEqual(true);
        expect(state.loading).toEqual(false);
        expect(state.users[0].username).toBe('test1');
      });
    });
  });
});
