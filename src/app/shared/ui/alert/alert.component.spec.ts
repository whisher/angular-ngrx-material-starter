// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Fortawesome
import { IwdfFortawesomeModule } from '../fortawesome';

// Components
import { IwdfAlertComponent, AlertColor } from './alert.component';

describe('IwdfAlertComponent', () => {
  let component: IwdfAlertComponent;
  let fixture: ComponentFixture<IwdfAlertComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [IwdfFortawesomeModule],
        declarations: [IwdfAlertComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfAlertComponent);
    component = fixture.componentInstance;
    component.color = 'accent' as AlertColor;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
