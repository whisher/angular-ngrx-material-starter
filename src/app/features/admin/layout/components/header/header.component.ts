import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-header',
  templateUrl: './header.component.html'
})
export class AdminLayoutHeaderComponent {
  @Output() toggled = new EventEmitter<void>();
  toggle() {
    this.toggled.emit();
  }
}
