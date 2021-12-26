// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Components
import { IwdfThemeSwitchComponent } from './theme-switch.component';

describe('IwdfThemeSwitchComponent', () => {
  let component: IwdfThemeSwitchComponent;
  let fixture: ComponentFixture<IwdfThemeSwitchComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatSlideToggleModule],
        declarations: [IwdfThemeSwitchComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
