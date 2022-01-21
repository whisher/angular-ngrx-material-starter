# Angular 13, NgRx, Angular Material and Tailwindcss Starter

by [@ilwebdifabio](https://twitter.com/ilwebdifabio)

[![license](https://img.shields.io/github/license/whisher/angular-ngrx-material-starter.svg)](https://github.com/whisher/angular-ngrx-material-starter/blob/main/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Table of Content

- [Getting Started](#getting-started)
- [Useful Commands](#useful-commands)
- [Goals](#goals)
- [Features](#features)
- [Stack](#stack)

## Getting Started

- Client

```bash
git clone https://github.com/whisher/angular-ngrx-material-starter.git client-project
cd client-project
npm install
npm start
```

- Server

```bash
git clonehttps://github.com/whisher/express-prisma-starter.git server-project
cd server-project
npm install
npm start
```

## Useful Commands

- `npm start` - starts a dev server
- `npm run start:prod` - runs full prod build and serves prod bundle
- `npm run test` - runs lint and tests
- `npm run format:write` - runs prettier to format whole code base (`.ts` and `.scss`)
- `npm run analyze` - runs full prod build and `webpack-bundle-analyzer` to visualize how much code is shipped (dependencies & application)

## Goals

The main goal of this repository is to provide a real word (you can use [express-prisma-starter](https://github.com/whisher/express-prisma-starter)) up to date example of Angular application following all recent best practices in various areas like:

- `@ngrx/store` - including reducers, actions, selectors
- `@ngrx/effects` - for implementation of side effects like `http` requests, logging, notifications,...
- `@ngrx/entity` - for CRUD operations
- `@ngrx/component-store` - is a stand-alone library that helps to manage local/component state.
- `@ngrx/component` - a set of primitive reactive helpers to enable fully reactive, Zoneless applications.
- `@ngrx/router-store` - to connect the Angular Router to @ngrx/store
- `@ngrx/store-devtools` - to enable a powerful time-travelling debugger.
- `@angular/material` - material design component library, theming, ...
- routing
- testing of all the above mentioned concepts
- Angular CLI configuration (prod build, budgets, ...)

## Features

- Two layout public and admin
- Auth with guard
- Zone less
- No scss files
- lazy-loading of feature modules
- localStorage ui state persistence
- `@ngrx/effects` for API requests
- fully responsive design

## Stack

- Angular
- Ngrx
- Angular Material
- Tailwindcss

### Credits

- [angular-ngrx-material-starter](https://github.com/tomastrajan/angular-ngrx-material-starter)
- [Dharmen Shah](https://indepth.dev/tutorials/angular/angular-material-theming-system-complete-guide)

```

```
