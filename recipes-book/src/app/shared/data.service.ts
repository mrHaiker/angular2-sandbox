import {InMemoryDbService} from 'angular-in-memory-web-api';

export  class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      {
        id: 1,
        image: '//vlunch.ru/foto/kartoshka-otvarnaya-i-obzharennaya-v-masle-2.jpg',
        title: 'Lorem ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos illo incidunt,' +
        ' iure nostrum praesentium quibusdam rem sed?'
      },
      {
        id: 2,
        image: '//img2.belonika.ru/media/thumbs/91/1a/911a2c36ca0b5bf623970cef6d455060.jpg',
        title: 'Lorem ipsum dolor111.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos illo incidunt,' +
        ' iure nostrum praesentium quibusdam rem sed?'
      }
    ];

    return { recipes };
  }
}

