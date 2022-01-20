// Core
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Components
import { IwdfSpinnerComponent } from './spinner.component';

describe('IwdfSpinnerComponent', () => {
  let component: IwdfSpinnerComponent;
  let fixture: ComponentFixture<IwdfSpinnerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatProgressSpinnerModule],
        declarations: [IwdfSpinnerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
