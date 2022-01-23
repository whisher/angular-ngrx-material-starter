import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class TodosFormService {
  private frm: FormGroup = this.createForm();
  get form(): FormGroup {
    return this.frm;
  }

  constructor(private fb: FormBuilder) {}

  private createForm() {
    return this.fb.group({
      name: ['', [Validators.required]]
    });
  }
}
