// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
import * as fromTodosEntity from './store';

// Facades
import { TodosEntityFacade } from './store/todos-entity.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTodosEntity.todosEntityFeatureKey,
      fromTodosEntity.todosEntityReducer
    ),
    EffectsModule.forFeature([fromTodosEntity.TodosEntityEffects])
  ],
  providers: [TodosEntityFacade]
})
export class DomainsTodosEntityModule {}
