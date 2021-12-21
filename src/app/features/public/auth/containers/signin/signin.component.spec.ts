// Core
import { Component, Input } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Ngrx
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatCardModule } from '@angular/material/card';

// Services
import { AuthService } from '@api/services/auth.service';
import { FormStatusDto, FormStatusService } from '@shared/services/form-status';

// Component
import { PublicAuthSigninComponent } from './signin.component';

// Mocks
@Component({
  selector: 'public-auth-signin-form',
  template: ``
})
export class MockPublicAuthSigninFormComponent {
  @Input() status!: FormStatusDto;
}

describe('PublicAuthSigninComponent', () => {
  let component: PublicAuthSigninComponent;
  let fixture: ComponentFixture<PublicAuthSigninComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          ReactiveComponentModule,
          MatCardModule
        ],
        declarations: [
          MockPublicAuthSigninFormComponent,
          PublicAuthSigninComponent
        ],
        providers: [AuthService, FormStatusService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAuthSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
