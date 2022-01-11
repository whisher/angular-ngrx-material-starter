// Core
import { Component } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipeStubsModule } from '@testing';

// Material
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

// Components
import { PublicLayoutNavComponent } from './nav.component';

// Mocks
@Component({
  selector: 'public-layout-lang-picker',
  template: ''
})
class MockPublicLayoutLangPickerComponent {}

@Component({
  selector: 'public-layout-theme-picker',
  template: ''
})
class MockPublicLayoutThemePickerComponent {}

describe('PublicLayoutFooterComponent', () => {
  let component: PublicLayoutNavComponent;
  let fixture: ComponentFixture<PublicLayoutNavComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          TranslatePipeStubsModule,
          MatDividerModule,
          MatListModule
        ],
        declarations: [
          MockPublicLayoutLangPickerComponent,
          MockPublicLayoutThemePickerComponent,
          PublicLayoutNavComponent
        ],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
