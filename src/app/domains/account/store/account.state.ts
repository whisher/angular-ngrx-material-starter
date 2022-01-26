import { ErrorDto, UserAccountResponseDto } from '@api/models';

export const accountFeatureKey = 'account';

export interface AccountState {
  error: ErrorDto | null;
  loaded: boolean;
  data: UserAccountResponseDto | undefined;
}
