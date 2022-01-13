import { environment } from '../../../environments/environment';

const apiEndpoint = environment.apiEndpoint;

export interface PathsAuthDto {
  current: string;
  login: string;
  signIn: string;
}
export interface PathsUserDto {
  account: string;
  all: string;
}
export interface PathsDto {
  auth: PathsAuthDto;
  user: PathsUserDto;
}

export const paths: PathsDto = {
  auth: {
    current: `${apiEndpoint}/api/auth/current`,
    login: `${apiEndpoint}/api/auth/login`,
    signIn: `${apiEndpoint}/api/auth/signIn`
  },
  user: {
    account: `${apiEndpoint}/api/user/account`,
    all: `${apiEndpoint}/api/user/all`
  }
};
