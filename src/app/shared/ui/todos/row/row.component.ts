// Core
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

// Material
import { MatCheckboxChange } from '@angular/material/checkbox';

// Models
import { TodoDto } from '@api/models';
import { TodoActions, TodoActionsType } from '../model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-todos-row',
  templateUrl: './row.component.html'
})
export class IwdfTodosRowComponent {
  @Input() todo!: TodoDto;
  @Output() handleAcions = new EventEmitter<TodoActions>();
  isDeleted = false;

  get isDone(): boolean {
    if (this.todo && this.todo.isDone) {
      return this.todo.isDone;
    }
    return false;
  }

  onHandleDelete(data: TodoActions): void {
    this.isDeleted = true;
    this.handleAcions.emit(data);
  }

  onHandleIsComplete(event: MatCheckboxChange) {
    const data = {
      action: 'update' as TodoActionsType,
      data: { ...this.todo, isDone: event.checked }
    };
    this.todo = data.data;
    this.handleAcions.emit(data);
  }
}
