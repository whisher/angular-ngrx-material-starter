// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { IwdfAlertComponent } from './alert.component';

describe('IwdfAlertComponent', () => {
  let component: IwdfAlertComponent;
  let fixture: ComponentFixture<IwdfAlertComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [],
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
