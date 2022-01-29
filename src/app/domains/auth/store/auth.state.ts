// Models
import { ErrorDto, LoginResponseDto } from '@api/models';

export const authFeatureKey = 'auth';

export interface AuthState {
  error: ErrorDto | null;
  loading: boolean;
  data: LoginResponseDto | undefined;
}
