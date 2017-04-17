import {Component, OnInit, Input} from '@angular/core';
import {BasketService} from '../_services/basket.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})

export class TopNavigationComponent implements OnInit {
  id: number;

  constructor(
    private basketService: BasketService
  ) { }

  ngOnInit() { }

  getId() {
    console.log(this.basketService.getId());
  }
}
