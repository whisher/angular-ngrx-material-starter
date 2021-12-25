// Core
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs
import { BehaviorSubject, Observable } from 'rxjs';

// Models
import { FormStatusDto } from './form-status.model';

@Injectable()
export class FormStatusService {
  initialState = {
    error: null,
    loading: false
  };
  private subject = new BehaviorSubject<FormStatusDto>(this.initialState);
  private store = this.subject.asObservable();
  constructor(private router: Router) {}

  complete(url?: string) {
    this.subject.next({
      error: null,
      loading: false
    });
    if (url) {
      this.router.navigateByUrl(url);
    }
  }

  error(error: FormStatusDto['error']) {
    this.subject.next({
      error,
      loading: false
    });
  }

  loading() {
    this.subject.next({
      error: null,
      loading: true
    });
  }

  getStatus(): Observable<FormStatusDto> {
    return this.store;
  }
}
