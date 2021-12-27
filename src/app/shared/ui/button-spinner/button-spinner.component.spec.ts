// Core
import { Component } from '@angular/core';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatButtonModule } from '@angular/material/button';

// Components
import { IwdfButtonSpinnerComponent } from './button-spinner.component';

// Mocks
@Component({
  template: `
    <iwdf-button-spinner><span>Test</span></iwdf-button-spinner>
  `
})
class MockHostComponent {}
describe('ButtonSpinnerComponent', () => {
  let fixture: ComponentFixture<IwdfButtonSpinnerComponent>;
  let component: IwdfButtonSpinnerComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatButtonModule],
        declarations: [MockHostComponent, IwdfButtonSpinnerComponent]
      }).compileComponents();
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

  it('should show Test in ng-content', () => {
    const mockFixture = TestBed.createComponent(MockHostComponent);
    const compiled = mockFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toEqual('Test');
  });
});
