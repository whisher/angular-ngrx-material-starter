// Core
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipeStubsModule } from '@testing';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Model
import { LoginRequestDto } from '@api/models/auth.model';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

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
          TranslatePipeStubsModule,
          ReactiveFormsModule,
          NoopAnimationsModule,
          MatFormFieldModule,
          MatInputModule,
          IwdfFortawesomeModule,
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
    let data: LoginRequestDto = component.frm.value;
    component.submitted.subscribe((value) => {
      data = value;
    });
    component.frm.setValue(loginRequestData);
    component.onSubmit();
    expect(data).toEqual(loginRequestData);
  });
});
