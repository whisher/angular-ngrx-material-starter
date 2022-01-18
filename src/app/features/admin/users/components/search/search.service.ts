import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class UsersSearchService {
  private frm: FormGroup = this.createForm();
  get form(): FormGroup {
    return this.frm;
  }

  constructor(private fb: FormBuilder) {}

  private createForm() {
    return this.fb.group({
      username: [''],
      email: [''],
      role: ['All']
    });
  }
}
