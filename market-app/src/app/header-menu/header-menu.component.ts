import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {
  list: string[];

  constructor() {
    this.list = [
      'Samsung',
      'Apple',
      'Meizu',
      'LG',
      'Xiomi',
      'Nokia'
    ]
  }

  ngOnInit() {
  }

}
