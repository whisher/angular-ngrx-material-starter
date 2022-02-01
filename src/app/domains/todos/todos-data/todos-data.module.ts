// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';

// Env
import { environment } from '../../../../environments/environment';

import { entityConfig } from './store/entity-metadata';
import { TodoStoreService } from './store/todo.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.apiEndpoint,
  timeout: 3000 // request timeout
};

@NgModule({
  imports: [CommonModule, EntityDataModule.forRoot(entityConfig)],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    TodoStoreService
  ]
})
export class DomainsTodosDataModule {}
