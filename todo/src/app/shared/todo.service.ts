import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {todos} from './data';

@Injectable()
export class TodoService {
  todos: Todo[] = todos;

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(title: string) {
    const todo = new Todo(title);

    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed
  }
}
