// Models
import { UserResponseDto } from '@api/models';

export type UserActionDto = {
  action: 'delete' | 'edit';
  data: UserResponseDto;
};
