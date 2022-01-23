// Core
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Models
import { LoginRequestDto } from '@api/models';
import { AuthStatus } from '@domains/auth';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-auth-login-form',
  templateUrl: './login.component.html'
})
export class PublicAuthLoginFormComponent implements OnInit {
  @Input() status!: AuthStatus | undefined;
  @Output() submitted = new EventEmitter<LoginRequestDto>();

  frm!: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.frm.valid) {
      this.submitted.emit(this.frm.value);
    }
  }
}
