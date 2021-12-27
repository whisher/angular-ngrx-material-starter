// Core
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Testing
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Components
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a router outlet`, () => {
    const outlet = debugElement.query(By.directive(RouterOutlet));
    expect(outlet).not.toBeNull();
  });
});
