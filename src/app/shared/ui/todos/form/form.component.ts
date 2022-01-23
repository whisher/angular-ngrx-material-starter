// Core
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';

// Models
import { TodoDto } from '@api/models';

// Services
import { TodosFormService } from './form.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-todos-form',
  templateUrl: './form.component.html',
  providers: [TodosFormService]
})
export class IwdfTodosFormComponent implements OnInit {
  @Input() todo: TodoDto | undefined = undefined;
  @Output() submitted = new EventEmitter<TodoDto>();

  frm!: FormGroup;
  hide = true;

  constructor(private sf: TodosFormService) {}

  ngOnInit() {
    this.frm = this.sf.form;
    if (this.todo) {
      const { name } = this.todo;
      this.frm.patchValue({ name });
    }
  }

  onSubmit() {
    if (this.frm.valid) {
      if (this.todo) {
        const { id } = this.todo;
        this.submitted.emit({ id, ...this.frm.value });
      } else {
        this.submitted.emit(this.frm.value);
      }
    }
  }
}
