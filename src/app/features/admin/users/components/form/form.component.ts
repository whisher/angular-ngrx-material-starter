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

  constructor(private sf: UsersFormService) {}

  ngOnInit() {
    this.frm = this.sf.form;
    if (this.user) {
      const { email, username } = this.user;
      this.frm.patchValue({ email, username });
      this.disablePasswordFields();
    }
  }

  onSubmit() {
    if (this.frm.valid) {
      if (this.user) {
        const { id } = this.user;
        this.submitted.emit({ id, ...this.frm.value });
      } else {
        this.submitted.emit(this.frm.value);
      }
    }
  }
  private disablePasswordFields(): void {
    this.frm.get('password')!.disable();
    this.frm.get('passwordConfirm')!.disable();
  }
}
