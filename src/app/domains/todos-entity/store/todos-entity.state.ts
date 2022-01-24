import { ErrorDto, UserAccountResponseDto } from '@api/models';

export interface AccountState {
  error: ErrorDto | null;
  loaded: boolean;
  data: UserAccountResponseDto | undefined;
}
