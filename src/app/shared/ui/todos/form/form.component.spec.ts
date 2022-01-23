// Core
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Testing
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Model
import { TodoDto } from '@api/models';

// Fortawesome
import { IwdfFortawesomeModule } from '@shared/ui/fortawesome';

// Services
import { TodosFormService } from './form.service';

// Components
import { IwdfTodosFormComponent } from './form.component';

const todoRequestData: TodoDto = {
  name: 'Do the test!',
  done: false
};

describe('IwdfTodosFormComponent', () => {
  let component: IwdfTodosFormComponent;
  let fixture: ComponentFixture<IwdfTodosFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          NoopAnimationsModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          IwdfFortawesomeModule
        ],
        declarations: [IwdfTodosFormComponent],
        providers: [TodosFormService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IwdfTodosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit todoRequestData after onSubmit', () => {
    let data: TodoDto = component.frm.value;
    component.submitted.subscribe((value) => {
      data = value;
    });
    component.frm.setValue(todoRequestData);
    component.onSubmit();
    expect(data).toEqual(todoRequestData);
  });
});
