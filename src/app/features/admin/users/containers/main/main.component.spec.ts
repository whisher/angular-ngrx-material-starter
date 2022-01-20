// Core
import { Component, Input } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// Material
import { MatDialogModule } from '@angular/material/dialog';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Models
import { UserResponseDto, UserRoleDto } from '@api/models';

// Store
import { UsersStore } from '../../services';

// Services
import { UserService } from '@api/services/user.service';
import { ConfirmService } from '@shared/ui/confirm';
import { UsersDialogFormService } from '../../dialogs';

// Components
import { AdminUsersMainComponent } from './main.component';

// Mocks
@Component({
  selector: 'iwdf-alert',
  template: ``
})
export class MockIwdfAlertComponent {
  @Input() msg: string | undefined;
}

@Component({
  selector: 'iwdf-spinner',
  template: ``
})
export class MockIwdfSpinnerComponent {}

@Component({
  selector: 'admin-users-grid',
  template: ``
})
export class MockAdminUsersGridComponent {
  @Input() data!: UserResponseDto[];
  @Input() isLoading!: boolean;
}

// fixtures
const userResponseData: UserResponseDto[] = [
  {
    id: 'test',
    email: 'test@test.test',
    role: 'user' as UserRoleDto,
    username: 'test'
  }
];
describe('AdminUsersMainComponent', () => {
  let compiled: HTMLElement;
  let component: AdminUsersMainComponent;
  let fixture: ComponentFixture<AdminUsersMainComponent>;
  let store: UsersStore;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          ReactiveComponentModule,
          MatDialogModule
        ],
        declarations: [
          MockIwdfAlertComponent,
          MockIwdfSpinnerComponent,
          MockAdminUsersGridComponent,
          AdminUsersMainComponent
        ],
        providers: [
          UserService,
          ConfirmService,
          UsersDialogFormService,
          UsersStore
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersMainComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(UsersStore);
    component.vm$ = store.vm$;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show iwdf-spinner component when loaded is false and error is null', () => {
    store.setState({
      error: null,
      loaded: false,
      loading: false,
      users: []
    });
    fixture.detectChanges();
    expect(compiled.querySelector('iwdf-spinner')).toBeTruthy();
  });

  it('should  show alert component when error is not null and loaded is false', () => {
    store.setState({
      error: { message: 'error' },
      loaded: false,
      loading: false,
      users: []
    });
    fixture.detectChanges();
    expect(compiled.querySelector('iwdf-alert')).toBeTruthy();
  });

  it('should  show admin-users-grid component when error is null and loaded is true', () => {
    store.setState({
      error: null,
      loaded: true,
      loading: false,
      users: userResponseData
    });
    fixture.detectChanges();
    expect(compiled.querySelector('admin-users-grid')).toBeTruthy();
  });
});
