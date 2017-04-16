import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title: string = '';
  @Output() add = new EventEmitter();

  onSubmit() {
    this.add.emit(this.title);
  }

}
