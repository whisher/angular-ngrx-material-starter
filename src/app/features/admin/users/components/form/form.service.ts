import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Validators
import { passwordMatchValidator } from '@shared/utils/validators';

@Injectable()
export class UsersFormService {
  private frm: FormGroup = this.createForm();
  get form(): FormGroup {
    return this.frm;
  }

  constructor(private fb: FormBuilder) {}

  private createForm() {
    return this.fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        passwordConfirm: ['', Validators.required]
      },
      { validators: passwordMatchValidator('password', 'passwordConfirm') }
    );
  }
}
