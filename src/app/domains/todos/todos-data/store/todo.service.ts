import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { TodoDto } from '@api/models';

@Injectable()
export class TodoStoreService extends EntityCollectionServiceBase<TodoDto> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Todo', serviceElementsFactory);
    //this.selectors(this.filteredEntities$)
  }
}
