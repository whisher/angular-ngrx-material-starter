// Core
import { Component, Input } from '@angular/core';

// Testing
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Models
import { TodoDto } from '@api/models';

// Components
import { IwdfTodosGridComponent } from './grid.component';

// Mocks
@Component({
  selector: 'iwdf-todos-row',
  template: ''
})
class MockIwdfTodosRowComponent {
  @Input() todo!: TodoDto;
}
const todos: TodoDto[] = [
  {
    id: 'abcde',
    name: 'my test todo',
    isDone: false
  }
];
describe('IwdfTodosGridComponent', () => {
  let component: IwdfTodosGridComponent;
  let fixture: ComponentFixture<IwdfTodosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockIwdfTodosRowComponent, IwdfTodosGridComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfTodosGridComponent);
    component = fixture.componentInstance;
    component.todos = todos;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
