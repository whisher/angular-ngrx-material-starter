import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IwdfTodosRowComponent } from './row.component';

describe('IwdfTodosRowComponent', () => {
  let component: IwdfTodosRowComponent;
  let fixture: ComponentFixture<IwdfTodosRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IwdfTodosRowComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfTodosRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
