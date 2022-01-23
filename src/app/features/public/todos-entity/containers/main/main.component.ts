// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Models
import { TodoDto } from '@api/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-todos-entity-main',
  templateUrl: './main.component.html'
})
export class PublicTodosEntityMainComponent {
  onSubmit(todo: TodoDto) {
    console.log('todo', todo);
  }
}
