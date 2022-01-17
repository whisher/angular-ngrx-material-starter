// Core
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

// Material
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

// Models
import { UserResponseDto } from '@api/models';
import { UserActionDto } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-grid',
  templateUrl: './grid.component.html'
})
export class AdminUsersGridComponent implements AfterViewInit {
  @Input() set data(data: UserResponseDto[]) {
    this.hasData = data.length > 0;
    this.init(data);
  }
  @Output() selected = new EventEmitter<UserActionDto>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  handleUserAction(row: UserActionDto) {
    this.selected.emit(row);
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
    this.dataSource = new MatTableDataSource(data);
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
}
