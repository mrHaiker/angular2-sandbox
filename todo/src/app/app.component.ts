import { Component } from '@angular/core';

interface ITodo {
  title: string;
  completed: boolean;
}

const todos: ITodo[] = [
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
  todos: ITodo[] = todos;

  toggle(todo: ITodo) {
    todo.completed = !todo.completed;
  }

  delete(todo: ITodo) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
