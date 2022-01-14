// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Components
import { AdminUsersDialogFormComponent } from './form.component';

describe('AdminUsersDialogFormComponent', () => {
  let component: AdminUsersDialogFormComponent;
  let fixture: ComponentFixture<AdminUsersDialogFormComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [AdminUsersDialogFormComponent],
        providers: [
          {
            provide: MAT_DIALOG_DATA,
            useValue: ''
          },
          {
            provide: MatDialogRef,
            useValue: mockDialogRef
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
