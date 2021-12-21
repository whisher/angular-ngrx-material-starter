import { ErrorDto } from '@api/models';

export type FormStatusDto = {
  error: ErrorDto | null;
  loading: boolean;
};
