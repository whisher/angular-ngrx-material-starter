// Core
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Model
import { SignInRequestDto } from '@api/models';

// Ui
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfButtonSpinnerModule } from '@shared/ui/button-spinner';

// Components
import { PublicAuthSigninFormComponent } from './signin.component';

const signInRequestData: SignInRequestDto = {
  email: 'test@test.test',
  password: 'abcd',
  passwordConfirm: 'abcd',
  acceptPrivacyPolicy: true
};

describe('PublicAuthSigninFormComponent', () => {
  let component: PublicAuthSigninFormComponent;
  let fixture: ComponentFixture<PublicAuthSigninFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          NoopAnimationsModule,
          MatCheckboxModule,
          MatFormFieldModule,
          MatIconModule,
          MatInputModule,
          IwdfAlertModule,
          IwdfButtonSpinnerModule
        ],
        declarations: [PublicAuthSigninFormComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAuthSigninFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit loginRequestData after onSubmit', () => {
    let data: SignInRequestDto = component.frm.value;
    component.submitted.subscribe((value) => {
      data = value;
    });
    component.frm.setValue(signInRequestData);
    component.onSubmit();
    expect(data).toEqual(signInRequestData);
  });
});
