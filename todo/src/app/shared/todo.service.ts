import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs';

@Injectable()
export class TodoService {
  private apiUrl = 'api/todos';
  todos: Todo[] = [];

  constructor(
    private http: Http
  ) { }

  getTodos(): Promise<Todo[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data)
      .then(todos => this.todos = todos)
      .catch(this.handleError);
  }

  createTodo(title: string) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    this.http.post(this.apiUrl, new Todo(title), options)
      .toPromise()
      .then(res => res.json().data)
      .then(todo => this.todos.push(todo))
      .catch(this.handleError);
  }

  deleteTodo(todo: Todo) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiUrl}/${todo.id}`;

    this.http.delete(url, options)
      .toPromice()
      .then(res => {
        const index = this.todos.indexOf(todo);

        if (index > -1) {
          this.todos.splice(index, 1);
        }
      })
      .catch(this.handleError);
  }

  toggleTodo(todo: Todo) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });
    const url = `${this.apiUrl}/${todo.id}`;

    this.http.put(url, todo, options)
      .toPromice()
      .then(res => todo.completed = !todo.completed)
      .catch(this.handleError);


  }

  private handleError(error: any) {
    console.error(`Произошла ошибка ${error}`);
    return Promise.reject(error.message || error);
  }
}
