// Core
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// Models
import { TodoDto } from '@api/models';
import { TodoActions } from '@shared/ui/todos';

// Store
import { TodosEntityFacade } from '@domains/todos/todos-entity';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-todos-entity-main',
  templateUrl: './main.component.html'
})
export class PublicTodosEntityMainComponent implements OnInit {
  vm$ = this.todosEntityFacade.vm$;
  constructor(private todosEntityFacade: TodosEntityFacade) {}
  ngOnInit() {
    this.todosEntityFacade.load();
  }
  onSubmit(todo: TodoDto) {
    this.todosEntityFacade.add(todo);
  }
  onHandleAcions(row: TodoActions): void {
    const { action, data } = row;
    if (action === 'update') {
      this.todosEntityFacade.update(data);
    } else {
      const { id } = data;
      this.todosEntityFacade.remove({ id });
    }
  }
}
