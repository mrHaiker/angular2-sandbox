import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PhoneService, IPhones} from "../_services/phone.service";

@Component({
  selector: 'app-view-phone',
  templateUrl: './view-phone.component.html',
  styleUrls: ['./view-phone.component.scss'],
  providers: [PhoneService]
})

export class ViewPhoneComponent implements OnInit {
  private routeParams: any;
  model: any = {};
  page: string;
  data: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private phoneService: PhoneService,
  ) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.routeParams = params;
      this.page = params['elem'];
    });
    this.getCurrData();
  }

  getCurrData() {
    this.phoneService.getPhones()
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

}
