import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title: string = '';

  constructor(
    private todoService: TodoService
  ) {}

  onSubmit() {
    this.todoService.createTodo(this.title);
  }
}
