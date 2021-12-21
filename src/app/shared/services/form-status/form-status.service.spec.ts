// Core
import { Router } from '@angular/router';

// Testing
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { FormStatusDto } from './form-status.model';

// Services
import { FormStatusService } from './form-status.service';

// Mocks
const completeStateData: FormStatusDto = {
  error: null,
  loading: false
};
const errorStateData: FormStatusDto = {
  error: { message: 'error' },
  loading: false
};
const initialStateData: FormStatusDto = {
  error: null,
  loading: false
};
const loadingStateData: FormStatusDto = {
  error: null,
  loading: true
};
describe('FormStatusService', () => {
  let formStatusService: FormStatusService;
  let router: Router;
  let status: Observable<FormStatusDto>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [FormStatusService]
    });
    formStatusService = TestBed.inject(FormStatusService);
    router = TestBed.inject(Router);
    status = formStatusService.getStatus();
  });

  it('should be created', () => {
    expect(formStatusService).toBeTruthy();
  });

  it('should be set the initial state', () => {
    status.subscribe((data) => {
      expect(data).toEqual(initialStateData);
    });
  });

  it('should be set the loading state', () => {
    formStatusService.loading();
    status.subscribe((data) => {
      expect(data).toEqual(loadingStateData);
    });
  });

  it('should be set the error state', () => {
    formStatusService.error(errorStateData.error);
    status.subscribe((data) => {
      expect(data).toEqual(errorStateData);
    });
  });

  it('should be set the complete state without call navigateByUrl', () => {
    const spy = spyOn(router, 'navigateByUrl');
    formStatusService.complete();
    status.subscribe((data) => {
      expect(data).toEqual(completeStateData);
    });
    expect(spy).not.toHaveBeenCalled();
  });

  it('should be set the complete state and call navigateByUrl', () => {
    const url = '/auth/login';
    const spy = spyOn(router, 'navigateByUrl');
    formStatusService.complete(url);
    status.subscribe((data) => {
      expect(data).toEqual(completeStateData);
    });
    expect(spy).toHaveBeenCalledOnceWith(url);
  });
});
