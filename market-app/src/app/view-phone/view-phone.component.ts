import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhoneService, IPhones} from "../_services/phone.service";

interface IAddToBasket {
  id: number
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
  data: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _phoneService: PhoneService,
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.routeParams = params;
      this.page = params['elem'];
    });
    this.getCurrData();
  }

  getCurrData() {
    this._phoneService.getPhones()
      .then(res => {
        let brand = res[this.routeParams.elem] as IPhones[];

        brand.forEach((val) => {
          if (val.name == this.routeParams.model) {
            this.model = val as IPhones;
            this.data = !!val;
          }
        })
      })
  }

  /**
   * @param {Number} id
   * */
  addToBasket(id) {
    // TODO: need add functional which will be add product in basket
  }
}
