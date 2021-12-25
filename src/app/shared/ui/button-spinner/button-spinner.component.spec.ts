// Core
import { ChangeDetectionStrategy } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatButtonModule } from '@angular/material/button';

// Components
import { IwdfButtonSpinnerComponent } from './button-spinner.component';

describe('ButtonSpinnerComponent', () => {
  let fixture: ComponentFixture<IwdfButtonSpinnerComponent>;
  let component: IwdfButtonSpinnerComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule],
        declarations: [IwdfButtonSpinnerComponent]
      })
        .overrideComponent(IwdfButtonSpinnerComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default }
        })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfButtonSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
