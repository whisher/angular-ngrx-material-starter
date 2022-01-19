// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

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
        imports: [MatButtonModule, MatDialogModule, IwdfFortawesomeModule],
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
