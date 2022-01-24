import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TodoDto } from '../models';
import { paths, PathsTodoDto } from '../config';

@Injectable({ providedIn: 'root' })
export class TodoService {
  endpoint: PathsTodoDto;

  constructor(private http: HttpClient) {
    this.endpoint = paths.todo;
  }

  getAll(): Observable<TodoDto[]> {
    return this.http.get<TodoDto[]>(this.endpoint.todo);
  }

  add(data: TodoDto): Observable<TodoDto> {
    return this.http.post<TodoDto>(this.endpoint.todo, data);
  }

  remove(data: { id: string }): Observable<TodoDto> {
    return this.http.delete<TodoDto>(`${this.endpoint.todo}/${data.id}`);
  }

  update(data: TodoDto): Observable<TodoDto> {
    const { id, ...rest } = data;
    return this.http.put<TodoDto>(`${this.endpoint.todo}/${id}`, rest);
  }
}
