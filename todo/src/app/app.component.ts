import { Component } from '@angular/core';
import {Todo} from "./shared/todo";
import {todos} from "./shared/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Angular 2Do';
  todos: Todo[] = todos;

  create(title: string) {
    const todo = new Todo(title);

    this.todos.unshift(todo);
  }
}
