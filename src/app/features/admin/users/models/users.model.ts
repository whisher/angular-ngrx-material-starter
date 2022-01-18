// Models
import { UserResponseDto } from '@api/models';

export type UserActionDto = {
  action: 'delete' | 'edit';
  data: UserResponseDto;
};

export type SearchValuesDto = {
  email: string;
  role: string;
  username: string;
};
