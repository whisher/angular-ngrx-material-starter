// Core
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipeStubsModule } from '@testing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Model
import { UserRequestDto } from '@api/models';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Services
import { UsersFormService } from './form.service';

// Components
import { AdminUsersFormComponent } from './form.component';

const userRequestData: UserRequestDto = {
  email: 'test@test.test',
  password: 'abcd',
  passwordConfirm: 'abcd',
  username: 'test'
};

describe('AdminUsersFormComponent', () => {
  let component: AdminUsersFormComponent;
  let fixture: ComponentFixture<AdminUsersFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslatePipeStubsModule,
          ReactiveFormsModule,
          NoopAnimationsModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          IwdfFortawesomeModule
        ],
        declarations: [AdminUsersFormComponent],
        providers: [UsersFormService]
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
  it('should emit userRequestData after onSubmit', () => {
    let data: UserRequestDto = component.frm.value;
    component.submitted.subscribe((value) => {
      data = value;
    });
    component.frm.setValue(userRequestData);
    component.onSubmit();
    expect(data).toEqual(userRequestData);
  });
});
