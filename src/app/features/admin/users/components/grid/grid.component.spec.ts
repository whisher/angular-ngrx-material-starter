// Core
import { Component, Input } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Models
import { UserResponseDto, UserRoleDto } from '@api/models';

// Components
import { AdminUsersGridComponent } from './grid.component';

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
  selector: 'admin-users-add',
  template: ``
})
export class MockAdminUsersAddComponent {}

@Component({
  selector: 'admin-users-search',
  template: ``
})
export class MockAdminUsersSearchComponent {}

// fixtures
const userResponseData: UserResponseDto[] = [
  {
    id: 'test',
    email: 'test@test.test',
    role: 'user' as UserRoleDto,
    username: 'test'
  }
];
describe('AdminUsersGridComponent', () => {
  let compiled: HTMLElement;
  let component: AdminUsersGridComponent;
  let fixture: ComponentFixture<AdminUsersGridComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule,
          MatCardModule,
          MatPaginatorModule,
          MatSortModule,
          MatTableModule,
          IwdfFortawesomeModule
        ],
        declarations: [
          MockIwdfAlertComponent,
          MockIwdfSpinnerComponent,
          MockAdminUsersAddComponent,
          MockAdminUsersSearchComponent,
          AdminUsersGridComponent
        ],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersGridComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show iwdf-spinner component when isLoading is true', () => {
    component.data = userResponseData;
    component.isLoading = true;
    fixture.detectChanges();
    expect(compiled.querySelector('iwdf-spinner')).toBeTruthy();
  });

  it('should show iwdf-alert component when hasData is false', () => {
    component.data = [];
    fixture.detectChanges();
    expect(compiled.querySelector('iwdf-alert')).toBeTruthy();
  });
});
