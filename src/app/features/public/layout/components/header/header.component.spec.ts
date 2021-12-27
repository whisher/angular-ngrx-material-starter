// Core
import { Component, Input } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Components
import { PublicLayoutHeaderComponent } from './header.component';

// Mocks
@Component({
  selector: 'public-layout-header-account',
  template: ''
})
export class MockPublicLayoutHeaderAccountComponent {
  @Input() isAuthenticated: boolean | undefined = undefined;
}

@Component({
  selector: 'public-layout-nav',
  template: ''
})
export class MockPublicLayoutNavComponent {
  @Input() sidenav?: MatDrawer;
}

@Component({
  selector: 'iwdf-theme-switch',
  template: ''
})
export class MockIwdfThemeSwitchComponent {}

describe('PublicLayoutHeaderComponent', () => {
  let component: PublicLayoutHeaderComponent;
  let fixture: ComponentFixture<PublicLayoutHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatButtonModule,
          MatToolbarModule,
          IwdfFortawesomeModule
        ],
        declarations: [
          MockPublicLayoutHeaderAccountComponent,
          MockPublicLayoutNavComponent,
          MockIwdfThemeSwitchComponent,
          PublicLayoutHeaderComponent
        ],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
