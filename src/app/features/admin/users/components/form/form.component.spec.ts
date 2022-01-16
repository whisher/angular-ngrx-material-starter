// Core
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipeStubsModule } from '@testing';

// Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Model
import { UserRequestDto } from '@api/models';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Ui
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfButtonSpinnerModule } from '@shared/ui/button-spinner';

// Components
import { AdminUsersFormComponent } from './form.component';

const signInRequestData: UserRequestDto = {
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
          MatCheckboxModule,
          MatFormFieldModule,
          MatInputModule,
          IwdfFortawesomeModule,
          IwdfAlertModule,
          IwdfButtonSpinnerModule
        ],
        declarations: [AdminUsersFormComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersFormComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show alert component when error is null', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('iwdf-alert')).toBeFalsy();
  });

  it('should show alert component when error is present', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.status = {
      error: { message: 'Error' },
      loading: false
    };
    fixture.detectChanges();
    expect(compiled.querySelector('iwdf-alert')).toBeTruthy();
  });
  it('should emit loginRequestData after onSubmit', () => {
    fixture.detectChanges();
    let data: UserRequestDto = component.frm.value;
    component.submitted.subscribe((value) => {
      data = value;
    });
    component.frm.setValue(signInRequestData);
    component.onSubmit();
    expect(data).toEqual(signInRequestData);
  });
});
