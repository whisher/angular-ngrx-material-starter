// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Services
import { UsersDialogFormService } from '../../dialogs';

// Components
import { AdminUsersFormComponent } from './form.component';

describe('AdminUsersFormComponent', () => {
  let component: AdminUsersFormComponent;
  let fixture: ComponentFixture<AdminUsersFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [AdminUsersFormComponent],
        providers: [UsersDialogFormService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
