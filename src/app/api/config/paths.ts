import { environment } from '../../../environments/environment';

const apiEndpoint = environment.apiEndpoint;

export interface PathsAuthDto {
  current: string;
  login: string;
  signIn: string;
}

export interface PathsTodoDto {
  todo: string;
}

export interface PathsUserDto {
  account: string;
  all: string;
  create: string;
  remove: string;
  update: string;
}

export interface PathsDto {
  auth: PathsAuthDto;
  todo: PathsTodoDto;
  user: PathsUserDto;
}

export const paths: PathsDto = {
  auth: {
    current: `${apiEndpoint}/auth/current`,
    login: `${apiEndpoint}/auth/login`,
    signIn: `${apiEndpoint}/auth/signIn`
  },
  todo: {
    todo: `${apiEndpoint}/todo`
  },
  user: {
    account: `${apiEndpoint}/user/account`,
    all: `${apiEndpoint}/user/all`,
    create: `${apiEndpoint}/user/create`,
    remove: `${apiEndpoint}/user/remove`,
    update: `${apiEndpoint}/user/update`
  }
};
