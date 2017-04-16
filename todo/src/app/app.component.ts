import { Component } from '@angular/core';

const todos = [
  'Изучить JS',
  'Изучить Angular 2',
  'написать приложение'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2Do';
  todos = todos;
}
