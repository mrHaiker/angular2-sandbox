import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TodoService {
  private apiUrl = 'api/todos';

  constructor(
    private http: Http
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json().data as Todo[])
      .catch(this.handleError);
  }

  createTodo(title: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this.http.post(this.apiUrl, new Todo(title), options)
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  deleteTodo(todo: Todo) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiUrl}/${todo.id}`;

    return this.http.delete(url, options)
      .catch(this.handleError);
  }

  toggleTodo(todo: Todo) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiUrl}/${todo.id}`;

    return this.http.put(url, todo, options)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(`Произошла ошибка ${error}`);
    return Observable.throw(error.message || error);
  }
}
