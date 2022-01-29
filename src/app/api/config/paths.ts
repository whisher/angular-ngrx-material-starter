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
    current: `${apiEndpoint}/api/auth/current`,
    login: `${apiEndpoint}/api/auth/login`,
    signIn: `${apiEndpoint}/api/auth/signIn`
  },
  todo: {
    todo: `${apiEndpoint}/api/todo`
  },
  user: {
    account: `${apiEndpoint}/api/user/account`,
    all: `${apiEndpoint}/api/user/all`,
    create: `${apiEndpoint}/api/user/create`,
    remove: `${apiEndpoint}/api/user/remove`,
    update: `${apiEndpoint}/api/user/update`
  }
};
