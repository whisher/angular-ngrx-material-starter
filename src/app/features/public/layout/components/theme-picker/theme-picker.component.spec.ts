// Core
import { FormsModule } from '@angular/forms';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Ngrx
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

// Store
import { SettingsFacade } from '@domains/settings';
import { settingsReducer } from '@domains/settings/store/settings.reducer';

// UI
import { IwdfThemePickerModule } from '@shared/ui/theme-picker';

// Components
import { PublicLayoutThemePickerComponent } from './theme-picker.component';

describe('PublicLayoutThemePickerComponent', () => {
  let component: PublicLayoutThemePickerComponent;
  let fixture: ComponentFixture<PublicLayoutThemePickerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          StoreModule.forRoot({
            settings: settingsReducer
          }),
          ReactiveComponentModule,
          IwdfThemePickerModule
        ],
        declarations: [PublicLayoutThemePickerComponent],
        providers: [Store, SettingsFacade]
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
