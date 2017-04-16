import {InMemoryDbService} from 'angular-in-memory-web-api';

export  class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        title: 'Изучить JS',
        completed: true
      },
      {
        id: 2,
        title: 'Изучить Angular 2',
        completed: false
      },
      {
        id: 3,
        title: 'написать приложение',
        completed: false
      }
    ];

    return { todos };
  }
}
