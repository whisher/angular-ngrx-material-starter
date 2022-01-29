// Testings
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Models
import { TodoDto } from '@api/models';

// Fortawesome
import { IwdfFortawesomeModule } from '../../fortawesome';

// Components
import { IwdfTodosRowComponent } from './row.component';

const todo: TodoDto = {
  id: 'abcd',
  name: 'my test todo',
  isDone: false
};
describe('IwdfTodosRowComponent', () => {
  let component: IwdfTodosRowComponent;
  let fixture: ComponentFixture<IwdfTodosRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule, MatCheckboxModule, IwdfFortawesomeModule],
      declarations: [IwdfTodosRowComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfTodosRowComponent);
    component = fixture.componentInstance;
    component.todo = todo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
