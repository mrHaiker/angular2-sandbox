import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title: string = '';
  @Output() create: EventEmitter<string> = new EventEmitter();

  onSubmit() {
    this.create.emit(this.title);
  }
}
