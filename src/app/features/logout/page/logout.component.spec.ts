// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Ngrx
import { Store, StoreModule } from '@ngrx/store';

// Store
import { AuthFacade } from '@stores/auth';
import { authReducer } from '@stores/auth/store/auth.reducer';

// Component
import { LogoutPageComponent } from './logout.component';

describe('LogoutPageComponent', () => {
  let component: LogoutPageComponent;
  let fixture: ComponentFixture<LogoutPageComponent>;
  const facadeSpy = jasmine.createSpyObj('AuthFacade', ['logout']);
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            auth: authReducer
          })
        ],
        declarations: [LogoutPageComponent],
        providers: [Store, { provide: AuthFacade, useValue: facadeSpy }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should logout have been called', () => {
    expect(facadeSpy.logout).toHaveBeenCalled();
  });
});
