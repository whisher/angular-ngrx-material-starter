// Core
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { TodoDto } from '@api/models';
import { TodoActions } from '@shared/ui/todos';

// Store
import { TodoStoreService } from '@domains/todos/todos-data';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-todos-data-main',
  templateUrl: './main.component.html'
})
export class PublicTodosDataMainComponent implements OnInit {
  loading$: Observable<boolean> = this.todoStoreService.loading$;
  todos$: Observable<TodoDto[]> = this.todoStoreService.entities$;
  constructor(private todoStoreService: TodoStoreService) {}
  ngOnInit() {
    this.loadAll();
  }
  onSubmit(todo: Partial<TodoDto>) {
    this.add(todo as TodoDto);
  }
  onHandleAcions(row: TodoActions): void {
    const { action, data } = row;
    if (action === 'update') {
      this.update(data);
    } else {
      this.delete(data);
    }
  }

  add(todo: TodoDto): void {
    this.todoStoreService.add(todo, { isOptimistic: false });
  }

  update(todo: TodoDto): void {
    this.todoStoreService.update(todo, { isOptimistic: true });
  }

  loadAll(): void {
    this.todoStoreService.getAll();
  }

  delete(data: TodoDto): void {
    this.todoStoreService.delete(data);
  }
}
