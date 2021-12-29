// Models
import { ErrorDto, LoginResponseDto } from '@api/models';

export interface AuthState {
  error: ErrorDto | null;
  loading: boolean;
  data: LoginResponseDto | undefined;
}
