// Core
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

// Model
import { LoginRequestDto } from '@api/models/auth';

// Ui
import { IwdfAlertModule } from '@shared/ui/alert';
import { IwdfButtonSpinnerModule } from '@shared/ui/button-spinner';

// Components
import { PublicAuthLoginFormComponent } from './login.component';

const loginRequestData: LoginRequestDto = {
  email: 'test@test.test',
  password: 'abcd'
};

describe('PublicAuthLoginFormComponent', () => {
  let component: PublicAuthLoginFormComponent;
  let fixture: ComponentFixture<PublicAuthLoginFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          NoopAnimationsModule,
          MatFormFieldModule,
          MatIconModule,
          MatInputModule,
          IwdfAlertModule,
          IwdfButtonSpinnerModule
        ],
        declarations: [PublicAuthLoginFormComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAuthLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit loginRequestData after onSubmit', () => {
    let data: LoginRequestDto = component.frm.value;
    component.submitted.subscribe((value) => {
      data = value;
    });
    component.frm.setValue(loginRequestData);
    component.onSubmit();
    expect(data).toEqual(loginRequestData);
  });
});
