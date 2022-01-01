// Core
import { Component, Input } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Models
import { Theme } from '@api/models';

// UI
import { IwdfThemePickerModule } from '@shared/ui/theme-picker';

// Components
import { PublicLayoutThemePickerComponent } from './theme-picker.component';

// Mocks
@Component({
  selector: 'iwdf-theme-switch',
  template: ''
})
export class MockIwdfThemePickerComponent {
  @Input() theme!: Theme;
  @Input() themes: Theme[] = [];
}

describe('PublicLayoutThemePickerComponent', () => {
  let component: PublicLayoutThemePickerComponent;
  let fixture: ComponentFixture<PublicLayoutThemePickerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [IwdfThemePickerModule],
        declarations: [
          MockIwdfThemePickerComponent,
          PublicLayoutThemePickerComponent
        ],
        providers: []
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutThemePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
