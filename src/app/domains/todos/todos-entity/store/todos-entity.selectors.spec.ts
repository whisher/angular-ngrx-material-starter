// Models
import { TodoDto } from '@api/models';

// Store
import * as fromTodosSelectors from './todos-entity.selectors';
import { TodosEntityVm } from './todos-entity.facade';

// Mocks
export const vm: TodosEntityVm = {
  error: null,
  loading: true,
  todos: [],
  total: 0
};

const todo: TodoDto = {
  id: 'abcde',
  name: 'my test todo',
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
};
describe('Todos Entity Selectors', () => {
  it('should selectedVm return view model vm', () => {
    const result = fromTodosSelectors.selectedVm.projector(null, true, []);
    expect(result).toEqual(vm);
  });

  it('should selectSelectedTodo return null', () => {
    const result = fromTodosSelectors.selectSelectedTodo.projector({}, '');
    expect(result).toEqual(null);
  });

  it('should selectSelectedTodo return todo', () => {
    const result = fromTodosSelectors.selectSelectedTodo.projector(
      {
        '1': todo
      },
      '1'
    );
    expect(result).toEqual(todo);
  });
});
