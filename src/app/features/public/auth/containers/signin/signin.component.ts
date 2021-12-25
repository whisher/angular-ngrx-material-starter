// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { SignInRequestDto } from '@api/models';

// Services
import { AuthService } from '@api/services/auth.service';
import { FormStatusDto, FormStatusService } from '@shared/services/form-status';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'public-auth-signin',
  templateUrl: './signin.component.html',
  providers: [FormStatusService]
})
export class PublicAuthSigninComponent {
  status$: Observable<FormStatusDto> = this.formStatusService.getStatus();

  constructor(
    private service: AuthService,
    private formStatusService: FormStatusService
  ) {}

  onSubmit(data: SignInRequestDto) {
    this.formStatusService.loading();
    this.service.signIn(data).subscribe({
      error: (error) => this.formStatusService.error(error),
      complete: () => {
        this.formStatusService.complete('/auth/login');
      }
    });
  }
}
