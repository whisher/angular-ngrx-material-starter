// Core
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

// Ngrx
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';

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

@Component({
  selector: 'public-layout-nav',
  template: ''
})
export class MockPublicLayoutNavComponent {
  @Input() sidenav?: MatDrawer;
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
          NoopAnimationsModule,
          StoreModule.forRoot({
            auth: authReducer
          }),
          ReactiveComponentModule,
          MatSidenavModule
        ],
        declarations: [
          MockPublicLayoutFooterComponent,
          MockPublicLayoutHeaderComponent,
          MockPublicLayoutNavComponent,
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
