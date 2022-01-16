// Core
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';

// Models
import { UserRequestDto, UserResponseDto } from '@api/models';
import { FormStatusDto } from '@shared/services/form-status';

// Services
import { UsersFormService } from './form.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-form',
  templateUrl: './form.component.html',
  providers: [UsersFormService]
})
export class AdminUsersFormComponent implements OnInit {
  @Input() status: FormStatusDto | undefined = undefined;
  @Input() user: UserResponseDto | undefined = undefined;
  @Output() submitted = new EventEmitter<UserRequestDto>();

  frm!: FormGroup;
  hide = true;
  userId!: string;
  constructor(private sf: UsersFormService) {}

  ngOnInit() {
    this.frm = this.sf.form;
    if (this.user) {
      const { id, email, username } = this.user;
      this.userId = id;
      this.frm.patchValue({ email, username });
      this.sf.disablePasswordFields();
    }
  }

  onSubmit() {
    if (this.frm.valid) {
      this.submitted.emit(this.frm.value);
    }
  }
}
