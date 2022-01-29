// Models
import { ErrorDto, TodoDto } from '@api/models';

// Store
import { TodosEntityState } from './todos-entity.state';
import { initialState, todosEntityReducer } from './todos-entity.reducer';
import * as TodosEntityActions from './todos-entity.actions';

// Mocks
export const failurePayload: ErrorDto = {
  message: 'Error'
};
const todo: TodoDto = { id: 'abcd', name: 'test', isDone: false };
export const failureState: TodosEntityState = {
  error: failurePayload,
  loading: false,
  ids: [],
  entities: {},
  selectedTodoId: null
};

export const addState: TodosEntityState = {
  error: null,
  loading: true,
  ids: [],
  entities: {},
  selectedTodoId: null
};
export const addSuccessState: TodosEntityState = {
  error: null,
  loading: false,
  ids: ['abcd'],
  entities: { abcd: { ...todo } },
  selectedTodoId: null
};
describe('TodosEntityReducer', () => {
  describe('undefined action', () => {
    it('should return initialState', () => {
      const action = { type: 'NOOP' } as any;
      const result = todosEntityReducer(undefined, action);
      expect(result).toBe(initialState);
    });
  });

  describe('add action', () => {
    it('should return addState', () => {
      const addAction = TodosEntityActions.add({
        data: { name: 'test' }
      });
      const result = todosEntityReducer(initialState, addAction);
      expect(result).toEqual(addState);
    });
  });

  describe('add success action', () => {
    it('should return addSuccessState', () => {
      const addSucessAction = TodosEntityActions.addSuccess({
        data: todo
      });
      const result = todosEntityReducer(initialState, addSucessAction);
      expect(result).toEqual(addSuccessState);
    });
  });

  describe('remove action', () => {
    it('should return loadSuccessState', () => {
      const removeAction = TodosEntityActions.remove({
        data: { id: 'abcd' }
      });
      const result = todosEntityReducer(initialState, removeAction);
      expect(result).toEqual(addState);
    });
  });
  describe('load action', () => {
    it('should return initialState', () => {
      const loadAction = TodosEntityActions.load();
      const result = todosEntityReducer(initialState, loadAction);
      expect(result).toEqual(initialState);
    });
  });

  describe('load failure action', () => {
    it('should return failureState', () => {
      const failureAction = TodosEntityActions.todosFailure({
        error: failurePayload
      });
      const result = todosEntityReducer(initialState, failureAction);
      expect(result).toEqual(failureState);
    });
  });
});
