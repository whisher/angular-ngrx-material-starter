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

export interface UserResponseDto {
  id: string;
  email: string;
  role: UserRoleDto;
  username: string;
  createdAt?: Date;
  updatedAt?: Date;
}
