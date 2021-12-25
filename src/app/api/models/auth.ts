export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  expirationEpochSeconds: number;
  token: string;
}

export interface SignInRequestDto {
  email: string;
  password: string;
  passwordConfirm: string;
  acceptPrivacyPolicy: boolean;
}

export interface SignInResponseDto {
  email: string;
}
