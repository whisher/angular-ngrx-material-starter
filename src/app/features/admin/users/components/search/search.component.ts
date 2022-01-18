// Core
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';

// Rxjs
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

// Models
import { SearchValuesDto } from '../../models';

// Services
import { UsersSearchService } from './search.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-search',
  templateUrl: './search.component.html',
  providers: [UsersSearchService]
})
export class AdminUsersSearchComponent implements OnDestroy, OnInit {
  @Output() search = new EventEmitter<SearchValuesDto>();
  private subscription: Subscription = new Subscription();
  frm!: FormGroup;
  roles = ['All', 'User', 'Admin'];
  constructor(private sf: UsersSearchService) {}

  ngOnInit() {
    this.frm = this.sf.form;
    this.subscription.add(
      this.frm.valueChanges
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe((searchValues) => {
          this.search.emit(searchValues);
        })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
