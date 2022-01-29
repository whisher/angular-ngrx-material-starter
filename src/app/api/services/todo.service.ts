// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Ngrx
import { Update } from '@ngrx/entity';

// Models
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

  add(data: Partial<TodoDto>): Observable<TodoDto> {
    return this.http.post<TodoDto>(this.endpoint.todo, data);
  }

  remove(data: { id: string }): Observable<{ id: string }> {
    return this.http.delete<{ id: string }>(`${this.endpoint.todo}/${data.id}`);
  }

  update(data: TodoDto): Observable<Update<TodoDto>> {
    const { id, ...rest } = data;
    return this.http.put<TodoDto>(`${this.endpoint.todo}/${id}`, rest).pipe(
      map((res) => {
        const { id, ...rest } = res;
        return {
          id,
          changes: { ...rest }
        };
      })
    );
  }
}
