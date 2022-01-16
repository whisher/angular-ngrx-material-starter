// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Services
import { UsersDialogFormService } from '../../dialogs';

// Components
import { AdminUsersAddComponent } from './add.component';

describe('AdminUsersAddComponent', () => {
  let component: AdminUsersAddComponent;
  let fixture: ComponentFixture<AdminUsersAddComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [AdminUsersAddComponent],
        providers: [UsersDialogFormService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
