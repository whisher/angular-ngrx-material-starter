// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Marerial
import { MatIconModule } from '@angular/material/icon';

// Components
import { IwdfAlertComponent } from './alert.component';

describe('IwdfAlertComponent', () => {
  let component: IwdfAlertComponent;
  let fixture: ComponentFixture<IwdfAlertComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatIconModule],
        declarations: [IwdfAlertComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
