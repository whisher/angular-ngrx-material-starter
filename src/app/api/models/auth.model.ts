export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  expirationEpochSeconds: number;
  token: string;
}

export interface SignInRequestDto {
  acceptPrivacyPolicy: boolean;
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
}

export interface SignInResponseDto {
  email: string;
}
