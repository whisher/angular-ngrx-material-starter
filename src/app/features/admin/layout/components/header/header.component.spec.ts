// Core
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Ngrx
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

// Models
import { Theme } from '@api/models';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Store
import { AccountFacade } from '@stores/account';
import { accountReducer } from '@stores/account/store/account.reducer';
import { SettingsFacade } from '@stores/settings';
import { settingsReducer } from '@stores/settings/store/settings.reducer';

// Components
import { AdminLayoutHeaderComponent } from './header.component';

// Mocks
@Component({
  selector: 'iwdf-theme-picker',
  template: ''
})
class MockIwdfThemePickerComponent {
  @Input() theme!: Theme;
  @Input() themes: Theme[] = [];
}
describe('AdminLayoutHeaderComponent', () => {
  let component: AdminLayoutHeaderComponent;
  let fixture: ComponentFixture<AdminLayoutHeaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          FormsModule,
          ReactiveComponentModule,
          StoreModule.forRoot({
            account: accountReducer,
            settings: settingsReducer
          }),
          MatButtonModule,
          MatMenuModule,
          MatSelectModule,
          MatToolbarModule,
          IwdfFortawesomeModule
        ],
        declarations: [
          MockIwdfThemePickerComponent,
          AdminLayoutHeaderComponent
        ],
        providers: [Store, AccountFacade, SettingsFacade]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
