// Core
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

// Rxjs
import { merge, Subscription } from 'rxjs';

// Material
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Models
import { UserResponseDto } from '@api/models';
import { SearchValuesDto, UserActionDto } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-grid',
  templateUrl: './grid.component.html'
})
export class AdminUsersGridComponent implements AfterViewInit, OnDestroy {
  @Input() set data(data: UserResponseDto[]) {
    this.hasData = data.length > 0;
    this.init(data);
  }
  @Input() isLoading = false;
  @Output() selected = new EventEmitter<UserActionDto>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private subscription: Subscription = new Subscription();
  clickedRows = new Set<UserResponseDto>();
  dataSource!: MatTableDataSource<UserResponseDto>;

  displayedColumns: string[] = [
    'userId',
    'username',
    'email',
    'createdAt',
    'updatedAt',
    'role',
    'actions'
  ];
  hasData!: boolean;
  constructor(private liveAnnouncer: LiveAnnouncer) {}

  handleUserAction(row: UserActionDto) {
    this.selected.emit(row);
  }

  onSearch(searchValues: SearchValuesDto) {
    this.dataSource.filter = JSON.stringify(searchValues);
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  private init(data: UserResponseDto[]) {
    this.dataSource = new MatTableDataSource<UserResponseDto>(data);
    this.dataSource.filterPredicate = this.createFilter();
  }

  private createFilter(): (data: UserResponseDto, filter: string) => boolean {
    const filterPredicate = (
      data: UserResponseDto,
      filter: string
    ): boolean => {
      const searchString: SearchValuesDto = JSON.parse(filter);

      const emailFound = data.email
        .toString()
        .trim()
        .toLowerCase()
        .includes(searchString.email.trim().toLowerCase());

      const roleFound =
        searchString.role !== 'All'
          ? data.role
              .toString()
              .trim()
              .toLowerCase()
              .includes(searchString.role.trim().toLowerCase())
          : true;

      const usernameFound = data.username
        .toString()
        .trim()
        .toLowerCase()
        .includes(searchString.username.trim().toLowerCase());

      return emailFound && roleFound && usernameFound;
    };
    return filterPredicate;
  }

  ngAfterViewInit() {
    this.subscription.add(
      this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0))
    );
    this.subscription.add(
      merge(this.sort.sortChange, this.paginator.page).subscribe((data) => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
