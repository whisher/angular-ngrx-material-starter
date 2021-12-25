// Core
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// Ngrx
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

// Store
import { AuthFacade } from '@stores/auth';
import { authReducer } from '@stores/auth/store/auth.reducer';

// Components
import { PublicLayoutMainComponent } from './main.component';

// Mocks
@Component({
  selector: 'public-layout-footer',
  template: ''
})
class MockPublicLayoutFooterComponent {}

@Component({
  selector: 'public-layout-header',
  template: ''
})
class MockPublicLayoutHeaderComponent {
  @Input() isAuthenticated: boolean | undefined = undefined;
}

describe('PublicLayoutMainComponent', () => {
  let component: PublicLayoutMainComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<PublicLayoutMainComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.forRoot({
            auth: authReducer
          }),
          ReactiveComponentModule
        ],
        declarations: [
          MockPublicLayoutFooterComponent,
          MockPublicLayoutHeaderComponent,
          PublicLayoutMainComponent
        ],
        providers: [Store, AuthFacade]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutMainComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a router outlet`, () => {
    fixture.detectChanges();
    const outlet = debugElement.query(By.directive(RouterOutlet));
    expect(outlet).not.toBeNull();
  });
});
