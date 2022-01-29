// Core
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

// Models
import { TodoDto } from '@api/models';
import { TodoActions } from '../model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-todos-grid',
  templateUrl: './grid.component.html'
})
export class IwdfTodosGridComponent {
  @Input() todos!: TodoDto[];
  @Output() handleAcions = new EventEmitter<TodoActions>();

  onHandleAcions(data: TodoActions): void {
    this.handleAcions.emit(data);
  }
  trackByFn(index: number, todo: TodoDto) {
    return todo.id;
  }
}
