import { Component, OnInit } from '@angular/core';
import {Todo} from "../shared/todo";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  todo: Todo = new Todo('asdasd');

  constructor() { }

  ngOnInit() {
  }



}
