// Core
import { Component, Input } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslatePipeStubsModule } from '@testing';

// Ngrx
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatCardModule } from '@angular/material/card';

// Store
import { AccountFacade } from '@domains/account';
import { AuthFacade } from '@domains/auth';
import { accountReducer } from '@domains/account/store/account.reducer';
import { authReducer } from '@domains/auth/store/auth.reducer';

// Models
import { FormStatusDto } from '@shared/services/form-status';

// Component
import { PublicAuthLoginComponent } from './login.component';

// Mocks
@Component({
  selector: 'public-auth-login-form',
  template: ``
})
export class MockPublicAuthLoginFormComponent {
  @Input() status!: FormStatusDto;
}

describe('PublicAuthLoginComponent', () => {
  let component: PublicAuthLoginComponent;
  let fixture: ComponentFixture<PublicAuthLoginComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          TranslatePipeStubsModule,
          ReactiveComponentModule,
          MatCardModule,
          StoreModule.forRoot({
            account: accountReducer,
            auth: authReducer
          })
        ],
        declarations: [
          MockPublicAuthLoginFormComponent,
          PublicAuthLoginComponent
        ],
        providers: [AccountFacade, AuthFacade, Store]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
