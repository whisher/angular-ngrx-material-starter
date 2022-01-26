// Testing
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TodoDto } from '../models';

import { TodoService } from './todo.service';

const todoResponseData: TodoDto = {
  id: 'abcde',
  name: 'my test todo',
  isDone: false
};

const todosResponseData: TodoDto[] = [todoResponseData];
const todoRequestData: TodoDto = {
  name: 'my test todo'
};

describe('TodoService', () => {
  let httpTestingController: HttpTestingController;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    todoService = TestBed.inject(TodoService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('getAll should GET void and return todosResponseData', () => {
    todoService.getAll().subscribe((data) => {
      expect(data).toEqual(todosResponseData);
    });
    const req = httpTestingController.expectOne(todoService.endpoint.todo);
    req.flush(todosResponseData);
  });

  it('add should POST todoRequestData and return todoResponseData', () => {
    todoService.add(todoRequestData).subscribe((data) => {
      expect(data).toEqual(todoResponseData);
    });
    const req = httpTestingController.expectOne(todoService.endpoint.todo);
    req.flush(todoResponseData);
  });

  it('remove should DELETE {id: abcde} and return { id: abcde }', () => {
    const data = { id: 'abcde' };
    todoService.remove(data).subscribe((res) => {
      expect(res).toEqual(data);
    });
    const req = httpTestingController.expectOne(
      `${todoService.endpoint.todo}/abcde`
    );
    req.flush(data);
  });
  it('update should PUT todoRequestData and return todoResponseData', () => {
    todoService.update(todoResponseData).subscribe((data) => {
      expect(data).toEqual(todoResponseData);
    });
    const req = httpTestingController.expectOne(
      `${todoService.endpoint.todo}/abcde`
    );
    req.flush(todoResponseData);
  });
});
