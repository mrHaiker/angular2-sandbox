import {Component, OnInit, Input} from '@angular/core';
import {BasketService} from "../_services/basket.service";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})

export class TopNavigationComponent implements OnInit {
  addToBasket;
  id: number;

  constructor(
    private _basketService: BasketService
  ) { }

  ngOnInit() {
    console.log(this.addToBasket);
  }
}
