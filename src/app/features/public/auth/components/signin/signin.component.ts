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
import { SignInRequestDto } from '@api/models';
import { FormStatusDto } from '@shared/services/form-status';

// Validators
import { passwordMatchValidator } from '@shared/utils/validators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-auth-signin-form',
  templateUrl: './signin.component.html'
})
export class PublicAuthSigninFormComponent implements OnInit {
  @Input() status!: FormStatusDto | undefined;
  @Output() submitted = new EventEmitter<SignInRequestDto>();

  frm!: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        passwordConfirm: ['', Validators.required],
        acceptPrivacyPolicy: [false, Validators.required]
      },
      { validators: [passwordMatchValidator('password', 'passwordConfirm')] }
    );
  }

  onSubmit() {
    if (this.frm.valid) {
      this.submitted.emit(this.frm.value);
    }
  }
}
