// Core
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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
  @Output() submitted = new EventEmitter<Partial<TodoDto>>();

  frm!: FormGroup;
  hide = true;

  constructor(private sf: TodosFormService) {}

  ngOnInit() {
    this.frm = this.sf.form;
  }

  onSubmit() {
    if (this.frm.valid) {
      this.submitted.emit(this.frm.value);
      this.frm.reset();
    }
  }
}
