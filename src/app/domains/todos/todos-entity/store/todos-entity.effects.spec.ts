// Testing
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RunHelpers, TestScheduler } from 'rxjs/testing';

// Rxjs
import { Observable } from 'rxjs';

// Ngrx
import { Update } from '@ngrx/entity';

// Models
import { ErrorDto, TodoDto } from '@api/models';

// Store
import { TodosEntityEffects } from './todos-entity.effects';
import { initialState } from './todos-entity.reducer';
import * as TodosEntityActions from './todos-entity.actions';

// Services
import { TodoService } from '@api/services/todo.service';

// Mocks
export const todoFailurePayload: ErrorDto = {
  message: 'Error'
};

const todoRequestPayload: Partial<TodoDto> = {
  name: 'my test todo'
};

const todoPayload: TodoDto = {
  id: 'abcde',
  name: 'my test todo',
  isDone: false,
  createdAt: new Date(),
  updatedAt: new Date()
};
const { id, ...rest } = todoPayload;
const todoResponseUpdateData: Update<TodoDto> = {
  id,
  changes: rest
};
describe('TodosEntityEffects', () => {
  const todoService = jasmine.createSpyObj('TodoService', [
    'add',
    'getAll',
    'remove',
    'update'
  ]);
  let effects: TodosEntityEffects;
  let actions: Observable<any>;
  let store: MockStore<any>;
  let testScheduler: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosEntityEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: TodoService, useValue: todoService }
      ]
    });

    effects = TestBed.inject(TodosEntityEffects);
    store = TestBed.inject(MockStore);
    store.setState(initialState);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('add$', () => {
    it('should handle add action and return a addSuccess action', () => {
      const action = TodosEntityActions.add({ data: todoRequestPayload });
      const outcome = TodosEntityActions.addSuccess({
        data: todoPayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: todoPayload });
        todoService.add.and.returnValue(response);

        expectObservable(effects.add$).toBe('--b', { b: outcome });
      });
    });

    it('should handle add action and return a todosFailure action', () => {
      const action = TodosEntityActions.add({ data: todoRequestPayload });
      const outcome = TodosEntityActions.todosFailure({
        error: todoFailurePayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, todoFailurePayload);
        todoService.add.and.returnValue(response);
        expectObservable(effects.add$).toBe('--b', { b: outcome });
      });
    });
  });

  describe('load$', () => {
    it('should handle load action and return a loadSuccess action', () => {
      const action = TodosEntityActions.load();
      const outcome = TodosEntityActions.loadSuccess({
        data: []
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: [] });
        todoService.getAll.and.returnValue(response);

        expectObservable(effects.load$).toBe('--b', { b: outcome });
      });
    });

    it('should handle load action and return a todosFailure action', () => {
      const action = TodosEntityActions.load();
      const outcome = TodosEntityActions.todosFailure({
        error: todoFailurePayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, todoFailurePayload);
        todoService.getAll.and.returnValue(response);
        expectObservable(effects.load$).toBe('--b', { b: outcome });
      });
    });
  });

  describe('remove$', () => {
    it('should handle remove action and return a removeSuccess action', () => {
      const action = TodosEntityActions.remove({ data: { id: 'abcd' } });
      const outcome = TodosEntityActions.removeSuccess({
        data: { id: 'abcd' }
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: { id: 'abcd' } });
        todoService.remove.and.returnValue(response);

        expectObservable(effects.remove$).toBe('--b', { b: outcome });
      });
    });

    it('should handle remove action and return a todosFailure action', () => {
      const action = TodosEntityActions.remove({ data: { id: 'abcd' } });
      const outcome = TodosEntityActions.todosFailure({
        error: todoFailurePayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, todoFailurePayload);
        todoService.remove.and.returnValue(response);
        expectObservable(effects.remove$).toBe('--b', { b: outcome });
      });
    });
  });
  describe('update$', () => {
    it('should handle remove action and return a removeSuccess action', () => {
      const action = TodosEntityActions.update({
        data: todoPayload
      });
      const outcome = TodosEntityActions.updateSuccess({
        data: todoResponseUpdateData
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: todoResponseUpdateData });
        todoService.update.and.returnValue(response);

        expectObservable(effects.update$).toBe('--b', { b: outcome });
      });
    });

    it('should handle update action and return a todosFailure action', () => {
      const action = TodosEntityActions.update({
        data: todoPayload
      });
      const outcome = TodosEntityActions.todosFailure({
        error: todoFailurePayload
      });

      testScheduler.run(({ cold, expectObservable, hot }: RunHelpers) => {
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, todoFailurePayload);
        todoService.update.and.returnValue(response);
        expectObservable(effects.update$).toBe('--b', { b: outcome });
      });
    });
  });
});
