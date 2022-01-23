import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { TodoDto, TodoActions, TodoActionsType } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-todos-row',
  templateUrl: './row.component.html',
})
export class TodosRowComponent {
  @HostBinding('class') classList = 'w-full';
  @Input() data!: TodoDto;
  @Output() handleAcions = new EventEmitter<TodoActions>();
  isVisible = false;
  @HostListener('mouseenter') onEnter(): void {
    this.isVisible = true;
    this.ref.detectChanges();
  }

  @HostListener('mouseleave') onLeave(): void {
    this.isVisible = false;
    this.ref.detectChanges();
  }

  constructor(private ref: ChangeDetectorRef) {}

  onHandleAcions(action: TodoActionsType, data: TodoDto): void {
    this.handleAcions.emit({ action, data });
  }
}
