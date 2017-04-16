import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../shared/todo";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter();

  toggle() {
    this.todo.completed = !this.todo.completed;
  }

  onDelete() {
    this.delete.emit(this.todo);
  }
}
