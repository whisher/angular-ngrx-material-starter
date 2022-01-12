// Core
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';

// Components
import { AdminLayoutMainComponent } from './main.component';

@Component({
  selector: 'admin-layout-header',
  template: ''
})
class MockAdminLayoutHeaderComponent {}

@Component({
  selector: 'admin-layout-footer',
  template: ''
})
class MockAdminLayoutFooterComponent {}

@Component({
  selector: 'admin-layout-nav',
  template: ''
})
class MockAdminLayoutNavComponent {}

describe('AdminLayoutMainComponent', () => {
  let component: AdminLayoutMainComponent;
  let el: DebugElement;
  let fixture: ComponentFixture<AdminLayoutMainComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, RouterTestingModule, MatSidenavModule],
        declarations: [
          MockAdminLayoutHeaderComponent,
          MockAdminLayoutFooterComponent,
          MockAdminLayoutNavComponent,
          AdminLayoutMainComponent
        ],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutMainComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a router outlet`, () => {
    const outlet = el.query(By.directive(RouterOutlet));
    expect(outlet).not.toBeNull();
  });
});
