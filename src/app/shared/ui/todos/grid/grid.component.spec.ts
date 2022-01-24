import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IwdfTodosGridComponent } from './grid.component';

describe('IwdfTodosGridComponent', () => {
  let component: IwdfTodosGridComponent;
  let fixture: ComponentFixture<IwdfTodosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IwdfTodosGridComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfTodosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
