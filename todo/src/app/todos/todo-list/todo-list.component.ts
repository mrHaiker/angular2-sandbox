import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../shared/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() toggle: EventEmitter<Todo> = new EventEmitter();

  onDelete(todo: Todo) {
    this.delete.emit(todo)
  }

  onToggle(todo: Todo) {
    this.toggle.emit(todo)
  }
}
