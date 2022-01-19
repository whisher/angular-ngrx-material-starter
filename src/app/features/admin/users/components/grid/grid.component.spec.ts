// Core
import { Component } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

// Components
import { AdminUsersGridComponent } from './grid.component';

// Mocks
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

describe('AdminUsersGridComponent', () => {
  let component: AdminUsersGridComponent;
  let fixture: ComponentFixture<AdminUsersGridComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatPaginatorModule, MatSortModule, MatTableModule],
        declarations: [
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
