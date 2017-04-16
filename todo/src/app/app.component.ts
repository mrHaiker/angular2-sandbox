import { Component } from '@angular/core';

const todos = [
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
  title = 'Angular 2Do';
  todos = todos;

  toggle(todo: any) {
    todo.completed = !todo.completed;
  }

  delete(todo:any) {
    const index = this.todos.indexOf(todo);

    if (index > -1) {
      this.todos.splice(index, 1);
    }

  }
}
