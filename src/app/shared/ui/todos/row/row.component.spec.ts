import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosRowComponent } from './row.component';

describe('TodosRowComponent', () => {
  let component: TodosRowComponent;
  let fixture: ComponentFixture<TodosRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosRowComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
