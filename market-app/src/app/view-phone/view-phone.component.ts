import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhoneService, IPhones} from "../_services/phone.service";
import {BasketService} from '../_services/basket.service';

interface IAddToBasket {
  id: number;
}

@Component({
  selector: 'app-view-phone',
  templateUrl: './view-phone.component.html',
  styleUrls: ['./view-phone.component.scss'],
  providers: [
    PhoneService,
  ]
})

export class ViewPhoneComponent implements OnInit {
  private routeParams: any;
  model: any = {};
  page: string;
  data: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _phoneService: PhoneService,
    private basketService: BasketService
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.routeParams = params;
      this.page = params['elem'];
    });
    this.getCurrData();
    this.data = false;
  }

  getCurrData() {
    this._phoneService.getPhones()
      .then(res => {
        const brand = res[this.routeParams.elem] as IPhones[];

        brand.forEach((val) => {
          if (val.name === this.routeParams.model) {
            this.model = val as IPhones;
            this.data = !!val;
          }
        });
      });
  }

  addToBasket(id: number) {
    this.basketService.setId(id);
  }
}
