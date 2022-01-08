export enum UserRoleDto {
  admin = 'admin',
  user = 'user'
}
export interface UserAccountResponseDto {
  id: string;
  email: string;
  role: UserRoleDto;
  username: string;
}
