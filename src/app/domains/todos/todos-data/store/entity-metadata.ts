import {
  EntityMetadata,
  EntityMetadataMap,
  EntityDataModuleConfig
} from '@ngrx/data';

import { TodoDto } from '@api/models';

export const todoEntityMetadata: EntityMetadata<TodoDto> = {
  entityName: 'Todo',
  selectId: (entity: TodoDto): string => entity.id,
  sortComparer: (a: TodoDto, b: TodoDto) => {
    // DESC
    if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
      return -1;
    }
    if (new Date(b.createdAt).getTime() > new Date(a.createdAt).getTime()) {
      return 1;
    }
    // a must be equal to b
    return 0;
  },
  filterFn: (entities, pattern) =>
    entities.filter((entity) => {
      entity.name?.includes(pattern) || entity.name?.includes(pattern);
    })
};
const entityMetadata: EntityMetadataMap = {
  Todo: todoEntityMetadata
};

const pluralNames = { Todo: 'Todo' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
