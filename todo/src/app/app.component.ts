import { Component } from '@angular/core';

class Todo {
  constructor(
    public title: string,
    public completed: boolean = false) { }
}

const todos: Todo[] = [
  {
    title: 'Изучить JS',
    completed: true
  },
  {
    title: 'Изучить Angular 2',
    completed: false
  },
  {
    title: 'написать приложение',
    completed: false
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Angular 2Do';
  todos: Todo[] = todos;
  newTodoTitle: string = '';

  create() {
    const todo: Todo = new Todo(this.newTodoTitle);
    this.newTodoTitle = '';

    this.todos.push(todo);
  }

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
