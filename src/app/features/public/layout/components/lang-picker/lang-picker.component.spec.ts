// Core
import { FormsModule } from '@angular/forms';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Ngrx
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatSelectModule } from '@angular/material/select';

// Store
import { SettingsFacade } from '@stores/settings';
import { settingsReducer } from '@stores/settings/store/settings.reducer';

// Components
import { PublicLayoutLangPickerComponent } from './lang-picker.component';

describe('PublicLayoutLangPickerComponent', () => {
  let component: PublicLayoutLangPickerComponent;
  let fixture: ComponentFixture<PublicLayoutLangPickerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          StoreModule.forRoot({
            settings: settingsReducer
          }),
          ReactiveComponentModule,
          MatSelectModule
        ],
        declarations: [PublicLayoutLangPickerComponent],
        providers: [Store, SettingsFacade]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutLangPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
