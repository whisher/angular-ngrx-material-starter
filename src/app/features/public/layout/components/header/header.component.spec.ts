// Core
import { Component, Input } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipeStubsModule } from '@testing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// UI
import { IwdfThemePickerModule } from '@shared/ui/theme-picker';

// Models
import { UserAccountResponseDto } from '@api/models';

// Components
import { PublicLayoutHeaderComponent } from './header.component';

// Mocks
@Component({
  selector: 'public-layout-header-account',
  template: ''
})
export class MockPublicLayoutHeaderAccountComponent {
  @Input() account: UserAccountResponseDto | undefined = undefined;
}

@Component({
  selector: 'public-layout-lang-picker',
  template: ''
})
export class MockPublicLayoutLangPickerComponent {}

@Component({
  selector: 'public-layout-nav',
  template: ''
})
export class MockPublicLayoutNavComponent {
  @Input() sidenav?: MatDrawer;
}

@Component({
  selector: 'public-layout-theme-picker',
  template: ''
})
export class MockIwdfThemePickerComponent {}

describe('PublicLayoutHeaderComponent', () => {
  let component: PublicLayoutHeaderComponent;
  let fixture: ComponentFixture<PublicLayoutHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          TranslatePipeStubsModule,
          MatButtonModule,
          MatToolbarModule,
          IwdfFortawesomeModule,
          IwdfThemePickerModule
        ],
        declarations: [
          MockPublicLayoutHeaderAccountComponent,
          MockPublicLayoutLangPickerComponent,
          MockPublicLayoutNavComponent,
          MockIwdfThemePickerComponent,
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
