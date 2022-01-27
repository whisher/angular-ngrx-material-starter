// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Models
import { TodoDto } from '@api/models';
import { TodoActions } from '@shared/ui/todos';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-todos-data-main',
  templateUrl: './main.component.html'
})
export class PublicTodosDataMainComponent {
  todos = [
    {
      id: 'iii',
      isDone: false,
      name: 'whats app ggth jji'
    }
  ];
  onSubmit(todo: TodoDto) {
    console.log('todo', todo);
  }
  onHandleAcions(action: TodoActions): void {
    console.log(action);
  }
}
